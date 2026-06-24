import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { O as Plus } from "../_libs/lucide-react.mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.corporate-speaking-TTYniPCg.js
var import_jsx_runtime = require_jsx_runtime();
var ROWS = [
	{
		org: "Acme Ltd",
		contact: "HR Lead — Diana M.",
		topic: "Workplace wellbeing keynote",
		when: "12 Aug 2026",
		budget: "KES 200k",
		status: "Proposal sent"
	},
	{
		org: "Safi Bank",
		contact: "L&D — Peter O.",
		topic: "Manager mental-health training",
		when: "Sept 2026",
		budget: "—",
		status: "New lead"
	},
	{
		org: "Riverbend School",
		contact: "Principal — Mary K.",
		topic: "Parent grief workshop",
		when: "Oct 2026",
		budget: "KES 80k",
		status: "Negotiating"
	},
	{
		org: "TechCo",
		contact: "People Ops — John M.",
		topic: "Burnout panel",
		when: "TBC",
		budget: "—",
		status: "Won"
	}
];
var TONE = {
	"New lead": "info",
	"Proposal sent": "warning",
	"Negotiating": "warning",
	"Won": "success",
	"Lost": "muted"
};
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Corporate Speaking",
				description: "Track keynote, training and workshop pipeline.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Add lead"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-5 gap-3",
				children: [
					{
						l: "New",
						v: 5
					},
					{
						l: "Proposal sent",
						v: 4
					},
					{
						l: "Negotiating",
						v: 2
					},
					{
						l: "Won (YTD)",
						v: 11
					},
					{
						l: "Revenue (YTD)",
						v: "KES 1.4M"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: s.l
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold mt-1",
						children: s.v
					})]
				}, s.l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns: [
					"Organization",
					"Contact",
					"Topic",
					"Event date",
					"Budget",
					"Status",
					"Actions"
				],
				rows: ROWS.map((r) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: r.org
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: r.contact
					}),
					r.topic,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: r.when
					}),
					r.budget,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: TONE[r.status] ?? "muted",
						children: r.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs font-semibold text-primary-deep hover:underline",
						children: "Open"
					})
				])
			}) })
		]
	});
}
//#endregion
export { Page as component };
