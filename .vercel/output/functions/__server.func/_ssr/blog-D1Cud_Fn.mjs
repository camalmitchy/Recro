import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { vt as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-DF2A-bRe.mjs";
import { t as landing_default } from "./landing-DWcwn_jK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-D1Cud_Fn.js
var import_jsx_runtime = require_jsx_runtime();
var posts = [
	{
		title: "From the foxhole to the front porch — a family perspective",
		tag: "Family",
		read: "8 min",
		excerpt: "With great joy and sadness Kenya welcomed home its troops. The readjustment from the family unit takes years. A look at reintegration and redeployment through the lens of family systems.",
		date: "Dec 19, 2017"
	},
	{
		title: "The perfect storm",
		tag: "Relationships",
		read: "6 min",
		excerpt: "As years go by, relationships tend to move and take all kinds of turns and twists. Technology changes, social norms change, needs change but perhaps the change we're not ready to fully embrace is that of the younger generation.",
		date: "May 10, 2017"
	},
	{
		title: "When grief shows up at the office",
		tag: "Workplace",
		read: "5 min",
		excerpt: "What to say (and not say) when a colleague returns to work after a loss."
	},
	{
		title: "Repair conversations for couples",
		tag: "Couples",
		read: "7 min",
		excerpt: "A simple structure that turns most arguments into a chance to grow closer."
	},
	{
		title: "How children grieve differently",
		tag: "Children",
		read: "6 min",
		excerpt: "Why a child laughing the day after a loss doesn't mean they're 'fine'."
	},
	{
		title: "Five gentle ways to start therapy",
		tag: "Therapy 101",
		read: "4 min",
		excerpt: "Tiny first steps for people who've been thinking about it for a while."
	},
	{
		title: "Boundaries that breathe",
		tag: "Relationships",
		read: "5 min",
		excerpt: "Boundaries as care for the relationship — not walls against the person."
	},
	{
		title: "Anxiety, told simply",
		tag: "Mental health",
		read: "6 min",
		excerpt: "What anxiety is actually doing in the body, and how therapy quiets it."
	}
];
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-surface overflow-hidden h-[400px] lg:h-[450px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: landing_default,
				alt: "Blog and insights",
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
								children: "Insights"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-5xl md:text-6xl font-serif text-white leading-[1.05] drop-shadow-lg",
								children: [
									"Quiet work.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Lasting change."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-white/95 leading-relaxed text-base max-w-xl drop-shadow",
								children: "Healing rarely arrives all at once. It is built — page by page, conversation by conversation — in a space designed to hold you."
							})
						]
					})
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16 lg:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "card-lift rounded-3xl border border-border bg-card p-6 flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2.5 py-1 rounded-full bg-primary-soft text-primary-deep font-semibold",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [p.read, " read"]
							}),
							p.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "·"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: p.date
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-lg font-semibold leading-snug",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground leading-relaxed flex-1",
						children: p.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-deep",
						children: ["Read article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })]
					})
				]
			}, p.title))
		})
	})] });
}
//#endregion
export { BlogPage as component };
