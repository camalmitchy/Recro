import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import hero4 from "@/assets/hero-4.jpg";

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
      {/* HERO */}
      <ScrollRevealSection index={0}>
        <section className="relative bg-surface overflow-hidden h-[400px] lg:h-[450px]">
          {/* Full-width background image */}
          <img
            src={hero4}
            alt="Contact us"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-[1]"></div>

          {/* Content overlay */}
          <div className="relative z-10 h-full">
            <div className="container-page h-full flex items-center py-16 lg:py-20">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white">
                  Contact
                </span>
                <h1 className="mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg">
                  We'd love to<br />hear from you
                </h1>
                <p className="mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow">
                  Send a message or use the details below — we typically reply within one business day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection index={1}>
        <section className="container-page py-16 lg:py-20 grid lg:grid-cols-5 gap-10">
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
            <button type="submit" className="btn-primary"><Send size={16} /> Send message</button>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: "Call us", value: "+254 700 000 000" },
              { icon: Mail, title: "Email", value: "hello@recrogroup.org" },
              { icon: MapPin, title: "Visit", value: "Nairobi, Kenya — by appointment" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 card-lift">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-deep"><c.icon size={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.title}</p>
                  <p className="mt-1 text-sm font-medium">{c.value}</p>
                </div>
              </div>
            ))}

            {/* WORKING HOURS CARD */}
            <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-deep">
                <Clock size={18} />
              </span>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Hours</p>
                <div className="mt-2 space-y-1.5">
                  <p className="text-sm font-medium text-foreground">Mon–Fri · 8:00 – 18:00</p>
                  <p className="text-sm font-medium text-foreground">Sat · 9:00 – 14:00</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </ScrollRevealSection>

      {/* GOOGLE MAPS SECTION */}
      <ScrollRevealSection index={2}>
        <section className="container-page pb-16 lg:pb-20">
          <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.87738%2C-1.22168%2C36.88138%2C-1.21768&layer=mapnik&marker=-1.21968%2C36.87938"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Recro Group Location"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Coordinates: 1° 13' 11" S, 36° 52' 46" E · Nairobi, Kenya
            </p>
          </div>
        </section>
      </ScrollRevealSection>
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
