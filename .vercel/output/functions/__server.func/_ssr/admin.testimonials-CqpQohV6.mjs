import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge } from "./AdminShell-DK9zQ2wy.mjs";
import { t as AdminCrud } from "./AdminCrud-Bf8ooDD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.testimonials-CqpQohV6.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCrud, {
	title: "Testimonials",
	description: "Client testimonials displayed across the site.",
	table: "testimonials",
	orderBy: {
		column: "created_at",
		ascending: false
	},
	columns: [
		{
			key: "author_name",
			label: "Author"
		},
		{
			key: "author_role",
			label: "Role"
		},
		{
			key: "rating",
			label: "Rating"
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
			name: "author_name",
			label: "Author name",
			required: true
		},
		{
			name: "author_role",
			label: "Role / context"
		},
		{
			name: "quote",
			label: "Quote",
			type: "textarea",
			required: true
		},
		{
			name: "rating",
			label: "Rating (1-5)",
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
