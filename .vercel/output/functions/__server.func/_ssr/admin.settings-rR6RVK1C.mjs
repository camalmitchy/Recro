import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Mail, T as Search, X as Globe, b as Shield, et as CreditCard, ut as Calendar } from "../_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./AdminShell-DK9zQ2wy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-rR6RVK1C.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		icon: CreditCard,
		title: "Payments",
		desc: "M-Pesa till, bank account, card placeholder."
	},
	{
		icon: Mail,
		title: "Email & SMS",
		desc: "From address, reminder templates, SMS sender ID."
	},
	{
		icon: Calendar,
		title: "Booking rules",
		desc: "Hours, lead time, buffer between sessions."
	},
	{
		icon: Globe,
		title: "Site",
		desc: "Logo, contact info, social links."
	},
	{
		icon: Shield,
		title: "Privacy",
		desc: "Consent text, data retention, DPO contact."
	},
	{
		icon: Search,
		title: "SEO",
		desc: "Default meta, sitemap & robots."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Settings",
			description: "Tune the platform without touching code."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
			children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 hover:border-primary/40 transition-colors",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold mt-3",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: s.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs font-semibold text-primary-deep hover:underline mt-3",
						children: "Configure →"
					})
				]
			}, s.title))
		})]
	});
}
//#endregion
export { Page as component };
