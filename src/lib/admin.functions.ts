import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

type AppRole = "admin" | "customer" | "therapist" | "finance" | "content_manager";

async function assertAdmin(supabase: any, userId: string) {
  const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (error) throw error;
  if (!data) throw new Error("Forbidden — admin only");
}

/** Grant a role to a user by email. Admin-only. */
export const grantUserRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { email: string; role: AppRole }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: profile, error: pErr } = await supabaseAdmin
      .from("profiles")
      .select("id, email, full_name")
      .eq("email", data.email.toLowerCase().trim())
      .maybeSingle();
    if (pErr) throw pErr;
    if (!profile) throw new Error(`No user found with email ${data.email}`);

    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: profile.id, role: data.role });
    if (error && !String(error.message).toLowerCase().includes("duplicate")) throw error;

    return { ok: true, userId: profile.id, name: profile.full_name };
  });

/** Revoke a role from a user. Admin-only. */
export const revokeUserRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { userId: string; role: AppRole }) => d)
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    if (data.userId === context.userId && data.role === "admin") {
      throw new Error("You cannot revoke your own admin role.");
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("user_roles")
      .delete()
      .eq("user_id", data.userId)
      .eq("role", data.role);
    if (error) throw error;
    return { ok: true };
  });
