import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import homeImage from "@/assets/home.png";

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
  {
    category: "Understanding Therapy",
    questions: [
      {
        q: "What is the difference between Psychotherapy and Counselling?",
        a: "Psychotherapy and counselling are often used interchangeably but are different. Counselling tends to be brief and focused on a single problem, while psychotherapy is longer, deeper, and uses a systemic framework that encompasses influences such as family, community, employment, and religion. It is provided by professionals trained specifically in psychotherapy."
      },
      {
        q: "How frequent are the sessions?",
        a: "Individual therapy sessions run for 50 minutes and are typically held once a week for the best results. Group sessions meet weekly as well but are longer, usually between 1 hour 30 minutes and 2 hours."
      },
      {
        q: "How long will therapy take?",
        a: "There is no fixed duration. The length and success of therapy depend on the nature and severity of the problem, the client's personal motivation, and any other factors that may arise during treatment."
      },
      {
        q: "What can I expect at the first session?",
        a: "The first session focuses on building a therapeutic alliance and gathering information to shape a treatment plan. Clients are encouraged to be open and honest about what brought them to therapy. It is normal to feel nervous, but the Recro team's presence is described as calming and supportive."
      },
      {
        q: "What works in therapy?",
        a: "The client's motivation and a strong therapeutic alliance (relationship with the therapist) are significant factors. The use of evidence-based therapies such as Cognitive Behavioral Therapy, Solution-Focused Therapy, Gestalt Therapy, Structural Therapy, and Transgenerational Therapy also contributes to successful outcomes."
      },
    ]
  },
  {
    category: "Common Concerns",
    questions: [
      {
        q: "What if my family member/friend wants me to come but I don't think I have a problem?",
        a: "Only you can decide to enter therapy. If a loved one suggests it, that may reflect care for you. Psychotherapy can offer helpful insight from a trained professional and may be worth trying even if you're unsure there's a problem."
      },
      {
        q: "What if I don't believe in Psychotherapy or Counselling — I think problems should not be discussed outside the home?",
        a: "Recro Group respects cultural beliefs. However, sometimes the home environment can be unhealthy for facilitating change. A trained professional perspective can be helpful to understand issues that may not change otherwise."
      },
      {
        q: "How do I reach the clinic before or between sessions?",
        a: "The best way to reach the clinic is by calling and speaking with a staff member, who will then contact your therapist. If no one answers, you can leave a voicemail and someone will return your call as soon as possible."
      },
    ]
  },
  {
    category: "Booking & Appointments",
    questions: [
      {
        q: "How can I make an appointment?",
        a: "You can make an appointment by calling the clinic at the provided phone numbers or by filling out the contact form on the site, after which a staff member will contact you."
      },
      {
        q: "How do I book a session online?",
        a: "Visit our booking page, select your preferred service, choose a date and time that works for you, and fill in your contact details. We'll confirm your appointment within one working day."
      },
      {
        q: "Can I book for someone else?",
        a: "Yes, you can book on behalf of a family member or friend. However, the person receiving therapy must be willing and ready to participate. For children and adolescents, a parent or guardian must book and provide consent."
      },
      {
        q: "Can I reschedule or cancel my appointment?",
        a: "Yes. Please notify us at least 24 hours in advance to reschedule or cancel. Late cancellations may be subject to a fee."
      },
    ]
  },
  {
    category: "Fees & Payment",
    questions: [
      {
        q: "Can I use my insurance?",
        a: "Currently, insurance companies do not cover mental health treatment at Recro Group, so payment must be made out of pocket."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept M-Pesa, bank transfers (both KES and USD), and cash payments. Full payment details are provided after booking confirmation."
      },
      {
        q: "Do you offer sliding-scale fees?",
        a: "Yes, we offer sliding-scale spots for clients who need financial assistance. Please ask us about this when booking, and we'll work with you to find an arrangement that fits your situation."
      },
    ]
  },
];

function FaqPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative bg-surface overflow-hidden h-[400px] lg:h-[450px]">
        {/* Full-width background image */}
        <img
          src={homeImage}
          alt="FAQ"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-[1]"></div>

        {/* Content overlay */}
        <div className="relative z-10 h-full">
          <div className="container-page h-full flex items-center py-16 lg:py-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white">
                FAQ
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg">
                Questions,<br />gently answered
              </h1>
              <p className="mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow">
                Everything you might want to know before reaching out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-deep">
            Everything you need to know
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Find answers to the most common questions about therapy, booking, and working with Recro Group.
          </p>
        </div>

        {/* FAQ Categories in Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((category, catIndex) => (
            <div key={category.category} className="space-y-5">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border"></div>
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-deep">
                  {category.category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border"></div>
              </div>

              {/* Questions in this category */}
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`cat-${catIndex}-q-${qIndex}`}
                    className="rounded-2xl border border-border bg-card px-6 py-1 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-muted/50 border border-border p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-primary-deep">
              Still have questions?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We're here to help. Reach out and we'll get back to you within one business day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact us
              </a>
              <a href="/booking" className="btn-secondary">
                Book a session
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
