import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/admin/AdminShell";
import { Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export const Route = createFileRoute("/admin/reports")({ component: Page });

const revenue = [
  { m: "Jan", v: 320 }, { m: "Feb", v: 410 }, { m: "Mar", v: 380 }, { m: "Apr", v: 520 },
  { m: "May", v: 610 }, { m: "Jun", v: 720 },
];
const services = [
  { s: "Individual", v: 42 }, { s: "Couples", v: 28 }, { s: "Family", v: 18 },
  { s: "Children", v: 22 }, { s: "Grief", v: 16 }, { s: "Corporate", v: 9 },
];

function Page() {
  return (
    <div className="p-6 space-y-5">
      <PageHeader
        title="Reports"
        description="Operational and financial insights — export anything as CSV."
        actions={
          <button className="inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-[var(--admin-border)] text-sm font-semibold"><Download size={14}/> Export CSV</button>
        }
      />

      <div className="grid sm:grid-cols-4 gap-3">
        {[
          { l: "Revenue (YTD)", v: "KES 2.96M" },
          { l: "Bookings (YTD)", v: "612" },
          { l: "Avg ticket", v: "KES 4,840" },
          { l: "Grief camp", v: "84 apps" },
        ].map((s) => (
          <Card key={s.l} className="p-4"><p className="text-xs text-muted-foreground">{s.l}</p><p className="text-2xl font-semibold mt-1">{s.v}</p></Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <h3 className="text-sm font-semibold">Revenue (KES 000)</h3>
          <div className="h-60 mt-2"><ResponsiveContainer>
            <LineChart data={revenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E7EFE9" />
              <XAxis dataKey="m" stroke="#52606D" fontSize={12} />
              <YAxis stroke="#52606D" fontSize={12} />
              <Tooltip /><Line type="monotone" dataKey="v" stroke="#4F6F52" strokeWidth={2.5} dot={{r:3}} />
            </LineChart>
          </ResponsiveContainer></div>
        </Card>
        <Card className="p-5">
          <h3 className="text-sm font-semibold">Service demand</h3>
          <div className="h-60 mt-2"><ResponsiveContainer>
            <BarChart data={services}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E7EFE9" />
              <XAxis dataKey="s" stroke="#52606D" fontSize={12} />
              <YAxis stroke="#52606D" fontSize={12} />
              <Tooltip /><Bar dataKey="v" fill="#4A6FA5" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer></div>
        </Card>
      </div>
    </div>
  );
}
