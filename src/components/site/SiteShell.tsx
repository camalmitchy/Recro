import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="absolute inset-0 soft-grid-bg opacity-60" aria-hidden />
      <div className="container-page relative py-16 md:py-24 text-center max-w-3xl">
        {eyebrow && <span className="eyebrow mx-auto">{eyebrow}</span>}
        <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
