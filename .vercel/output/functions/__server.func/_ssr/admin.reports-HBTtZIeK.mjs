import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as Download } from "../_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./AdminShell-DK9zQ2wy.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, n as BarChart, o as Line, r as LineChart, s as CartesianGrid } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.reports-HBTtZIeK.js
var import_jsx_runtime = require_jsx_runtime();
var revenue = [
	{
		m: "Jan",
		v: 320
	},
	{
		m: "Feb",
		v: 410
	},
	{
		m: "Mar",
		v: 380
	},
	{
		m: "Apr",
		v: 520
	},
	{
		m: "May",
		v: 610
	},
	{
		m: "Jun",
		v: 720
	}
];
var services = [
	{
		s: "Individual",
		v: 42
	},
	{
		s: "Couples",
		v: 28
	},
	{
		s: "Family",
		v: 18
	},
	{
		s: "Children",
		v: 22
	},
	{
		s: "Grief",
		v: 16
	},
	{
		s: "Corporate",
		v: 9
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Reports",
				description: "Operational and financial insights — export anything as CSV.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-[var(--admin-border)] text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), " Export CSV"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-4 gap-3",
				children: [
					{
						l: "Revenue (YTD)",
						v: "KES 2.96M"
					},
					{
						l: "Bookings (YTD)",
						v: "612"
					},
					{
						l: "Avg ticket",
						v: "KES 4,840"
					},
					{
						l: "Grief camp",
						v: "84 apps"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Revenue (KES 000)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-60 mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: revenue,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "#E7EFE9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "m",
									stroke: "#52606D",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "#52606D",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "v",
									stroke: "#4F6F52",
									strokeWidth: 2.5,
									dot: { r: 3 }
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Service demand"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-60 mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: services,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "#E7EFE9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "s",
									stroke: "#52606D",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "#52606D",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "v",
									fill: "#4A6FA5",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						}) })
					})]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
