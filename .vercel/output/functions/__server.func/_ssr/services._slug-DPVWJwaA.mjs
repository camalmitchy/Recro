import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { vt as ArrowRight, yt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-DF2A-bRe.mjs";
import { n as SERVICES, t as Route } from "./services._slug-DxJxb1n5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DPVWJwaA.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetailPage() {
	const { slug } = Route.useLoaderData();
	const service = SERVICES[slug];
	const Icon = service.icon;
	const others = Object.values(SERVICES).filter((s) => s.key !== service.key).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page pt-16 lg:pt-24 pb-20 lg:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep/70 hover:text-primary-deep hover:gap-3 transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 13 }), " All services"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep/60 mb-6",
								children: "Service · Therapeutic Care"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-serif text-primary-deep leading-[0.92] tracking-tight text-5xl md:text-7xl lg:text-[7.5rem]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic font-light",
									children: service.title.split(" ")[0]
								}), service.title.split(" ").slice(1).join(" ") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: service.title.split(" ").slice(1).join(" ")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 max-w-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg lg:text-xl font-light leading-relaxed text-foreground/75",
									children: service.intro
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-20 bg-primary-deep" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/booking",
									search: { service: service.key },
									className: "btn-primary rounded-full px-7",
									children: service.ctaLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "btn-secondary rounded-full px-7",
									children: "Ask a question"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-primary-soft via-surface to-primary-soft/40 grid place-items-center shadow-[var(--shadow-lift)] relative overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary.DEFAULT)/0.25,transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-28 w-28 rounded-3xl bg-primary-deep text-primary-soft grid place-items-center shadow-[var(--shadow-lift)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 52,
									strokeWidth: 1.4
								})
							})]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12 lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8 space-y-28 lg:space-y-36",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl md:text-4xl italic text-primary-deep border-b border-border pb-5",
							children: "Who this helps"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-lg leading-relaxed text-foreground/80 max-w-2xl",
							children: service.whoFor
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-primary-soft/60 rounded-[2rem] p-10 lg:p-14 relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "relative font-serif text-3xl md:text-4xl italic text-primary-deep",
										children: "Focus areas"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "relative mt-3 text-sm text-primary-deep/60 max-w-md",
										children: "The themes that most often bring people here."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative mt-10 flex flex-wrap gap-3",
										children: service.concerns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border text-[11px] tracking-[0.18em] uppercase text-primary-deep hover:bg-primary-deep hover:text-primary-soft hover:border-primary-deep transition-all duration-300 cursor-default",
											children: c
										}, c))
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl md:text-4xl italic text-primary-deep border-b border-border pb-5",
							children: "The path forward"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-14 space-y-14",
							children: service.expect.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "group flex flex-col md:flex-row gap-6 md:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-serif italic text-5xl md:text-6xl text-primary/40 group-hover:text-primary-deep transition-colors duration-500 shrink-0 leading-none",
									children: [String(i + 1).padStart(2, "0"), "."]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-3 border-t border-border md:border-0 md:pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground/80 leading-relaxed max-w-xl text-lg font-light",
										children: step
									})
								})]
							}, step))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between gap-6 border-b border-border pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl md:text-4xl italic text-primary-deep",
								children: "Perspectives"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep border-b border-primary-deep pb-1 hover:gap-3",
								children: "View blog"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid md:grid-cols-2 gap-10",
							children: service.relatedReading.slice(0, 2).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog",
								className: "group block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[16/10] rounded-2xl bg-primary-soft/70 overflow-hidden mb-5 relative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent group-hover:scale-105 transition-transform duration-700" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] tracking-[0.25em] uppercase text-primary-deep/60 font-semibold",
										children: [r.category, " · 5 min read"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-3 font-serif text-2xl text-primary-deep leading-snug group-hover:italic transition-all",
										children: r.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground leading-relaxed",
										children: r.body
									})
								]
							}, r.title))
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:sticky lg:top-24 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[2rem] bg-primary-deep text-primary-soft p-10 shadow-[var(--shadow-lift)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-soft/60 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-primary-soft/40" }), " At a glance"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
										className: "mt-8 space-y-6",
										children: [
											["Duration", service.duration],
											["Pricing", service.pricing],
											["Mode", service.mode],
											["Availability", service.booking]
										].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-b border-primary-soft/15 pb-4 last:border-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-[10px] tracking-[0.25em] uppercase text-primary-soft/55 mb-1.5",
												children: k
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-base font-medium",
												children: v
											})]
										}, k))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/booking",
										search: { service: service.key },
										className: "mt-10 w-full inline-flex items-center justify-center py-4 rounded-full bg-primary-soft text-primary-deep text-[11px] tracking-[0.3em] uppercase font-semibold hover:tracking-[0.4em] transition-all",
										children: "Request intake"
									})
								]
							}),
							service.relatedMedia[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[2rem] bg-card border border-border p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground",
										children: "Listen"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-serif italic text-2xl text-primary-deep leading-snug",
										children: service.relatedMedia[0].title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: service.relatedMedia[0].meta
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "mt-6 inline-flex items-center gap-3 group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-11 w-11 rounded-full border border-primary-deep grid place-items-center text-primary-deep group-hover:bg-primary-deep group-hover:text-primary-soft transition-all",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-3.5 h-3.5 fill-current",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" })
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] tracking-[0.3em] uppercase text-primary-deep font-semibold",
											children: "Play session"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[2rem] bg-surface p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6",
									children: "More media"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-5",
									children: service.relatedMedia.slice(1).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "border-b border-border pb-4 last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif text-lg text-primary-deep leading-snug",
											children: m.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: m.meta
										})]
									}, m.title))
								})]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-20 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep/60",
						children: "Continue exploring"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif italic text-4xl md:text-5xl text-primary-deep",
						children: "Other services"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-primary-deep border-b border-primary-deep pb-1",
						children: "View all"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid md:grid-cols-3 gap-8",
					children: others.map((o) => {
						const OIcon = o.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: o.key },
							className: "group block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "aspect-[5/4] rounded-2xl bg-primary-soft/70 mb-6 relative overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-deep/10 group-hover:scale-105 transition-transform duration-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-5 left-5 h-12 w-12 rounded-2xl bg-primary-deep text-primary-soft grid place-items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OIcon, {
											size: 20,
											strokeWidth: 1.5
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-primary-deep group-hover:italic transition-all",
									children: o.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2",
									children: o.intro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-primary-deep font-semibold group-hover:gap-3 transition-all",
									children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 12 })]
								})
							]
						}, o.key);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-24 lg:py-32 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif italic text-3xl md:text-4xl text-primary-deep max-w-2xl mx-auto leading-snug",
					children: "Ready to begin the conversation?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted-foreground max-w-md mx-auto",
					children: "A short, confidential intake helps us match you with the right therapist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/booking",
					search: { service: service.key },
					className: "mt-10 inline-flex items-center justify-center px-12 py-5 rounded-full bg-primary-deep text-primary-soft text-[11px] tracking-[0.3em] uppercase font-semibold hover:tracking-[0.4em] transition-all",
					children: service.ctaLabel
				})
			]
		})
	] });
}
//#endregion
export { ServiceDetailPage as component };
