import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowRight } from "lucide-react";
import landingImage from "@/assets/landing.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & insights | Recro Group" },
      { name: "description", content: "Practical, compassionate writing on mental health, relationships, grief and growth from the Recro Group team." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "From the foxhole to the front porch — a family perspective",
    tag: "Family",
    read: "8 min",
    excerpt: "With great joy and sadness Kenya welcomed home its troops. The readjustment from the family unit takes years. A look at reintegration and redeployment through the lens of family systems.",
    date: "Dec 19, 2017"
  },
  {
    title: "The perfect storm",
    tag: "Relationships",
    read: "6 min",
    excerpt: "As years go by, relationships tend to move and take all kinds of turns and twists. Technology changes, social norms change, needs change but perhaps the change we're not ready to fully embrace is that of the younger generation.",
    date: "May 10, 2017"
  },
  {
    title: "When grief shows up at the office",
    tag: "Workplace",
    read: "5 min",
    excerpt: "What to say (and not say) when a colleague returns to work after a loss."
  },
  {
    title: "Repair conversations for couples",
    tag: "Couples",
    read: "7 min",
    excerpt: "A simple structure that turns most arguments into a chance to grow closer."
  },
  {
    title: "How children grieve differently",
    tag: "Children",
    read: "6 min",
    excerpt: "Why a child laughing the day after a loss doesn't mean they're 'fine'."
  },
  {
    title: "Five gentle ways to start therapy",
    tag: "Therapy 101",
    read: "4 min",
    excerpt: "Tiny first steps for people who've been thinking about it for a while."
  },
  {
    title: "Boundaries that breathe",
    tag: "Relationships",
    read: "5 min",
    excerpt: "Boundaries as care for the relationship — not walls against the person."
  },
  {
    title: "Anxiety, told simply",
    tag: "Mental health",
    read: "6 min",
    excerpt: "What anxiety is actually doing in the body, and how therapy quiets it."
  },
];

function BlogPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative bg-surface overflow-hidden h-[400px] lg:h-[450px]">
        {/* Full-width background image */}
        <img
          src={landingImage}
          alt="Blog and insights"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-[1]"></div>

        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="container-page h-full flex items-center py-16 lg:py-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white">
                Insights
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg">
                Quiet work.<br />Lasting change.
              </h1>
              <p className="mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow">
                Healing rarely arrives all at once. It is built — page by page, conversation by conversation — in a space designed to hold you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="card-lift rounded-3xl border border-border bg-card p-6 flex flex-col">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary-deep font-semibold">{p.tag}</span>
                <span className="text-muted-foreground">{p.read} read</span>
                {p.date && (
                  <>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{p.date}</span>
                  </>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
              <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep">Read article <ArrowRight size={13} /></Link>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
