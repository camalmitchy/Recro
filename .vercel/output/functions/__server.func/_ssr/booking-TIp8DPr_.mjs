import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-TIp8DPr_.js
var $$splitComponentImporter = () => import("./booking-CyvyAJQB.mjs");
var Route = createFileRoute("/booking")({
	head: () => ({ meta: [{ title: "Book a session | Recro Group" }, {
		name: "description",
		content: "Book a Recro Group session — choose a service, pick a time, share a short intake, and pay via M-Pesa or SBM."
	}] }),
	validateSearch: (search) => ({ service: typeof search.service === "string" ? search.service : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
