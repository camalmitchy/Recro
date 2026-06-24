import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, DataTable, PageHeader, StatusBadge } from "@/components/admin/AdminShell";
import { Calendar as CalIcon, Table2, Plus, Filter } from "lucide-react";

export const Route = createFileRoute("/admin/appointments")({ component: Page });

type Status = "Requested" | "Pending" | "Confirmed" | "Completed" | "Cancelled" | "No-show";
const TONE: Record<Status, "info" | "warning" | "success" | "muted" | "danger"> = {
  Requested: "info", Pending: "warning", Confirmed: "success",
  Completed: "muted", Cancelled: "danger", "No-show": "danger",
};

const ROWS = [
  { who: "Amina K.", svc: "Individual", when: "Today · 11:00", therapist: "Dr. Mwangi", status: "Confirmed" as Status },
  { who: "Wanjiku & James", svc: "Couples", when: "Today · 14:00", therapist: "Dr. Otieno", status: "Pending" as Status },
  { who: "Brian O.", svc: "Children", when: "Tomorrow · 09:30", therapist: "—", status: "Requested" as Status },
  { who: "Grace N.", svc: "Grief support", when: "Wed · 16:00", therapist: "Dr. Mwangi", status: "Confirmed" as Status },
  { who: "Acme Ltd", svc: "Corporate workshop", when: "Fri · 10:00", therapist: "Team", status: "Confirmed" as Status },
  { who: "Maria P.", svc: "Family", when: "Last Mon · 15:00", therapist: "Dr. Otieno", status: "Completed" as Status },
  { who: "Tom W.", svc: "Individual", when: "Last Tue · 11:00", therapist: "Dr. Mwangi", status: "No-show" as Status },
];

function Page() {
  const [view, setView] = useState<"table" | "calendar">("table");
  return (
    <div className="p-6 space-y-5">
      <PageHeader
        title="Appointments"
        description="Manage scheduled sessions across all services and therapists."
        actions={
          <>
            <div className="inline-flex rounded-lg border border-[var(--admin-border)] p-0.5 bg-[var(--admin-surface)]">
              <button onClick={() => setView("table")} className={`inline-flex items-center gap-1.5 px-3 h-8 rounded-md text-sm ${view === "table" ? "bg-primary-soft text-primary-deep font-semibold" : "text-muted-foreground"}`}>
                <Table2 size={14} /> Table
              </button>
              <button onClick={() => setView("calendar")} className={`inline-flex items-center gap-1.5 px-3 h-8 rounded-md text-sm ${view === "calendar" ? "bg-primary-soft text-primary-deep font-semibold" : "text-muted-foreground"}`}>
                <CalIcon size={14} /> Calendar
              </button>
            </div>
            <button className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold"><Plus size={14}/> New appointment</button>
          </>
        }
      />

      <Card className="p-3 flex flex-wrap gap-2 items-center">
        <Filter size={14} className="text-muted-foreground ml-2" />
        {["All services", "Individual", "Couples", "Family", "Children", "Grief", "Corporate"].map((s, i) => (
          <button key={s} className={`text-xs px-3 h-7 rounded-full border ${i === 0 ? "bg-primary-soft text-primary-deep border-primary/30 font-semibold" : "border-[var(--admin-border)] text-muted-foreground hover:bg-[var(--admin-bg)]"}`}>{s}</button>
        ))}
        <span className="mx-2 text-[var(--admin-border)]">|</span>
        {(["All", "Requested", "Pending", "Confirmed", "Completed", "Cancelled"] as const).map((s, i) => (
          <button key={s} className={`text-xs px-3 h-7 rounded-full border ${i === 0 ? "bg-primary-soft text-primary-deep border-primary/30 font-semibold" : "border-[var(--admin-border)] text-muted-foreground hover:bg-[var(--admin-bg)]"}`}>{s}</button>
        ))}
      </Card>

      {view === "table" ? (
        <Card>
          <DataTable
            columns={["Client", "Service", "When", "Therapist", "Status", "Actions"]}
            rows={ROWS.map((r) => [
              <span className="font-medium">{r.who}</span>,
              r.svc,
              <span className="text-muted-foreground">{r.when}</span>,
              r.therapist,
              <StatusBadge tone={TONE[r.status]}>{r.status}</StatusBadge>,
              <div className="flex gap-2 text-xs font-semibold">
                <button className="text-primary-deep hover:underline">Confirm</button>
                <button className="text-muted-foreground hover:text-foreground">Reschedule</button>
                <button className="text-[color:var(--destructive)] hover:underline">Cancel</button>
              </div>,
            ])}
          />
        </Card>
      ) : (
        <Card className="p-5">
          <div className="grid grid-cols-7 gap-2 text-xs">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
              <div key={d} className="font-semibold text-muted-foreground text-center pb-2">{d}</div>
            ))}
            {Array.from({ length: 28 }).map((_, i) => {
              const count = [0,1,0,2,0,3,1,0,2,1,0,0,1,4,0,1,0,2,1,0,0,3,1,0,2,1,0,1][i];
              return (
                <div key={i} className="aspect-square rounded-lg border border-[var(--admin-border)] p-1.5 hover:border-primary/40">
                  <div className="text-[11px] text-muted-foreground">{i + 1}</div>
                  {count > 0 && <div className="mt-1 text-[10px] font-semibold inline-flex items-center justify-center h-5 px-1.5 rounded-full bg-primary-soft text-primary-deep">{count}</div>}
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}
