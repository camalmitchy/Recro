import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHeader, StatusBadge } from "@/components/admin/AdminShell";
import {
  CalendarDays, Clock, CheckCircle2, CreditCard, Landmark, HeartHandshake,
  Mic2, MessageSquare, Mail, TrendingUp, TrendingDown, Plus, Upload, FileText,
  Video, Stethoscope, ArrowRight,
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

const KPIS = [
  { label: "Today's bookings", value: 14, delta: "+12%", up: true, to: "/admin/bookings", icon: CalendarDays },
  { label: "Pending appointments", value: 7, delta: "+2", up: true, to: "/admin/appointments", icon: Clock },
  { label: "Confirmed appointments", value: 23, delta: "+5%", up: true, to: "/admin/appointments", icon: CheckCircle2 },
  { label: "Pending M-Pesa", value: 9, delta: "-1", up: false, to: "/admin/payments", icon: CreditCard },
  { label: "Bank transfers to verify", value: 4, delta: "+1", up: true, to: "/admin/payments", icon: Landmark },
  { label: "Grief camp applications", value: 18, delta: "+6", up: true, to: "/admin/grief-camp", icon: HeartHandshake },
  { label: "Corporate leads", value: 5, delta: "+2", up: true, to: "/admin/corporate-speaking", icon: Mic2 },
  { label: "New inquiries", value: 11, delta: "+4", up: true, to: "/admin/inquiries", icon: MessageSquare },
  { label: "Newsletter signups", value: 42, delta: "+18", up: true, to: "/admin/newsletter", icon: Mail },
];

const bookingsTrend = [
  { d: "Mon", v: 8 }, { d: "Tue", v: 12 }, { d: "Wed", v: 14 },
  { d: "Thu", v: 11 }, { d: "Fri", v: 18 }, { d: "Sat", v: 22 }, { d: "Sun", v: 14 },
];
const paymentMix = [
  { name: "M-Pesa", value: 64, color: "#3FA34D" },
  { name: "Bank Transfer", value: 28, color: "#4A6FA5" },
  { name: "Card (soon)", value: 8, color: "#A68A64" },
];
const serviceDemand = [
  { s: "Individual", v: 42 }, { s: "Couples", v: 28 }, { s: "Family", v: 18 },
  { s: "Children", v: 22 }, { s: "Grief", v: 16 }, { s: "Corporate", v: 9 },
];
const griefTrend = [
  { d: "W1", v: 3 }, { d: "W2", v: 5 }, { d: "W3", v: 8 },
  { d: "W4", v: 11 }, { d: "W5", v: 14 }, { d: "W6", v: 18 },
];

const QUICK = [
  { label: "Add Appointment", icon: Plus, to: "/admin/appointments" },
  { label: "Create Booking", icon: CalendarDays, to: "/admin/bookings" },
  { label: "Upload Media", icon: Upload, to: "/admin/media" },
  { label: "Publish Blog Post", icon: FileText, to: "/admin/blog" },
  { label: "Add Service", icon: Stethoscope, to: "/admin/services" },
  { label: "Review Payments", icon: CreditCard, to: "/admin/payments" },
  { label: "Grief Applications", icon: HeartHandshake, to: "/admin/grief-camp" },
];

const ACTIVITY = [
  { t: "2m ago", text: "New booking — Amina K. · Individual therapy", to: "/admin/bookings", tone: "info" as const },
  { t: "9m ago", text: "M-Pesa payment received · KES 4,500 · ref RKJ29A", to: "/admin/payments", tone: "success" as const },
  { t: "21m ago", text: "Bank transfer proof uploaded · Wanjiku M.", to: "/admin/payments", tone: "warning" as const },
  { t: "44m ago", text: "Grief Camp application · age 10–13", to: "/admin/grief-camp", tone: "info" as const },
  { t: "1h ago", text: "Corporate inquiry · Acme Ltd · keynote", to: "/admin/corporate-speaking", tone: "info" as const },
  { t: "2h ago", text: "Contact form · partnership question", to: "/admin/inquiries", tone: "muted" as const },
];

const QUEUE = {
  "Needs attention": [
    { who: "Wanjiku M.", type: "Bank transfer", status: "Verify proof", tone: "warning" as const, action: "Review" },
    { who: "Brian O.", type: "Booking", status: "Awaiting therapist assignment", tone: "info" as const, action: "Assign" },
    { who: "Grace N.", type: "Grief camp", status: "New application", tone: "info" as const, action: "Open" },
  ],
  "Pending payments": [
    { who: "Amina K.", type: "M-Pesa", status: "Awaiting STK confirmation", tone: "warning" as const, action: "Resend" },
    { who: "James K.", type: "Bank transfer", status: "Proof not uploaded", tone: "warning" as const, action: "Remind" },
  ],
  "Awaiting confirmation": [
    { who: "Couples · Wanjiku & James", type: "Appointment", status: "Tomorrow 14:00", tone: "info" as const, action: "Confirm" },
    { who: "Acme Ltd", type: "Corporate workshop", status: "Friday 10:00", tone: "info" as const, action: "Confirm" },
  ],
  "Recently updated": [
    { who: "Maria P.", type: "Booking", status: "Marked completed", tone: "success" as const, action: "View" },
    { who: "Tom W.", type: "Payment", status: "Verified · KES 6,000", tone: "success" as const, action: "View" },
  ],
};

import { useState } from "react";

function Dashboard() {
  const [tab, setTab] = useState<keyof typeof QUEUE>("Needs attention");

  return (
    <div className="p-6 space-y-6">
      <PageHeader
        title="Control Center"
        description="Everything that needs your attention today, at a glance."
      />

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        {KPIS.map((k) => (
          <Link key={k.label} to={k.to} className="group">
            <Card className="p-4 hover:border-primary/40 transition-colors h-full">
              <div className="flex items-start justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary-deep">
                  <k.icon size={16} />
                </div>
                <span className={`inline-flex items-center gap-0.5 text-[11px] font-semibold ${k.up ? "text-[color:var(--success)]" : "text-[color:var(--destructive)]"}`}>
                  {k.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />} {k.delta}
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold tracking-tight">{k.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{k.label}</p>
            </Card>
          </Link>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold">Bookings over time</h3>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </div>
            <StatusBadge tone="success">+18% WoW</StatusBadge>
          </div>
          <div className="h-56">
            <ResponsiveContainer>
              <LineChart data={bookingsTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E7EFE9" />
                <XAxis dataKey="d" stroke="#52606D" fontSize={12} />
                <YAxis stroke="#52606D" fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="v" stroke="#4F6F52" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="text-sm font-semibold mb-1">Payment breakdown</h3>
          <p className="text-xs text-muted-foreground mb-2">This month</p>
          <div className="h-44">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={paymentMix} dataKey="value" innerRadius={45} outerRadius={70} paddingAngle={2}>
                  {paymentMix.map((p) => <Cell key={p.name} fill={p.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5 mt-2">
            {paymentMix.map((p) => (
              <div key={p.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} /> {p.name}</span>
                <span className="font-semibold">{p.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <h3 className="text-sm font-semibold mb-1">Service demand</h3>
          <p className="text-xs text-muted-foreground mb-3">Bookings by service · last 30 days</p>
          <div className="h-56">
            <ResponsiveContainer>
              <BarChart data={serviceDemand}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E7EFE9" />
                <XAxis dataKey="s" stroke="#52606D" fontSize={12} />
                <YAxis stroke="#52606D" fontSize={12} />
                <Tooltip />
                <Bar dataKey="v" fill="#4A6FA5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="text-sm font-semibold mb-1">Grief camp applications</h3>
          <p className="text-xs text-muted-foreground mb-3">Weekly trend</p>
          <div className="h-56">
            <ResponsiveContainer>
              <LineChart data={griefTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E7EFE9" />
                <XAxis dataKey="d" stroke="#52606D" fontSize={12} />
                <YAxis stroke="#52606D" fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="v" stroke="#6B7A5F" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Quick actions + activity */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-5 lg:col-span-1">
          <h3 className="text-sm font-semibold mb-3">Quick actions</h3>
          <div className="grid grid-cols-2 gap-2">
            {QUICK.map((q) => (
              <Link
                key={q.label}
                to={q.to}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[var(--admin-border)] hover:border-primary/40 hover:bg-primary-soft/40 text-sm font-medium"
              >
                <q.icon size={15} className="text-primary-deep" />
                <span className="truncate">{q.label}</span>
              </Link>
            ))}
          </div>
        </Card>

        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Live activity</h3>
            <span className="text-xs text-muted-foreground">Updates in real-time</span>
          </div>
          <ul className="divide-y divide-[var(--admin-border)]">
            {ACTIVITY.map((a, i) => (
              <li key={i}>
                <Link to={a.to} className="flex items-center justify-between gap-4 py-2.5 hover:bg-[var(--admin-bg)]/60 rounded-md px-2 -mx-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`h-2 w-2 rounded-full ${a.tone === "success" ? "bg-[var(--success)]" : a.tone === "warning" ? "bg-[var(--warning)]" : a.tone === "info" ? "bg-[var(--info)]" : "bg-muted-foreground"}`} />
                    <span className="text-sm truncate">{a.text}</span>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{a.t}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Work queue */}
      <Card className="overflow-hidden">
        <div className="border-b border-[var(--admin-border)] px-5 pt-4">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-sm font-semibold">Work queue</h3>
              <p className="text-xs text-muted-foreground mb-3">Daily operations · clear these to keep clients moving</p>
            </div>
          </div>
          <div className="flex gap-1 -mb-px overflow-x-auto">
            {(Object.keys(QUEUE) as Array<keyof typeof QUEUE>).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-3 py-2 text-sm font-medium border-b-2 whitespace-nowrap ${tab === k ? "border-primary text-primary-deep" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                {k} <span className="ml-1 text-xs text-muted-foreground">({QUEUE[k].length})</span>
              </button>
            ))}
          </div>
        </div>
        <ul className="divide-y divide-[var(--admin-border)]">
          {QUEUE[tab].map((row, i) => (
            <li key={i} className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-[var(--admin-bg)]/50">
              <div className="flex items-center gap-4 min-w-0">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary-deep text-xs font-semibold shrink-0">
                  {row.who.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{row.who}</p>
                  <p className="text-xs text-muted-foreground truncate">{row.type} · {row.status}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <StatusBadge tone={row.tone}>{row.type}</StatusBadge>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary-deep hover:underline">
                  {row.action} <ArrowRight size={13} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
