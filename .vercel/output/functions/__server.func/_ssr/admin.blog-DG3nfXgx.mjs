import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge } from "./AdminShell-DU4OVFzc.mjs";
import { t as AdminCrud } from "./AdminCrud-BYAfBYTO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.blog-DG3nfXgx.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCrud, {
	title: "Blog posts",
	description: "Articles and insights for the public blog.",
	table: "blog_posts",
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
			key: "author",
			label: "Author"
		},
		{
			key: "slug",
			label: "Slug"
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
			name: "author",
			label: "Author"
		},
		{
			name: "excerpt",
			label: "Excerpt",
			type: "textarea"
		},
		{
			name: "body",
			label: "Body (markdown)",
			type: "textarea"
		},
		{
			name: "cover_url",
			label: "Cover image URL"
		},
		{
			name: "is_published",
			label: "Published",
			type: "checkbox"
		}
	]
});
//#endregion
export { SplitComponent as component };
