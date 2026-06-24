import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { gt as ArrowRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./SiteShell-CtOG-apJ.mjs";
import { a as individual_therapy_default, i as group_therapy_default, n as couples_therapy_default, r as family_therapy_default, t as corporate_speaking_default } from "./corporate-speaking-DONsp-xf.mjs";
import { t as therapy_session_default } from "./therapy-session-BFuqzT0N.mjs";
import { t as grief_camp_default } from "./grief-camp-B9WMM4YQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BHGSt6Hn.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		id: "01",
		slug: "individual",
		icon: individual_therapy_default,
		title: "Individual Therapy",
		description: "Confidential one-to-one sessions for personal growth, anxiety, depression, and trauma recovery.",
		duration: "60 minutes",
		price: "From KES 5,000"
	},
	{
		id: "02",
		slug: "family",
		icon: family_therapy_default,
		title: "Family Therapy",
		description: "Strengthen bonds and resolve conflict through compassionate clinical guidance.",
		duration: "90 minutes",
		price: "From KES 8,000"
	},
	{
		id: "03",
		slug: "couples",
		icon: couples_therapy_default,
		title: "Couples Counselling",
		description: "Rebuild trust, intimacy, and partnership for couples navigating transition or rupture.",
		duration: "75 minutes",
		price: "From KES 7,500"
	},
	{
		id: "04",
		slug: "group",
		icon: group_therapy_default,
		title: "Group Therapy",
		description: "Healing through shared experience in small, facilitated, confidential groups.",
		duration: "90 minutes · 8 weeks",
		price: "From KES 3,500 / session"
	},
	{
		id: "05",
		slug: "grief",
		icon: grief_camp_default,
		title: "Grief Camp",
		description: "Therapy for children and teens through play, art, storytelling and conversation.",
		duration: "45 minutes",
		price: "From KES 4,500"
	},
	{
		id: "06",
		slug: "corporate",
		icon: corporate_speaking_default,
		title: "Corporate Wellness",
		description: "Workplace mental-health workshops, keynotes, and bespoke wellness programmes.",
		duration: "60–180 minutes",
		price: "On request"
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-surface overflow-hidden h-[400px] lg:h-[450px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: therapy_session_default,
					alt: "Therapy session",
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
									children: "Our Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg",
									children: [
										"Care that meets you",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"where you are"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow",
									children: "From individual sessions to family work and organisational wellness — we build the right journey with you."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "btn-primary inline-flex items-center gap-2",
										children: ["Talk to us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/booking",
										search: { service: void 0 },
										className: "bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-6 py-2.5 rounded-xl font-semibold transition inline-flex items-center gap-2",
										children: "Book a session"
									})]
								})
							]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-16 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-[2rem] bg-white border border-border/40 p-7 hover:shadow-md transition-all relative overflow-hidden group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-6 right-6 text-[56px] font-light text-muted/8 leading-none tracking-tight",
							children: service.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 h-12 w-12 rounded-full bg-muted/30 flex items-center justify-center mb-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.icon,
								alt: `${service.title} icon`,
								className: "h-6 w-6 object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-serif text-foreground mb-3 leading-tight",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[14px] text-muted-foreground leading-relaxed mb-6",
									children: service.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-border/50 pt-4 mb-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "uppercase tracking-[0.15em] text-muted-foreground/70 text-[10px] mb-1.5",
											children: "Duration"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-foreground font-normal text-[13px] whitespace-pre-line",
											children: service.duration
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "uppercase tracking-[0.15em] text-muted-foreground/70 text-[10px] mb-1.5",
												children: "From"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-foreground font-normal text-[13px] whitespace-pre-line",
												children: service.price
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `/services/${service.slug}`,
									className: "inline-flex items-center gap-2 text-xs font-medium text-muted-foreground/80 hover:text-foreground transition-colors uppercase tracking-[0.12em]",
									children: ["View Service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										size: 14,
										strokeWidth: 1.5
									})]
								})
							]
						})
					]
				}, service.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/30 py-16 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-3xl mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-card border border-border p-8 lg:p-10 flex flex-col items-center text-center shadow-[var(--shadow-soft)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-5xl text-primary/20 font-serif mb-6",
								children: "\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "text-lg md:text-xl font-serif text-foreground leading-relaxed",
								children: "\"I felt heard from the very first session. Recro gave me language for things I had carried silently for years.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-1 text-primary",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: "★"
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold text-foreground",
								children: "A. M."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Individual therapy client"
							})
						]
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-muted/30 p-8 md:p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-serif text-primary-deep mb-4",
						children: "Not sure where to start?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground max-w-2xl mx-auto mb-8",
						children: "A short intake call helps match you with the right therapist and approach. We're here to guide you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "btn-primary",
							children: "Talk to us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/booking",
							search: { service: void 0 },
							className: "btn-secondary",
							children: "Book a session"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
