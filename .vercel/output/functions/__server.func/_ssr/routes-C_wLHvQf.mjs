import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as HeartHandshake, R as Maximize2, S as ShieldCheck, U as Leaf, k as Play, v as Sparkles, vt as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-DF2A-bRe.mjs";
import { t as landing_default } from "./landing-DWcwn_jK.mjs";
import { t as therapy_session_default } from "./therapy-session-BFuqzT0N.mjs";
import { a as group_therapy_default, i as grief_camp_default$1, n as couples_therapy_default, o as individual_therapy_default, r as family_therapy_default, t as corporate_speaking_default } from "./corporate-speaking-CFmuaAVf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_wLHvQf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var grief_camp_default = "/assets/grief-camp-Dagrzh3c.jpg";
var services = [
	{
		icon: individual_therapy_default,
		title: "Individual therapy",
		body: "One-on-one psychotherapy for anxiety, depression, life transitions and personal growth.",
		accent: "primary",
		serviceKey: "individual-therapy"
	},
	{
		icon: family_therapy_default,
		title: "Family Therapy",
		body: "Strengthen bonds and resolve conflict through compassionate clinical guidance.",
		accent: "teal",
		serviceKey: "family-therapy"
	},
	{
		icon: couples_therapy_default,
		title: "Couples Therapy",
		body: "Rebuild trust, intimacy, and partnership for couples navigating transition or rupture.",
		accent: "lavender",
		serviceKey: "couples-therapy"
	},
	{
		icon: group_therapy_default,
		title: "Group Therapy",
		body: "Healing through shared experience in small, facilitated, confidential groups.",
		accent: "coral",
		serviceKey: "group-therapy"
	},
	{
		icon: grief_camp_default$1,
		title: "Grief Camp",
		body: "Safe, play-based support for children processing loss, change and big emotions.",
		accent: "primary",
		serviceKey: "grief-camps"
	},
	{
		icon: corporate_speaking_default,
		title: "Corporate Speaking",
		body: "Workshops, EAP programs and team check-ins that protect your people's wellbeing.",
		accent: "teal",
		serviceKey: "corporate-speaking"
	}
];
var ServiceIcon = ({ src }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: "",
		className: "w-full h-full"
	});
};
function HomeVideoCard({ video }) {
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const handlePlay = () => {
		setIsPlaying(true);
	};
	const openFullscreen = () => {
		window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-video rounded-2xl bg-black/40 ring-1 ring-white/5 overflow-hidden",
				children: !isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: video.thumbnail,
						alt: video.title,
						className: "absolute inset-0 w-full h-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handlePlay,
						className: "absolute inset-0 grid place-items-center",
						"aria-label": `Play ${video.title}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-14 w-14 place-items-center rounded-full bg-background/90 text-foreground group-hover:scale-110 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
								size: 20,
								className: "ml-0.5",
								fill: "currentColor"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-3 right-3 text-[11px] font-mono px-2 py-1 rounded bg-black/70 text-background",
						children: video.duration
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`,
					title: video.title,
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true,
					className: "absolute inset-0 w-full h-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: openFullscreen,
					className: "absolute top-3 right-3 z-10 p-2 rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors",
					"aria-label": "Open fullscreen",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { size: 16 })
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-xl font-serif text-background",
				children: video.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-background/60 leading-relaxed",
				children: video.desc
			})
		]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden min-h-[600px] lg:min-h-[700px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: landing_default,
					alt: "A diverse family sitting together in a bright sunlit therapy room",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 z-[1]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-page h-full flex items-end pb-16 md:pb-20 pt-12 md:pt-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl pt-50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05] drop-shadow-lg",
									children: ["Walking with you, step by step.", " "]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-white/95 leading-relaxed text-base lg:text-lg max-w-xl drop-shadow",
									children: "A compassionate space for healing, growth, and emotional wellness — for individuals, couples, families, and organisations navigating life's most difficult moments."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/booking",
										className: "btn-primary",
										children: ["Book a session ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/40 text-white px-6 py-2.5 rounded-xl font-semibold transition inline-flex items-center gap-2",
										children: "Explore services"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-12 grid grid-cols-3 gap-6 max-w-md",
									children: [
										{
											k: "7+",
											v: "Years of care"
										},
										{
											k: "2.4k",
											v: "Sessions a year"
										},
										{
											k: "9",
											v: "Camp cohorts"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-3xl font-semibold text-white drop-shadow",
										children: s.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-xs text-white/80",
										children: s.v
									})] }, s.v))
								})
							]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "What we do"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl md:text-4xl font-semibold tracking-tight",
							children: "Support for every season of life"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Whether you're navigating loss, growing as a couple, raising kids or leading a team — there's a Recro service for that."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "text-sm font-semibold text-primary-deep inline-flex items-center gap-1.5 hover:gap-2.5 transition-all",
					children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group card-lift relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-20 h-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceIcon, { src: s.icon })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: s.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/$slug",
									params: { slug: s.serviceKey },
									className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep group-hover:gap-2.5 transition-all",
									children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/booking",
									search: { service: s.serviceKey },
									className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep group-hover:gap-2.5 transition-all",
									children: ["Book this ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
								})
							]
						})
					]
				}, s.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-20 grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] rounded-[2rem] overflow-hidden ring-1 ring-border shadow-[var(--shadow-lift)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: therapy_session_default,
							alt: "Two people in a calm therapy session",
							loading: "lazy",
							width: 1200,
							height: 900,
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block absolute -bottom-6 -right-6 rounded-2xl bg-background border border-border p-5 shadow-[var(--shadow-lift)] max-w-[16rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
							className: "text-primary",
							size: 20
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-medium text-foreground leading-snug",
							children: "\"I left lighter than I came in.\" — A Recro client"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Our approach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl md:text-4xl font-semibold tracking-tight",
						children: "A wholistic view of what it means to be well."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground leading-relaxed",
						children: "Our distinguishing touch is reassuring and friendly — yet always holds a professional demeanor. Every session is designed to feel safe, human, and forward-moving."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-4",
						children: [
							"Licensed psychotherapists and counsellors",
							"Confidential by default, always",
							"Flexible in-person and virtual sessions",
							"Sliding-scale options for those in need"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "10",
									height: "10",
									viewBox: "0 0 12 12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M2 6.5L5 9.5L10 3"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-foreground",
								children: p
							})]
						}, p))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-[2rem] bg-[#3F5B43] shadow-[var(--shadow-lift)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 md:p-12 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-4",
								children: "Signature Programme"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl md:text-4xl font-semibold tracking-tight text-white",
								children: "The Recro Grief Camp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-white/85 leading-relaxed max-w-md",
								children: "A child-safe, family-friendly therapeutic camp for adolescents navigating the loss of a parent, sibling, or close caregiver. Designed and led by licensed clinicians."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/grief-camp",
									className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#3F5B43] font-semibold text-sm hover:bg-white/90 transition",
									children: "Apply for Grief Camp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/grief-camp",
									className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:border-white/50 transition",
									children: "Sponsor a Child"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-[280px] lg:min-h-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: grief_camp_default,
							alt: "Children in a therapeutic camp setting",
							loading: "lazy",
							width: 1600,
							height: 900,
							className: "absolute inset-0 h-full w-full object-cover"
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[2rem] bg-card border border-border shadow-[var(--shadow-lift)] p-8 md:p-12 grid lg:grid-cols-2 gap-10 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Begin healing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl md:text-5xl font-serif tracking-tight text-foreground leading-[1.1]",
							children: "A first session is a quiet act of courage."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "Choose your service and a time that works for you. We'll confirm within one working day. All sessions are strictly confidential."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3 text-sm text-foreground",
							children: [
								"M-Pesa & bank transfer supported",
								"In-person, online or phone",
								"Free 15-min orientation call available"
							].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary-deep" }), p]
							}, p))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							const service = String(fd.get("service") || "individual");
							window.location.href = `/booking?service=${encodeURIComponent(service)}`;
						},
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3",
									children: "Support type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "service",
									defaultValue: "individual",
									className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground appearance-none cursor-pointer hover:border-primary transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "individual",
											children: "Individual Therapy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "couples",
											children: "Couples & Families"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "children",
											children: "Children & Grief"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "corporate",
											children: "Corporate Wellness"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3",
										children: "Preferred date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										name: "date",
										className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground hover:border-primary transition-colors"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3",
										children: "Mode"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "mode",
										className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground appearance-none cursor-pointer hover:border-primary transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In-person" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Online" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Phone" })
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "btn-primary w-full justify-center mt-2",
								children: ["Continue to booking ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
							})
						]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-20 grid lg:grid-cols-12 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Why Recro"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl md:text-5xl font-serif tracking-tight text-foreground leading-[1.05]",
						children: [
							"Clinically credible.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Deeply human."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-8 grid sm:grid-cols-3 gap-8",
					children: [
						{
							icon: ShieldCheck,
							title: "Confidential by design",
							body: "All sessions and records are handled in line with the Kenya Data Protection Act."
						},
						{
							icon: HeartHandshake,
							title: "Therapist–client fit",
							body: "We match you with a clinician suited to your goals — and you can change at any time."
						},
						{
							icon: Sparkles,
							title: "Evidence-based care",
							body: "Modern approaches — CBT, EFT, trauma-informed care — adapted to your context."
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 place-items-center rounded-full bg-surface-2 text-primary-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-semibold text-foreground",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: f.body
						})
					] }, f.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[var(--ink,#2b332e)] text-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent",
						children: "Media & insights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl font-serif tracking-tight text-background",
						children: "Watch & reflect"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/media",
						className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent inline-flex items-center gap-2 hover:gap-3 transition-all",
						children: ["View media library ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid md:grid-cols-3 gap-6",
					children: [
						{
							title: "Benefits of Therapy",
							desc: "Why talking helps — and what changes inside us when it does.",
							duration: "12:40",
							videoId: "yrtRlE6HlUU",
							thumbnail: "https://i.ytimg.com/vi/yrtRlE6HlUU/hqdefault.jpg"
						},
						{
							title: "Forgiveness",
							desc: "Understanding the emotional architecture of letting go.",
							duration: "9:08",
							videoId: "f3omumMGIw0",
							thumbnail: "https://i.ytimg.com/vi/f3omumMGIw0/hqdefault.jpg"
						},
						{
							title: "Expectations in Relationships",
							desc: "Where unspoken expectations come from and how to name them.",
							duration: "14:22",
							videoId: "6yd3gLyuR_0",
							thumbnail: "https://i.ytimg.com/vi/6yd3gLyuR_0/hqdefault.jpg"
						}
					].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeVideoCard, { video: v }, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground",
						children: "Blogs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl md:text-5xl font-serif tracking-tight text-foreground",
						children: "Read & recover"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "text-xs font-semibold tracking-[0.2em] uppercase text-primary-deep inline-flex items-center gap-2 hover:gap-3 transition-all",
						children: ["All blogs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid md:grid-cols-3 gap-6",
					children: [
						{
							category: "Therapy",
							title: "What to expect from your first therapy session",
							desc: "A gentle walkthrough of what really happens in a first session — and what doesn't.",
							read: "6 min read"
						},
						{
							category: "Grief",
							title: "Supporting a grieving child: a guide for parents",
							desc: "Practical, age-appropriate ways to be with a child after loss — without rushing the healing.",
							read: "9 min read"
						},
						{
							category: "Workplace wellness",
							title: "Recognising burnout before it breaks you",
							desc: "The early signals most of us miss — and what to do once you spot them.",
							read: "7 min read"
						}
					].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "group card-lift block rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground",
								children: b.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-serif text-foreground leading-snug",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: b.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs text-muted-foreground",
								children: b.read
							})
						]
					}, b.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-[2rem] bg-surface py-16 px-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-5xl font-semibold tracking-tight text-foreground",
							children: "Restoration begins with a conversation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg text-muted-foreground max-w-2xl mx-auto",
							children: "Whether you’re navigating personal challenges or arranging support for your team, Recro Group is here. Friendly, professional, and entirely confidential."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/booking",
								className: "btn-primary",
								children: "Book a Session"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "btn-secondary",
								children: "Contact Recro"
							})]
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { HomePage as component };
