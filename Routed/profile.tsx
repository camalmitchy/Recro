import { createFileRoute, Navigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Calendar, Inbox, CreditCard, BookOpen, Settings, User as UserIcon, HeartHandshake, Plus } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "My profile — Recro Group" }, { name: "robots", content: "noindex" }] }),
  component: ProfilePage,
});

type TabKey = "overview" | "personal" | "appointments" | "bookings" | "payments" | "resources" | "settings";
const TABS: { key: TabKey; label: string; icon: typeof Calendar }[] = [
  { key: "overview", label: "Overview", icon: HeartHandshake },
  { key: "personal", label: "Personal Info", icon: UserIcon },
  { key: "appointments", label: "Appointments", icon: Calendar },
  { key: "bookings", label: "Bookings", icon: Inbox },
  { key: "payments", label: "Payments", icon: CreditCard },
  { key: "resources", label: "Resources", icon: BookOpen },
  { key: "settings", label: "Settings", icon: Settings },
];

function ProfilePage() {
  const { user, loading } = useAuth();
  const [tab, setTab] = useState<TabKey>("overview");
  const [profile, setProfile] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [appts, setAppts] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: p }, { data: b }, { data: a }, { data: pay }, { data: r }] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
        supabase.from("bookings").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("appointments").select("*").eq("user_id", user.id).order("scheduled_at", { ascending: false }),
        supabase.from("payments").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("saved_resources").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);
      setProfile(p); setBookings(b ?? []); setAppts(a ?? []); setPayments(pay ?? []); setResources(r ?? []);
    })();
  }, [user]);

  if (loading) return <SiteShell><div className="container-page py-24 text-center text-muted-foreground">Loading…</div></SiteShell>;
  if (!user) return <Navigate to="/join-us" />;

  const upcoming = appts.find((a) => new Date(a.scheduled_at) > new Date());
  const latestBooking = bookings[0];
  const latestPayment = payments[0];

  const savePersonal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSaving(true);
    const { error } = await supabase.from("profiles").update({
      full_name: String(fd.get("full_name") || ""),
      phone: String(fd.get("phone") || ""),
      account_type: String(fd.get("account_type") || "customer") as any,
      comms_email: fd.get("comms_email") === "on",
      comms_sms: fd.get("comms_sms") === "on",
    }).eq("id", user.id);
    setSaving(false);
    if (error) toast.error(error.message); else { toast.success("Profile updated"); setProfile({ ...profile, full_name: fd.get("full_name") }); }
  };

  const updatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const np = String(fd.get("new_password") || "");
    if (np.length < 8) { toast.error("Min 8 characters"); return; }
    const { error } = await supabase.auth.updateUser({ password: np });
    if (error) toast.error(error.message); else { toast.success("Password changed"); (e.target as HTMLFormElement).reset(); }
  };

  return (
    <SiteShell>
      <section className="container-page py-12">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary-deep text-lg font-semibold">
              {(profile?.full_name || user.email || "U").slice(0, 2).toUpperCase()}
            </span>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">{profile?.full_name || "Your account"}</h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Link to="/booking" className="btn-primary"><Plus size={16}/> Book a session</Link>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-8">
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
            {TABS.map((t) => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${tab === t.key ? "bg-primary-soft text-primary-deep" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}>
                <t.icon size={15} />{t.label}
              </button>
            ))}
          </nav>

          <div className="min-w-0">
            {tab === "overview" && (
              <div className="grid sm:grid-cols-2 gap-4">
                <StatCard label="Upcoming appointment" value={upcoming ? new Date(upcoming.scheduled_at).toLocaleString() : "None scheduled"} />
                <StatCard label="Latest booking" value={latestBooking ? `${latestBooking.reference} · ${latestBooking.status}` : "No bookings yet"} />
                <StatCard label="Latest payment" value={latestPayment ? `KES ${latestPayment.amount_kes} · ${latestPayment.status}` : "No payments yet"} />
                <StatCard label="Saved resources" value={`${resources.length} saved`} />
              </div>
            )}

            {tab === "personal" && (
              <form onSubmit={savePersonal} className="rounded-2xl border border-border bg-surface p-6 space-y-4 max-w-xl">
                <Field label="Full name"><input name="full_name" defaultValue={profile?.full_name ?? ""} className={inp} /></Field>
                <Field label="Email"><input value={user.email ?? ""} disabled className={`${inp} opacity-60`} /></Field>
                <Field label="Phone"><input name="phone" defaultValue={profile?.phone ?? ""} className={inp} /></Field>
                <Field label="Account type">
                  <select name="account_type" defaultValue={profile?.account_type ?? "customer"} className={inp}>
                    <option value="customer">Individual / Customer</option>
                    <option value="guardian">Parent / Guardian</option>
                    <option value="corporate">Corporate user</option>
                  </select>
                </Field>
                <div className="flex flex-col gap-2 pt-2">
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="comms_email" defaultChecked={profile?.comms_email ?? true} /> Email notifications</label>
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="comms_sms" defaultChecked={profile?.comms_sms ?? false} /> SMS notifications</label>
                </div>
                <button className="btn-primary" disabled={saving}>{saving ? "Saving…" : "Save changes"}</button>
              </form>
            )}

            {tab === "appointments" && (
              <ListTable empty="No appointments yet." cols={["Date", "Status", "Notes"]} rows={appts.map((a) => [new Date(a.scheduled_at).toLocaleString(), <Pill key="s" v={a.status} />, a.notes ?? "—"])} />
            )}

            {tab === "bookings" && (
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Link to="/booking" className="btn-primary"><Plus size={15}/> New booking</Link>
                </div>
                <ListTable empty="No bookings yet. Click 'New booking' to get started." cols={["Reference", "Status", "Payment", "Created"]} rows={bookings.map((b) => [b.reference, <Pill key="s" v={b.status} />, <Pill key="p" v={b.payment_status} />, new Date(b.created_at).toLocaleDateString()])} />
              </div>
            )}

            {tab === "payments" && (
              <ListTable empty="No payments yet." cols={["Method", "Amount (KES)", "Status", "Reference", "Date"]} rows={payments.map((p) => [p.method, p.amount_kes, <Pill key="s" v={p.status} />, p.reference ?? "—", new Date(p.created_at).toLocaleDateString()])} />
            )}

            {tab === "resources" && (
              <ListTable empty="No saved resources yet." cols={["Title", "Type", "Saved"]} rows={resources.map((r) => [r.title ?? "—", r.resource_type, new Date(r.created_at).toLocaleDateString()])} />
            )}

            {tab === "settings" && (
              <form onSubmit={updatePassword} className="rounded-2xl border border-border bg-surface p-6 space-y-4 max-w-xl">
                <h3 className="text-base font-semibold">Change password</h3>
                <Field label="New password"><input type="password" name="new_password" className={inp} required minLength={8} /></Field>
                <button className="btn-primary">Update password</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

const inp = "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="text-sm font-medium">{label}</span>{children}</label>; }
function StatCard({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-border bg-surface p-5"><p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p><p className="mt-2 text-lg font-semibold">{value}</p></div>;
}
function Pill({ v }: { v: string }) {
  const tone: Record<string, string> = { confirmed: "bg-primary-soft text-primary-deep", completed: "bg-primary-soft text-primary-deep", paid: "bg-primary-soft text-primary-deep", pending: "bg-[color-mix(in_oklab,var(--warning)_18%,white)] text-[color:var(--warning)]", requested: "bg-secondary-soft text-[color:var(--secondary)]", cancelled: "bg-[color-mix(in_oklab,var(--destructive)_15%,white)] text-[color:var(--destructive)]", failed: "bg-[color-mix(in_oklab,var(--destructive)_15%,white)] text-[color:var(--destructive)]" };
  return <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-semibold ${tone[v] ?? "bg-surface-2 text-muted-foreground"}`}>{v}</span>;
}
function ListTable({ cols, rows, empty }: { cols: string[]; rows: any[][]; empty: string }) {
  if (rows.length === 0) return <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground text-sm">{empty}</div>;
  return (
    <div className="rounded-2xl border border-border bg-surface overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-surface-2 text-muted-foreground text-[11px] uppercase tracking-wider"><tr>{cols.map((c) => <th key={c} className="text-left px-5 py-3 font-semibold">{c}</th>)}</tr></thead>
        <tbody className="divide-y divide-border">{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className="px-5 py-3">{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
