import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartHandshake,
  Users,
  Baby,
  Briefcase,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Play,
  Maximize2,
} from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import heroFamily from "@/assets/landing.png";
import therapy from "@/assets/therapy-session.jpg";
import griefCamp from "@/assets/grief-camp.jpg";
import individualIcon from "@/assets/icons/individual-therapy.svg";
import couplesIcon from "@/assets/icons/couples-therapy.svg";
import familyIcon from "@/assets/icons/family-therapy.svg";
import groupIcon from "@/assets/icons/group-therapy.svg";
import griefIcon from "@/assets/icons/grief-camp.svg";
import corporateIcon from "@/assets/icons/corporate-speaking.svg";

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
    icon: individualIcon,
    title: "Individual therapy",
    body: "One-on-one psychotherapy for anxiety, depression, life transitions and personal growth.",
    accent: "primary",
    serviceKey: "individual-therapy",
  },
  {
    icon: familyIcon,
    title: "Family Therapy",
    body: "Strengthen bonds and resolve conflict through compassionate clinical guidance.",
    accent: "teal",
    serviceKey: "family-therapy",
  },
  {
    icon: couplesIcon,
    title: "Couples Therapy",
    body: "Rebuild trust, intimacy, and partnership for couples navigating transition or rupture.",
    accent: "lavender",
    serviceKey: "couples-therapy",
  },
  {
    icon: groupIcon,
    title: "Group Therapy",
    body: "Healing through shared experience in small, facilitated, confidential groups.",
    accent: "coral",
    serviceKey: "group-therapy",
  },
  {
    icon: griefIcon,
    title: "Grief Camp",
    body: "Safe, play-based support for children processing loss, change and big emotions.",
    accent: "primary",
    serviceKey: "grief-camps",
  },
  {
    icon: corporateIcon,
    title: "Corporate Speaking",
    body: "Workshops, EAP programs and team check-ins that protect your people's wellbeing.",
    accent: "teal",
    serviceKey: "corporate-speaking",
  },
];

const ServiceIcon = ({ src }: { src: string }) => {
  return <img src={src} alt="" className="w-full h-full" />;
};

function HomeVideoCard({ video }: { video: { title: string; desc: string; duration: string; videoId: string; thumbnail: string } }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const openFullscreen = () => {
    window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank');
  };

  return (
    <div className="group block">
      <div className="relative aspect-video rounded-2xl bg-black/40 ring-1 ring-white/5 overflow-hidden">
        {!isPlaying ? (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <button
              onClick={handlePlay}
              className="absolute inset-0 grid place-items-center"
              aria-label={`Play ${video.title}`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-background/90 text-foreground group-hover:scale-110 transition-transform">
                <Play size={20} className="ml-0.5" fill="currentColor" />
              </span>
            </button>
            <span className="absolute bottom-3 right-3 text-[11px] font-mono px-2 py-1 rounded bg-black/70 text-background">
              {video.duration}
            </span>
          </>
        ) : (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <button
              onClick={openFullscreen}
              className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors"
              aria-label="Open fullscreen"
            >
              <Maximize2 size={16} />
            </button>
          </>
        )}
      </div>
      <h3 className="mt-5 text-xl font-serif text-background">{video.title}</h3>
      <p className="mt-2 text-sm text-background/60 leading-relaxed">{video.desc}</p>
    </div>
  );
}

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        {/* Full-width background image */}
        <img
          src={heroFamily}
          alt="A diverse family sitting together in a bright sunlit therapy room"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark gradient overlay for text visibility - stronger on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 z-[1]"></div>

        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="container-page h-full flex items-end pb-16 md:pb-20 pt-12 md:pt-20">
            <div className="max-w-2xl pt-50">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] drop-shadow-lg">
                Walking with you, step by step.{" "}
              </h1>
              <p className="mt-6 text-white/95 leading-relaxed text-base lg:text-lg max-w-xl drop-shadow">
                A compassionate space for healing, growth, and emotional wellness — for individuals, couples, families, and organisations navigating life's most difficult moments.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="/booking" className="btn-primary">
                  Book a session <ArrowRight size={16} />
                </a>
                <Link to="/services" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-6 py-2.5 rounded-xl font-semibold transition inline-flex items-center gap-2">
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
                    <dt className="text-3xl font-semibold text-white drop-shadow">{s.k}</dt>
                    <dd className="mt-1 text-xs text-white/80">{s.v}</dd>
                  </div>
                ))}
              </dl>
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

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group card-lift relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="w-20 h-20">
                <ServiceIcon src={s.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.serviceKey }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep group-hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={13} />
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link
                  to="/booking"
                  search={{ service: s.serviceKey }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep group-hover:gap-2.5 transition-all"
                >
                  Book this <ArrowRight size={13} />
                </Link>
              </div>
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
              A wholistic view of what it means to be well.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our distinguishing touch is reassuring and friendly — yet always holds a professional demeanor.
              Every session
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
                    <svg width="10" height="10" viewBox="0 0 12 12"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2 6.5L5 9.5L10 3" /></svg>
                  </span>
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* <p className="mt-4 text-muted-foreground leading-relaxed">
        A safe, supportive weekend for children and parents navigating the
        loss of a loved one. Small groups, trained counsellors, real
        healing — and this year, a dedicated parents' session.
      </p> */}

      {/* GRIEF CAMP CTA */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#3F5B43] shadow-[var(--shadow-lift)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 text-primary-foreground">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-4">
                Signature Programme
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                The Recro Grief Camp
              </h2>
              <p className="mt-4 text-white/85 leading-relaxed max-w-md">
                A child-safe, family-friendly therapeutic camp for adolescents
                navigating the loss of a parent, sibling, or close caregiver.
                Designed and led by licensed clinicians.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/grief-camp" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#3F5B43] font-semibold text-sm hover:bg-white/90 transition">
                  Apply for Grief Camp
                </Link>
                <Link to="/grief-camp" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:border-white/50 transition">
                  Sponsor a Child
                </Link>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-0">
              <img
                src={griefCamp}
                alt="Children in a therapeutic camp setting"
                loading="lazy"
                width={1600}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
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
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Support type
                </span>
                <select
                  name="service"
                  defaultValue="individual"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground appearance-none cursor-pointer hover:border-primary transition-colors"
                >
                  <option value="individual">Individual Therapy</option>
                  <option value="couples">Couples &amp; Families</option>
                  <option value="children">Children &amp; Grief</option>
                  <option value="corporate">Corporate Wellness</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    Preferred date
                  </span>
                  <input
                    type="date"
                    name="date"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground hover:border-primary transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    Mode
                  </span>
                  <select
                    name="mode"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground appearance-none cursor-pointer hover:border-primary transition-colors"
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
              {
                title: "Benefits of Therapy",
                desc: "Why talking helps — and what changes inside us when it does.",
                duration: "12:40",
                videoId: "yrtRlE6HlUU",
                thumbnail: "https://i.ytimg.com/vi/yrtRlE6HlUU/hqdefault.jpg"
              },
              {
                title: "Forgiveness",
                desc: "Understanding the emotional architecture of letting go.",
                duration: "9:08",
                videoId: "f3omumMGIw0",
                thumbnail: "https://i.ytimg.com/vi/f3omumMGIw0/hqdefault.jpg"
              },
              {
                title: "Expectations in Relationships",
                desc: "Where unspoken expectations come from and how to name them.",
                duration: "14:22",
                videoId: "6yd3gLyuR_0",
                thumbnail: "https://i.ytimg.com/vi/6yd3gLyuR_0/hqdefault.jpg"
              },
            ].map((v) => (
              <HomeVideoCard key={v.title} video={v} />
            ))}
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
        <div className="relative overflow-hidden rounded-[2rem] bg-surface py-16 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              Restoration begins with a conversation.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you’re navigating personal challenges or arranging support for your team,
              Recro Group is here. Friendly, professional, and entirely confidential.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="/booking" className="btn-primary">
                Book a Session
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact Recro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
