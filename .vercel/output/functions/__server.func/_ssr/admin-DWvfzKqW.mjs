import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./use-auth-BFFzin-l.mjs";
import { _ as Navigate, f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AdminShell } from "./AdminShell-DK9zQ2wy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DWvfzKqW.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const { user, loading } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen grid place-items-center text-muted-foreground",
		children: "Loading…"
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/join-us" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { AdminLayout as component };
