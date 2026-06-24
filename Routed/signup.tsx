import { createFileRoute, Link, useNavigate, Navigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { SiteShell } from "@/components/site/SiteShell";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/use-auth";

const schema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  password: z.string().min(8).max(128),
  confirm: z.string(),
  account_type: z.enum(["customer", "guardian", "corporate"]),
}).refine((d) => d.password === d.confirm, { message: "Passwords don't match", path: ["confirm"] });

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — Recro Group" }, { name: "robots", content: "noindex" }] }),
  component: SignupPage,
});

function SignupPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", password: "", confirm: "", account_type: "customer" as const });
  const [loading, setLoading] = useState(false);

  if (!authLoading && user) return <Navigate to="/profile" />;

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { toast.error(parsed.error.errors[0].message); return; }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { full_name: parsed.data.full_name, phone: parsed.data.phone, account_type: parsed.data.account_type },
      },
    });
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Account created!");
    navigate({ to: "/profile" });
  };

  const google = async () => {
    const res = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (res.error) toast.error("Google sign-in failed");
  };

  return (
    <SiteShell>
      <section className="container-page py-16 md:py-24 max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Start your journey with Recro.</p>

          <button onClick={google} type="button" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background py-2.5 text-sm font-medium hover:bg-surface-2 transition">
            <span className="text-base">G</span> Continue with Google
          </button>
          <div className="my-5 flex items-center gap-3 text-[11px] text-muted-foreground uppercase tracking-wider">
            <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-3">
            <Field label="Full name"><input required value={form.full_name} onChange={update("full_name")} className={inp} /></Field>
            <Field label="Email"><input type="email" required value={form.email} onChange={update("email")} className={inp} /></Field>
            <Field label="Phone"><input type="tel" required value={form.phone} onChange={update("phone")} className={inp} /></Field>
            <Field label="Account type">
              <select value={form.account_type} onChange={update("account_type")} className={inp}>
                <option value="customer">Individual / Customer</option>
                <option value="guardian">Parent / Guardian</option>
                <option value="corporate">Corporate user</option>
              </select>
            </Field>
            <Field label="Password"><input type="password" required value={form.password} onChange={update("password")} className={inp} /></Field>
            <Field label="Confirm password"><input type="password" required value={form.confirm} onChange={update("confirm")} className={inp} /></Field>
            <button disabled={loading} className="btn-primary w-full justify-center mt-2">{loading ? "Creating…" : "Create account"}</button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Have an account? <Link to="/login" className="text-primary-deep font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

const inp = "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-sm font-medium">{label}</span>{children}</label>;
}
