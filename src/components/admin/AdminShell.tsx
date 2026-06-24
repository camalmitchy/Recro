import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, CalendarDays, Inbox, Users, CreditCard, HeartHandshake,
  Mic2, Video, BookOpen, FileText, HelpCircle, MessageSquare, Mail, Star,
  Stethoscope, UserCog, Shield, BarChart3, Settings, ScrollText, Bell,
  Search, Plus, ChevronDown,
} from "lucide-react";
import type { ReactNode } from "react";

type NavItem = { to: string; label: string; icon: typeof LayoutDashboard; group: string };

const NAV: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, group: "Overview" },
  { to: "/admin/appointments", label: "Appointments", icon: CalendarDays, group: "Operations" },
  { to: "/admin/bookings", label: "Bookings", icon: Inbox, group: "Operations" },
  { to: "/admin/customers", label: "Customers", icon: Users, group: "Operations" },
  { to: "/admin/payments", label: "Payments", icon: CreditCard, group: "Operations" },
  { to: "/admin/grief-camp", label: "Grief Camp", icon: HeartHandshake, group: "Programs" },
  { to: "/admin/corporate-speaking", label: "Corporate Speaking", icon: Mic2, group: "Programs" },
  { to: "/admin/media", label: "Media", icon: Video, group: "Content" },
  { to: "/admin/resources", label: "Resources", icon: BookOpen, group: "Content" },
  { to: "/admin/blog", label: "Blog", icon: FileText, group: "Content" },
  { to: "/admin/faqs", label: "FAQs", icon: HelpCircle, group: "Content" },
  { to: "/admin/testimonials", label: "Testimonials", icon: Star, group: "Content" },
  { to: "/admin/services", label: "Services", icon: Stethoscope, group: "Content" },
  { to: "/admin/inquiries", label: "Inquiries", icon: MessageSquare, group: "Engagement" },
  { to: "/admin/newsletter", label: "Newsletter", icon: Mail, group: "Engagement" },
  { to: "/admin/therapists", label: "Therapists", icon: UserCog, group: "People" },
  { to: "/admin/users", label: "Users", icon: Users, group: "People" },
  { to: "/admin/roles", label: "Roles", icon: Shield, group: "People" },
  { to: "/admin/reports", label: "Reports", icon: BarChart3, group: "System" },
  { to: "/admin/settings", label: "Settings", icon: Settings, group: "System" },
  { to: "/admin/audit-logs", label: "Audit Logs", icon: ScrollText, group: "System" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const groups = Array.from(new Set(NAV.map((n) => n.group)));

  return (
    <div className="min-h-screen flex bg-[var(--admin-bg)] text-foreground">
      <aside className="hidden lg:flex w-64 flex-col border-r border-[var(--admin-border)] bg-[var(--admin-surface)] sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2.5 px-5 h-16 border-b border-[var(--admin-border)]">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--admin-primary)] text-white font-bold">R</span>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold">Recro Admin</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Control Center</span>
          </div>
        </Link>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {groups.map((g) => (
            <div key={g}>
              <p className="px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80">{g}</p>
              <div className="space-y-0.5">
                {NAV.filter((n) => n.group === g).map((n) => {
                  const active = n.to === "/admin" ? pathname === "/admin" : pathname.startsWith(n.to);
                  return (
                    <Link
                      key={n.to}
                      to={n.to}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? "bg-primary-soft text-primary-deep"
                          : "text-foreground/70 hover:bg-[var(--admin-bg)] hover:text-foreground"
                      }`}
                    >
                      <n.icon size={15} strokeWidth={2} />
                      <span className="truncate">{n.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div className="p-3 border-t border-[var(--admin-border)]">
          <Link to="/" className="block text-xs text-muted-foreground hover:text-foreground px-3 py-2">← Back to site</Link>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 border-b border-[var(--admin-border)] bg-[var(--admin-surface)] flex items-center gap-4 px-6 sticky top-0 z-20">
          <div className="flex-1 max-w-md relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search customers, bookings, payments…"
              className="w-full pl-9 pr-3 h-9 rounded-lg bg-[var(--admin-bg)] border border-[var(--admin-border)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white hover:opacity-90">
            <Plus size={14} /> Quick action
          </button>
          <button aria-label="Notifications" className="relative grid h-9 w-9 place-items-center rounded-lg hover:bg-[var(--admin-bg)]">
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--coral)]" />
          </button>
          <button className="flex items-center gap-2 pl-1.5 pr-2 h-9 rounded-lg hover:bg-[var(--admin-bg)]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-soft text-primary-deep text-xs font-semibold">RA</span>
            <span className="hidden sm:inline text-sm font-medium">Admin</span>
            <ChevronDown size={14} className="text-muted-foreground" />
          </button>
        </header>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({
  title, description, actions,
}: { title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
      <div>
        <h1 className="text-[22px] font-semibold tracking-tight">{title}</h1>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-[var(--admin-border)] bg-[var(--admin-surface)] ${className}`}>
      {children}
    </div>
  );
}

export function StatusBadge({ tone = "muted", children }: { tone?: "success" | "warning" | "info" | "danger" | "muted"; children: ReactNode }) {
  const map: Record<string, string> = {
    success: "bg-[color-mix(in_oklab,var(--success)_14%,white)] text-[color:var(--success)]",
    warning: "bg-[color-mix(in_oklab,var(--warning)_18%,white)] text-[color:var(--warning)]",
    info: "bg-secondary-soft text-[color:var(--secondary)]",
    danger: "bg-[color-mix(in_oklab,var(--destructive)_15%,white)] text-[color:var(--destructive)]",
    muted: "bg-[var(--admin-bg)] text-muted-foreground",
  };
  return <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full ${map[tone]}`}>{children}</span>;
}

export function DataTable({
  columns, rows,
}: { columns: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-[var(--admin-bg)] text-muted-foreground text-[11px] uppercase tracking-wider">
          <tr>
            {columns.map((c) => (
              <th key={c} className="text-left font-semibold px-5 py-3 whitespace-nowrap">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--admin-border)]">
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-[var(--admin-bg)]/60">
              {r.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 whitespace-nowrap">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
