import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as Minus, b as Shield, ct as Check } from "../_libs/lucide-react.mjs";
import { i as PageHeader, n as Card } from "./AdminShell-DU4OVFzc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.roles-BwGBchMN.js
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	"Super Admin",
	"Admin",
	"Therapist",
	"Finance",
	"Content Manager",
	"Camp Coordinator",
	"Support Staff"
];
var PERMS = [
	"View dashboard",
	"Manage bookings",
	"Manage payments",
	"Verify bank transfers",
	"Manage customers",
	"Manage media & blog",
	"Manage grief camp",
	"Manage users & roles",
	"View audit logs"
];
var MATRIX = {
	"Super Admin": [
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true
	],
	"Admin": [
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		false,
		true
	],
	"Therapist": [
		true,
		true,
		false,
		false,
		true,
		false,
		false,
		false,
		false
	],
	"Finance": [
		true,
		false,
		true,
		true,
		false,
		false,
		false,
		false,
		true
	],
	"Content Manager": [
		true,
		false,
		false,
		false,
		false,
		true,
		false,
		false,
		false
	],
	"Camp Coordinator": [
		true,
		true,
		false,
		false,
		true,
		false,
		true,
		false,
		false
	],
	"Support Staff": [
		true,
		true,
		false,
		false,
		true,
		false,
		false,
		false,
		false
	]
};
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Roles & permissions",
			description: "RBAC matrix · UI ready, enforcement comes next."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-[var(--admin-bg)] text-muted-foreground text-[11px] uppercase tracking-wider",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "text-left font-semibold px-5 py-3",
						children: "Permission"
					}), ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "text-center font-semibold px-3 py-3 whitespace-nowrap",
						children: r
					}, r))] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-[var(--admin-border)]",
					children: PERMS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "hover:bg-[var(--admin-bg)]/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-5 py-3 font-medium flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									size: 13,
									className: "text-muted-foreground"
								}),
								" ",
								p
							]
						}), ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "text-center px-3 py-3",
							children: MATRIX[r][i] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								size: 15,
								className: "inline text-[color:var(--success)]"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
								size: 14,
								className: "inline text-muted-foreground/40"
							})
						}, r))]
					}, p))
				})]
			})
		})]
	});
}
//#endregion
export { Page as component };
