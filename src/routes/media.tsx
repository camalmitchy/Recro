import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import drKarume from "@/assets/founder-portrait.jpg";
import ctaLeft from "@/assets/journey-camp.jpg";
import ctaRight from "@/assets/journey-connection.jpg";
import {
  User,
  Heart,
  Users,
  Users2,
  Briefcase,
  ShieldCheck,
  BookOpen,
  UserCircle2,
} from "lucide-react";

export const Route = createFileRoute("/media")({
  component: AboutPage,
});

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
      {/* HERO - DR. MICHELLE KARUME */}
      <section className="bg-surface pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
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

          {/* Right: Image */}
          <div className="rounded-[2rem] overflow-hidden bg-surface-2 flex items-center justify-center shadow-lg h-full min-h-[400px]">
            <img
              src={drKarume}
              alt="Dr. Michelle Karume"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-background border-y border-border">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center relative px-4">
            {/* Opening quote */}
            <svg className="absolute left-0 top-0 h-12 w-12 md:h-16 md:w-16 text-primary/15" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
            </svg>

            <blockquote className="relative text-xl md:text-2xl lg:text-3xl font-serif leading-[1.6] text-foreground">
              I believe in the inherent strength of individuals and families.
              Therapy is a collaborative journey toward rediscovering that strength
              and creating meaningful, lasting change.
            </blockquote>

            {/* Decorative flourish */}
            <div className="mt-10 flex justify-center">
              <svg className="h-8 w-20 text-primary/40" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 20 Q30 10, 50 20 T90 20" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="20" r="1.5" fill="currentColor" />
                <circle cx="50" cy="20" r="1.5" fill="currentColor" />
                <circle cx="90" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-background">
        <div className="container-page py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-deep">
              WHO WE WORK WITH
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-tight">
              Support for people and organisations.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {audiences.map((a) => (
              <div key={a.title} className="text-center group">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep transition-all group-hover:scale-110 group-hover:shadow-lg">
                  <a.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-deep">
              OUR VALUES
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-tight">
              What guides our work.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[2rem] bg-background border border-border p-8 text-center transition-all hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep">
                  <v.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background">
        <div className="container-page py-20 md:py-24">
          <div className="relative rounded-[2.5rem] overflow-hidden max-w-5xl mx-auto">
            {/* Background images */}
            <div className="absolute inset-0 grid grid-cols-2 gap-1 opacity-10">
              <img src={ctaLeft} alt="" className="h-full w-full object-cover" />
              <img src={ctaRight} alt="" className="h-full w-full object-cover" />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/98 to-accent/5"></div>

            {/* Content */}
            <div className="relative text-center px-8 py-20 md:py-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-tight text-foreground">
                Ready to take the first step?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-md mx-auto">
                We're here to listen and walk with you.
              </p>
              <Button asChild size="lg" className="mt-8 rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl">
                <Link to="/booking" search={{ service: undefined }}>Book a Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
