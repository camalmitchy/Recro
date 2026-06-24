import { l as createServerFn } from "./esm-9EjmF9OT.mjs";
import { t as createServerRpc } from "./createServerRpc-TAUNrjZd.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-Dpn8S0gM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-C6Tdohx3.js
async function assertAdmin(supabase, userId) {
	const { data, error } = await supabase.rpc("has_role", {
		_user_id: userId,
		_role: "admin"
	});
	if (error) throw error;
	if (!data) throw new Error("Forbidden — admin only");
}
/** Grant a role to a user by email. Admin-only. */
var grantUserRole_createServerFn_handler = createServerRpc({
	id: "4e115a0878fe72bd8d60c7f1cb1c877881c70c70f775ce5fc4bcc76aee5abdc5",
	name: "grantUserRole",
	filename: "src/lib/admin.functions.ts"
}, (opts) => grantUserRole.__executeServer(opts));
var grantUserRole = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(grantUserRole_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.mjs");
	const { data: profile, error: pErr } = await supabaseAdmin.from("profiles").select("id, email, full_name").eq("email", data.email.toLowerCase().trim()).maybeSingle();
	if (pErr) throw pErr;
	if (!profile) throw new Error(`No user found with email ${data.email}`);
	const { error } = await supabaseAdmin.from("user_roles").insert({
		user_id: profile.id,
		role: data.role
	});
	if (error && !String(error.message).toLowerCase().includes("duplicate")) throw error;
	return {
		ok: true,
		userId: profile.id,
		name: profile.full_name
	};
});
var revokeUserRole_createServerFn_handler = createServerRpc({
	id: "a370f0b6749145fca33f60e658cf0d820cc190ffabe51c11c92c708950e6f9db",
	name: "revokeUserRole",
	filename: "src/lib/admin.functions.ts"
}, (opts) => revokeUserRole.__executeServer(opts));
var revokeUserRole = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(revokeUserRole_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context.supabase, context.userId);
	if (data.userId === context.userId && data.role === "admin") throw new Error("You cannot revoke your own admin role.");
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.mjs");
	const { error } = await supabaseAdmin.from("user_roles").delete().eq("user_id", data.userId).eq("role", data.role);
	if (error) throw error;
	return { ok: true };
});
//#endregion
export { grantUserRole_createServerFn_handler, revokeUserRole_createServerFn_handler };
