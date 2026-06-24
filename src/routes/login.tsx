import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site/SiteShell";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Recro Group" }, { name: "robots", content: "noindex" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // DEMO MODE: No actual authentication required
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Sign in with dummy data
    signIn(email, email.split('@')[0]);

    setLoading(false);
    toast.success("Welcome back! (Demo Mode - Admin Access Granted)");

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
    // Sign in with Google dummy data
    signIn("demo@recrogroup.org", "Demo User");
    toast.success("Google sign-in (Demo Mode - Admin Access Granted)");

    // Check for redirect path
    const redirectPath = sessionStorage.getItem('redirectAfterLogin');
    if (redirectPath) {
      sessionStorage.removeItem('redirectAfterLogin');
      navigate({ to: redirectPath });
    } else {
      navigate({ to: "/profile" });
    }
  };

  const forgot = async () => {
    if (!email) { toast.error("Enter your email first"); return; }
    toast.success("Check your email for a reset link. (Demo Mode)");
  };

  return (
    <SiteShell>
      <section className="container-page py-16 md:py-24 max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <div className="mb-4 rounded-lg bg-primary-soft border border-primary/20 p-3 text-sm text-primary-deep">
            <strong>Demo Mode:</strong> Sign in with any email/password. All users get admin access.
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to continue.</p>

          <button onClick={google} type="button" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background py-2.5 text-sm font-medium hover:bg-surface-2 transition">
            <span className="text-base">G</span> Continue with Google
          </button>
          <div className="my-5 flex items-center gap-3 text-[11px] text-muted-foreground uppercase tracking-wider">
            <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="any@email.com" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Password</label>
                <button type="button" onClick={forgot} className="text-xs text-primary-deep hover:underline">Forgot password?</button>
              </div>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="any password" />
            </div>
            <button disabled={loading} className="btn-primary w-full justify-center">{loading ? "Signing in…" : "Sign in"}</button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here? <Link to="/signup" className="text-primary-deep font-semibold hover:underline">Create an account</Link>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
