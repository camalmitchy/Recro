import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — Recro Group" }, { name: "robots", content: "noindex" }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", password: "", confirm: "", account_type: "customer" as const });
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  // DEMO MODE: No actual authentication required
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (form.password !== form.confirm) {
      toast.error("Passwords don't match");
      return;
    }

    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));

    setLoading(false);
    toast.success("Account created! (Demo Mode)");

    // Check for redirect path from booking flow
    const redirectPath = sessionStorage.getItem('redirectAfterLogin');
    if (redirectPath) {
      sessionStorage.removeItem('redirectAfterLogin');
      navigate({ to: redirectPath });
    } else {
      navigate({ to: "/profile" });
    }
  };

  const google = async () => {
    toast.success("Google sign-in (Demo Mode)");

    // Check for redirect path
    const redirectPath = sessionStorage.getItem('redirectAfterLogin');
    if (redirectPath) {
      sessionStorage.removeItem('redirectAfterLogin');
      navigate({ to: redirectPath });
    } else {
      navigate({ to: "/profile" });
    }
  };

  return (
    <SiteShell>
      <section className="container-page py-16 md:py-24 max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="mb-4 rounded-lg bg-primary-soft border border-primary/20 p-3 text-sm text-primary-deep">
            <strong>Demo Mode:</strong> You can create an account with any details - no authentication required.
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Start your journey with Recro.</p>

          <button onClick={google} type="button" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background py-2.5 text-sm font-medium hover:bg-surface-2 transition">
            <span className="text-base">G</span> Continue with Google
          </button>
          <div className="my-5 flex items-center gap-3 text-[11px] text-muted-foreground uppercase tracking-wider">
            <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-3">
            <Field label="Full name"><input required value={form.full_name} onChange={update("full_name")} className={inp} placeholder="Your name" /></Field>
            <Field label="Email"><input type="email" required value={form.email} onChange={update("email")} className={inp} placeholder="your@email.com" /></Field>
            <Field label="Phone"><input type="tel" required value={form.phone} onChange={update("phone")} className={inp} placeholder="+254 712 345 678" /></Field>
            <Field label="Account type">
              <select value={form.account_type} onChange={update("account_type")} className={inp}>
                <option value="customer">Individual / Customer</option>
                <option value="guardian">Parent / Guardian</option>
                <option value="corporate">Corporate user</option>
              </select>
            </Field>
            <Field label="Password"><input type="password" required value={form.password} onChange={update("password")} className={inp} placeholder="Min 8 characters" /></Field>
            <Field label="Confirm password"><input type="password" required value={form.confirm} onChange={update("confirm")} className={inp} placeholder="Confirm password" /></Field>
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
