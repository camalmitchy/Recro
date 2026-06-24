import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DK9zQ2wy.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.bookings-Dz0Deusj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookingsPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [therapists, setTherapists] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const load = async () => {
		setLoading(true);
		const [{ data: b }, { data: t }] = await Promise.all([supabase.from("bookings").select("*").order("created_at", { ascending: false }), supabase.from("therapists").select("id, full_name").eq("is_active", true)]);
		setRows(b ?? []);
		setTherapists(t ?? []);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const update = async (id, patch, msg = "Updated") => {
		const { error } = await supabase.from("bookings").update(patch).eq("id", id);
		if (error) toast.error(error.message);
		else {
			toast.success(msg);
			load();
		}
	};
	const statusTone = (s) => s === "confirmed" ? "info" : s === "completed" ? "success" : s === "cancelled" ? "danger" : "warning";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Bookings",
			description: "Incoming booking requests and lifecycle actions."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "Loading…"
		}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "No bookings yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [
				"Ref",
				"Client",
				"Date",
				"Therapist",
				"Status",
				"Payment",
				"Actions"
			],
			rows: rows.map((r) => [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs",
					children: r.reference
				}, "r"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium text-sm",
					children: r.client_name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: r.client_email
				})] }, "c"),
				r.preferred_date ?? "—",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: r.therapist_id ?? "",
					onChange: (e) => update(r.id, { therapist_id: e.target.value || null }, "Therapist assigned"),
					className: "text-sm bg-[var(--admin-bg)] border border-[var(--admin-border)] rounded-md px-2 py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "— assign —"
					}), therapists.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: t.id,
						children: t.full_name
					}, t.id))]
				}, "t"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: statusTone(r.status),
					children: r.status
				}, "s"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: r.payment_status === "paid" ? "success" : r.payment_status === "failed" ? "danger" : "warning",
					children: r.payment_status
				}, "p"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 text-xs font-semibold",
					children: [
						r.status === "requested" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => update(r.id, { status: "confirmed" }, "Confirmed"),
							className: "text-primary-deep hover:underline",
							children: "Confirm"
						}),
						r.status !== "completed" && r.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => update(r.id, { status: "completed" }, "Marked completed"),
							className: "text-primary-deep hover:underline",
							children: "Complete"
						}),
						r.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => update(r.id, { status: "cancelled" }, "Cancelled"),
							className: "text-destructive hover:underline",
							children: "Cancel"
						})
					]
				}, "a")
			])
		}) })]
	});
}
//#endregion
export { BookingsPage as component };
