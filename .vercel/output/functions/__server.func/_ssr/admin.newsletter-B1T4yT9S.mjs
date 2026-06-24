import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DK9zQ2wy.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.newsletter-B1T4yT9S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsletterPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const load = async () => {
		setLoading(true);
		const { data } = await supabase.from("newsletter_subscribers").select("*").order("created_at", { ascending: false });
		setRows(data ?? []);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const remove = async (id) => {
		if (!confirm("Remove this subscriber?")) return;
		const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id);
		if (error) toast.error(error.message);
		else {
			toast.success("Removed");
			load();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Newsletter subscribers",
			description: "Email addresses captured for the newsletter."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "Loading…"
		}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "No subscribers yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [
				"Email",
				"Status",
				"Subscribed",
				"Actions"
			],
			rows: rows.map((r) => [
				r.email,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: r.status === "subscribed" ? "success" : "muted",
					children: r.status
				}, "s"),
				new Date(r.created_at).toLocaleDateString(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => remove(r.id),
					className: "text-xs font-semibold text-destructive hover:underline",
					children: "Remove"
				}, "a")
			])
		}) })]
	});
}
//#endregion
export { NewsletterPage as component };
