import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact us | Recro Group" },
      { name: "description", content: "Reach out to Recro Group to book a session, request information or partner with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" description="Send a message or use the details below — we typically reply within one business day." />
      <section className="container-page py-16 grid lg:grid-cols-5 gap-10">
        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-soft)] space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your name" placeholder="Jane Doe" />
            <Field label="Email" type="email" placeholder="jane@example.com" />
          </div>
          <Field label="Phone (optional)" placeholder="+254 700 000 000" />
          <div>
            <label className="text-sm font-medium text-foreground">How can we help?</label>
            <textarea
              rows={5}
              placeholder="Tell us a little about what you're looking for…"
              className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>
          <button type="submit" className="btn-primary"><Send size={16}/> Send message</button>
        </form>

        <aside className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, title: "Call us", value: "+254 700 000 000" },
            { icon: Mail, title: "Email", value: "hello@recrogroup.org" },
            { icon: MapPin, title: "Visit", value: "Nairobi, Kenya — by appointment" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 card-lift">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-deep"><c.icon size={18}/></span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.title}</p>
                <p className="mt-1 text-sm font-medium">{c.value}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>
    </SiteShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
