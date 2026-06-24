import { l as createServerFn } from "./esm-9EjmF9OT.mjs";
import { t as createServerRpc } from "./createServerRpc-TAUNrjZd.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-Dpn8S0gM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mpesa.functions-DUgIosPN.js
function normalizePhone(raw) {
	const digits = raw.replace(/\D/g, "");
	if (/^254\d{9}$/.test(digits)) return digits;
	if (/^0\d{9}$/.test(digits)) return "254" + digits.slice(1);
	if (/^\d{9}$/.test(digits)) return "254" + digits;
	return null;
}
async function getDarajaToken(env, key, secret) {
	const host = env === "production" ? "api.safaricom.co.ke" : "sandbox.safaricom.co.ke";
	const auth = Buffer.from(`${key}:${secret}`).toString("base64");
	const res = await fetch(`https://${host}/oauth/v1/generate/token?grant_type=client_credentials`, { headers: { Authorization: `Basic ${auth}` } });
	if (!res.ok) throw new Error("Daraja auth failed");
	return {
		token: (await res.json()).access_token,
		host
	};
}
var initiateMpesaStk_createServerFn_handler = createServerRpc({
	id: "2b9d60752e85dda3652c42f85865d9466bc8e5a6418c99d2d30c17989247766e",
	name: "initiateMpesaStk",
	filename: "src/lib/mpesa.functions.ts"
}, (opts) => initiateMpesaStk.__executeServer(opts));
var initiateMpesaStk = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(initiateMpesaStk_createServerFn_handler, async ({ data, context }) => {
	const phone = normalizePhone(data.phone);
	if (!phone) throw new Error("Invalid Kenyan phone number");
	if (!data.amountKes || data.amountKes < 1) throw new Error("Invalid amount");
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.mjs");
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
		const ts = (/* @__PURE__ */ new Date()).toISOString().replace(/[-T:Z.]/g, "").slice(0, 14);
		const password = Buffer.from(`${shortcode}${passkey}${ts}`).toString("base64");
		const callback = (process.env.PUBLIC_APP_URL || "https://example.lovable.app") + "/api/public/mpesa/callback";
		const body = await (await fetch(`https://${host}/mpesa/stkpush/v1/processrequest`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json"
			},
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
				TransactionDesc: "Recro Group session"
			})
		})).json();
		if (body.ResponseCode !== "0" || !body.CheckoutRequestID) throw new Error(body.errorMessage || "Failed to initiate STK push");
		checkoutId = body.CheckoutRequestID;
		merchantRequestId = body.MerchantRequestID || "";
	}
	const { data: payment, error } = await supabaseAdmin.from("payments").insert({
		booking_id: data.bookingId,
		user_id: context.userId,
		method: "mpesa",
		amount_kes: Math.round(data.amountKes),
		phone,
		mpesa_checkout_id: checkoutId,
		status: "pending",
		notes: usingDummy ? `Dummy STK push (no Daraja keys configured). Merchant=${merchantRequestId}` : `STK initiated. Merchant=${merchantRequestId}`
	}).select().single();
	if (error) throw error;
	return {
		ok: true,
		dummy: usingDummy,
		paymentId: payment.id,
		checkoutId
	};
});
//#endregion
export { initiateMpesaStk_createServerFn_handler };
