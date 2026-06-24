import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import drKarume from "@/assets/founder-portrait.jpg";
import ctaLeft from "@/assets/journey-camp.jpg";
import ctaRight from "@/assets/journey-connection.jpg";
import individualIcon from "@/assets/icons/individual-therapy.svg";
import couplesIcon from "@/assets/icons/couples-therapy.svg";
import familyIcon from "@/assets/icons/family-therapy.svg";
import groupIcon from "@/assets/icons/group-therapy.svg";
import corporateIcon from "@/assets/icons/corporate-speaking.svg";
import {
  ShieldCheck,
  BookOpen,
  UserCircle2,
  Quote,
  Heart,
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

const audiences = [
  {
    icon: individualIcon,
    title: "Individuals",
    body: "For anyone facing life challenges, stress, anxiety, grief, trauma, or seeking personal growth.",
  },
  {
    icon: couplesIcon,
    title: "Couples",
    body: "For partners who want to improve communication, rebuild trust, and strengthen their relationship.",
  },
  {
    icon: familyIcon,
    title: "Families",
    body: "For families navigating conflict, transitions, or looking to build healthier connections.",
  },
  {
    icon: groupIcon,
    title: "Groups",
    body: "For support groups, workshops, and therapeutic groups that foster healing and growth.",
  },
  {
    icon: corporateIcon,
    title: "Corporate Speaking",
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
      {/* HERO / FOUNDER SECTION */}
      <section className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-deep">
            OUR FOUNDER
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1]">
            About<br />
            <span className="text-primary-deep">Dr. Michelle Karume</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl font-serif italic text-foreground/80 leading-relaxed">
            "Dedicated to facilitating restoration through psychotherapy"
          </p>

          <div className="mt-8 space-y-5 text-[15px] text-muted-foreground leading-[1.75]">
            <p>
              When Dr. Michelle Karume moved back to Kenya from the United States of America,
              it became very clear that her expertise and passion would be vital in very diverse ways.
              Teaching, psychotherapy, training and research are ways in which she intrinsically
              shares knowledge and restores relationships.
            </p>
            <p>
              With a belief that the family unit is the training ground for life and that healing,
              restoration, professional or otherwise are the parameters for success, she is
              intentionally working with individuals, couples, families, children and organizations through
              collaborative care and program development. All of which afford her the platforms
              of doing psychotherapy in Nairobi and teaching undergraduate and Masters
              students.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] overflow-hidden bg-surface-2 flex items-center justify-center shadow-lg h-full min-h-[320px]">
          <img
            src={drKarume}
            alt="Dr. Michelle Karume"
            className="object-contain w-full h-full"
          />
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-background py-10">
        <div className="container-page">
          <div className="rounded-[2.5rem] bg-[#f2f6f3] p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <Quote
              size={64}
              className="text-[#517a61] opacity-60 shrink-0 self-start md:self-auto"
              fill="currentColor"
            />
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl text-foreground">
              I believe in the inherent strength of individuals and families.
              <br className="hidden md:block" />
              Therapy is a collaborative journey toward rediscovering that strength
              <br className="hidden md:block" />
              and creating meaningful, lasting change.
            </p>
            {/* Decorative leaf placeholder graphic */}
            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none hidden md:block">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#517a61" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
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
                  <img src={a.icon} alt={a.title} className="h-8 w-8" />
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
      <section className="bg-[#faf9f6] border-t border-border">
        <div className="container-page py-20">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mx-auto">
              Our values
            </span>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-background border border-border/50 p-8 shadow-sm transition-transform hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f2f6f3] text-[#517a61]">
                  <v.icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background pb-20 pt-10">
        <div className="container-page">
          <div className="rounded-[2rem] bg-[#e8e4db] flex flex-col md:flex-row items-center justify-between overflow-hidden relative min-h-[300px]">
            <div className="w-full md:w-1/4 h-48 md:h-full shrink-0">
              <img
                src={ctaLeft}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="text-center px-6 py-12 md:py-8 flex-1 z-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Ready to take the first step?
              </h2>
              <p className="mt-4 text-foreground/80 font-medium">
                We're here to listen and walk with you.
              </p>
              <Button asChild size="lg" className="mt-8 rounded-full bg-[#517a61] hover:bg-[#3d5c49] text-white px-8">
                <Link to="/booking" search={{ service: undefined }}>Book a Session</Link>
              </Button>
            </div>

            <div className="w-full md:w-1/4 h-48 md:h-full shrink-0">
              <img
                src={ctaRight}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}