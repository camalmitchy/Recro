import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.payments-BKujCtCt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaymentsPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [bookings, setBookings] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const load = async () => {
		setLoading(true);
		const [{ data: p }, { data: b }] = await Promise.all([supabase.from("payments").select("*").order("created_at", { ascending: false }), supabase.from("bookings").select("id, reference")]);
		setRows(p ?? []);
		setBookings(b ?? []);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const update = async (id, patch, msg) => {
		const row = rows.find((r) => r.id === id);
		const { error } = await supabase.from("payments").update({
			...patch,
			verified_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", id);
		if (error) {
			toast.error(error.message);
			return;
		}
		if (patch.status === "paid" && row?.booking_id) await supabase.from("bookings").update({
			payment_status: "paid",
			status: "confirmed"
		}).eq("id", row.booking_id);
		else if (patch.status === "failed" && row?.booking_id) await supabase.from("bookings").update({ payment_status: "failed" }).eq("id", row.booking_id);
		toast.success(msg);
		load();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Payments",
			description: "M-Pesa, bank transfer and card payment tracking."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "Loading…"
		}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "No payments yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [
				"Method",
				"Amount (KES)",
				"Reference",
				"Booking",
				"Status",
				"Created",
				"Actions"
			],
			rows: rows.map((r) => [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "capitalize",
					children: r.method
				}, "m"),
				r.amount_kes,
				r.reference ?? "—",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: r.booking_id ?? "",
					onChange: (e) => update(r.id, { booking_id: e.target.value || null }, "Linked"),
					className: "text-sm bg-[var(--admin-bg)] border border-[var(--admin-border)] rounded-md px-2 py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "— link —"
					}), bookings.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: b.id,
						children: b.reference
					}, b.id))]
				}, "b"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: r.status === "paid" ? "success" : r.status === "failed" ? "danger" : "warning",
					children: r.status
				}, "s"),
				new Date(r.created_at).toLocaleDateString(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 text-xs font-semibold",
					children: [
						r.status !== "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => update(r.id, { status: "paid" }, "Marked paid"),
							className: "text-primary-deep hover:underline",
							children: "Mark paid"
						}),
						r.method === "bank" && r.status !== "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => update(r.id, { status: "paid" }, "Verified"),
							className: "text-primary-deep hover:underline",
							children: "Verify"
						}),
						r.status !== "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => update(r.id, { status: "failed" }, "Rejected"),
							className: "text-destructive hover:underline",
							children: "Reject"
						})
					]
				}, "a")
			])
		}) })]
	});
}
//#endregion
export { PaymentsPage as component };
