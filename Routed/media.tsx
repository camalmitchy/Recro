import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Play } from "lucide-react";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media library | Therapy talks & resources — Recro Group" },
      { name: "description", content: "Watch short, practical talks from Recro Group therapists on relationships, grief, parenting and emotional wellbeing." },
    ],
  }),
  component: MediaPage,
});

const videos = [
  { title: "Benefits of therapy", desc: "Why starting therapy is one of the most generous things you can do for yourself." },
  { title: "Forgiveness", desc: "What forgiveness is — and what it isn't — in healing relationships." },
  { title: "Expectations in relationships", desc: "How unmet, uncommunicated expectations quietly breed disappointment." },
  { title: "Parenting apart", desc: "Co-parenting through and after separation, with the child at the centre." },
  { title: "Invisible mourners", desc: "Children grieve too. Here's how to see, name and support it." },
  { title: "Boundaries that breathe", desc: "Boundaries as care, not walls — for couples, families and teams." },
];

function MediaPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Media"
        title="Short talks. Real shifts."
        description="Bite-sized videos and conversations from our therapists, made for the moments between sessions."
      />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <article key={v.title} className="group rounded-3xl border border-border bg-card overflow-hidden card-lift">
              <div className="relative aspect-video bg-gradient-to-br from-primary-soft via-background to-surface-2 grid place-items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_60%)]" />
                <button aria-label={`Play ${v.title}`} className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-background/90 backdrop-blur shadow-[var(--shadow-lift)] text-primary-deep group-hover:scale-110 transition-transform">
                  <Play size={22} className="ml-0.5" fill="currentColor"/>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
