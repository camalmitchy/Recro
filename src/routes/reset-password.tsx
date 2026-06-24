import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site/SiteShell";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Reset password — Recro Group" }, { name: "robots", content: "noindex" }] }),
  component: ResetPage,
});

function ResetPage() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.length < 8) { toast.error("Min 8 characters"); return; }
    if (pw !== confirm) { toast.error("Passwords don't match"); return; }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Password updated");
    navigate({ to: "/profile" });
  };

  return (
    <SiteShell>
      <section className="container-page py-16 md:py-24 max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h1 className="text-2xl font-semibold tracking-tight">Set a new password</h1>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <label className="block"><span className="text-sm font-medium">New password</span>
              <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" required />
            </label>
            <label className="block"><span className="text-sm font-medium">Confirm</span>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" required />
            </label>
            <button className="btn-primary w-full justify-center" disabled={loading}>{loading ? "Updating…" : "Update password"}</button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
