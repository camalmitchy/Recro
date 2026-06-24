import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { ArrowRight } from "lucide-react";

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
  { title: "When grief shows up at the office", tag: "Workplace", read: "5 min", excerpt: "What to say (and not say) when a colleague returns to work after a loss." },
  { title: "Repair conversations for couples", tag: "Couples", read: "7 min", excerpt: "A simple structure that turns most arguments into a chance to grow closer." },
  { title: "How children grieve differently", tag: "Children", read: "6 min", excerpt: "Why a child laughing the day after a loss doesn't mean they're 'fine'." },
  { title: "Five gentle ways to start therapy", tag: "Therapy 101", read: "4 min", excerpt: "Tiny first steps for people who've been thinking about it for a while." },
  { title: "Boundaries that breathe", tag: "Relationships", read: "5 min", excerpt: "Boundaries as care for the relationship — not walls against the person." },
  { title: "Anxiety, told simply", tag: "Mental health", read: "6 min", excerpt: "What anxiety is actually doing in the body, and how therapy quiets it." },
];

function BlogPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Insights" title="Writing for the in-between moments" description="Short, practical reads from our therapists — for the times between sessions." />
      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="card-lift rounded-3xl border border-border bg-card p-6 flex flex-col">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-primary-soft text-primary-deep font-semibold">{p.tag}</span>
                <span className="text-muted-foreground">{p.read} read</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
              <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep">Read article <ArrowRight size={13}/></Link>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
