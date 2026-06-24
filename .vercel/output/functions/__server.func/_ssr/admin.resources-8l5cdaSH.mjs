import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as Upload } from "../_libs/lucide-react.mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.resources-8l5cdaSH.js
var import_jsx_runtime = require_jsx_runtime();
var ROWS = [
	{
		t: "Grief Journal (PDF)",
		type: "PDF",
		size: "1.2 MB",
		downloads: 240,
		status: "Published"
	},
	{
		t: "Mindfulness audio pack",
		type: "Audio",
		size: "32 MB",
		downloads: 88,
		status: "Published"
	},
	{
		t: "Parenting toolkit",
		type: "PDF",
		size: "2.4 MB",
		downloads: 102,
		status: "Draft"
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Resources",
			description: "Downloadable guides, journals and audio tools.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex items-center gap-1.5 px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 14 }), " Upload resource"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [
				"Title",
				"Type",
				"Size",
				"Downloads",
				"Status",
				"Actions"
			],
			rows: ROWS.map((r) => [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: r.t
				}),
				r.type,
				r.size,
				r.downloads,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: r.status === "Published" ? "success" : "muted",
					children: r.status
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs font-semibold text-primary-deep hover:underline",
					children: "Edit"
				})
			])
		}) })]
	});
}
//#endregion
export { Page as component };
