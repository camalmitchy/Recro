import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader, Card, DataTable, StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/grief-camp")({
  component: GriefCampPage,
});

function GriefCampPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("grief_applications").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setRows(data ?? []); setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("grief_applications").update({ status } as any).eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Updated"); void load(); }
  };
  const remove = async (id: string) => {
    if (!confirm("Delete this application?")) return;
    const { error } = await supabase.from("grief_applications").delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Deleted"); void load(); }
  };

  return (
    <div className="p-6 lg:p-8">
      <PageHeader title="Grief Camp Applications" description="Parent/guardian applications for the children's grief camp." />
      <Card>
        {loading ? <div className="p-10 text-center text-muted-foreground text-sm">Loading…</div> :
         rows.length === 0 ? <div className="p-10 text-center text-muted-foreground text-sm">No applications yet.</div> :
        <DataTable
          columns={["Child", "Age", "Parent", "Contact", "Tier", "Status", "Applied", "Actions"]}
          rows={rows.map((r) => [
            r.child_name, r.child_age ?? "—", r.parent_name,
            <div key="c"><div className="text-xs">{r.parent_email}</div><div className="text-xs text-muted-foreground">{r.parent_phone}</div></div>,
            r.tier ?? "—",
            <StatusBadge key="s" tone={r.status === "accepted" ? "success" : r.status === "rejected" ? "danger" : "warning"}>{r.status}</StatusBadge>,
            new Date(r.created_at).toLocaleDateString(),
            <div key="a" className="flex gap-2 text-xs font-semibold">
              {r.status !== "accepted" && <button onClick={() => setStatus(r.id, "accepted")} className="text-primary-deep hover:underline">Accept</button>}
              {r.status !== "rejected" && <button onClick={() => setStatus(r.id, "rejected")} className="text-destructive hover:underline">Reject</button>}
              <button onClick={() => remove(r.id)} className="text-destructive hover:underline">Delete</button>
            </div>,
          ])}
        />}
      </Card>
    </div>
  );
}
