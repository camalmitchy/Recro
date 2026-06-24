import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import {
    HeartHandshake, Users, Baby, Briefcase, Brain, ArrowLeft, ArrowRight, Check,
} from "lucide-react";
import type { ComponentType } from "react";

type Service = {
    key: string;
    title: string;
    ctaLabel: string;
    icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
    intro: string;
    whoFor: string;
    concerns: string[];
    expect: string[];
    duration: string;
    pricing: string;
    mode: string;
    booking: string;
    relatedReading: { category: string; title: string; body: string }[];
    relatedMedia: { title: string; meta: string }[];
};

const SERVICES: Record<string, Service> = {
    individual: {
        key: "individual",
        title: "Individual Therapy",
        ctaLabel: "Book an individual session",
        icon: HeartHandshake,
        intro:
            "Individual therapy is a confidential, judgement-free space to slow down and make sense of what you're carrying. Our therapists use evidence-based approaches — including cognitive behavioural therapy, person-centred and trauma-informed care — adapted to what you actually need.",
        whoFor: "Adults and adolescents navigating personal challenges, transitions, or emotional pain.",
        concerns: ["Anxiety & stress", "Depression & low mood", "Trauma & PTSD", "Self-esteem", "Life transitions", "Burnout"],
        expect: [
            "A confidential first conversation to understand what brings you here.",
            "Collaborative goal-setting at your own pace.",
            "Evidence-based therapeutic approaches tailored to you.",
            "Ongoing review of what is helping.",
        ],
        duration: "60 minutes",
        pricing: "From KES 5,000",
        mode: "In-person · Online",
        booking: "Same-week",
        relatedReading: [
            { category: "Therapy", title: "What to expect from your first therapy session", body: "A gentle walkthrough of what really happens in a first session — and what doesn't." },
            { category: "Grief", title: "Supporting a grieving child: a guide for parents", body: "Practical, age-appropriate ways to be with a child after loss — without rushing the healing." },
            { category: "Workplace Wellness", title: "Recognising burnout before it breaks you", body: "The early signals most of us miss — and what to do once you spot them." },
        ],
        relatedMedia: [
            { title: "Benefits of Therapy", meta: "12:40 · Therapy" },
            { title: "Forgiveness", meta: "9:08 · Mental Health Education" },
            { title: "Expectations in Relationships", meta: "14:22 · Relationships" },
        ],
    },
    couples: {
        key: "couples",
        title: "Couples Counselling",
        ctaLabel: "Book a couples session",
        icon: Users,
        intro:
            "Couples counselling gives partners a structured, supportive space to be honest with each other — rebuild communication, repair trust, navigate intimacy, and make decisions together with clarity rather than reactivity.",
        whoFor: "Partners at any stage — dating, engaged, married, separating — who want to understand and be understood.",
        concerns: ["Communication breakdown", "Trust & infidelity", "Intimacy concerns", "Recurring conflict", "Life transitions", "Co-parenting"],
        expect: [
            "A joint intake to map what's working and what isn't.",
            "Individual check-ins so both voices are heard.",
            "Skill-building for hard conversations.",
            "Clear agreements you can carry home.",
        ],
        duration: "75 minutes",
        pricing: "From KES 8,000",
        mode: "In-person · Online",
        booking: "Within 1 week",
        relatedReading: [
            { category: "Relationships", title: "When to consider couples therapy", body: "Signs it's time — and why earlier is almost always easier than later." },
            { category: "Relationships", title: "Rebuilding trust after a rupture", body: "A realistic look at what repair actually requires from both partners." },
            { category: "Communication", title: "The four habits that quietly erode relationships", body: "Tiny patterns that compound — and gentle ways to interrupt them." },
        ],
        relatedMedia: [
            { title: "Expectations in Relationships", meta: "14:22 · Relationships" },
            { title: "Forgiveness", meta: "9:08 · Mental Health Education" },
            { title: "Healthy Conflict", meta: "11:05 · Couples" },
        ],
    },
    family: {
        key: "family",
        title: "Family Therapy",
        ctaLabel: "Book a family session",
        icon: Users,
        intro:
            "Family therapy works with the whole system — not one 'problem person'. Together we look at patterns, roles and stories that shape how your family connects, and gently rewrite the ones that no longer serve you.",
        whoFor: "Families navigating conflict, transitions, blended dynamics, illness, loss or relocation.",
        concerns: ["Recurring conflict", "Parent–teen tension", "Blended family adjustment", "Grief & loss", "Divorce & co-parenting", "Communication"],
        expect: [
            "An intake with parents or guardians first.",
            "Sessions with the full family system.",
            "Practical tools you can use at home.",
            "Periodic reviews to mark progress together.",
        ],
        duration: "60 – 90 minutes",
        pricing: "From KES 9,000",
        mode: "In-person · Online",
        booking: "Within 1 week",
        relatedReading: [
            { category: "Family", title: "When everyone has a different version of the truth", body: "How to hold multiple realities in one family without taking sides." },
            { category: "Parenting", title: "Talking to teens without losing them", body: "Conversation moves that keep doors open even on hard days." },
            { category: "Grief", title: "Supporting a grieving child: a guide for parents", body: "Practical, age-appropriate ways to be with a child after loss." },
        ],
        relatedMedia: [
            { title: "Holding a Family Through Change", meta: "16:10 · Family" },
            { title: "Parenting in the Real World", meta: "13:45 · Parenting" },
            { title: "Forgiveness", meta: "9:08 · Mental Health Education" },
        ],
    },
    children: {
        key: "children",
        title: "Grief Camp",
        ctaLabel: "Book a session for your child",
        icon: Baby,
        intro:
            "Therapy for children and teens that meets them where they are — through play, art, storytelling and conversation. We help young people make sense of big feelings while keeping parents informed and equipped.",
        whoFor: "Children (5–12) and adolescents navigating emotional, behavioural or developmental concerns.",
        concerns: ["Anxiety & worry", "Anger & big feelings", "School struggles", "Friendship & bullying", "Grief & loss", "Self-esteem"],
        expect: [
            "A parent / guardian consultation first.",
            "Weekly sessions with your child or teen.",
            "Regular parent feedback sessions.",
            "A shared plan you can support at home.",
        ],
        duration: "45 minutes",
        pricing: "From KES 4,500",
        mode: "In-person",
        booking: "Same-week",
        relatedReading: [
            { category: "Parenting", title: "When worry becomes anxiety — signs to watch for", body: "How to tell developmental nerves from something that needs support." },
            { category: "Adolescents", title: "Talking to teens without losing them", body: "Conversation moves that keep doors open even on hard days." },
            { category: "Grief", title: "Supporting a grieving child: a guide for parents", body: "Practical, age-appropriate ways to be with a child after loss." },
        ],
        relatedMedia: [
            { title: "Big Feelings in Small People", meta: "10:18 · Parenting" },
            { title: "Adolescence, Made Simple", meta: "12:02 · Adolescents" },
            { title: "Play as Therapy", meta: "8:30 · Therapy" },
        ],
    },
    group: {
        key: "group",
        title: "Group Therapy",
        ctaLabel: "Join a therapy group",
        icon: Brain,
        intro:
            "Themed therapeutic groups bring together people walking similar paths. With a trained facilitator and a small, closed circle, you gain perspective, skills and the rare relief of not being alone in it.",
        whoFor: "Adults ready to learn from — and with — others around shared themes.",
        concerns: ["Grief & loss", "Parenting", "Anxiety", "Divorce recovery", "Personal growth", "Burnout"],
        expect: [
            "A brief screening conversation first.",
            "6 – 10 weekly sessions in a closed group.",
            "A confidential, facilitated container.",
            "Skills you take with you long after the group ends.",
        ],
        duration: "90 minutes weekly",
        pricing: "From KES 3,500 / session",
        mode: "In-person · Online",
        booking: "Cohorts open quarterly",
        relatedReading: [
            { category: "Therapy", title: "Why group therapy works when you least expect it", body: "What changes when other people in the room truly get it." },
            { category: "Grief", title: "Grieving out loud, together", body: "How shared grief can carry what private grief can't." },
            { category: "Workplace Wellness", title: "Recognising burnout before it breaks you", body: "The early signals most of us miss — and what to do once you spot them." },
        ],
        relatedMedia: [
            { title: "The Power of the Circle", meta: "11:48 · Therapy" },
            { title: "Forgiveness", meta: "9:08 · Mental Health Education" },
            { title: "Belonging", meta: "13:20 · Community" },
        ],
    },
    corporate: {
        key: "corporate",
        title: "Corporate Wellness",
        ctaLabel: "Talk to our corporate team",
        icon: Briefcase,
        intro:
            "Recro partners with organisations to build psychologically safe, high-performing teams — through Employee Assistance Programmes, workshops, manager debriefs and crisis response designed around your culture.",
        whoFor: "HR & People teams, leaders and organisations committed to mental health at work.",
        concerns: ["Employee Assistance (EAP)", "Manager training", "Team debriefs", "Workshops & talks", "Critical incident response", "Wellness strategy"],
        expect: [
            "A scoping conversation with your team.",
            "A tailored proposal and program plan.",
            "Delivery on-site, hybrid or online.",
            "Quarterly impact reporting.",
        ],
        duration: "Custom engagements",
        pricing: "On request",
        mode: "On-site · Hybrid · Online",
        booking: "Reach out anytime",
        relatedReading: [
            { category: "Workplace Wellness", title: "Recognising burnout before it breaks you", body: "The early signals most of us miss — and what to do once you spot them." },
            { category: "Leadership", title: "How great managers hold hard conversations", body: "Frameworks that protect both performance and people." },
            { category: "Workplace Wellness", title: "Building a culture of psychological safety", body: "Small habits that change how teams speak up, learn and recover." },
        ],
        relatedMedia: [
            { title: "Leading Through Loss", meta: "14:50 · Leadership" },
            { title: "Burnout at Scale", meta: "12:12 · Workplace Wellness" },
            { title: "The Manager as Coach", meta: "10:40 · Leadership" },
        ],
    },
};

export const Route = createFileRoute("/services/$slug")({
    head: ({ params }) => {
        const s = SERVICES[params.slug];
        return {
            meta: s
                ? [
                    { title: `${s.title} | Recro Group` },
                    { name: "description", content: s.intro.slice(0, 155) },
                    { property: "og:title", content: `${s.title} | Recro Group` },
                    { property: "og:description", content: s.intro.slice(0, 155) },
                ]
                : [{ title: "Service | Recro Group" }],
        };
    },
    loader: ({ params }) => {
        if (!SERVICES[params.slug]) throw notFound();
        return { slug: params.slug };
    },
    component: ServiceDetailPage,
    notFoundComponent: () => (
        <SiteShell>
            <div className="container-page py-24 text-center">
                <h1 className="text-3xl font-serif text-primary-deep">Service not found</h1>
                <Link to="/services" className="btn-primary mt-6 inline-flex">Back to services</Link>
            </div>
        </SiteShell>
    ),
    errorComponent: ({ error }) => (
        <SiteShell>
            <div className="container-page py-24 text-center">
                <h1 className="text-2xl font-serif text-primary-deep">Something went wrong</h1>
                <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
            </div>
        </SiteShell>
    ),
});

function ServiceDetailPage() {
    const { slug } = Route.useLoaderData() as { slug: string };
    const service = SERVICES[slug];
    const Icon = service.icon;
    const others = Object.values(SERVICES).filter((s) => s.key !== service.key).slice(0, 3);

    return (
        <SiteShell>
            {/* ───────── HERO ───────── */}
            <section className="bg-surface relative overflow-hidden">
                <div className="container-page pt-16 lg:pt-24 pb-20 lg:pb-28">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep/70 hover:text-primary-deep hover:gap-3 transition-all"
                    >
                        <ArrowLeft size={13} /> All services
                    </Link>

                    <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
                        <div className="lg:col-span-8">
                            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep/60 mb-6">
                                Service · Therapeutic Care
                            </p>
                            <h1 className="font-serif text-primary-deep leading-[0.92] tracking-tight text-5xl md:text-7xl lg:text-[7.5rem]">
                                <span className="italic font-light">{service.title.split(" ")[0]}</span>
                                {service.title.split(" ").slice(1).join(" ") && (
                                    <span className="block">{service.title.split(" ").slice(1).join(" ")}</span>
                                )}
                            </h1>
                            <div className="mt-10 max-w-xl">
                                <p className="text-lg lg:text-xl font-light leading-relaxed text-foreground/75">
                                    {service.intro}
                                </p>
                                <div className="mt-8 h-px w-20 bg-primary-deep" />
                            </div>
                            <div className="mt-10 flex flex-wrap gap-3">
                                <Link to="/booking" search={{ service: service.key }} className="btn-primary rounded-full px-7">
                                    {service.ctaLabel}
                                </Link>
                                <Link to="/contact" className="btn-secondary rounded-full px-7">
                                    Ask a question
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-primary-soft via-surface to-primary-soft/40 grid place-items-center shadow-[var(--shadow-lift)] relative overflow-hidden">
                                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary.DEFAULT)/0.25,transparent_60%)]" />
                                <div className="relative h-28 w-28 rounded-3xl bg-primary-deep text-primary-soft grid place-items-center shadow-[var(--shadow-lift)]">
                                    <Icon size={52} strokeWidth={1.4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── NARRATIVE BODY ───────── */}
            <section className="container-page py-20 lg:py-28">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* MAIN COLUMN */}
                    <div className="lg:col-span-8 space-y-28 lg:space-y-36">
                        {/* Who this helps */}
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl italic text-primary-deep border-b border-border pb-5">
                                Who this helps
                            </h2>
                            <p className="mt-10 text-lg leading-relaxed text-foreground/80 max-w-2xl">
                                {service.whoFor}
                            </p>
                        </div>

                        {/* Focus areas */}
                        <div className="relative">
                            <div className="bg-primary-soft/60 rounded-[2rem] p-10 lg:p-14 relative overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
                                <h2 className="relative font-serif text-3xl md:text-4xl italic text-primary-deep">
                                    Focus areas
                                </h2>
                                <p className="relative mt-3 text-sm text-primary-deep/60 max-w-md">
                                    The themes that most often bring people here.
                                </p>
                                <div className="relative mt-10 flex flex-wrap gap-3">
                                    {service.concerns.map((c) => (
                                        <span
                                            key={c}
                                            className="px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border text-[11px] tracking-[0.18em] uppercase text-primary-deep hover:bg-primary-deep hover:text-primary-soft hover:border-primary-deep transition-all duration-300 cursor-default"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* The path forward */}
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl italic text-primary-deep border-b border-border pb-5">
                                The path forward
                            </h2>
                            <ol className="mt-14 space-y-14">
                                {service.expect.map((step, i) => (
                                    <li key={step} className="group flex flex-col md:flex-row gap-6 md:gap-10">
                                        <span className="font-serif italic text-5xl md:text-6xl text-primary/40 group-hover:text-primary-deep transition-colors duration-500 shrink-0 leading-none">
                                            {String(i + 1).padStart(2, "0")}.
                                        </span>
                                        <div className="pt-3 border-t border-border md:border-0 md:pt-2">
                                            <p className="text-foreground/80 leading-relaxed max-w-xl text-lg font-light">
                                                {step}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Related reading */}
                        <div>
                            <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
                                <h2 className="font-serif text-3xl md:text-4xl italic text-primary-deep">
                                    Perspectives
                                </h2>
                                <Link
                                    to="/blog"
                                    className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep border-b border-primary-deep pb-1 hover:gap-3"
                                >
                                    View blog
                                </Link>
                            </div>
                            <div className="mt-12 grid md:grid-cols-2 gap-10">
                                {service.relatedReading.slice(0, 2).map((r) => (
                                    <Link
                                        key={r.title}
                                        to="/blog"
                                        className="group block"
                                    >
                                        <div className="aspect-[16/10] rounded-2xl bg-primary-soft/70 overflow-hidden mb-5 relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <span className="text-[10px] tracking-[0.25em] uppercase text-primary-deep/60 font-semibold">
                                            {r.category} · 5 min read
                                        </span>
                                        <h4 className="mt-3 font-serif text-2xl text-primary-deep leading-snug group-hover:italic transition-all">
                                            {r.title}
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {/* At a glance — dark card */}
                            <div className="rounded-[2rem] bg-primary-deep text-primary-soft p-10 shadow-[var(--shadow-lift)]">
                                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-soft/60 flex items-center gap-3">
                                    <span className="h-px w-6 bg-primary-soft/40" /> At a glance
                                </p>
                                <dl className="mt-8 space-y-6">
                                    {[
                                        ["Duration", service.duration],
                                        ["Pricing", service.pricing],
                                        ["Mode", service.mode],
                                        ["Availability", service.booking],
                                    ].map(([k, v]) => (
                                        <div key={k} className="border-b border-primary-soft/15 pb-4 last:border-0">
                                            <dt className="text-[10px] tracking-[0.25em] uppercase text-primary-soft/55 mb-1.5">{k}</dt>
                                            <dd className="text-base font-medium">{v}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <Link
                                    to="/booking"
                                    search={{ service: service.key }}
                                    className="mt-10 w-full inline-flex items-center justify-center py-4 rounded-full bg-primary-soft text-primary-deep text-[11px] tracking-[0.3em] uppercase font-semibold hover:tracking-[0.4em] transition-all"
                                >
                                    Request intake
                                </Link>
                            </div>

                            {/* Featured audio */}
                            {service.relatedMedia[0] && (
                                <div className="rounded-[2rem] bg-card border border-border p-10">
                                    <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">
                                        Listen
                                    </span>
                                    <h3 className="mt-4 font-serif italic text-2xl text-primary-deep leading-snug">
                                        {service.relatedMedia[0].title}
                                    </h3>
                                    <p className="mt-2 text-xs text-muted-foreground">{service.relatedMedia[0].meta}</p>
                                    <button className="mt-6 inline-flex items-center gap-3 group">
                                        <span className="h-11 w-11 rounded-full border border-primary-deep grid place-items-center text-primary-deep group-hover:bg-primary-deep group-hover:text-primary-soft transition-all">
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </span>
                                        <span className="text-[10px] tracking-[0.3em] uppercase text-primary-deep font-semibold">
                                            Play session
                                        </span>
                                    </button>
                                </div>
                            )}

                            {/* More media list */}
                            <div className="rounded-[2rem] bg-surface p-10">
                                <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6">
                                    More media
                                </p>
                                <ul className="space-y-5">
                                    {service.relatedMedia.slice(1).map((m) => (
                                        <li key={m.title} className="border-b border-border pb-4 last:border-0">
                                            <p className="font-serif text-lg text-primary-deep leading-snug">{m.title}</p>
                                            <p className="mt-1 text-xs text-muted-foreground">{m.meta}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ───────── OTHER SERVICES ───────── */}
            <section className="bg-surface">
                <div className="container-page py-20 lg:py-28">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border pb-6">
                        <div>
                            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep/60">
                                Continue exploring
                            </p>
                            <h2 className="mt-3 font-serif italic text-4xl md:text-5xl text-primary-deep">
                                Other services
                            </h2>
                        </div>
                        <Link
                            to="/services"
                            className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep border-b border-primary-deep pb-1"
                        >
                            View all
                        </Link>
                    </div>

                    <div className="mt-14 grid md:grid-cols-3 gap-8">
                        {others.map((o) => {
                            const OIcon = o.icon;
                            return (
                                <Link
                                    key={o.key}
                                    to="/services/$slug"
                                    params={{ slug: o.key }}
                                    className="group block"
                                >
                                    <div className="aspect-[5/4] rounded-2xl bg-primary-soft/70 mb-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-deep/10 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute bottom-5 left-5 h-12 w-12 rounded-2xl bg-primary-deep text-primary-soft grid place-items-center">
                                            <OIcon size={20} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-2xl text-primary-deep group-hover:italic transition-all">
                                        {o.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                        {o.intro}
                                    </p>
                                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-primary-deep font-semibold group-hover:gap-3 transition-all">
                                        Read more <ArrowRight size={12} />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ───────── FINAL CTA ───────── */}
            <section className="container-page py-24 lg:py-32 text-center">
                <p className="font-serif italic text-3xl md:text-4xl text-primary-deep max-w-2xl mx-auto leading-snug">
                    Ready to begin the conversation?
                </p>
                <p className="mt-5 text-muted-foreground max-w-md mx-auto">
                    A short, confidential intake helps us match you with the right therapist.
                </p>
                <Link
                    to="/booking"
                    search={{ service: service.key }}
                    className="mt-10 inline-flex items-center justify-center px-12 py-5 rounded-full bg-primary-deep text-primary-soft text-[11px] tracking-[0.3em] uppercase font-semibold hover:tracking-[0.4em] transition-all"
                >
                    {service.ctaLabel}
                </Link>
            </section>
        </SiteShell>
    );
}

