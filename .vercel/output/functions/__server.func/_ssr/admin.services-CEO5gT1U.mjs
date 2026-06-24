import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge } from "./AdminShell-DK9zQ2wy.mjs";
import { t as AdminCrud } from "./AdminCrud-Bf8ooDD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.services-CEO5gT1U.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCrud, {
	title: "Services",
	description: "Therapy and program services shown on the public site.",
	table: "services",
	orderBy: {
		column: "created_at",
		ascending: false
	},
	columns: [
		{
			key: "title",
			label: "Title"
		},
		{
			key: "slug",
			label: "Slug"
		},
		{
			key: "category",
			label: "Category"
		},
		{
			key: "price_kes",
			label: "Price (KES)"
		},
		{
			key: "is_published",
			label: "Status",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: r.is_published ? "success" : "muted",
				children: r.is_published ? "Published" : "Draft"
			})
		}
	],
	fields: [
		{
			name: "title",
			label: "Title",
			required: true
		},
		{
			name: "slug",
			label: "Slug",
			required: true
		},
		{
			name: "category",
			label: "Category"
		},
		{
			name: "description",
			label: "Description",
			type: "textarea"
		},
		{
			name: "price_kes",
			label: "Price (KES)",
			type: "number"
		},
		{
			name: "duration_min",
			label: "Duration (min)",
			type: "number"
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
