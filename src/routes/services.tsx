import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowRight } from "lucide-react";
import therapySession from "@/assets/therapy-session.jpg";
import individualIcon from "@/assets/icons/individual-therapy.svg";
import familyIcon from "@/assets/icons/family-therapy.svg";
import couplesIcon from "@/assets/icons/couples-therapy.svg";
import groupIcon from "@/assets/icons/group-therapy.svg";
import griefCampIcon from "@/assets/icons/grief-camp.svg";
import corporateIcon from "@/assets/icons/corporate-speaking.svg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Therapy, counselling & corporate wellness — Recro Group" },
      {
        name: "description",
        content:
          "Explore Recro Group's services: individual therapy, couples and family counselling, group therapy, grief camps and corporate wellness programs.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "01",
    slug: "individual",
    icon: individualIcon,
    title: "Individual Therapy",
    description: "Confidential one-to-one sessions for personal growth, anxiety, depression, and trauma recovery.",
    duration: "60 minutes",
    price: "From KES 5,000",
  },
  {
    id: "02",
    slug: "family",
    icon: familyIcon,
    title: "Family Therapy",
    description: "Strengthen bonds and resolve conflict through compassionate clinical guidance.",
    duration: "90 minutes",
    price: "From KES 8,000",
  },
  {
    id: "03",
    slug: "couples",
    icon: couplesIcon,
    title: "Couples Counselling",
    description: "Rebuild trust, intimacy, and partnership for couples navigating transition or rupture.",
    duration: "75 minutes",
    price: "From KES 7,500",
  },
  {
    id: "04",
    slug: "group",
    icon: groupIcon,
    title: "Group Therapy",
    description: "Healing through shared experience in small, facilitated, confidential groups.",
    duration: "90 minutes · 8 weeks",
    price: "From KES 3,500 / session",
  },
  {
    id: "05",
    slug: "grief",
    icon: griefCampIcon,
    title: "Grief Camp",
    description: "Therapy for children and teens through play, art, storytelling and conversation.",
    duration: "45 minutes",
    price: "From KES 4,500",
  },
  {
    id: "06",
    slug: "corporate",
    icon: corporateIcon,
    title: "Corporate Wellness",
    description: "Workplace mental-health workshops, keynotes, and bespoke wellness programmes.",
    duration: "60–180 minutes",
    price: "On request",
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative bg-surface overflow-hidden h-[400px] lg:h-[450px]">
        {/* Full-width background image */}
        <img
          src={therapySession}
          alt="Therapy session"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1080}
        />

        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-[1]"></div>

        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="container-page h-full flex items-center py-16 lg:py-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white">
                Our Services
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg">
                Care that meets you<br />where you are
              </h1>
              <p className="mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow">
                From individual sessions to family work and organisational wellness — we build the right journey with you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" preload="intent" className="btn-primary inline-flex items-center gap-2">
                  Talk to us <ArrowRight size={16} />
                </Link>
                <Link to="/booking" search={{ service: undefined }} preload="intent" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-6 py-2.5 rounded-xl font-semibold transition inline-flex items-center gap-2">
                  Book a session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-[2rem] bg-white border border-border/40 p-7 hover:shadow-md transition-all relative overflow-hidden group"
            >
              {/* Service Number */}
              <div className="absolute top-6 right-6 text-[56px] font-light text-muted/8 leading-none tracking-tight">
                {service.id}
              </div>

              {/* Icon */}
              <div className="relative z-10 h-12 w-12 rounded-full bg-muted/30 flex items-center justify-center mb-5">
                <img src={service.icon} alt={`${service.title} icon`} className="h-6 w-6 object-contain" loading="lazy" width={48} height={48} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-serif text-foreground mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Meta Info */}
                <div className="border-t border-border/50 pt-4 mb-5">
                  <div className="flex items-start justify-between text-sm">
                    <div>
                      <p className="uppercase tracking-[0.15em] text-muted-foreground/70 text-[10px] mb-1.5">Duration</p>
                      <p className="text-foreground font-normal text-[13px] whitespace-pre-line">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="uppercase tracking-[0.15em] text-muted-foreground/70 text-[10px] mb-1.5">From</p>
                      <p className="text-foreground font-normal text-[13px] whitespace-pre-line">{service.price}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.12em]"
                >
                  View Service <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-card border border-border p-8 lg:p-10 flex flex-col items-center text-center shadow-[var(--shadow-soft)]">
              <div className="text-5xl text-primary/20 font-serif mb-6">"</div>
              <blockquote className="text-lg md:text-xl font-serif text-foreground leading-relaxed">
                "I felt heard from the very first session. Recro gave me language for things I had carried silently for years."
              </blockquote>
              <div className="mt-6 flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">A. M.</p>
              <p className="text-xs text-muted-foreground">Individual therapy client</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-page pb-20">
        <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-deep mb-4">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A short intake call helps match you with the right therapist and approach. We're here to guide you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" preload="intent" className="btn-primary">
              Talk to us
            </Link>
            <Link to="/booking" search={{ service: undefined }} preload="intent" className="btn-secondary">
              Book a session
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}