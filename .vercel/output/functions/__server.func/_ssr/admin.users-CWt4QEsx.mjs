import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { O as Plus, b as Shield, x as ShieldOff } from "../_libs/lucide-react.mjs";
import { a as StatusBadge, i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { l as createServerFn } from "./esm-9EjmF9OT.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-Dpn8S0gM.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-_WIQ47_l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.users-CWt4QEsx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Grant a role to a user by email. Admin-only. */
var grantUserRole = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("4e115a0878fe72bd8d60c7f1cb1c877881c70c70f775ce5fc4bcc76aee5abdc5"));
/** Revoke a role from a user. Admin-only. */
var revokeUserRole = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("a370f0b6749145fca33f60e658cf0d820cc190ffabe51c11c92c708950e6f9db"));
function Page() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [email, setEmail] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("admin");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const grant = useServerFn(grantUserRole);
	const revoke = useServerFn(revokeUserRole);
	const load = async () => {
		setLoading(true);
		const [{ data: profiles }, { data: roles }] = await Promise.all([supabase.from("profiles").select("id, full_name, email, account_type, created_at").order("created_at", { ascending: false }), supabase.from("user_roles").select("user_id, role")]);
		const byUser = /* @__PURE__ */ new Map();
		(roles ?? []).forEach((r) => {
			const arr = byUser.get(r.user_id) ?? [];
			arr.push(r.role);
			byUser.set(r.user_id, arr);
		});
		setRows((profiles ?? []).map((p) => ({
			...p,
			roles: byUser.get(p.id) ?? []
		})));
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const onGrant = async (e) => {
		e.preventDefault();
		if (!email.trim()) return;
		setBusy(true);
		try {
			const res = await grant({ data: {
				email,
				role
			} });
			toast.success(`Granted ${role} to ${res.name ?? email}`);
			setEmail("");
			load();
		} catch (err) {
			toast.error(err?.message ?? "Failed to grant role");
		} finally {
			setBusy(false);
		}
	};
	const onRevoke = async (userId, r) => {
		if (!confirm(`Revoke ${r} from this user?`)) return;
		try {
			await revoke({ data: {
				userId,
				role: r
			} });
			toast.success(`Revoked ${r}`);
			load();
		} catch (err) {
			toast.error(err?.message ?? "Failed to revoke");
		}
	};
	const adminCount = (0, import_react.useMemo)(() => rows.filter((r) => r.roles.includes("admin")).length, [rows]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Users & roles",
				description: `${rows.length} users · ${adminCount} admins`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 border-b border-[var(--admin-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-semibold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 14 }), " Grant a role"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Promote any signed-up user to admin, finance, therapist or content manager. They must already have an account."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: onGrant,
				className: "p-5 grid sm:grid-cols-[1fr_180px_auto] gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "user@example.com",
						className: "rounded-lg border border-[var(--admin-border)] bg-white px-3 h-10 text-sm",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: role,
						onChange: (e) => setRole(e.target.value),
						className: "rounded-lg border border-[var(--admin-border)] bg-white px-3 h-10 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "admin",
								children: "admin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "finance",
								children: "finance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "therapist",
								children: "therapist"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "content_manager",
								children: "content_manager"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "customer",
								children: "customer"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: busy,
						className: "inline-flex items-center gap-1.5 px-4 h-10 rounded-lg bg-[var(--admin-primary)] text-white text-sm font-semibold disabled:opacity-50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }),
							" ",
							busy ? "Granting…" : "Grant role"
						]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-10 text-center text-muted-foreground text-sm",
				children: "Loading…"
			}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-10 text-center text-muted-foreground text-sm",
				children: "No users yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns: [
					"Name",
					"Email",
					"Account",
					"Roles",
					"Joined",
					"Actions"
				],
				rows: rows.map((u) => [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: u.full_name ?? "—"
					}, "n"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: u.email
					}, "e"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "muted",
						children: u.account_type
					}, "a"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: u.roles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "—"
						}) : u.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: r === "admin" ? "success" : "muted",
							children: r
						}, r))
					}, "r"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground text-xs",
						children: new Date(u.created_at).toLocaleDateString()
					}, "j"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 text-xs font-semibold",
						children: u.roles.includes("admin") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onRevoke(u.id, "admin"),
							className: "inline-flex items-center gap-1 text-[color:var(--destructive)] hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldOff, { size: 12 }), " Revoke admin"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: async () => {
								setEmail(u.email);
								setRole("admin");
							},
							className: "inline-flex items-center gap-1 text-primary-deep hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 12 }), " Make admin"]
						})
					}, "x")
				])
			}) })
		]
	});
}
//#endregion
export { Page as component };
