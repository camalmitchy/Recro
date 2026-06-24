import { createFileRoute } from "@tanstack/react-router";
import { Card, DataTable, PageHeader, StatusBadge } from "@/components/admin/AdminShell";
import { Upload } from "lucide-react";

export const Route = createFileRoute("/admin/resources")({ component: Page });

const ROWS = [
  { t: "Grief Journal (PDF)", type: "PDF", size: "1.2 MB", downloads: 240, status: "Published" },
  { t: "Mindfulness audio pack", type: "Audio", size: "32 MB", downloads: 88, status: "Published" },
  { t: "Parenting toolkit", type: "PDF", size: "2.4 MB", downloads: 102, status: "Draft" },
];

function Page() {
  return (
    <div className="p-6 space-y-5">
      <PageHeader
        title="Resources"
        description="Downloadable guides, journals and audio tools."
        actions={
          <button className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold"><Upload size={14}/> Upload resource</button>
        }
      />
      <Card>
        <DataTable
          columns={["Title", "Type", "Size", "Downloads", "Status", "Actions"]}
          rows={ROWS.map((r) => [
            <span className="font-medium">{r.t}</span>,
            r.type, r.size, r.downloads,
            <StatusBadge tone={r.status === "Published" ? "success" : "muted"}>{r.status}</StatusBadge>,
            <button className="text-xs font-semibold text-primary-deep hover:underline">Edit</button>,
          ])}
        />
      </Card>
    </div>
  );
}
