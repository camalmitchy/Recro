import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import griefCamp from "@/assets/grief-cam.png";
import journeyCamp from "@/assets/journey-camp.jpg";
import journeyNature from "@/assets/journey-nature.jpg";
import journeyGroup from "@/assets/journey-group.jpg";
import journeyConnection from "@/assets/journey-connection.jpg";
import {
  Calendar,
  Wallet,
  Users,
  UserRound,
  CheckCircle2,
  Tent,
  Trees,
  UsersRound,
  Heart,
  HandHeart,
  Download,
  ArrowRight,
  Landmark,
} from "lucide-react";

export const Route = createFileRoute("/grief-camp")({
  head: () => ({
    meta: [
      { title: "Grief Camp 2026 | Recro Group" },
      { name: "description", content: "retreat for adolescents (10–16) who have lost a parent or sibling. Recro Grief Camp 14–16 August 2026." },
      { property: "og:title", content: "Recro Grief Camp 2026" },
      { property: "og:description", content: "A safe place to grieve out loud — 14–16 August 2026." },
    ],
  }),
  component: CampPage,
});

const camperPricing = [
  { label: "Mega deal", deadline: "by April 30", price: "KES 11,000" },
  { label: "Early price", deadline: "after May 1", price: "KES 13,000" },
  { label: "Regular price", deadline: "after June 30", price: "KES 15,000" },
];

const parentPricing = [
  { label: "Mega deal", deadline: "by April 30", price: "KES 2,500" },
  { label: "Early price", deadline: "after May 1", price: "KES 4,500" },
  { label: "Regular price", deadline: "after June 30", price: "KES 6,500" },
];

const journeyPillars = [
  { title: "Camp Activity", icon: Tent, tone: "bg-muted/60 text-primary-deep", image: journeyCamp },
  { title: "Nature", icon: Trees, tone: "bg-[hsl(220_60%_96%)] text-[hsl(220_55%_45%)]", image: journeyNature },
  { title: "Group Support", icon: UsersRound, tone: "bg-[hsl(165_45%_94%)] text-[hsl(165_45%_35%)]", image: journeyGroup },
  { title: "Connection", icon: Heart, tone: "bg-muted/60 text-foreground", image: journeyConnection },
];

const journeyChecklist = [
  "Professional grief counsellors on-site 24/7",
  "Age-appropriate therapeutic activities",
  "Safe spaces for sharing and remembering",
  "Outdoor recreation and team building",
];

const infoStrip = [
  { icon: Users, title: "Who it's for", body: "Adolescents aged 10–16 who have experienced the loss of a parent or sibling." },
  { icon: Calendar, title: "Camp Dates", body: "14 – 16 August 2026 (Friday – Sunday)" },
  { icon: Wallet, title: "Camp Fee", body: "See pricing below (subsidised places available)" },
  { icon: UserRound, title: "Parent Session", body: "Includes a pre-camp briefing and post-camp integration session for guardians." },
];

function CampPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative bg-surface overflow-hidden min-h-[500px] lg:min-h-[600px]">
        {/* Full-width background image */}
        <img
          src={griefCamp}
          alt="Adolescents sitting in a circle at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20 z-[1]"></div>

        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="container-page h-full flex items-center py-16 lg:py-20">
            <div className="max-w-xl pt-40">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white">
                Grief Camp 2026
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg">
                A safe place to<br />grieve out loud.
              </h1>
              <p className="mt-6 text-white/95 leading-relaxed text-base max-w-md drop-shadow">
                Loss is not a problem to be solved. It is a passage to be walked — with company, with kindness, and with time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/join-us" className="btn-primary inline-flex items-center gap-2">
                  Apply for Grief Camp <ArrowRight size={16} />
                </Link>
                <a href="#" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-6 py-2.5 rounded-xl font-semibold transition inline-flex items-center gap-2">
                  <Download size={16} /> Download Flyer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING THE JOURNEY */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary-deep">Understanding the Journey</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Grief can feel isolating, especially for teens. Our camp provides a structured yet gentle environment where adolescents can process their feelings without pressure.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Led by specialised grief counsellors, the weekend balances therapeutic activities with traditional camp fun, allowing teens to be themselves while connecting with peers who truly understand.
            </p>
            <ul className="mt-8 space-y-3">
              {journeyChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            {/* Two-column staggered layout */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {/* LEFT COLUMN - Camp Activity (top) and Group Support (lower with margin-top) */}
              <div className="space-y-3 lg:space-y-4">
                {/* Camp Activity - positioned at top */}
                <div className="rounded-2xl bg-surface/60 border border-border/30 overflow-hidden flex flex-col aspect-[4/3] hover:shadow-sm transition-shadow relative group">
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={journeyPillars[0].image}
                      alt={journeyPillars[0].title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <p className="text-xs lg:text-sm font-semibold text-white drop-shadow-lg">{journeyPillars[0].title}</p>
                  </div>
                </div>

                {/* Group Support - positioned lower with top margin */}
                <div className="rounded-2xl bg-surface/60 border border-border/30 overflow-hidden flex flex-col aspect-[4/3] hover:shadow-sm transition-shadow relative group mt-4 lg:mt-6">
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={journeyPillars[2].image}
                      alt={journeyPillars[2].title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <p className="text-xs lg:text-sm font-semibold text-white drop-shadow-lg">{journeyPillars[2].title}</p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Nature (slightly higher with margin-top) and Connection (lower) */}
              <div className="space-y-3 lg:space-y-4">
                {/* Nature - positioned slightly higher with small top margin */}
                <div className="rounded-2xl bg-surface/60 border border-border/30 overflow-hidden flex flex-col aspect-[4/3] hover:shadow-sm transition-shadow relative group mt-2 lg:mt-3">
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={journeyPillars[1].image}
                      alt={journeyPillars[1].title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <p className="text-xs lg:text-sm font-semibold text-white drop-shadow-lg">{journeyPillars[1].title}</p>
                  </div>
                </div>

                {/* Connection - positioned lower with top margin */}
                <div className="rounded-2xl bg-surface/60 border border-border/30 overflow-hidden flex flex-col aspect-[4/3] hover:shadow-sm transition-shadow relative group mt-4 lg:mt-6">
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={journeyPillars[3].image}
                      alt={journeyPillars[3].title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <p className="text-xs lg:text-sm font-semibold text-white drop-shadow-lg">{journeyPillars[3].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INFO STRIP */}
        <div className="mt-14 rounded-3xl bg-muted/50 border border-border p-6 md:p-8 grid md:grid-cols-4 gap-6 md:divide-x md:divide-border">
          {infoStrip.map(({ icon: Icon, title, body }) => (
            <div key={title} className="md:px-6 first:md:pl-0 last:md:pr-0">
              <div className="flex items-center gap-2">
                <Icon size={18} className="text-primary" />
                <p className="font-semibold text-foreground text-sm">{title}</p>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{body}</p>
            </div>
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
                "Camp gave my daughter friends who understood without her having to explain. It gave me hope."
              </blockquote>
              <div className="mt-6 flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">Parent of camper</p>
              <p className="text-xs text-muted-foreground">Grief Camp family</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 PRICING */}
      <section id="pricing" className="container-page pb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-deep text-center">2026 Pricing</h2>
        <div className="mt-10 grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { title: "For Campers", tiers: camperPricing },
            { title: "For Parents/Guardians", tiers: parentPricing },
          ].map((b) => (
            <div key={b.title} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <h3 className="text-base font-semibold flex items-center gap-2 text-primary-deep">
                <UserRound size={18} className="text-primary" /> {b.title}
              </h3>
              <ul className="mt-5 divide-y divide-border">
                {b.tiers.map((t) => (
                  <li key={t.label} className="flex items-center justify-between py-4">
                    <div>
                      <p className="text-sm font-semibold">{t.label}</p>
                      <p className="text-xs text-muted-foreground">{t.deadline}</p>
                    </div>
                    <span className="text-base font-semibold text-primary-deep">{t.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Fees cover accommodation, meals, activities, materials and professional support.
        </p>
      </section>

      {/* PAYMENT OPTIONS */}
      <section className="container-page pb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-deep text-center">Payment Options</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { title: "M-PESA", icon: Wallet, lines: ["Buy Goods and Services", <><span className="font-semibold">Till number:</span> 747736</>] },
            { title: "Bank Transfer (KES)", icon: Landmark, lines: ["SBM Bank · Recro Group Limited", "Acc: 0182074946003 · Code 60 · Branch 018", <><span className="font-semibold">Swift:</span> SBMKKENA · <span className="font-semibold">Ref:</span> GRIEF CAMP</>] },
            { title: "USD Account", icon: Landmark, lines: ["SBM Bank · Recro Group Limited", "Acc: 0182074946003 · Code 60 · Branch 018", <><span className="font-semibold">Swift:</span> CKENKENA · <span className="font-semibold">Ref:</span> GRIEF CAMP</>] },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card p-6 card-lift">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{c.title}</p>
                <c.icon size={20} className="text-primary" />
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                {c.lines.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* SPONSOR A CHILD */}
        <div className="mt-8 rounded-3xl bg-muted/50 border border-border p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="h-12 w-12 rounded-2xl bg-card flex items-center justify-center flex-shrink-0">
              <HandHeart size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-primary-deep">Sponsor a Child</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xl">
                Your generosity can give a grieving child the chance to heal, grow and remember they are not alone.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn-secondary inline-flex items-center gap-2 self-start md:self-auto">
            Learn about Sponsorship <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
