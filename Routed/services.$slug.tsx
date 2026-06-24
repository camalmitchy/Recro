import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import {
  HeartHandshake, Users, Baby, Briefcase, Brain, ArrowLeft, ArrowRight, Check,
  Lock, ShieldCheck, UserRound, HeartPulse, Clock, Tag, CalendarDays, Calendar,
} from "lucide-react";
import type { ComponentType } from "react";

import individualImg from "@/assets/service-individual.jpg";
import couplesImg from "@/assets/service-couples.jpg";
import familyImg from "@/assets/service-family.jpg";
import childrenImg from "@/assets/service-children.jpg";
import groupImg from "@/assets/service-group.jpg";
import corporateImg from "@/assets/service-corporate.jpg";
import glanceImg from "@/assets/service-glance.jpg";
import readingWellbeing from "@/assets/reading-wellbeing.jpg";
import readingMental from "@/assets/reading-mental-health.jpg";
import readingGuide from "@/assets/reading-guide.jpg";
import ctaImg from "@/assets/service-cta.jpg";

type IconType = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

type Service = {
  key: string;
  eyebrow: string;
  title: string;
  titleItalic: string;
  titleRest: string;
  ctaLabel: string;
  icon: IconType;
  heroImage: string;
  intro: string;
  whoFor: string;
  concerns: string[];
  expect: string[];
  benefits: string[];
  features: { icon: IconType; title: string; body: string }[];
  duration: string;
  pricing: string;
  mode: string;
  availability: string;
  booking: string;
  reading: { category: string; title: string; image: string }[];
};

const DEFAULT_FEATURES = [
  { icon: Lock, title: "Confidential & private", body: "Your story stays with us." },
  { icon: ShieldCheck, title: "Evidence-based care", body: "Therapies proven to help." },
  { icon: UserRound, title: "Tailored to you", body: "Your goals, your pace." },
  { icon: HeartPulse, title: "Compassionate support", body: "You don't have to do this alone." },
];

const DEFAULT_READING = [
  { category: "Wellbeing", title: "What to expect in your first therapy session", image: readingWellbeing },
  { category: "Mental Health", title: "How therapy helps you heal and grow", image: readingMental },
  { category: "Guide", title: "Starting therapy: A step-by-step guide", image: readingGuide },
];

const SERVICES: Record<string, Service> = {
  individual: {
    key: "individual",
    eyebrow: "Therapeutic Care",
    title: "Individual Therapy",
    titleItalic: "Individual",
    titleRest: "Therapy",
    ctaLabel: "Book an individual session",
    icon: HeartHandshake,
    heroImage: individualImg,
    intro: "A confidential space to slow down, reflect, and work through what you're carrying — with a therapist who truly listens and walks alongside you.",
    whoFor: "Adults and adolescents navigating personal challenges, transitions, or emotional pain.",
    concerns: ["Anxiety & Stress", "Depression & Low Mood", "Trauma & PTSD", "Self-Esteem", "Life Transitions", "Burnout", "Grief"],
    expect: [
      "A confidential first conversation to understand what brings you here.",
      "Collaborative goal-setting at your own pace.",
      "Evidence-based therapeutic approaches tailored to you.",
      "Ongoing review of what is helping and adjustments as needed.",
    ],
    benefits: ["Better understanding of yourself", "Healthier relationships", "Emotional resilience", "Improved coping skills", "Greater clarity and purpose"],
    features: DEFAULT_FEATURES,
    duration: "60 minutes",
    pricing: "From KES 5,000",
    mode: "In-person · Online",
    availability: "Same-week",
    booking: "Within 1 week",
    reading: DEFAULT_READING,
  },
  couples: {
    key: "couples",
    eyebrow: "Relational Care",
    title: "Couples Counselling",
    titleItalic: "Couples",
    titleRest: "Counselling",
    ctaLabel: "Book a couples session",
    icon: Users,
    heroImage: couplesImg,
    intro: "A structured, supportive space for partners to rebuild communication, repair trust, and make decisions together with clarity rather than reactivity.",
    whoFor: "Partners at any stage — dating, engaged, married, separating — who want to understand and be understood.",
    concerns: ["Communication", "Trust & Infidelity", "Intimacy", "Recurring Conflict", "Life Transitions", "Co-parenting"],
    expect: [
      "A joint intake to map what's working and what isn't.",
      "Individual check-ins so both voices are heard.",
      "Skill-building for hard conversations.",
      "Clear agreements you can carry home.",
    ],
    benefits: ["Stronger communication", "Renewed trust", "Healthier conflict", "Shared decision-making", "Deeper intimacy"],
    features: DEFAULT_FEATURES,
    duration: "75 minutes",
    pricing: "From KES 8,000",
    mode: "In-person · Online",
    availability: "Within 1 week",
    booking: "Within 1 week",
    reading: DEFAULT_READING,
  },
  family: {
    key: "family",
    eyebrow: "Systemic Care",
    title: "Family Therapy",
    titleItalic: "Family",
    titleRest: "Therapy",
    ctaLabel: "Book a family session",
    icon: Users,
    heroImage: familyImg,
    intro: "Therapy with the whole family system — gently rewriting the patterns, roles and stories that shape how you connect.",
    whoFor: "Families navigating conflict, transitions, blended dynamics, illness, loss or relocation.",
    concerns: ["Conflict", "Parent-Teen Tension", "Blended Families", "Grief & Loss", "Co-parenting", "Communication"],
    expect: [
      "An intake with parents or guardians first.",
      "Sessions with the full family system.",
      "Practical tools you can use at home.",
      "Periodic reviews to mark progress together.",
    ],
    benefits: ["Healthier family patterns", "Stronger communication", "Calmer home dynamics", "Better repair after conflict", "Shared understanding"],
    features: DEFAULT_FEATURES,
    duration: "60 – 90 minutes",
    pricing: "From KES 9,000",
    mode: "In-person · Online",
    availability: "Within 1 week",
    booking: "Within 1 week",
    reading: DEFAULT_READING,
  },
  children: {
    key: "children",
    eyebrow: "Young Minds",
    title: "Children & Adolescents",
    titleItalic: "Children",
    titleRest: "& Adolescents",
    ctaLabel: "Book a session for your child",
    icon: Baby,
    heroImage: childrenImg,
    intro: "Therapy for children and teens that meets them where they are — through play, art, storytelling and conversation, with parents kept close.",
    whoFor: "Children (5–12) and adolescents navigating emotional, behavioural or developmental concerns.",
    concerns: ["Anxiety & Worry", "Big Feelings", "School Struggles", "Friendships", "Grief & Loss", "Self-Esteem"],
    expect: [
      "A parent / guardian consultation first.",
      "Weekly sessions with your child or teen.",
      "Regular parent feedback sessions.",
      "A shared plan you can support at home.",
    ],
    benefits: ["Calmer emotional regulation", "Stronger self-esteem", "Better focus at school", "Healthier friendships", "A supported family"],
    features: DEFAULT_FEATURES,
    duration: "45 minutes",
    pricing: "From KES 4,500",
    mode: "In-person",
    availability: "Same-week",
    booking: "Within 1 week",
    reading: DEFAULT_READING,
  },
  group: {
    key: "group",
    eyebrow: "Group Care",
    title: "Group Therapy",
    titleItalic: "Group",
    titleRest: "Therapy",
    ctaLabel: "Join a therapy group",
    icon: Brain,
    heroImage: groupImg,
    intro: "Themed therapeutic groups bring together people walking similar paths — in a small, closed circle with a trained facilitator.",
    whoFor: "Adults ready to learn from — and with — others around shared themes.",
    concerns: ["Grief & Loss", "Parenting", "Anxiety", "Divorce Recovery", "Personal Growth", "Burnout"],
    expect: [
      "A brief screening conversation first.",
      "6 – 10 weekly sessions in a closed group.",
      "A confidential, facilitated container.",
      "Skills you take with you long after the group ends.",
    ],
    benefits: ["Shared perspective", "Lasting friendships", "Practical skills", "A sense of belonging", "Hope from others' stories"],
    features: DEFAULT_FEATURES,
    duration: "90 minutes weekly",
    pricing: "From KES 3,500 / session",
    mode: "In-person · Online",
    availability: "Cohorts quarterly",
    booking: "Next cohort soon",
    reading: DEFAULT_READING,
  },
  corporate: {
    key: "corporate",
    eyebrow: "Workplace Wellness",
    title: "Corporate Wellness",
    titleItalic: "Corporate",
    titleRest: "Wellness",
    ctaLabel: "Talk to our corporate team",
    icon: Briefcase,
    heroImage: corporateImg,
    intro: "We partner with organisations to build psychologically safe, high-performing teams — through EAPs, workshops, manager debriefs and crisis response.",
    whoFor: "HR & People teams, leaders and organisations committed to mental health at work.",
    concerns: ["Employee Assistance", "Manager Training", "Team Debriefs", "Workshops", "Crisis Response", "Wellness Strategy"],
    expect: [
      "A scoping conversation with your team.",
      "A tailored proposal and program plan.",
      "Delivery on-site, hybrid or online.",
      "Quarterly impact reporting.",
    ],
    benefits: ["Healthier teams", "Lower burnout", "Stronger leadership", "Better retention", "A culture of safety"],
    features: DEFAULT_FEATURES,
    duration: "Custom engagements",
    pricing: "On request",
    mode: "On-site · Hybrid · Online",
    availability: "Reach out anytime",
    booking: "Within 1 week",
    reading: DEFAULT_READING,
  },
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES[params.slug];
    return {
      meta: s
        ? [
            { title: `${s.title} | Recro Group` },
            { name: "description", content: s.intro.slice(0, 155) },
            { property: "og:title", content: `${s.title} | Recro Group` },
            { property: "og:description", content: s.intro.slice(0, 155) },
          ]
        : [{ title: "Service | Recro Group" }],
    };
  },
  loader: ({ params }) => {
    if (!SERVICES[params.slug]) throw notFound();
    return { slug: params.slug };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-serif text-primary-deep">Service not found</h1>
        <Link to="/services" className="btn-primary mt-6 inline-flex">Back to services</Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ error }) => (
    <SiteShell>
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl font-serif text-primary-deep">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </SiteShell>
  ),
});

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const service = SERVICES[slug];

  return (
    <SiteShell>
      {/* ───────── HERO ───────── */}
      <section className="bg-surface">
        <div className="container-page pt-10 lg:pt-14 pb-16 lg:pb-24">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-primary-deep/70 hover:text-primary-deep transition-colors"
          >
            <ArrowLeft size={16} /> All services
          </Link>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — copy */}
            <div className="lg:col-span-5 pt-4 lg:pt-10">
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-primary-deep/60 mb-6">
                {service.eyebrow}
              </p>
              <h1 className="font-serif text-primary-deep leading-[0.95] tracking-tight text-5xl md:text-6xl lg:text-7xl">
                {service.titleItalic}
                <span className="block">{service.titleRest}</span>
              </h1>
              <p className="mt-8 text-base md:text-lg text-foreground/75 leading-relaxed max-w-md">
                {service.intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/booking" search={{ service: service.key }} className="btn-primary rounded-full px-7">
                  {service.ctaLabel}
                </Link>
                <Link to="/contact" className="btn-secondary rounded-full px-7">
                  Ask a question
                </Link>
              </div>
            </div>

            {/* RIGHT — image + floating features card */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[5/4] rounded-3xl overflow-hidden bg-primary-soft/40 shadow-[var(--shadow-lift)]">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* features card */}
              <div className="lg:absolute lg:-bottom-10 lg:-right-4 lg:max-w-[320px] mt-6 lg:mt-0 bg-card/95 backdrop-blur-sm rounded-2xl shadow-[var(--shadow-lift)] border border-border p-6 lg:p-7">
                <ul className="space-y-5">
                  {service.features.map((f) => {
                    const FIcon = f.icon;
                    return (
                      <li key={f.title} className="flex gap-4">
                        <span className="shrink-0 h-9 w-9 rounded-xl bg-primary-soft grid place-items-center text-primary-deep">
                          <FIcon size={18} strokeWidth={1.6} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-primary-deep leading-tight">{f.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground leading-snug">{f.body}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── WHO / WHAT TO EXPECT ───────── */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Who & focus */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-deep">Who this helps</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed max-w-md">
              {service.whoFor}
            </p>
            <div className="mt-8 h-px w-16 bg-border" />

            <h3 className="mt-12 font-serif text-2xl md:text-3xl text-primary-deep">Focus areas</h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {service.concerns.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full bg-primary-soft/60 text-xs text-primary-deep border border-transparent hover:border-primary-deep/20 transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* What to expect */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-deep">What to expect</h2>
            <ol className="mt-8 space-y-7">
              {service.expect.map((step, i) => (
                <li key={step} className="flex gap-6 items-start">
                  <span className="font-serif italic text-3xl md:text-4xl text-primary-deep/30 leading-none shrink-0 w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground/80 leading-relaxed pt-1.5 max-w-md">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── AT A GLANCE (band) ───────── */}
      <section className="bg-primary-soft/50">
        <div className="container-page py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-deep">At a glance</h2>
              <dl className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  { icon: Clock, k: "Duration", v: service.duration },
                  { icon: Tag, k: "Pricing", v: service.pricing },
                  { icon: UserRound, k: "Mode", v: service.mode },
                  { icon: CalendarDays, k: "Availability", v: service.availability },
                  { icon: Calendar, k: "Booking", v: service.booking },
                ].map(({ icon: GIcon, k, v }) => (
                  <div key={k}>
                    <GIcon size={22} strokeWidth={1.5} className="text-primary-deep/70" />
                    <dt className="mt-3 text-xs text-muted-foreground">{k}</dt>
                    <dd className="mt-1 text-sm font-semibold text-primary-deep">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-lift)]">
                <img src={glanceImg} alt="A calm therapy space" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── BENEFITS + RELATED READING ───────── */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Benefits card */}
          <div className="lg:col-span-4">
            <div className="bg-surface rounded-2xl p-8 lg:p-10 border border-border h-full">
              <h3 className="font-serif text-2xl md:text-3xl text-primary-deep">Benefits of therapy</h3>
              <ul className="mt-8 space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-primary-soft grid place-items-center text-primary-deep shrink-0">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related reading */}
          <div className="lg:col-span-8">
            <h3 className="font-serif text-2xl md:text-3xl text-primary-deep">Related reading &amp; resources</h3>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {service.reading.map((r) => (
                <Link key={r.title} to="/blog" className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-lift)] transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={r.image} alt={r.title} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary-deep/60">
                      {r.category}
                    </p>
                    <h4 className="mt-2 font-serif text-lg text-primary-deep leading-snug">{r.title}</h4>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-deep group-hover:gap-2.5 transition-all">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA BANNER ───────── */}
      <section className="container-page pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-primary-soft/60 px-6 py-16 lg:py-20">
          <img
            src={ctaImg}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="relative text-center max-w-xl mx-auto">
            <div className="mx-auto h-10 w-10 rounded-full bg-card grid place-items-center shadow-sm">
              <HeartHandshake size={20} strokeWidth={1.5} className="text-primary-deep" />
            </div>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-primary-deep">
              Ready to begin the conversation?
            </h2>
            <p className="mt-4 text-foreground/75">
              Taking the first step is often the hardest. We're here whenever you're ready.
            </p>
            <Link
              to="/booking"
              search={{ service: service.key }}
              className="btn-primary mt-8 inline-flex rounded-full px-8"
            >
              {service.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
