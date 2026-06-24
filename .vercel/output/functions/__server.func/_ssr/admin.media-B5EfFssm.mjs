import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as StatusBadge } from "./AdminShell-DK9zQ2wy.mjs";
import { t as AdminCrud } from "./AdminCrud-Bf8ooDD_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.media-B5EfFssm.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCrud, {
	title: "Media items",
	description: "Videos, podcasts and audio published in the media library.",
	table: "media_items",
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
			key: "media_type",
			label: "Type"
		},
		{
			key: "url",
			label: "URL"
		},
		{
			key: "is_published",
			label: "Status",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: r.is_published ? "success" : "muted",
				children: r.is_published ? "Published" : "Hidden"
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
			name: "media_type",
			label: "Type",
			type: "select",
			options: [
				{
					value: "video",
					label: "Video"
				},
				{
					value: "podcast",
					label: "Podcast"
				},
				{
					value: "audio",
					label: "Audio"
				}
			]
		},
		{
			name: "url",
			label: "Media URL",
			required: true
		},
		{
			name: "thumbnail_url",
			label: "Thumbnail URL"
		},
		{
			name: "description",
			label: "Description",
			type: "textarea"
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
