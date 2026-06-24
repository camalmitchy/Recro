import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./use-auth-BFFzin-l.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./SiteShell-CtOG-apJ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CUcDKkD5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const { signIn } = useAuth();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		signIn(email, email.split("@")[0]);
		setLoading(false);
		toast.success("Welcome back! (Demo Mode - Admin Access Granted)");
		const redirectPath = sessionStorage.getItem("redirectAfterLogin");
		if (redirectPath) {
			sessionStorage.removeItem("redirectAfterLogin");
			navigate({ to: redirectPath });
		} else navigate({ to: "/profile" });
	};
	const google = async () => {
		signIn("demo@recrogroup.org", "Demo User");
		toast.success("Google sign-in (Demo Mode - Admin Access Granted)");
		const redirectPath = sessionStorage.getItem("redirectAfterLogin");
		if (redirectPath) {
			sessionStorage.removeItem("redirectAfterLogin");
			navigate({ to: redirectPath });
		} else navigate({ to: "/profile" });
	};
	const forgot = async () => {
		if (!email) {
			toast.error("Enter your email first");
			return;
		}
		toast.success("Check your email for a reset link. (Demo Mode)");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16 md:py-24 max-w-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-surface p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 rounded-lg bg-primary-soft border border-primary/20 p-3 text-sm text-primary-deep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demo Mode:" }), " Sign in with any email/password. All users get admin access."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Welcome back"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Sign in to continue."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: google,
					type: "button",
					className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background py-2.5 text-sm font-medium hover:bg-surface-2 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base",
						children: "G"
					}), " Continue with Google"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-5 flex items-center gap-3 text-[11px] text-muted-foreground uppercase tracking-wider",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
						" or ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30",
							placeholder: "any@email.com"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: forgot,
								className: "text-xs text-primary-deep hover:underline",
								children: "Forgot password?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30",
							placeholder: "any password"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: loading,
							className: "btn-primary w-full justify-center",
							children: loading ? "Signing in…" : "Sign in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: ["New here? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "text-primary-deep font-semibold hover:underline",
						children: "Create an account"
					})]
				})
			]
		})
	}) });
}
//#endregion
export { LoginPage as component };
