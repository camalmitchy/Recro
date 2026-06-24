import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader, Card, DataTable, StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/payments")({
  component: PaymentsPage,
});

function PaymentsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const [{ data: p }, { data: b }] = await Promise.all([
      supabase.from("payments").select("*").order("created_at", { ascending: false }),
      supabase.from("bookings").select("id, reference"),
    ]);
    setRows(p ?? []); setBookings(b ?? []); setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const update = async (id: string, patch: Record<string, any>, msg: string) => {
    const row = rows.find((r) => r.id === id);
    const { error } = await supabase.from("payments").update({ ...patch, verified_at: new Date().toISOString() } as any).eq("id", id);
    if (error) { toast.error(error.message); return; }
    if (patch.status === "paid" && row?.booking_id) {
      await supabase.from("bookings").update({ payment_status: "paid", status: "confirmed" }).eq("id", row.booking_id);
    } else if (patch.status === "failed" && row?.booking_id) {
      await supabase.from("bookings").update({ payment_status: "failed" }).eq("id", row.booking_id);
    }
    toast.success(msg);
    void load();
  };

  return (
    <div className="p-6 lg:p-8">
      <PageHeader title="Payments" description="M-Pesa, bank transfer and card payment tracking." />
      <Card>
        {loading ? <div className="p-10 text-center text-muted-foreground text-sm">Loading…</div> :
         rows.length === 0 ? <div className="p-10 text-center text-muted-foreground text-sm">No payments yet.</div> :
        <DataTable
          columns={["Method", "Amount (KES)", "Reference", "Booking", "Status", "Created", "Actions"]}
          rows={rows.map((r) => [
            <span key="m" className="capitalize">{r.method}</span>,
            r.amount_kes,
            r.reference ?? "—",
            <select key="b" value={r.booking_id ?? ""} onChange={(e) => update(r.id, { booking_id: e.target.value || null }, "Linked")} className="text-sm bg-[var(--admin-bg)] border border-[var(--admin-border)] rounded-md px-2 py-1">
              <option value="">— link —</option>
              {bookings.map((b) => <option key={b.id} value={b.id}>{b.reference}</option>)}
            </select>,
            <StatusBadge key="s" tone={r.status === "paid" ? "success" : r.status === "failed" ? "danger" : "warning"}>{r.status}</StatusBadge>,
            new Date(r.created_at).toLocaleDateString(),
            <div key="a" className="flex gap-2 text-xs font-semibold">
              {r.status !== "paid" && <button onClick={() => update(r.id, { status: "paid" }, "Marked paid")} className="text-primary-deep hover:underline">Mark paid</button>}
              {r.method === "bank" && r.status !== "paid" && <button onClick={() => update(r.id, { status: "paid" }, "Verified")} className="text-primary-deep hover:underline">Verify</button>}
              {r.status !== "failed" && <button onClick={() => update(r.id, { status: "failed" }, "Rejected")} className="text-destructive hover:underline">Reject</button>}
            </div>,
          ])}
        />}
      </Card>
    </div>
  );
}
