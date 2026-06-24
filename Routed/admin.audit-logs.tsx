import { createFileRoute } from "@tanstack/react-router";
import { Card, DataTable, PageHeader, StatusBadge } from "@/components/admin/AdminShell";
import { Download } from "lucide-react";

export const Route = createFileRoute("/admin/audit-logs")({ component: Page });

const LOGS = [
  { t: "Today 09:14", who: "linda@recro.co", action: "Login", target: "Admin", tone: "info" as const },
  { t: "Today 09:18", who: "paul@recro.co", action: "Verified bank transfer", target: "Payment BNK-1144", tone: "success" as const },
  { t: "Today 09:32", who: "sarah@recro.co", action: "Published post", target: "When grief comes in waves", tone: "info" as const },
  { t: "Yesterday 16:02", who: "linda@recro.co", action: "Changed role", target: "Ann W. → Support Staff", tone: "warning" as const },
  { t: "Yesterday 14:11", who: "system", action: "Booking auto-confirmed", target: "Amina K.", tone: "muted" as const },
];

function Page() {
  return (
    <div className="p-6 space-y-5">
      <PageHeader
        title="Audit logs"
        description="Every meaningful action across the admin — searchable and exportable."
        actions={
          <button className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-[var(--admin-border)] text-sm font-semibold"><Download size={14}/> Export</button>
        }
      />
      <Card>
        <DataTable columns={["Time", "Who", "Action", "Target", "Type"]} rows={LOGS.map(l => [
          <span className="text-muted-foreground">{l.t}</span>,
          <span className="font-medium">{l.who}</span>,
          l.action, l.target,
          <StatusBadge tone={l.tone}>{l.action.split(" ")[0]}</StatusBadge>,
        ])} />
      </Card>
    </div>
  );
}
