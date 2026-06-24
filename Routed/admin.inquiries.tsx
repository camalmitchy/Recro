import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader, Card, DataTable, StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/inquiries")({
  component: InquiriesPage,
});

function InquiriesPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setRows(data ?? []); setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("inquiries").update({ status } as any).eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Updated"); void load(); }
  };
  const remove = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    const { error } = await supabase.from("inquiries").delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Deleted"); void load(); }
  };

  return (
    <div className="p-6 lg:p-8">
      <PageHeader title="Inquiries" description="Messages from the contact form." />
      <Card>
        {loading ? <div className="p-10 text-center text-muted-foreground text-sm">Loading…</div> :
         rows.length === 0 ? <div className="p-10 text-center text-muted-foreground text-sm">No inquiries yet.</div> :
        <DataTable
          columns={["Name", "Email", "Subject", "Message", "Status", "Received", "Actions"]}
          rows={rows.map((r) => [
            r.name, r.email, r.subject ?? "—",
            <span key="m" className="max-w-xs block truncate" title={r.message}>{r.message}</span>,
            <StatusBadge key="s" tone={r.status === "new" ? "warning" : r.status === "resolved" ? "success" : "info"}>{r.status}</StatusBadge>,
            new Date(r.created_at).toLocaleDateString(),
            <div key="a" className="flex gap-2">
              {r.status !== "resolved" && <button onClick={() => setStatus(r.id, "resolved")} className="text-xs font-semibold text-primary-deep hover:underline">Resolve</button>}
              <button onClick={() => remove(r.id)} className="text-xs font-semibold text-destructive hover:underline">Delete</button>
            </div>,
          ])}
        />}
      </Card>
    </div>
  );
}
