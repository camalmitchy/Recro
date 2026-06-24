import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Plus, Shield, ShieldOff } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, DataTable, PageHeader, StatusBadge } from "@/components/admin/AdminShell";
import { grantUserRole, revokeUserRole } from "@/lib/admin.functions";

type AppRole = "admin" | "customer" | "therapist" | "finance" | "content_manager";

export const Route = createFileRoute("/admin/users")({ component: Page });

function Page() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<AppRole>("admin");
  const [busy, setBusy] = useState(false);

  const grant = useServerFn(grantUserRole);
  const revoke = useServerFn(revokeUserRole);

  const load = async () => {
    setLoading(true);
    const [{ data: profiles }, { data: roles }] = await Promise.all([
      supabase.from("profiles").select("id, full_name, email, account_type, created_at").order("created_at", { ascending: false }),
      supabase.from("user_roles").select("user_id, role"),
    ]);
    const byUser = new Map<string, AppRole[]>();
    (roles ?? []).forEach((r: any) => {
      const arr = byUser.get(r.user_id) ?? [];
      arr.push(r.role);
      byUser.set(r.user_id, arr);
    });
    setRows((profiles ?? []).map((p: any) => ({ ...p, roles: byUser.get(p.id) ?? [] })));
    setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const onGrant = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setBusy(true);
    try {
      const res = await grant({ data: { email, role } });
      toast.success(`Granted ${role} to ${res.name ?? email}`);
      setEmail("");
      void load();
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to grant role");
    } finally {
      setBusy(false);
    }
  };

  const onRevoke = async (userId: string, r: AppRole) => {
    if (!confirm(`Revoke ${r} from this user?`)) return;
    try {
      await revoke({ data: { userId, role: r } });
      toast.success(`Revoked ${r}`);
      void load();
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to revoke");
    }
  };

  const adminCount = useMemo(() => rows.filter((r) => r.roles.includes("admin")).length, [rows]);

  return (
    <div className="p-6 lg:p-8 space-y-5">
      <PageHeader
        title="Users & roles"
        description={`${rows.length} users · ${adminCount} admins`}
      />

      <Card>
        <div className="p-5 border-b border-[var(--admin-border)]">
          <h3 className="text-sm font-semibold flex items-center gap-2"><Shield size={14}/> Grant a role</h3>
          <p className="text-xs text-muted-foreground mt-1">Promote any signed-up user to admin, finance, therapist or content manager. They must already have an account.</p>
        </div>
        <form onSubmit={onGrant} className="p-5 grid sm:grid-cols-[1fr_180px_auto] gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            className="rounded-lg border border-[var(--admin-border)] bg-white px-3 h-10 text-sm"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as AppRole)}
            className="rounded-lg border border-[var(--admin-border)] bg-white px-3 h-10 text-sm"
          >
            <option value="admin">admin</option>
            <option value="finance">finance</option>
            <option value="therapist">therapist</option>
            <option value="content_manager">content_manager</option>
            <option value="customer">customer</option>
          </select>
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center gap-1.5 px-4 h-10 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold disabled:opacity-50"
          >
            <Plus size={14}/> {busy ? "Granting…" : "Grant role"}
          </button>
        </form>
      </Card>

      <Card>
        {loading ? (
          <div className="p-10 text-center text-muted-foreground text-sm">Loading…</div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-muted-foreground text-sm">No users yet.</div>
        ) : (
          <DataTable
            columns={["Name", "Email", "Account", "Roles", "Joined", "Actions"]}
            rows={rows.map((u) => [
              <span className="font-medium" key="n">{u.full_name ?? "—"}</span>,
              <span className="text-muted-foreground" key="e">{u.email}</span>,
              <StatusBadge tone="muted" key="a">{u.account_type}</StatusBadge>,
              <div className="flex flex-wrap gap-1" key="r">
                {u.roles.length === 0 ? <span className="text-xs text-muted-foreground">—</span> :
                  u.roles.map((r: AppRole) => (
                    <StatusBadge key={r} tone={r === "admin" ? "success" : "muted"}>{r}</StatusBadge>
                  ))}
              </div>,
              <span className="text-muted-foreground text-xs" key="j">
                {new Date(u.created_at).toLocaleDateString()}
              </span>,
              <div className="flex gap-2 text-xs font-semibold" key="x">
                {u.roles.includes("admin") ? (
                  <button onClick={() => onRevoke(u.id, "admin")} className="inline-flex items-center gap-1 text-[color:var(--destructive)] hover:underline">
                    <ShieldOff size={12}/> Revoke admin
                  </button>
                ) : (
                  <button
                    onClick={async () => { setEmail(u.email); setRole("admin"); }}
                    className="inline-flex items-center gap-1 text-primary-deep hover:underline"
                  >
                    <Shield size={12}/> Make admin
                  </button>
                )}
              </div>,
            ])}
          />
        )}
      </Card>
    </div>
  );
}
