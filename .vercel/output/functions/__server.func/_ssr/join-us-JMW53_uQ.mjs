import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./use-auth-BFFzin-l.mjs";
import { _ as Navigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as HeartHandshake, S as ShieldCheck, v as Sparkles } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-DF2A-bRe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join-us-JMW53_uQ.js
var import_jsx_runtime = require_jsx_runtime();
function JoinUsPage() {
	const { user, loading } = useAuth();
	if (!loading && user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/profile" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-16 md:py-24 max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 12 }), " Welcome"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl md:text-5xl font-semibold tracking-tight",
					children: "Join Recro Group"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "A safe, calm space to access care, book sessions and manage your journey."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid md:grid-cols-2 gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/login",
				className: "group rounded-2xl border border-border bg-surface p-8 hover:border-primary hover:shadow-[var(--shadow-glow)] transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-deep mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: "Sign in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Already have an account? Continue where you left off."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-5 inline-flex text-sm font-semibold text-primary-deep group-hover:underline",
						children: "Sign in →"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/signup",
				className: "group rounded-2xl border border-primary bg-primary p-8 text-primary-foreground hover:opacity-95 transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-white/15 mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: "Create account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-primary-foreground/85",
						children: "New here? Set up your profile in under a minute."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-5 inline-flex text-sm font-semibold group-hover:underline",
						children: "Get started →"
					})
				]
			})]
		})]
	}) });
}
//#endregion
export { JoinUsPage as component };
