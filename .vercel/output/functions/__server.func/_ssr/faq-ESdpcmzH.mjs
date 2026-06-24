import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { st as ChevronDown } from "../_libs/lucide-react.mjs";
import { s as cn } from "./dropdown-menu-Sj0K9LUY.mjs";
import { t as SiteShell } from "./SiteShell-CtOG-apJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-ESdpcmzH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var home_default = "/assets/home-BifsESNU.png";
var faqs = [
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
			}
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
			}
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
			}
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
			}
		]
	}
];
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-surface overflow-hidden h-[400px] lg:h-[450px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: home_default,
				alt: "FAQ",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30 z-[1]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page h-full flex items-center py-16 lg:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white",
								children: "FAQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg",
								children: [
									"Questions,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"gently answered"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow",
								children: "Everything you might want to know before reaching out."
							})
						]
					})
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16 lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mx-auto text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-serif text-primary-deep",
					children: "Everything you need to know"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground leading-relaxed",
					children: "Find answers to the most common questions about therapy, booking, and working with Recro Group."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid lg:grid-cols-2 gap-8 lg:gap-12",
				children: faqs.map((category, catIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold tracking-[0.2em] uppercase text-primary-deep",
								children: category.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "space-y-4",
						children: category.questions.map((faq, qIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: `cat-${catIndex}-q-${qIndex}`,
							className: "rounded-2xl border border-border bg-card px-6 py-1 shadow-sm hover:shadow-md transition-shadow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
								className: "text-left text-base font-semibold hover:no-underline py-5",
								children: faq.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "text-muted-foreground leading-relaxed pb-5",
								children: faq.a
							})]
						}, qIndex))
					})]
				}, category.category))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 max-w-4xl mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-muted/50 border border-border p-8 md:p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl md:text-3xl font-serif text-primary-deep",
							children: "Still have questions?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-xl mx-auto",
							children: "We're here to help. Reach out and we'll get back to you within one business day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/contact",
								className: "btn-primary",
								children: "Contact us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/booking",
								className: "btn-secondary",
								children: "Book a session"
							})]
						})
					]
				})
			})
		]
	})] });
}
//#endregion
export { FaqPage as component };
