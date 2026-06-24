import { createFileRoute } from "@tanstack/react-router";
import { Card, DataTable, PageHeader, StatusBadge } from "@/components/admin/AdminShell";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/admin/corporate-speaking")({ component: Page });

const ROWS = [
  { org: "Acme Ltd", contact: "HR Lead — Diana M.", topic: "Workplace wellbeing keynote", when: "12 Aug 2026", budget: "KES 200k", status: "Proposal sent" },
  { org: "Safi Bank", contact: "L&D — Peter O.", topic: "Manager mental-health training", when: "Sept 2026", budget: "—", status: "New lead" },
  { org: "Riverbend School", contact: "Principal — Mary K.", topic: "Parent grief workshop", when: "Oct 2026", budget: "KES 80k", status: "Negotiating" },
  { org: "TechCo", contact: "People Ops — John M.", topic: "Burnout panel", when: "TBC", budget: "—", status: "Won" },
];

const TONE: Record<string, "info" | "warning" | "success" | "muted"> = {
  "New lead": "info", "Proposal sent": "warning", "Negotiating": "warning", "Won": "success", "Lost": "muted",
};

function Page() {
  return (
    <div className="p-6 space-y-5">
      <PageHeader
        title="Corporate Speaking"
        description="Track keynote, training and workshop pipeline."
        actions={
          <button className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold"><Plus size={14}/> Add lead</button>
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { l: "New", v: 5 }, { l: "Proposal sent", v: 4 }, { l: "Negotiating", v: 2 }, { l: "Won (YTD)", v: 11 }, { l: "Revenue (YTD)", v: "KES 1.4M" },
        ].map((s) => (
          <Card key={s.l} className="p-4">
            <p className="text-xs text-muted-foreground">{s.l}</p>
            <p className="text-2xl font-semibold mt-1">{s.v}</p>
          </Card>
        ))}
      </div>

      <Card>
        <DataTable
          columns={["Organization", "Contact", "Topic", "Event date", "Budget", "Status", "Actions"]}
          rows={ROWS.map((r) => [
            <span className="font-medium">{r.org}</span>,
            <span className="text-muted-foreground">{r.contact}</span>,
            r.topic,
            <span className="text-muted-foreground">{r.when}</span>,
            r.budget,
            <StatusBadge tone={TONE[r.status] ?? "muted"}>{r.status}</StatusBadge>,
            <button className="text-xs font-semibold text-primary-deep hover:underline">Open</button>,
          ])}
        />
      </Card>
    </div>
  );
}
