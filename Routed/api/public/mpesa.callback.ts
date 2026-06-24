import { createFileRoute } from "@tanstack/react-router";

// Safaricom Daraja STK Push callback. Public endpoint — they POST here.
// We update the matching payments row by mpesa_checkout_id.
export const Route = createFileRoute("/api/public/mpesa/callback")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: any;
        try {
          payload = await request.json();
        } catch {
          return new Response("bad json", { status: 400 });
        }

        const stk = payload?.Body?.stkCallback;
        if (!stk?.CheckoutRequestID) return new Response("ok"); // ignore unknown shapes

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const resultCode = stk.ResultCode;
        const items: { Name: string; Value?: string | number }[] =
          stk.CallbackMetadata?.Item ?? [];
        const get = (n: string) => items.find((i) => i.Name === n)?.Value;
        const receipt = get("MpesaReceiptNumber") as string | undefined;
        const amount = get("Amount") as number | undefined;
        const phone = get("PhoneNumber") as number | undefined;

        const success = resultCode === 0;

        const { data: payment } = await supabaseAdmin
          .from("payments")
          .select("id, booking_id")
          .eq("mpesa_checkout_id", stk.CheckoutRequestID)
          .maybeSingle();

        if (!payment) return new Response("ok"); // unknown checkout — ack anyway

        await supabaseAdmin
          .from("payments")
          .update({
            status: success ? "paid" : "failed",
            mpesa_receipt: receipt ?? null,
            phone: phone ? String(phone) : undefined,
            amount_kes: amount ?? undefined,
            notes: stk.ResultDesc ?? null,
            verified_at: success ? new Date().toISOString() : null,
          })
          .eq("id", payment.id);

        if (success && payment.booking_id) {
          await supabaseAdmin
            .from("bookings")
            .update({ payment_status: "paid", status: "confirmed" })
            .eq("id", payment.booking_id);
        }

        return new Response("ok");
      },
    },
  },
});
