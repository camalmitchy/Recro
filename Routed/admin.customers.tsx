import { createFileRoute } from "@tanstack/react-router";
import { Card, DataTable, PageHeader } from "@/components/admin/AdminShell";
import { Plus, Download, Search } from "lucide-react";

export const Route = createFileRoute("/admin/customers")({ component: Page });

const ROWS = [
  { name: "Amina K.", email: "amina@example.com", phone: "+254 700 111 222", type: "Individual", last: "Today", bookings: 7 },
  { name: "Wanjiku & James", email: "wj@example.com", phone: "+254 711 333 444", type: "Couple", last: "Yesterday", bookings: 4 },
  { name: "Brian O.", email: "brian@example.com", phone: "+254 722 555 666", type: "Family", last: "2d ago", bookings: 2 },
  { name: "Grace N.", email: "grace@example.com", phone: "+254 733 777 888", type: "Individual", last: "3d ago", bookings: 1 },
  { name: "Acme Ltd", email: "hr@acme.co.ke", phone: "+254 20 555 0100", type: "Corporate", last: "1w ago", bookings: 3 },
];

function Page() {
  return (
    <div className="p-6 space-y-5">
      <PageHeader
        title="Customers"
        description="Client profiles, history, and engagement — no clinical notes."
        actions={
          <>
            <button className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-[var(--admin-border)] text-sm font-semibold"><Download size={14}/> Export</button>
            <button className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold"><Plus size={14}/> Add customer</button>
          </>
        }
      />

      <Card className="p-3 flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input placeholder="Search by name, email or phone…" className="w-full pl-9 pr-3 h-9 rounded-lg bg-[var(--admin-bg)] border border-[var(--admin-border)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <select className="h-9 px-3 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-surface)] text-sm">
          <option>All types</option><option>Individual</option><option>Couple</option><option>Family</option><option>Corporate</option>
        </select>
      </Card>

      <Card>
        <DataTable
          columns={["Name", "Email", "Phone", "Type", "Last activity", "Bookings"]}
          rows={ROWS.map((r) => [
            <span className="font-medium">{r.name}</span>,
            <span className="text-muted-foreground">{r.email}</span>,
            <span className="text-muted-foreground">{r.phone}</span>,
            r.type,
            <span className="text-muted-foreground">{r.last}</span>,
            <span className="font-semibold">{r.bookings}</span>,
          ])}
        />
      </Card>
    </div>
  );
}
