import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowRight, Clock, DollarSign, Users, CheckCircle } from "lucide-react";
import therapySession from "@/assets/therapy-session.jpg";
import individualIcon from "@/assets/icons/individual-therapy.svg";
import familyIcon from "@/assets/icons/family-therapy.svg";
import couplesIcon from "@/assets/icons/couples-therapy.svg";
import groupIcon from "@/assets/icons/group-therapy.svg";
import griefCampIcon from "@/assets/icons/grief-camp.svg";
import corporateIcon from "@/assets/icons/corporate-speaking.svg";

export const Route = createFileRoute("/services/$slug")({
    component: ServiceDetailPage,
});

const servicesData = {
    individual: {
        slug: "individual",
        icon: individualIcon,
        title: "Individual Therapy",
        subtitle: "One-to-one care for your mental health journey",
        description:
            "Individual therapy provides a safe, confidential space to explore your thoughts, feelings, and experiences with a trained therapist. Whether you're dealing with anxiety, depression, trauma, life transitions, or simply seeking personal growth, we walk alongside you.",
        duration: "60 minutes",
        price: "From KES 5,000",
        format: "In-person or online",
        image: therapySession,
        whoItsFor: [
            "Anyone experiencing anxiety, stress, or depression",
            "Those navigating grief, loss, or life transitions",
            "Individuals recovering from trauma",
            "People seeking personal growth and self-understanding",
        ],
        whatToExpect: [
            "Confidential, one-to-one sessions in a safe environment",
            "Evidence-based therapeutic approaches tailored to you",
            "Practical tools to manage emotions and build resilience",
            "A collaborative, non-judgmental partnership",
        ],
        approach:
            "We draw from systemic, narrative, and attachment-informed frameworks to meet you where you are. Sessions are client-led, compassionate, and focused on sustainable healing.",
        faqs: [
            {
                question: "How long does therapy take?",
                answer:
                    "It varies. Some clients find relief in a few sessions, while others benefit from longer-term support. We'll review progress together and adjust as needed.",
            },
            {
                question: "What if I don't know what to talk about?",
                answer:
                    "That's completely normal. Your therapist will guide the conversation and help you explore what matters most to you.",
            },
            {
                question: "Is everything I say confidential?",
                answer:
                    "Yes. We uphold strict confidentiality unless there's a risk of harm to you or others, which we'd discuss with you first.",
            },
        ],
    },
    family: {
        slug: "family",
        icon: familyIcon,
        title: "Family Therapy",
        subtitle: "Strengthen bonds and resolve conflict together",
        description:
            "Family therapy helps families navigate conflict, improve communication, and rebuild trust. We work with the whole system — parents, children, extended family — to create healthier patterns and stronger connections.",
        duration: "90 minutes",
        price: "From KES 8,000",
        format: "In-person or online",
        image: therapySession,
        whoItsFor: [
            "Families experiencing conflict or tension",
            "Parents and children navigating difficult transitions",
            "Blended families adjusting to new dynamics",
            "Families healing from loss or trauma",
        ],
        whatToExpect: [
            "Sessions with the whole family or subsets as needed",
            "A systemic approach that views the family as a unit",
            "Tools to improve communication and resolve conflict",
            "A safe space for everyone's voice to be heard",
        ],
        approach:
            "We use a systemic, attachment-based lens to understand family patterns and create lasting change. Sessions are collaborative, respectful, and focused on the family's unique needs.",
        faqs: [
            {
                question: "Does everyone need to attend?",
                answer:
                    "Not always. We'll discuss who should be present based on your family's needs and goals.",
            },
            {
                question: "What if family members are resistant?",
                answer:
                    "Resistance is normal. We create a safe, non-judgmental space where everyone can participate at their own pace.",
            },
            {
                question: "Can we have sessions with just part of the family?",
                answer:
                    "Yes. Sometimes working with subsets (parents, siblings, etc.) is the most effective approach.",
            },
        ],
    },
    couples: {
        slug: "couples",
        icon: couplesIcon,
        title: "Couples Counselling",
        subtitle: "Rebuild trust, intimacy, and partnership",
        description:
            "Couples counselling helps partners navigate conflict, rebuild trust, and deepen intimacy. Whether you're facing a crisis or simply want to strengthen your relationship, we create a space for honest, transformative conversations.",
        duration: "75 minutes",
        price: "From KES 7,500",
        format: "In-person or online",
        image: therapySession,
        whoItsFor: [
            "Couples experiencing conflict or disconnection",
            "Partners navigating infidelity or trust issues",
            "Couples preparing for marriage or major transitions",
            "Relationships that feel stuck or stagnant",
        ],
        whatToExpect: [
            "Structured, guided conversations in a neutral space",
            "Tools to improve communication and resolve conflict",
            "Exploration of attachment patterns and relationship dynamics",
            "Support for rebuilding trust and intimacy",
        ],
        approach:
            "We use emotionally focused therapy (EFT) and systemic approaches to help couples reconnect. Sessions are balanced, compassionate, and focused on the relationship — not blame.",
        faqs: [
            {
                question: "What if we're not sure we want to stay together?",
                answer:
                    "That's okay. Therapy can help you gain clarity and make decisions that feel right for you both.",
            },
            {
                question: "Will the therapist take sides?",
                answer:
                    "No. We remain neutral and focused on the relationship, not individual partners.",
            },
            {
                question: "Can we save our relationship?",
                answer:
                    "Every relationship is different. Our goal is to help you explore possibilities and make informed decisions together.",
            },
        ],
    },
    group: {
        slug: "group",
        icon: groupIcon,
        title: "Group Therapy",
        subtitle: "Healing through shared experience",
        description:
            "Group therapy offers a unique space to connect with others facing similar challenges. Led by a trained therapist, small groups provide support, perspective, and the powerful realization that you're not alone.",
        duration: "90 minutes · 8 weeks",
        price: "From KES 3,500 / session",
        format: "In-person",
        image: therapySession,
        whoItsFor: [
            "Individuals seeking community and shared experience",
            "Those dealing with grief, anxiety, or life transitions",
            "People who benefit from peer support and accountability",
            "Anyone looking for a more affordable therapy option",
        ],
        whatToExpect: [
            "Small groups (6-10 people) facilitated by a therapist",
            "Confidential, structured sessions with clear guidelines",
            "Shared stories, insights, and mutual support",
            "Tools and practices to take into daily life",
        ],
        approach:
            "Groups are designed around specific themes (grief, anxiety, relationships) and run for 8 weeks. We create a safe, inclusive space where everyone's voice matters.",
        faqs: [
            {
                question: "What if I'm shy or don't like sharing?",
                answer:
                    "You can participate at your own pace. There's no pressure to share more than you're comfortable with.",
            },
            {
                question: "How is group therapy different from individual therapy?",
                answer:
                    "Group therapy offers peer support and shared learning, while individual therapy is one-to-one. Both are valuable.",
            },
            {
                question: "Can I join a group at any time?",
                answer:
                    "Most groups are closed (fixed members for 8 weeks). We'll let you know when the next cohort starts.",
            },
        ],
    },
    grief: {
        slug: "grief",
        icon: griefCampIcon,
        title: "Grief Camp",
        subtitle: "Therapy for children and teens through play and connection",
        description:
            "Grief Camp is a specialized program for children and teens who have experienced loss. Through play, art, storytelling, and conversation, young people find safe ways to express grief and connect with peers who understand.",
        duration: "45 minutes",
        price: "From KES 4,500",
        format: "In-person",
        image: therapySession,
        whoItsFor: [
            "Children and teens who have lost a loved one",
            "Young people experiencing grief or significant loss",
            "Families navigating loss together",
            "Schools seeking grief support for students",
        ],
        whatToExpect: [
            "Age-appropriate sessions using play, art, and conversation",
            "A safe, non-judgmental space to express feelings",
            "Peer support from others who've experienced loss",
            "Tools to help young people understand and process grief",
        ],
        approach:
            "We use play therapy, narrative therapy, and expressive arts to help children and teens process loss. Sessions are developmentally appropriate and trauma-informed.",
        faqs: [
            {
                question: "How do I know if my child needs Grief Camp?",
                answer:
                    "If your child has experienced loss and is struggling with emotions, behavior, or school, Grief Camp can help.",
            },
            {
                question: "Can parents attend?",
                answer:
                    "We offer parent sessions alongside child sessions to support the whole family.",
            },
            {
                question: "What age range is Grief Camp for?",
                answer:
                    "We work with children ages 5-17, grouped by age and developmental stage.",
            },
        ],
    },
    corporate: {
        slug: "corporate",
        icon: corporateIcon,
        title: "Corporate Wellness",
        subtitle: "Workplace mental health and wellbeing programs",
        description:
            "Corporate wellness programs help organizations build healthier, more resilient teams. From mental health workshops to leadership training and bespoke wellbeing programs, we bring clinical expertise to your workplace.",
        duration: "60–180 minutes",
        price: "On request",
        format: "In-person or online",
        image: therapySession,
        whoItsFor: [
            "Organizations prioritizing employee mental health",
            "Teams experiencing high stress or burnout",
            "Leadership seeking to build emotional intelligence",
            "HR departments looking for wellness programs",
        ],
        whatToExpect: [
            "Workshops on stress, burnout, communication, and resilience",
            "Keynote talks and panel discussions",
            "Bespoke programs tailored to your organization",
            "Ongoing consultation and support",
        ],
        approach:
            "We design programs based on your organization's needs. All content is evidence-based, practical, and delivered by experienced therapists.",
        faqs: [
            {
                question: "What topics do you cover?",
                answer:
                    "Common topics include stress management, burnout prevention, communication, grief in the workplace, and leadership wellbeing.",
            },
            {
                question: "Can you work with remote teams?",
                answer:
                    "Yes. We offer online workshops and programs designed for distributed teams.",
            },
            {
                question: "How do we get started?",
                answer:
                    "Contact us to discuss your organization's needs. We'll design a proposal tailored to you.",
            },
        ],
    },
};

function ServiceDetailPage() {
    const { slug } = Route.useParams();
    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        return (
            <SiteShell>
                <div className="container-page py-20 text-center">
                    <h1 className="text-4xl font-serif mb-4">Service not found</h1>
                    <Link to="/services" preload="intent" className="text-primary-deep hover:underline">
                        View all services
                    </Link>
                </div>
            </SiteShell>
        );
    }

    return (
        <SiteShell>
            {/* HERO */}
            <section className="relative bg-surface overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="absolute right-0 top-0 h-full w-full md:w-[65%] lg:w-[55%] object-cover"
                        fetchPriority="high"
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-transparent"></div>
                </div>

                <div className="relative z-10">
                    <div className="container-page py-12 md:py-16 lg:py-20">
                        <div className="max-w-xl lg:max-w-2xl">
                            <Link
                                to="/services"
                                preload="intent"
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-deep transition mb-6"
                            >
                                ← Back to services
                            </Link>
                            <div className="h-16 w-16 rounded-2xl bg-primary-soft flex items-center justify-center mb-6">
                                <img src={service.icon} alt={service.title} className="h-9 w-9" loading="lazy" width={64} height={64} />
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.05]">
                                {service.title}
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                                {service.subtitle}
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    to="/booking"
                                    search={{ service: service.slug }}
                                    preload="intent"
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    Book this service <ArrowRight size={16} />
                                </Link>
                                <Link to="/contact" preload="intent" className="btn-secondary">
                                    Ask a question
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="bg-background py-16 lg:py-20">
                <div className="container-page">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-serif mb-6">About this service</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="rounded-2xl border border-border bg-card p-6 space-y-5 sticky top-20">
                                <div className="flex items-start gap-3">
                                    <Clock size={20} className="text-primary-deep shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold mb-1">Duration</p>
                                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <DollarSign size={20} className="text-primary-deep shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold mb-1">Investment</p>
                                        <p className="text-sm text-muted-foreground">{service.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users size={20} className="text-primary-deep shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold mb-1">Format</p>
                                        <p className="text-sm text-muted-foreground">{service.format}</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-border">
                                    <Link
                                        to="/booking"
                                        search={{ service: service.slug }}
                                        preload="intent"
                                        className="w-full btn-primary justify-center"
                                    >
                                        Book now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO IT'S FOR */}
            <section className="bg-muted/30 py-16 lg:py-20">
                <div className="container-page">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-serif mb-8 text-center">Who this is for</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {service.whoItsFor.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl bg-card border border-border p-5"
                                >
                                    <CheckCircle size={20} className="text-primary-deep shrink-0 mt-0.5" />
                                    <p className="text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT TO EXPECT */}
            <section className="bg-background py-16 lg:py-20">
                <div className="container-page">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-serif mb-8 text-center">What to expect</h2>
                        <div className="space-y-4">
                            {service.whatToExpect.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl bg-muted/30 border border-border p-5"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-deep text-sm font-semibold">
                                        {index + 1}
                                    </span>
                                    <p className="text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section className="bg-muted/30 py-16 lg:py-20">
                <div className="container-page">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-serif mb-6 text-center">Our approach</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed text-center">
                            {service.approach}
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-background py-16 lg:py-20">
                <div className="container-page">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-serif mb-8 text-center">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {service.faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-border bg-card p-6"
                                >
                                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-background pb-20">
                <div className="container-page">
                    <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-serif text-primary-deep mb-4">
                            Ready to get started?
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Book your first session or reach out with any questions. We're here to
                            help.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/booking"
                                search={{ service: service.slug }}
                                preload="intent"
                                className="btn-primary"
                            >
                                Book this service
                            </Link>
                            <Link to="/contact" preload="intent" className="btn-secondary">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </SiteShell>
    );
}
