import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-auth-BFFzin-l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const storedUser = localStorage.getItem("demoUser");
		if (storedUser) setUser(JSON.parse(storedUser));
		setLoading(false);
	}, []);
	const signIn = (email, name) => {
		const newUser = {
			id: Math.random().toString(36).substr(2, 9),
			email,
			user_metadata: { full_name: name || email.split("@")[0] }
		};
		setUser(newUser);
		localStorage.setItem("demoUser", JSON.stringify(newUser));
	};
	const signOut = async () => {
		setUser(null);
		localStorage.removeItem("demoUser");
	};
	const value = {
		user,
		session: user ? { user } : null,
		roles: user ? ["admin", "customer"] : [],
		loading,
		hasRole: (r) => !!user,
		signOut,
		signIn,
		refreshRoles: async () => {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
//#endregion
export { useAuth as n, AuthProvider as t };
