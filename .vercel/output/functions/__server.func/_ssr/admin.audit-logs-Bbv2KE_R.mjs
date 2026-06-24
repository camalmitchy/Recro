import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as Download } from "../_libs/lucide-react.mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.audit-logs-Bbv2KE_R.js
var import_jsx_runtime = require_jsx_runtime();
var LOGS = [
	{
		t: "Today 09:14",
		who: "linda@recro.co",
		action: "Login",
		target: "Admin",
		tone: "info"
	},
	{
		t: "Today 09:18",
		who: "paul@recro.co",
		action: "Verified bank transfer",
		target: "Payment BNK-1144",
		tone: "success"
	},
	{
		t: "Today 09:32",
		who: "sarah@recro.co",
		action: "Published post",
		target: "When grief comes in waves",
		tone: "info"
	},
	{
		t: "Yesterday 16:02",
		who: "linda@recro.co",
		action: "Changed role",
		target: "Ann W. → Support Staff",
		tone: "warning"
	},
	{
		t: "Yesterday 14:11",
		who: "system",
		action: "Booking auto-confirmed",
		target: "Amina K.",
		tone: "muted"
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Audit logs",
			description: "Every meaningful action across the admin — searchable and exportable.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-[var(--admin-border)] text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), " Export"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [
				"Time",
				"Who",
				"Action",
				"Target",
				"Type"
			],
			rows: LOGS.map((l) => [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: l.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: l.who
				}),
				l.action,
				l.target,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: l.tone,
					children: l.action.split(" ")[0]
				})
			])
		}) })]
	});
}
//#endregion
export { Page as component };
