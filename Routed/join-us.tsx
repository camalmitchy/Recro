import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/join-us")({
  head: () => ({
    meta: [
      { title: "Join Us — Recro Group" },
      { name: "description", content: "Create your Recro Group account or sign in to book sessions, manage appointments, and access resources." },
      { property: "og:title", content: "Join Recro Group" },
      { property: "og:description", content: "Sign in or create an account to access care, bookings and resources." },
    ],
  }),
  component: JoinUsPage,
});

function JoinUsPage() {
  const { user, loading } = useAuth();
  if (!loading && user) return <Navigate to="/profile" />;

  return (
    <SiteShell>
      <section className="container-page py-16 md:py-24 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow mx-auto"><Sparkles size={12} /> Welcome</span>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">Join Recro Group</h1>
          <p className="mt-4 text-lg text-muted-foreground">A safe, calm space to access care, book sessions and manage your journey.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <Link to="/login" className="group rounded-2xl border border-border bg-surface p-8 hover:border-primary hover:shadow-[var(--shadow-glow)] transition">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-deep mb-4">
              <ShieldCheck size={20} />
            </div>
            <h2 className="text-xl font-semibold">Sign in</h2>
            <p className="mt-2 text-sm text-muted-foreground">Already have an account? Continue where you left off.</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-primary-deep group-hover:underline">Sign in →</span>
          </Link>
          <Link to="/signup" className="group rounded-2xl border border-primary bg-primary p-8 text-primary-foreground hover:opacity-95 transition">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 mb-4">
              <HeartHandshake size={20} />
            </div>
            <h2 className="text-xl font-semibold">Create account</h2>
            <p className="mt-2 text-sm text-primary-foreground/85">New here? Set up your profile in under a minute.</p>
            <span className="mt-5 inline-flex text-sm font-semibold group-hover:underline">Get started →</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
