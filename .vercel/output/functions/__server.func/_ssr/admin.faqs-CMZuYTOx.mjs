import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge } from "./AdminShell-DK9zQ2wy.mjs";
import { t as AdminCrud } from "./AdminCrud-Bf8ooDD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.faqs-CMZuYTOx.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCrud, {
	title: "FAQs",
	description: "Public FAQ entries grouped by category.",
	table: "faqs",
	orderBy: {
		column: "sort_order",
		ascending: true
	},
	columns: [
		{
			key: "question",
			label: "Question"
		},
		{
			key: "category",
			label: "Category"
		},
		{
			key: "sort_order",
			label: "Order"
		},
		{
			key: "is_published",
			label: "Status",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: r.is_published ? "success" : "muted",
				children: r.is_published ? "Live" : "Hidden"
			})
		}
	],
	fields: [
		{
			name: "question",
			label: "Question",
			required: true
		},
		{
			name: "answer",
			label: "Answer",
			type: "textarea",
			required: true
		},
		{
			name: "category",
			label: "Category"
		},
		{
			name: "sort_order",
			label: "Sort order",
			type: "number",
			defaultValue: 0
		},
		{
			name: "is_published",
			label: "Published",
			type: "checkbox",
			defaultValue: true
		}
	]
});
//#endregion
export { SplitComponent as component };
