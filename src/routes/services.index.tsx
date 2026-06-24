import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import {
  HeartHandshake, Users, Baby, Briefcase, Brain, Sparkles, ArrowRight,
} from "lucide-react";

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
  { key: "individual", icon: HeartHandshake, title: "Individual therapy", body: "Personalised psychotherapy for anxiety, depression, trauma, identity and life transitions." },
  { key: "couples", icon: Users, title: "Couples counselling", body: "Communication, trust repair, intimacy and decision-making support for partners." },
  { key: "family", icon: Users, title: "Family therapy", body: "Whole-family sessions to navigate conflict, transitions, blended-family dynamics and more." },
  { key: "children", icon: Baby, title: "Children & adolescents", body: "Play-based and age-appropriate therapy for emotional and behavioral concerns." },
  { key: "group", icon: Brain, title: "Group therapy", body: "Themed therapeutic groups: grief, parenting, anxiety, divorce recovery and growth." },
  { key: "corporate", icon: Briefcase, title: "Corporate wellness", body: "EAPs, workshops, manager debriefs and team check-ins for healthy organizations." },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Care that meets you where you are"
        description="From a first individual session to long-term family work and organisational wellness — we build the right journey with you."
      />

      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services/$slug"
              params={{ slug: s.key }}
              preload="intent"
              className="card-lift rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] block group"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
                <s.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-[2rem] border border-border bg-primary-soft p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="eyebrow"><Sparkles size={12} /> Not sure where to start?</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">Tell us a little, we'll guide the rest.</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">A short intake call helps match you with the right therapist and approach.</p>
          </div>
          <Link to="/contact" preload="intent" className="btn-primary">Talk to us</Link>
        </div>
      </section>
    </SiteShell>
  );
}
