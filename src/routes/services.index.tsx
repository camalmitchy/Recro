import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowRight } from "lucide-react";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import therapySession from "@/assets/therapy-session.jpg";
import individualTherapyIcon from "@/assets/icons/individual-therapy.svg";
import familyTherapyIcon from "@/assets/icons/family-therapy.svg";
import couplesTherapyIcon from "@/assets/icons/couples-therapy.svg";
import groupTherapyIcon from "@/assets/icons/group-therapy.svg";
import griefCampIcon from "@/assets/icons/grief-camp.svg";
import corporateSpeakingIcon from "@/assets/icons/corporate-speaking.svg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Therapy, counselling & corporate wellness — Recro Group" },
      {
        name: "description",
        content:
          "Explore Recro Group's services: individual therapy, couples and family counselling, children's grief support, group therapy and corporate wellness programs.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "01",
    slug: "individual",
    icon: individualTherapyIcon,
    title: "Individual Therapy",
    description: "Personalised psychotherapy for anxiety, depression, trauma, identity and life transitions.",
    duration: "60 minutes",
    price: "From KES 5,000"
  },
  {
    id: "02",
    slug: "family",
    icon: familyTherapyIcon,
    title: "Family Therapy",
    description: "Whole-family sessions to navigate conflict, transitions, blended-family dynamics and more.",
    duration: "90 minutes",
    price: "From KES 8,000"
  },
  {
    id: "03",
    slug: "couples",
    icon: couplesTherapyIcon,
    title: "Couples Therapy",
    description: "Communication, trust repair, intimacy and decision-making support for partners.",
    duration: "75 minutes",
    price: "From KES 7,500"
  },
  {
    id: "04",
    slug: "group",
    icon: groupTherapyIcon,
    title: "Group Therapy",
    description: "Themed therapeutic groups: grief, parenting, anxiety, divorce recovery and growth.",
    duration: "90 minutes\n8 weeks",
    price: "From KES 3,500\nper session"
  },
  {
    id: "05",
    slug: "children",
    icon: griefCampIcon,
    title: "Grief Camps",
    description: "Structured healing retreats for children and families navigating loss and bereavement.",
    duration: "3-5 day\nprogram",
    price: "From KES 12,000"
  },
  {
    id: "06",
    slug: "corporate",
    icon: corporateSpeakingIcon,
    title: "Corporate Speaking",
    description: "EAPs, workshops, manager debriefs and team check-ins for healthy organizations.",
    duration: "60–180 minutes",
    price: "On request"
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      {/* Hero Section - Section 0 */}
      <ScrollRevealSection index={0}>
        <section className="relative bg-surface overflow-hidden h-[400px] lg:h-[450px]">
          {/* Full-width background image */}
          <img
            src={therapySession}
            alt="Therapy session"
            className="absolute inset-0 h-full w-full object-cover"
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
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Talk to us <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/booking"
                    search={{ service: undefined }}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-6 py-2.5 rounded-xl font-semibold transition inline-flex items-center gap-2"
                  >
                    Book a session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Services Grid - Section 1 */}
      <ScrollRevealSection index={1}>
        <section className="container-page py-16 lg:py-20 bg-background">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-[2rem] bg-white border border-border/40 p-7 hover:shadow-md transition-all relative overflow-hidden group"
              >
                {/* Service Number */}
                <div className="absolute top-6 right-6 text-[56px] font-light text-muted-foreground/[0.08] leading-none tracking-tight">
                  {service.id}
                </div>

                {/* Icon */}
                <div className="relative z-10 h-12 w-12 rounded-full bg-muted-foreground/[0.15] flex items-center justify-center mb-5">
                  <img src={service.icon} alt={`${service.title} icon`} className="h-6 w-6 object-contain" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-serif text-foreground mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Meta Info - Clean horizontal line separator */}
                  <div className="border-t border-border/50 pt-4 mb-5">
                    <div className="flex items-start justify-between text-sm">
                      <div>
                        <p className="uppercase tracking-[0.15em] text-muted-foreground/70 text-[10px] mb-1.5">
                          Duration
                        </p>
                        <p className="text-foreground font-normal text-[13px] whitespace-pre-line">
                          {service.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="uppercase tracking-[0.15em] text-muted-foreground/70 text-[10px] mb-1.5">
                          From
                        </p>
                        <p className="text-foreground font-normal text-[13px] whitespace-pre-line">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.12em]"
                  >
                    View Service <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollRevealSection>

      {/* TESTIMONIAL - Section 2 */}
      <ScrollRevealSection index={2}>
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
      </ScrollRevealSection>

      {/* CTA Section - Section 3 */}
      <ScrollRevealSection index={3}>
        <section className="container-page pb-20 bg-background">
          <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-primary-deep mb-4">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A short intake call helps match you with the right therapist and approach. We're here to guide you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Talk to us
              </Link>
              <Link to="/booking" search={{ service: undefined }} className="btn-secondary">
                Book a session
              </Link>
            </div>
          </div>
        </section>
      </ScrollRevealSection>
    </SiteShell>
  );
}
