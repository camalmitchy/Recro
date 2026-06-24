import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { O as Plus, Z as Funnel, h as Table2, ut as Calendar } from "../_libs/lucide-react.mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DK9zQ2wy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.appointments-CO3bS_x5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TONE = {
	Requested: "info",
	Pending: "warning",
	Confirmed: "success",
	Completed: "muted",
	Cancelled: "danger",
	"No-show": "danger"
};
var ROWS = [
	{
		who: "Amina K.",
		svc: "Individual",
		when: "Today · 11:00",
		therapist: "Dr. Mwangi",
		status: "Confirmed"
	},
	{
		who: "Wanjiku & James",
		svc: "Couples",
		when: "Today · 14:00",
		therapist: "Dr. Otieno",
		status: "Pending"
	},
	{
		who: "Brian O.",
		svc: "Children",
		when: "Tomorrow · 09:30",
		therapist: "—",
		status: "Requested"
	},
	{
		who: "Grace N.",
		svc: "Grief support",
		when: "Wed · 16:00",
		therapist: "Dr. Mwangi",
		status: "Confirmed"
	},
	{
		who: "Acme Ltd",
		svc: "Corporate workshop",
		when: "Fri · 10:00",
		therapist: "Team",
		status: "Confirmed"
	},
	{
		who: "Maria P.",
		svc: "Family",
		when: "Last Mon · 15:00",
		therapist: "Dr. Otieno",
		status: "Completed"
	},
	{
		who: "Tom W.",
		svc: "Individual",
		when: "Last Tue · 11:00",
		therapist: "Dr. Mwangi",
		status: "No-show"
	}
];
function Page() {
	const [view, setView] = (0, import_react.useState)("table");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Appointments",
				description: "Manage scheduled sessions across all services and therapists.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex rounded-lg border border-[var(--admin-border)] p-0.5 bg-[var(--admin-surface)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setView("table"),
						className: `inline-flex items-center gap-1.5 px-3 h-8 rounded-md text-sm ${view === "table" ? "bg-primary-soft text-primary-deep font-semibold" : "text-muted-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table2, { size: 14 }), " Table"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setView("calendar"),
						className: `inline-flex items-center gap-1.5 px-3 h-8 rounded-md text-sm ${view === "calendar" ? "bg-primary-soft text-primary-deep font-semibold" : "text-muted-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 14 }), " Calendar"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " New appointment"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-3 flex flex-wrap gap-2 items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, {
						size: 14,
						className: "text-muted-foreground ml-2"
					}),
					[
						"All services",
						"Individual",
						"Couples",
						"Family",
						"Children",
						"Grief",
						"Corporate"
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `text-xs px-3 h-7 rounded-full border ${i === 0 ? "bg-primary-soft text-primary-deep border-primary/30 font-semibold" : "border-[var(--admin-border)] text-muted-foreground hover:bg-[var(--admin-bg)]"}`,
						children: s
					}, s)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2 text-[var(--admin-border)]",
						children: "|"
					}),
					[
						"All",
						"Requested",
						"Pending",
						"Confirmed",
						"Completed",
						"Cancelled"
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `text-xs px-3 h-7 rounded-full border ${i === 0 ? "bg-primary-soft text-primary-deep border-primary/30 font-semibold" : "border-[var(--admin-border)] text-muted-foreground hover:bg-[var(--admin-bg)]"}`,
						children: s
					}, s))
				]
			}),
			view === "table" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns: [
					"Client",
					"Service",
					"When",
					"Therapist",
					"Status",
					"Actions"
				],
				rows: ROWS.map((r) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: r.who
					}),
					r.svc,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: r.when
					}),
					r.therapist,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: TONE[r.status],
						children: r.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 text-xs font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-primary-deep hover:underline",
								children: "Confirm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-muted-foreground hover:text-foreground",
								children: "Reschedule"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-[color:var(--destructive)] hover:underline",
								children: "Cancel"
							})
						]
					})
				])
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-7 gap-2 text-xs",
					children: [[
						"Mon",
						"Tue",
						"Wed",
						"Thu",
						"Fri",
						"Sat",
						"Sun"
					].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-muted-foreground text-center pb-2",
						children: d
					}, d)), Array.from({ length: 28 }).map((_, i) => {
						const count = [
							0,
							1,
							0,
							2,
							0,
							3,
							1,
							0,
							2,
							1,
							0,
							0,
							1,
							4,
							0,
							1,
							0,
							2,
							1,
							0,
							0,
							3,
							1,
							0,
							2,
							1,
							0,
							1
						][i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-square rounded-lg border border-[var(--admin-border)] p-1.5 hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: i + 1
							}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[10px] font-semibold inline-flex items-center justify-center h-5 px-1.5 rounded-full bg-primary-soft text-primary-deep",
								children: count
							})]
						}, i);
					})]
				})
			})
		]
	});
}
//#endregion
export { Page as component };
