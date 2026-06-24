import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as Download, O as Plus, T as Search } from "../_libs/lucide-react.mjs";
import { i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.customers-CR-YVnjQ.js
var import_jsx_runtime = require_jsx_runtime();
var ROWS = [
	{
		name: "Amina K.",
		email: "amina@example.com",
		phone: "+254 700 111 222",
		type: "Individual",
		last: "Today",
		bookings: 7
	},
	{
		name: "Wanjiku & James",
		email: "wj@example.com",
		phone: "+254 711 333 444",
		type: "Couple",
		last: "Yesterday",
		bookings: 4
	},
	{
		name: "Brian O.",
		email: "brian@example.com",
		phone: "+254 722 555 666",
		type: "Family",
		last: "2d ago",
		bookings: 2
	},
	{
		name: "Grace N.",
		email: "grace@example.com",
		phone: "+254 733 777 888",
		type: "Individual",
		last: "3d ago",
		bookings: 1
	},
	{
		name: "Acme Ltd",
		email: "hr@acme.co.ke",
		phone: "+254 20 555 0100",
		type: "Corporate",
		last: "1w ago",
		bookings: 3
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Customers",
				description: "Client profiles, history, and engagement — no clinical notes.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-[var(--admin-border)] text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), " Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Add customer"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-3 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 14,
						className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "Search by name, email or phone…",
						className: "w-full pl-9 pr-3 h-9 rounded-lg bg-[var(--admin-bg)] border border-[var(--admin-border)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-9 px-3 rounded-lg border border-[var(--admin-border)] bg-[var(--admin-surface)] text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All types" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Individual" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Couple" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Family" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Corporate" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns: [
					"Name",
					"Email",
					"Phone",
					"Type",
					"Last activity",
					"Bookings"
				],
				rows: ROWS.map((r) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: r.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: r.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: r.phone
					}),
					r.type,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: r.last
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: r.bookings
					})
				])
			}) })
		]
	});
}
//#endregion
export { Page as component };
