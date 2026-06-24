import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/admin/AdminShell";
import { CreditCard, Mail, Calendar, Globe, Shield, Search } from "lucide-react";

export const Route = createFileRoute("/admin/settings")({ component: Page });

const SECTIONS = [
  { icon: CreditCard, title: "Payments", desc: "M-Pesa till, bank account, card placeholder." },
  { icon: Mail, title: "Email & SMS", desc: "From address, reminder templates, SMS sender ID." },
  { icon: Calendar, title: "Booking rules", desc: "Hours, lead time, buffer between sessions." },
  { icon: Globe, title: "Site", desc: "Logo, contact info, social links." },
  { icon: Shield, title: "Privacy", desc: "Consent text, data retention, DPO contact." },
  { icon: Search, title: "SEO", desc: "Default meta, sitemap & robots." },
];

function Page() {
  return (
    <div className="p-6 space-y-5">
      <PageHeader title="Settings" description="Tune the platform without touching code." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTIONS.map((s) => (
          <Card key={s.title} className="p-5 hover:border-primary/40 transition-colors">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary-deep"><s.icon size={18}/></div>
            <h3 className="text-sm font-semibold mt-3">{s.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
            <button className="text-xs font-semibold text-primary-deep hover:underline mt-3">Configure →</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
