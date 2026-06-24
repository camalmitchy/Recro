import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge } from "./AdminShell-DK9zQ2wy.mjs";
import { t as AdminCrud } from "./AdminCrud-Bf8ooDD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.therapists-CxFpcTXd.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCrud, {
	title: "Therapists",
	description: "Clinical team — visible on public services pages.",
	table: "therapists",
	orderBy: {
		column: "created_at",
		ascending: false
	},
	columns: [
		{
			key: "full_name",
			label: "Name"
		},
		{
			key: "title",
			label: "Title"
		},
		{
			key: "email",
			label: "Email"
		},
		{
			key: "phone",
			label: "Phone"
		},
		{
			key: "is_active",
			label: "Status",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: r.is_active ? "success" : "muted",
				children: r.is_active ? "Active" : "Hidden"
			})
		}
	],
	fields: [
		{
			name: "full_name",
			label: "Full name",
			required: true
		},
		{
			name: "title",
			label: "Title (e.g. Counselling Psychologist)"
		},
		{
			name: "email",
			label: "Email"
		},
		{
			name: "phone",
			label: "Phone"
		},
		{
			name: "bio",
			label: "Short bio",
			type: "textarea"
		},
		{
			name: "photo_url",
			label: "Photo URL"
		},
		{
			name: "is_active",
			label: "Active",
			type: "checkbox",
			defaultValue: true
		}
	]
});
//#endregion
export { SplitComponent as component };
