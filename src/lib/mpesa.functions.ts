import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// Normalize KE phone numbers to 2547XXXXXXXX
function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (/^254\d{9}$/.test(digits)) return digits;
  if (/^0\d{9}$/.test(digits)) return "254" + digits.slice(1);
  if (/^\d{9}$/.test(digits)) return "254" + digits;
  return null;
}

async function getDarajaToken(env: string, key: string, secret: string) {
  const host = env === "production" ? "api.safaricom.co.ke" : "sandbox.safaricom.co.ke";
  const auth = Buffer.from(`${key}:${secret}`).toString("base64");
  const res = await fetch(`https://${host}/oauth/v1/generate/token?grant_type=client_credentials`, {
    headers: { Authorization: `Basic ${auth}` },
  });
  if (!res.ok) throw new Error("Daraja auth failed");
  const j = (await res.json()) as { access_token: string };
  return { token: j.access_token, host };
}

export const initiateMpesaStk = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { bookingId: string; phone: string; amountKes: number }) => d)
  .handler(async ({ data, context }) => {
    const phone = normalizePhone(data.phone);
    if (!phone) throw new Error("Invalid Kenyan phone number");
    if (!data.amountKes || data.amountKes < 1) throw new Error("Invalid amount");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const env = process.env.MPESA_ENV || "sandbox";
    const key = process.env.MPESA_CONSUMER_KEY;
    const secret = process.env.MPESA_CONSUMER_SECRET;
    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;

    let checkoutId = `DUMMY-${Date.now()}`;
    let merchantRequestId = "dummy";
    let usingDummy = true;

    if (key && secret && shortcode && passkey) {
      usingDummy = false;
      const { token, host } = await getDarajaToken(env, key, secret);
      const ts = new Date().toISOString().replace(/[-T:Z.]/g, "").slice(0, 14);
      const password = Buffer.from(`${shortcode}${passkey}${ts}`).toString("base64");
      const callback =
        (process.env.PUBLIC_APP_URL || "https://example.lovable.app") + "/api/public/mpesa/callback";

      const res = await fetch(`https://${host}/mpesa/stkpush/v1/processrequest`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          BusinessShortCode: shortcode,
          Password: password,
          Timestamp: ts,
          TransactionType: "CustomerBuyGoodsOnline",
          Amount: Math.round(data.amountKes),
          PartyA: phone,
          PartyB: shortcode,
          PhoneNumber: phone,
          CallBackURL: callback,
          AccountReference: data.bookingId.slice(0, 12),
          TransactionDesc: "Recro Group session",
        }),
      });
      const body = (await res.json()) as {
        ResponseCode?: string;
        CheckoutRequestID?: string;
        MerchantRequestID?: string;
        errorMessage?: string;
      };
      if (body.ResponseCode !== "0" || !body.CheckoutRequestID) {
        throw new Error(body.errorMessage || "Failed to initiate STK push");
      }
      checkoutId = body.CheckoutRequestID;
      merchantRequestId = body.MerchantRequestID || "";
    }

    const { data: payment, error } = await supabaseAdmin
      .from("payments")
      .insert({
        booking_id: data.bookingId,
        user_id: context.userId,
        method: "mpesa",
        amount_kes: Math.round(data.amountKes),
        phone,
        mpesa_checkout_id: checkoutId,
        status: "pending",
        notes: usingDummy
          ? `Dummy STK push (no Daraja keys configured). Merchant=${merchantRequestId}`
          : `STK initiated. Merchant=${merchantRequestId}`,
      })
      .select()
      .single();
    if (error) throw error;

    return { ok: true, dummy: usingDummy, paymentId: payment.id, checkoutId };
  });
