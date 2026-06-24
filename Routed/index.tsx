import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartHandshake,
  Users,
  Baby,
  Briefcase,
  Sparkles,
  ArrowRight,
  Star,
  ShieldCheck,
  Leaf,
  Play,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import heroFamily from "@/assets/hero-family.jpg";
import therapy from "@/assets/therapy-session.jpg";
import griefCamp from "@/assets/grief-camp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Recro Group — Restoring families through therapy & care" },
      {
        name: "description",
        content:
          "Recro Group offers psychotherapy, family and couples counselling, children's grief support and corporate wellness across Kenya. Book a safe, professional session today.",
      },
      { property: "og:title", content: "Recro Group — Restoring families" },
      {
        property: "og:description",
        content:
          "Bright, hopeful behavioral health care for individuals, couples, families, children and corporate teams.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: HeartHandshake,
    title: "Individual therapy",
    body: "One-on-one psychotherapy for anxiety, depression, life transitions and personal growth.",
    accent: "primary",
    serviceKey: "individual",
  },
  {
    icon: Users,
    title: "Couples & families",
    body: "Restore communication, rebuild trust and grow stronger together with guided sessions.",
    accent: "teal",
    serviceKey: "couples",
  },
  {
    icon: Baby,
    title: "Children & grief",
    body: "Safe, play-based support for children processing loss, change and big emotions.",
    accent: "lavender",
    serviceKey: "children",
  },
  {
    icon: Briefcase,
    title: "Corporate wellness",
    body: "Workshops, EAP programs and team check-ins that protect your people's wellbeing.",
    accent: "coral",
    serviceKey: "corporate",
  },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">
              <Sparkles size={12} /> Restoring families since 2017
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
              Care that feels like a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-deep">deep breath</span>
                <span
                  className="absolute inset-x-0 bottom-1 h-3 bg-primary-soft -z-0 rounded-sm"
                  aria-hidden
                />
              </span>
              .
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Recro Group is a behavioral health practice for individuals, couples,
              families, children and organizations. Bright, modern therapy rooted
              in safety, dignity and real change.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/booking" className="btn-primary">
                Book a session <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "7+", v: "Years of care" },
                { k: "2.4k", v: "Sessions a year" },
                { k: "9", v: "Camp cohorts" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-3xl font-semibold text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden ring-1 ring-border shadow-[var(--shadow-lift)]">
              <img
                src={heroFamily}
                alt="A diverse family sitting together in a bright sunlit therapy room"
                width={1600}
                height={1100}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="hidden md:flex absolute -left-6 bottom-10 items-center gap-3 rounded-2xl bg-background/95 backdrop-blur-xl border border-border px-4 py-3 shadow-[var(--shadow-lift)]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary-deep">
                <ShieldCheck size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Confidential</p>
                <p className="text-xs text-muted-foreground">Safe & licensed therapists</p>
              </div>
            </div>
            <div className="hidden md:flex absolute -right-4 top-10 items-center gap-3 rounded-2xl bg-background/95 backdrop-blur-xl border border-border px-4 py-3 shadow-[var(--shadow-lift)]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary-deep">
                <Star size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">4.9 / 5</p>
                <p className="text-xs text-muted-foreground">Client experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Support for every season of life
            </h2>
            <p className="mt-3 text-muted-foreground">
              Whether you're navigating loss, growing as a couple, raising kids or
              leading a team — there's a Recro service for that.
            </p>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary-deep inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            All services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group card-lift relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep"
                style={
                  s.accent === "teal"
                    ? { background: "color-mix(in oklab, var(--teal) 14%, white)", color: "var(--teal)" }
                    : s.accent === "lavender"
                    ? { background: "color-mix(in oklab, var(--lavender) 14%, white)", color: "var(--lavender)" }
                    : s.accent === "coral"
                    ? { background: "color-mix(in oklab, var(--coral) 14%, white)", color: "var(--coral)" }
                    : undefined
                }
              >
                <s.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <Link
                to="/booking"
                search={{ service: s.serviceKey }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep group-hover:gap-2.5 transition-all"
              >
                Book this <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden ring-1 ring-border shadow-[var(--shadow-lift)]">
              <img
                src={therapy}
                alt="Two people in a calm therapy session"
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 rounded-2xl bg-background border border-border p-5 shadow-[var(--shadow-lift)] max-w-[16rem]">
              <Leaf className="text-primary" size={20} />
              <p className="mt-2 text-sm font-medium text-foreground leading-snug">
                "I left lighter than I came in." — A Recro client
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Our approach</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Bright, modern therapy that respects where you are
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We combine evidence-based clinical practice with warmth, cultural
              awareness and a refusal to make therapy feel clinical. Every session
              is designed to feel safe, human, and forward-moving.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Licensed psychotherapists and counsellors",
                "Confidential by default, always",
                "Flexible in-person and virtual sessions",
                "Sliding-scale options for those in need",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                    <svg width="10" height="10" viewBox="0 0 12 12"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2 6.5L5 9.5L10 3"/></svg>
                  </span>
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BEGIN HEALING — quick booking */}
      <section className="bg-surface">
        <div className="container-page py-20">
          <div className="rounded-[2rem] bg-card border border-border shadow-[var(--shadow-lift)] p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="eyebrow">Begin healing</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif tracking-tight text-foreground leading-[1.1]">
                A first session is a quiet act of courage.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Choose your service and a time that works for you. We'll confirm
                within one working day. All sessions are strictly confidential.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-foreground">
                {[
                  "M-Pesa & bank transfer supported",
                  "In-person, online or phone",
                  "Free 15-min orientation call available",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-deep" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const service = String(fd.get("service") || "individual");
                window.location.href = `/booking?service=${encodeURIComponent(service)}`;
              }}
              className="flex flex-col gap-5"
            >
              <label className="block">
                <span className="eyebrow">Support type</span>
                <select
                  name="service"
                  defaultValue="individual"
                  className="mt-3 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                >
                  <option value="individual">Individual Therapy</option>
                  <option value="couples">Couples &amp; Families</option>
                  <option value="children">Children &amp; Grief</option>
                  <option value="corporate">Corporate Wellness</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="eyebrow">Preferred date</span>
                  <input
                    type="date"
                    name="date"
                    className="mt-3 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">Mode</span>
                  <select
                    name="mode"
                    className="mt-3 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                  >
                    <option>In-person</option>
                    <option>Online</option>
                    <option>Phone</option>
                  </select>
                </label>
              </div>
              <button type="submit" className="btn-primary w-full justify-center mt-2">
                Continue to booking <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHY RECRO — trust strip */}
      <section className="bg-background">
        <div className="container-page py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Why Recro</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif tracking-tight text-foreground leading-[1.05]">
              Clinically credible.<br />Deeply human.
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Confidential by design",
                body: "All sessions and records are handled in line with the Kenya Data Protection Act.",
              },
              {
                icon: HeartHandshake,
                title: "Therapist–client fit",
                body: "We match you with a clinician suited to your goals — and you can change at any time.",
              },
              {
                icon: Sparkles,
                title: "Evidence-based care",
                body: "Modern approaches — CBT, EFT, trauma-informed care — adapted to your context.",
              },
            ].map((f) => (
              <div key={f.title}>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-surface-2 text-primary-deep">
                  <f.icon size={18} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA & INSIGHTS */}

      <section className="bg-[var(--ink,#2b332e)] text-background">
        <div className="container-page py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Media & insights
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif tracking-tight text-background">
                Watch &amp; reflect
              </h2>
            </div>
            <Link
              to="/media"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-accent inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              View media library <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Benefits of Therapy", desc: "Why talking helps — and what changes inside us when it does.", duration: "12:40" },
              { title: "Forgiveness", desc: "Understanding the emotional architecture of letting go.", duration: "9:08" },
              { title: "Expectations in Relationships", desc: "Where unspoken expectations come from and how to name them.", duration: "14:22" },
            ].map((v) => (
              <Link
                key={v.title}
                to="/media"
                className="group block"
              >
                <div className="relative aspect-video rounded-2xl bg-black/40 ring-1 ring-white/5 overflow-hidden grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-background/90 text-foreground group-hover:scale-110 transition-transform">
                    <Play size={20} className="ml-0.5" fill="currentColor" />
                  </span>
                  <span className="absolute bottom-3 right-3 text-[11px] font-mono px-2 py-1 rounded bg-black/70 text-background">
                    {v.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-serif text-background">{v.title}</h3>
                <p className="mt-2 text-sm text-background/60 leading-relaxed">{v.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-lift)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <span className="eyebrow">Annual programme</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                Grief Camp 2026
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A safe, supportive weekend for children and parents navigating the
                loss of a loved one. Small groups, trained counsellors, real
                healing — and this year, a dedicated parents' session.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/grief-camp" className="btn-primary">
                  See camp details
                </Link>
                <Link to="/grief-camp" className="btn-secondary">
                  Register a camper
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                14 – 16 August 2026 · Mega deal price ends April 30
              </p>
            </div>
            <div className="relative min-h-[280px] lg:min-h-0">
              <img
                src={griefCamp}
                alt="Children playing at a sunlit forest camp"
                loading="lazy"
                width={1600}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* READ & RECOVER — blogs */}
      <section className="bg-background">
        <div className="container-page py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Blogs
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif tracking-tight text-foreground">
                Read &amp; recover
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-deep inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              All blogs <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Therapy",
                title: "What to expect from your first therapy session",
                desc: "A gentle walkthrough of what really happens in a first session — and what doesn't.",
                read: "6 min read",
              },
              {
                category: "Grief",
                title: "Supporting a grieving child: a guide for parents",
                desc: "Practical, age-appropriate ways to be with a child after loss — without rushing the healing.",
                read: "9 min read",
              },
              {
                category: "Workplace wellness",
                title: "Recognising burnout before it breaks you",
                desc: "The early signals most of us miss — and what to do once you spot them.",
                read: "7 min read",
              },
            ].map((b) => (
              <Link
                key={b.title}
                to="/blog"
                className="group card-lift block rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  {b.category}
                </span>
                <h3 className="mt-4 text-2xl font-serif text-foreground leading-snug">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
                <p className="mt-6 text-xs text-muted-foreground">{b.read}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-lift)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-foreground leading-[1.1]">
                Take the first step toward support.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
                Whether you are seeking clarity, healing, or community — we will meet you where you are.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/booking" className="btn-primary">
                  Book a Session
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Recro
                </Link>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-0">
              <img
                src={heroFamily}
                alt="A family sitting together in a bright therapy room"
                loading="lazy"
                width={1600}
                height={1100}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
