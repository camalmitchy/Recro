import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHeader, Card, DataTable } from "@/components/admin/AdminShell";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "select" | "checkbox" | "date";
  options?: { value: string; label: string }[];
  required?: boolean;
  defaultValue?: any;
};

type Props = {
  title: string;
  description?: string;
  table: string;
  columns: { key: string; label: string; render?: (row: any) => ReactNode }[];
  fields: FieldDef[];
  orderBy?: { column: string; ascending?: boolean };
};

const inp = "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

export function AdminCrud({ title, description, table, columns, fields, orderBy }: Props) {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    setLoading(true);
    let q = supabase.from(table as any).select("*");
    if (orderBy) q = q.order(orderBy.column, { ascending: orderBy.ascending ?? false });
    const { data, error } = await q;
    if (error) toast.error(error.message);
    setRows((data as any[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { void load(); }, [table]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, any> = {};
    for (const f of fields) {
      let v: any;
      if (f.type === "checkbox") v = fd.get(f.name) === "on";
      else if (f.type === "number") { const raw = fd.get(f.name); v = raw === "" || raw == null ? null : Number(raw); }
      else v = fd.get(f.name);
      if (v === "") v = null;
      payload[f.name] = v;
    }
    const op = editing
      ? supabase.from(table as any).update(payload).eq("id", editing.id)
      : supabase.from(table as any).insert(payload);
    const { error } = await op;
    setBusy(false);
    if (error) { toast.error(error.message); return; }
    toast.success(editing ? "Updated" : "Created");
    setOpen(false); setEditing(null);
    void load();
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from(table as any).delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Deleted"); void load(); }
  };

  return (
    <div className="p-6 lg:p-8">
      <PageHeader
        title={title}
        description={description}
        actions={
          <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setEditing(null); }}>
            <DialogTrigger asChild>
              <button onClick={() => setEditing(null)} className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white hover:opacity-90"><Plus size={14} /> Add</button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader><DialogTitle>{editing ? `Edit ${title.replace(/s$/, "")}` : `New ${title.replace(/s$/, "")}`}</DialogTitle></DialogHeader>
              <form onSubmit={submit} className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                {fields.map((f) => (
                  <label key={f.name} className="block">
                    <span className="text-sm font-medium">{f.label}</span>
                    {f.type === "textarea" ? (
                      <textarea name={f.name} required={f.required} defaultValue={editing?.[f.name] ?? f.defaultValue ?? ""} rows={4} className={inp} />
                    ) : f.type === "select" ? (
                      <select name={f.name} required={f.required} defaultValue={editing?.[f.name] ?? f.defaultValue ?? f.options?.[0]?.value} className={inp}>
                        {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    ) : f.type === "checkbox" ? (
                      <div className="mt-1"><input type="checkbox" name={f.name} defaultChecked={editing?.[f.name] ?? f.defaultValue ?? false} /></div>
                    ) : (
                      <input type={f.type ?? "text"} name={f.name} required={f.required} defaultValue={editing?.[f.name] ?? f.defaultValue ?? ""} className={inp} />
                    )}
                  </label>
                ))}
                <DialogFooter>
                  <button type="submit" disabled={busy} className="btn-primary">{busy ? "Saving…" : "Save"}</button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        }
      />
      <Card>
        {loading ? <div className="p-10 text-center text-muted-foreground text-sm">Loading…</div> : rows.length === 0 ? (
          <div className="p-10 text-center text-muted-foreground text-sm">No records yet.</div>
        ) : (
          <DataTable
            columns={[...columns.map((c) => c.label), "Actions"]}
            rows={rows.map((r) => [
              ...columns.map((c) => c.render ? c.render(r) : (r[c.key] ?? "—")),
              <div key="a" className="flex items-center gap-1">
                <button onClick={() => { setEditing(r); setOpen(true); }} className="grid h-8 w-8 place-items-center rounded-md hover:bg-[var(--admin-bg)]" aria-label="Edit"><Pencil size={14} /></button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="grid h-8 w-8 place-items-center rounded-md hover:bg-[var(--admin-bg)] text-destructive" aria-label="Delete"><Trash2 size={14} /></button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete this record?</AlertDialogTitle>
                      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => remove(r.id)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>,
            ])}
          />
        )}
      </Card>
    </div>
  );
}
