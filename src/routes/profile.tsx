import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, CreditCard, FileText, Video, HelpCircle, MessageCircle, Edit2, Heart, User, Briefcase, BookOpen, Settings } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "My profile — Recro Group" }, { name: "robots", content: "noindex" }] }),
  component: ProfilePage,
});

// Mock user data for demo
const mockUser = {
  email: "minanicamala@gmail.com",
  name: "minanicamala13",
  avatar: "MN",
  memberSince: "January 2024",
  totalSessions: 12,
  upcomingSessions: 0,
  completedSessions: 12,
  lifetimeSpend: 45000,
};

type TabKey = "overview" | "personal-info" | "appointments" | "bookings" | "payments" | "resources" | "settings";
const TABS: { key: TabKey; label: string; icon: any }[] = [
  { key: "overview", label: "Overview", icon: Heart },
  { key: "personal-info", label: "Personal Info", icon: User },
  { key: "appointments", label: "Appointments", icon: Calendar },
  { key: "bookings", label: "Bookings", icon: Briefcase },
  { key: "payments", label: "Payments", icon: CreditCard },
  { key: "resources", label: "Resources", icon: BookOpen },
  { key: "settings", label: "Settings", icon: Settings },
];

function ProfilePage() {
  const [tab, setTab] = useState<TabKey>("overview");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Hero Section - Dark Green */}
      <section className="bg-[#3F5B43] text-white relative pb-24">
        <div className="container-page py-12">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-[#3F5B43] text-2xl font-bold">
                  {mockUser.avatar}
                </span>
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white"></span>
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{mockUser.name}</h1>
                <p className="text-white/80 mt-1">{mockUser.email}</p>
                <p className="text-white/60 text-sm mt-1">Member since {mockUser.memberSince}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/booking" search={{ service: undefined }} className="bg-white text-[#3F5B43] hover:bg-white/90 px-6 py-2.5 rounded-xl font-semibold transition">
                Book a session
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-2.5 rounded-xl font-semibold transition flex items-center gap-2">
                <Edit2 size={16} />
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards - Overlapping hero */}
      <section className="container-page -mt-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard emoji="📋" label="Total Sessions" value={mockUser.totalSessions.toString()} />
          <StatCard emoji="🕐" label="Upcoming" value={mockUser.upcomingSessions.toString()} />
          <StatCard emoji="✓" label="Completed" value={mockUser.completedSessions.toString()} />
          <StatCard emoji="💰" label="Lifetime Spend" value={`KES ${mockUser.lifetimeSpend.toLocaleString()}`} />
        </div>
      </section>

      {/* Tabs and Content */}
      <section className="container-page py-12 flex-1">
        <div className="flex gap-4 border-b border-border mb-8 overflow-x-auto">
          {TABS.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`pb-3 px-3 text-sm font-medium whitespace-nowrap transition border-b-2 -mb-px flex items-center gap-2 ${tab === t.key
                  ? "border-[#3F5B43] text-[#3F5B43] bg-[#3F5B43]/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
              >
                <Icon size={18} />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div className="min-w-0">
            {tab === "overview" && (
              <div className="space-y-8">
                {/* Empty State */}
                <div className="rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary-deep mb-4">
                    <Calendar size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No upcoming sessions</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    You don't have any scheduled sessions at the moment
                  </p>
                  <Link to="/booking" search={{ service: undefined }} className="btn-primary inline-flex">
                    Book a session
                  </Link>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent activity</h3>
                  <div className="rounded-2xl border border-border bg-surface divide-y divide-border">
                    <ActivityItem
                      date="Dec 15, 2024"
                      title="Individual Therapy Session"
                      status="Completed"
                      amount="KES 3,500"
                    />
                    <ActivityItem
                      date="Dec 8, 2024"
                      title="Family Counseling"
                      status="Completed"
                      amount="KES 4,000"
                    />
                    <ActivityItem
                      date="Dec 1, 2024"
                      title="Individual Therapy Session"
                      status="Completed"
                      amount="KES 3,500"
                    />
                  </div>
                </div>
              </div>
            )}

            {tab === "personal-info" && (
              <div className="space-y-6 max-w-2xl">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <Field label="Full name" value={mockUser.name} />
                    <Field label="Email" value={mockUser.email} />
                    <Field label="Phone" value="+254 712 345 678" />
                    <Field label="Date of Birth" value="January 15, 1990" />
                    <Field label="Gender" value="Prefer not to say" />
                    <Field label="Address" value="Nairobi, Kenya" />
                  </div>
                  <button className="mt-6 btn-primary">Edit Information</button>
                </div>
              </div>
            )}

            {tab === "appointments" && (
              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center text-muted-foreground">
                  <Calendar size={48} className="mx-auto mb-4 opacity-30" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">No upcoming appointments</h3>
                  <p className="text-sm mb-6">Schedule your next therapy session</p>
                  <Link to="/booking" search={{ service: undefined }} className="btn-primary inline-flex">
                    Book an appointment
                  </Link>
                </div>
              </div>
            )}

            {tab === "bookings" && (
              <div className="rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center text-muted-foreground">
                <Briefcase size={48} className="mx-auto mb-4 opacity-30" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">No bookings yet</h3>
                <p className="text-sm">Your booking history will appear here</p>
              </div>
            )}

            {tab === "payments" && (
              <div className="rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center text-muted-foreground">
                <CreditCard size={48} className="mx-auto mb-4 opacity-30" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">No payment history</h3>
                <p className="text-sm">Your payment records will appear here</p>
              </div>
            )}

            {tab === "resources" && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <ResourceCard
                    icon={<FileText size={24} />}
                    title="Mental Health Articles"
                    description="Read helpful articles about mental wellness"
                    link="/resources"
                  />
                  <ResourceCard
                    icon={<Video size={24} />}
                    title="Video Resources"
                    description="Watch educational videos and sessions"
                    link="/resources"
                  />
                  <ResourceCard
                    icon={<BookOpen size={24} />}
                    title="Self-Help Guides"
                    description="Download guides for personal growth"
                    link="/resources"
                  />
                  <ResourceCard
                    icon={<HelpCircle size={24} />}
                    title="FAQ & Support"
                    description="Find answers to common questions"
                    link="/faq"
                  />
                </div>
              </div>
            )}

            {tab === "settings" && (
              <div className="space-y-6 max-w-2xl">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-4">Preferences</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Email notifications</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">SMS reminders</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Marketing communications</span>
                    </label>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-4">Security</h3>
                  <button className="btn-primary">Change Password</button>
                </div>

                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
                  <h3 className="text-lg font-semibold mb-2 text-destructive">Danger Zone</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all data
                  </p>
                  <button className="px-4 py-2 rounded-lg bg-destructive text-white hover:bg-destructive/90 transition text-sm font-semibold">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Support Card */}
            <div className="rounded-2xl bg-[#3F5B43] text-white p-6">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-semibold mb-2">Need extra support?</h3>
              <p className="text-white/80 text-sm mb-4">
                Our team is here to help you with any questions or concerns
              </p>
              <button className="w-full bg-white text-[#3F5B43] hover:bg-white/90 px-4 py-2.5 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                <MessageCircle size={16} />
                Contact us
              </button>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-base font-semibold mb-4">Quick links</h3>
              <div className="space-y-2">
                <QuickLink icon={<Calendar size={16} />} label="Browse services" to="/services" />
                <QuickLink icon={<FileText size={16} />} label="Read articles" to="/resources" />
                <QuickLink icon={<Video size={16} />} label="Watch sessions" to="/resources" />
                <QuickLink icon={<HelpCircle size={16} />} label="FAQ" to="/faq" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function StatCard({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <div className="text-3xl mb-2">{emoji}</div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}

function ActivityItem({ date, title, status, amount }: { date: string; title: string; status: string; amount: string }) {
  return (
    <div className="p-4 flex items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{date}</p>
        <p className="font-medium mt-0.5">{title}</p>
      </div>
      <div className="text-right">
        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-soft text-primary-deep">
          {status}
        </span>
        <p className="text-sm font-semibold mt-1">{amount}</p>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</label>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

function ResourceCard({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <Link
      to={link}
      className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/30 hover:shadow-sm transition"
    >
      <div className="text-primary-deep mb-3">{icon}</div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}

function QuickLink({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-2 transition text-sm font-medium"
    >
      <span className="text-muted-foreground">{icon}</span>
      {label}
    </Link>
  );
}
