import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/admin/AdminShell";
import { Shield, Check, Minus } from "lucide-react";

export const Route = createFileRoute("/admin/roles")({ component: Page });

const ROLES = ["Super Admin", "Admin", "Therapist", "Finance", "Content Manager", "Camp Coordinator", "Support Staff"];
const PERMS = [
  "View dashboard", "Manage bookings", "Manage payments", "Verify bank transfers",
  "Manage customers", "Manage media & blog", "Manage grief camp", "Manage users & roles", "View audit logs",
];

const MATRIX: Record<string, boolean[]> = {
  "Super Admin":     [true, true, true, true, true, true, true, true, true],
  "Admin":           [true, true, true, true, true, true, true, false, true],
  "Therapist":       [true, true, false, false, true, false, false, false, false],
  "Finance":         [true, false, true, true, false, false, false, false, true],
  "Content Manager": [true, false, false, false, false, true, false, false, false],
  "Camp Coordinator":[true, true, false, false, true, false, true, false, false],
  "Support Staff":   [true, true, false, false, true, false, false, false, false],
};

function Page() {
  return (
    <div className="p-6 space-y-5">
      <PageHeader title="Roles & permissions" description="RBAC matrix · UI ready, enforcement comes next." />
      <Card className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[var(--admin-bg)] text-muted-foreground text-[11px] uppercase tracking-wider">
            <tr>
              <th className="text-left font-semibold px-5 py-3">Permission</th>
              {ROLES.map((r) => (
                <th key={r} className="text-center font-semibold px-3 py-3 whitespace-nowrap">{r}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--admin-border)]">
            {PERMS.map((p, i) => (
              <tr key={p} className="hover:bg-[var(--admin-bg)]/60">
                <td className="px-5 py-3 font-medium flex items-center gap-2"><Shield size={13} className="text-muted-foreground" /> {p}</td>
                {ROLES.map((r) => (
                  <td key={r} className="text-center px-3 py-3">
                    {MATRIX[r][i] ? <Check size={15} className="inline text-[color:var(--success)]" /> : <Minus size={14} className="inline text-muted-foreground/40" />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
