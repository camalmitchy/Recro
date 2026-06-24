import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import room from "@/assets/about-hero-room.jpg";
import ctaLeft from "@/assets/about-cta-left.jpg";
import ctaRight from "@/assets/about-cta-right.jpg";
import {
  User,
  Brain,
  Users,
  Sun,
  Heart,
  Users2,
  Briefcase,
  ShieldCheck,
  BookOpen,
  UserCircle2,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Recro Group | Behavioral health for Kenyan families" },
      {
        name: "description",
        content:
          "Recro Group is a Behavioral Health Organization using psychotherapy to walk alongside individuals, families, couples, groups and organizations.",
      },
      { property: "og:title", content: "About Recro Group" },
      {
        property: "og:description",
        content:
          "A holistic, systemic approach to healing for individuals, families, couples, groups and organisations.",
      },
    ],
  }),
  component: AboutPage,
});

const approach = [
  {
    icon: User,
    title: "Biological",
    body: "Understanding the physical aspects of mental health, including genetics, sleep, and physical well-being.",
  },
  {
    icon: Brain,
    title: "Psychological",
    body: "Exploring thoughts, emotions, coping mechanisms, and personal history to foster resilience.",
  },
  {
    icon: Users,
    title: "Social",
    body: "Examining relationships, family dynamics, cultural background, and community support systems.",
  },
  {
    icon: Sun,
    title: "Spiritual",
    body: "Honoring personal beliefs, values, and sense of meaning and purpose in life.",
  },
];

const audiences = [
  {
    icon: User,
    title: "Individuals",
    body: "For anyone facing life challenges, stress, anxiety, grief, trauma, or seeking personal growth.",
  },
  {
    icon: Heart,
    title: "Couples",
    body: "For partners who want to improve communication, rebuild trust, and strengthen their relationship.",
  },
  {
    icon: Users,
    title: "Families",
    body: "For families navigating conflict, transitions, or looking to build healthier connections.",
  },
  {
    icon: Users2,
    title: "Groups",
    body: "For support groups, workshops, and therapeutic groups that foster healing and growth.",
  },
  {
    icon: Briefcase,
    title: "Organisations",
    body: "For companies and institutions seeking mental health support, stress management, and wellbeing solutions.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    body: "Your privacy is paramount. We maintain the highest standards of clinical confidentiality.",
  },
  {
    icon: Heart,
    title: "Open Stance",
    body: "We meet you exactly where you are. Our practice is a safe haven free from judgement.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    body: "We invest in ongoing training and evidence-based practices to serve you better.",
  },
  {
    icon: UserCircle2,
    title: "Professional & Friendly",
    body: "Reassuring, approachable, and professional — in everything we do.",
  },
];

function AboutPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="bg-surface">
        <div className="container-page py-12 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">About Recro Group</span>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Healing happens
              <br />
              in <em className="font-serif italic text-primary-deep">relationship</em>.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Recro (rec·ro) Group Limited is a Behavioral Health Organization that
              uses psychotherapy to walk alongside individuals, families, couples,
              groups and organizations dealing with relational challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/booking">Book a Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="aspect-[5/4] rounded-[2rem] overflow-hidden ring-1 ring-border shadow-[var(--shadow-lift)]">
            <img
              src={room}
              alt="Calming therapy room with armchair and natural light"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-background border-y border-border">
        <div className="container-page py-20 grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <div>
            <span className="eyebrow">Our approach</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
              A holistic, systemic approach to healing.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We utilize a comprehensive biopsychosocial-spiritual framework. True
              healing requires understanding the whole person.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our work is to help people slow down, make sense of their experiences,
              build skills where needed, and restore a sense of agency.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {approach.map((a) => (
              <div key={a.title} className="text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary-deep">
                  <a.icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-background">
        <div className="container-page py-20 text-center">
          <span className="eyebrow mx-auto">Who we work with</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
            Support for people and organisations.
          </h2>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {audiences.map((a) => (
              <div key={a.title}>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary-deep">
                  <a.icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-20">
          <div className="text-center">
            <span className="eyebrow mx-auto">Our values</span>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-background border border-border p-7 card-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
                  <v.icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-lg font-serif">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-surface">
        <div className="container-page py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 items-center">
          <div className="hidden md:block aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src={ctaLeft}
              alt=""
              width={768}
              height={512}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to take the first step?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We're here to listen and walk with you.
            </p>
            <Button asChild size="lg" className="mt-6 rounded-full">
              <Link to="/booking">Book a Session</Link>
            </Button>
          </div>
          <div className="hidden md:block aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src={ctaRight}
              alt=""
              width={768}
              height={512}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
