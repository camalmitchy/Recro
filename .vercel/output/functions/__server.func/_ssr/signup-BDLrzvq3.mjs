import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./SiteShell-DF2A-bRe.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-BDLrzvq3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignupPage() {
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		full_name: "",
		email: "",
		phone: "",
		password: "",
		confirm: "",
		account_type: "customer"
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const update = (k) => (e) => setForm({
		...form,
		[k]: e.target.value
	});
	const submit = async (e) => {
		e.preventDefault();
		if (form.password !== form.confirm) {
			toast.error("Passwords don't match");
			return;
		}
		if (form.password.length < 8) {
			toast.error("Password must be at least 8 characters");
			return;
		}
		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 500));
		setLoading(false);
		toast.success("Account created! (Demo Mode)");
		const redirectPath = sessionStorage.getItem("redirectAfterLogin");
		if (redirectPath) {
			sessionStorage.removeItem("redirectAfterLogin");
			navigate({ to: redirectPath });
		} else navigate({ to: "/profile" });
	};
	const google = async () => {
		toast.success("Google sign-in (Demo Mode)");
		const redirectPath = sessionStorage.getItem("redirectAfterLogin");
		if (redirectPath) {
			sessionStorage.removeItem("redirectAfterLogin");
			navigate({ to: redirectPath });
		} else navigate({ to: "/profile" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-page py-16 md:py-24 max-w-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-surface p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 rounded-lg bg-primary-soft border border-primary/20 p-3 text-sm text-primary-deep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Demo Mode:" }), " You can create an account with any details - no authentication required."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Create your account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Start your journey with Recro."
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
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.full_name,
								onChange: update("full_name"),
								className: inp,
								placeholder: "Your name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: form.email,
								onChange: update("email"),
								className: inp,
								placeholder: "your@email.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								required: true,
								value: form.phone,
								onChange: update("phone"),
								className: inp,
								placeholder: "+254 712 345 678"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Account type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.account_type,
								onChange: update("account_type"),
								className: inp,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "customer",
										children: "Individual / Customer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "guardian",
										children: "Parent / Guardian"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "corporate",
										children: "Corporate user"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Password",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								value: form.password,
								onChange: update("password"),
								className: inp,
								placeholder: "Min 8 characters"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Confirm password",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								value: form.confirm,
								onChange: update("confirm"),
								className: inp,
								placeholder: "Confirm password"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: loading,
							className: "btn-primary w-full justify-center mt-2",
							children: loading ? "Creating…" : "Create account"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: ["Have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-primary-deep font-semibold hover:underline",
						children: "Sign in"
					})]
				})
			]
		})
	}) });
}
var inp = "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium",
			children: label
		}), children]
	});
}
//#endregion
export { SignupPage as component };
