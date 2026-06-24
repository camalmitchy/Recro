import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader, Card, DataTable, StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/newsletter")({
  component: NewsletterPage,
});

function NewsletterPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false });
    setRows(data ?? []); setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const remove = async (id: string) => {
    if (!confirm("Remove this subscriber?")) return;
    const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Removed"); void load(); }
  };

  return (
    <div className="p-6 lg:p-8">
      <PageHeader title="Newsletter subscribers" description="Email addresses captured for the newsletter." />
      <Card>
        {loading ? <div className="p-10 text-center text-muted-foreground text-sm">Loading…</div> :
         rows.length === 0 ? <div className="p-10 text-center text-muted-foreground text-sm">No subscribers yet.</div> :
        <DataTable columns={["Email", "Status", "Subscribed", "Actions"]} rows={rows.map((r) => [
          r.email,
          <StatusBadge key="s" tone={r.status === "subscribed" ? "success" : "muted"}>{r.status}</StatusBadge>,
          new Date(r.created_at).toLocaleDateString(),
          <button key="a" onClick={() => remove(r.id)} className="text-xs font-semibold text-destructive hover:underline">Remove</button>,
        ])} />}
      </Card>
    </div>
  );
}
