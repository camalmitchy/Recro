import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.inquiries-D9JhR7Nx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InquiriesPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const load = async () => {
		setLoading(true);
		const { data, error } = await supabase.from("inquiries").select("*").order("created_at", { ascending: false });
		if (error) toast.error(error.message);
		setRows(data ?? []);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const setStatus = async (id, status) => {
		const { error } = await supabase.from("inquiries").update({ status }).eq("id", id);
		if (error) toast.error(error.message);
		else {
			toast.success("Updated");
			load();
		}
	};
	const remove = async (id) => {
		if (!confirm("Delete this inquiry?")) return;
		const { error } = await supabase.from("inquiries").delete().eq("id", id);
		if (error) toast.error(error.message);
		else {
			toast.success("Deleted");
			load();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Inquiries",
			description: "Messages from the contact form."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "Loading…"
		}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "No inquiries yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [
				"Name",
				"Email",
				"Subject",
				"Message",
				"Status",
				"Received",
				"Actions"
			],
			rows: rows.map((r) => [
				r.name,
				r.email,
				r.subject ?? "—",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "max-w-xs block truncate",
					title: r.message,
					children: r.message
				}, "m"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: r.status === "new" ? "warning" : r.status === "resolved" ? "success" : "info",
					children: r.status
				}, "s"),
				new Date(r.created_at).toLocaleDateString(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [r.status !== "resolved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setStatus(r.id, "resolved"),
						className: "text-xs font-semibold text-primary-deep hover:underline",
						children: "Resolve"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => remove(r.id),
						className: "text-xs font-semibold text-destructive hover:underline",
						children: "Delete"
					})]
				}, "a")
			])
		}) })]
	});
}
//#endregion
export { InquiriesPage as component };
