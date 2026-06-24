import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader, Card, DataTable, StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/bookings")({
  component: BookingsPage,
});

function BookingsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [therapists, setTherapists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const [{ data: b }, { data: t }] = await Promise.all([
      supabase.from("bookings").select("*").order("created_at", { ascending: false }),
      supabase.from("therapists").select("id, full_name").eq("is_active", true),
    ]);
    setRows(b ?? []); setTherapists(t ?? []); setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const update = async (id: string, patch: Record<string, any>, msg = "Updated") => {
    const { error } = await supabase.from("bookings").update(patch as any).eq("id", id);
    if (error) toast.error(error.message); else { toast.success(msg); void load(); }
  };

  const statusTone = (s: string) =>
    s === "confirmed" ? "info" : s === "completed" ? "success" : s === "cancelled" ? "danger" : "warning";

  return (
    <div className="p-6 lg:p-8">
      <PageHeader title="Bookings" description="Incoming booking requests and lifecycle actions." />
      <Card>
        {loading ? <div className="p-10 text-center text-muted-foreground text-sm">Loading…</div> :
         rows.length === 0 ? <div className="p-10 text-center text-muted-foreground text-sm">No bookings yet.</div> :
        <DataTable
          columns={["Ref", "Client", "Date", "Therapist", "Status", "Payment", "Actions"]}
          rows={rows.map((r) => [
            <span key="r" className="font-mono text-xs">{r.reference}</span>,
            <div key="c"><div className="font-medium text-sm">{r.client_name}</div><div className="text-xs text-muted-foreground">{r.client_email}</div></div>,
            r.preferred_date ?? "—",
            <select key="t" value={r.therapist_id ?? ""} onChange={(e) => update(r.id, { therapist_id: e.target.value || null }, "Therapist assigned")} className="text-sm bg-[var(--admin-bg)] border border-[var(--admin-border)] rounded-md px-2 py-1">
              <option value="">— assign —</option>
              {therapists.map((t) => <option key={t.id} value={t.id}>{t.full_name}</option>)}
            </select>,
            <StatusBadge key="s" tone={statusTone(r.status) as any}>{r.status}</StatusBadge>,
            <StatusBadge key="p" tone={r.payment_status === "paid" ? "success" : r.payment_status === "failed" ? "danger" : "warning"}>{r.payment_status}</StatusBadge>,
            <div key="a" className="flex gap-2 text-xs font-semibold">
              {r.status === "requested" && <button onClick={() => update(r.id, { status: "confirmed" }, "Confirmed")} className="text-primary-deep hover:underline">Confirm</button>}
              {r.status !== "completed" && r.status !== "cancelled" && <button onClick={() => update(r.id, { status: "completed" }, "Marked completed")} className="text-primary-deep hover:underline">Complete</button>}
              {r.status !== "cancelled" && <button onClick={() => update(r.id, { status: "cancelled" }, "Cancelled")} className="text-destructive hover:underline">Cancel</button>}
            </div>,
          ])}
        />}
      </Card>
    </div>
  );
}
