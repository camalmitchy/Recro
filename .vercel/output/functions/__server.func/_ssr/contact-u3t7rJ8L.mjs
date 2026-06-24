import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Phone, B as Mail, tt as Clock, w as Send, z as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-CtOG-apJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-u3t7rJ8L.js
var import_jsx_runtime = require_jsx_runtime();
var hero_4_default = "/assets/hero-4-zdGhdx1s.jpg";
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-surface overflow-hidden h-[400px] lg:h-[450px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_4_default,
					alt: "Contact us",
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
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg",
									children: [
										"We'd love to",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"hear from you"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow",
									children: "Send a message or use the details below — we typically reply within one business day."
								})
							]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-16 lg:py-20 grid lg:grid-cols-5 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
				},
				className: "lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-soft)] space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Your name",
							placeholder: "Jane Doe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							placeholder: "jane@example.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone (optional)",
						placeholder: "+254 700 000 000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-foreground",
						children: "How can we help?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 5,
						placeholder: "Tell us a little about what you're looking for…",
						className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "btn-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), " Send message"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-2 space-y-4",
				children: [[
					{
						icon: Phone,
						title: "Call us",
						value: "+254 700 000 000"
					},
					{
						icon: Mail,
						title: "Email",
						value: "hello@recrogroup.org"
					},
					{
						icon: MapPin,
						title: "Visit",
						value: "Nairobi, Kenya — by appointment"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 flex items-start gap-4 card-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: c.value
					})] })]
				}, c.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: "Mon–Fri · 8:00 – 18:00"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: "Sat · 9:00 – 14:00"
							})]
						})]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page pb-16 lg:pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: "https://www.openstreetmap.org/export/embed.html?bbox=36.87738%2C-1.22168%2C36.88138%2C-1.21768&layer=mapnik&marker=-1.21968%2C36.87938",
					width: "100%",
					height: "450",
					style: { border: 0 },
					allowFullScreen: true,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					title: "Recro Group Location"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Coordinates: 1° 13' 11\" S, 36° 52' 46\" E · Nairobi, Kenya"
				})
			})]
		})
	] });
}
function Field({ label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-sm font-medium text-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...rest,
		className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
	})] });
}
//#endregion
export { ContactPage as component };
