import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.grief-camp-C1HpNF4J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GriefCampPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const load = async () => {
		setLoading(true);
		const { data, error } = await supabase.from("grief_applications").select("*").order("created_at", { ascending: false });
		if (error) toast.error(error.message);
		setRows(data ?? []);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const setStatus = async (id, status) => {
		const { error } = await supabase.from("grief_applications").update({ status }).eq("id", id);
		if (error) toast.error(error.message);
		else {
			toast.success("Updated");
			load();
		}
	};
	const remove = async (id) => {
		if (!confirm("Delete this application?")) return;
		const { error } = await supabase.from("grief_applications").delete().eq("id", id);
		if (error) toast.error(error.message);
		else {
			toast.success("Deleted");
			load();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Grief Camp Applications",
			description: "Parent/guardian applications for the children's grief camp."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "Loading…"
		}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "No applications yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [
				"Child",
				"Age",
				"Parent",
				"Contact",
				"Tier",
				"Status",
				"Applied",
				"Actions"
			],
			rows: rows.map((r) => [
				r.child_name,
				r.child_age ?? "—",
				r.parent_name,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs",
					children: r.parent_email
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: r.parent_phone
				})] }, "c"),
				r.tier ?? "—",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: r.status === "accepted" ? "success" : r.status === "rejected" ? "danger" : "warning",
					children: r.status
				}, "s"),
				new Date(r.created_at).toLocaleDateString(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 text-xs font-semibold",
					children: [
						r.status !== "accepted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStatus(r.id, "accepted"),
							className: "text-primary-deep hover:underline",
							children: "Accept"
						}),
						r.status !== "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setStatus(r.id, "rejected"),
							className: "text-destructive hover:underline",
							children: "Reject"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => remove(r.id),
							className: "text-destructive hover:underline",
							children: "Delete"
						})
					]
				}, "a")
			])
		}) })]
	});
}
//#endregion
export { GriefCampPage as component };
