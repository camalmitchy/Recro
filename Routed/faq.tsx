import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Recro Group" },
      { name: "description", content: "Answers to common questions about therapy, fees, confidentiality, sessions and Grief Camp at Recro Group." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "How do I book a session?", a: "Use our Join Us page or call us. We'll schedule a short intake and match you with a therapist that fits." },
  { q: "Are sessions confidential?", a: "Yes. Confidentiality is foundational. We only break it in narrowly defined safety or legal situations, which we explain upfront." },
  { q: "Do you offer virtual sessions?", a: "Yes — most of our services are available in-person and securely online." },
  { q: "What does a session cost?", a: "Fees vary by service and therapist. We offer sliding-scale spots for clients who need them — ask us." },
  { q: "Who can attend Grief Camp?", a: "Children navigating the loss of a loved one. In 2026 we also offer a dedicated parents' session." },
  { q: "Do you work with companies?", a: "Yes — EAPs, manager training, debriefs after incidents and ongoing team wellness programs." },
];

function FaqPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="FAQ" title="Questions, gently answered" description="Everything you might want to know before reaching out." />
      <section className="container-page py-16 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)]">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteShell>
  );
}
