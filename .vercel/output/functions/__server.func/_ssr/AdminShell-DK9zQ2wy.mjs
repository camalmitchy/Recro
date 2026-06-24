import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Mail, C as Settings, E as ScrollText, F as MessageSquare, J as HeartHandshake, K as Inbox, O as Plus, P as MicVocal, Q as FileText, T as Search, W as LayoutDashboard, _ as Star, b as Shield, c as UserCog, dt as CalendarDays, et as CreditCard, g as Stethoscope, gt as Bell, ht as BookOpen, i as Users, it as CircleQuestionMark, lt as ChartColumn, r as Video, st as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminShell-DK9zQ2wy.js
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutDashboard,
		group: "Overview"
	},
	{
		to: "/admin/appointments",
		label: "Appointments",
		icon: CalendarDays,
		group: "Operations"
	},
	{
		to: "/admin/bookings",
		label: "Bookings",
		icon: Inbox,
		group: "Operations"
	},
	{
		to: "/admin/customers",
		label: "Customers",
		icon: Users,
		group: "Operations"
	},
	{
		to: "/admin/payments",
		label: "Payments",
		icon: CreditCard,
		group: "Operations"
	},
	{
		to: "/admin/grief-camp",
		label: "Grief Camp",
		icon: HeartHandshake,
		group: "Programs"
	},
	{
		to: "/admin/corporate-speaking",
		label: "Corporate Speaking",
		icon: MicVocal,
		group: "Programs"
	},
	{
		to: "/admin/media",
		label: "Media",
		icon: Video,
		group: "Content"
	},
	{
		to: "/admin/resources",
		label: "Resources",
		icon: BookOpen,
		group: "Content"
	},
	{
		to: "/admin/blog",
		label: "Blog",
		icon: FileText,
		group: "Content"
	},
	{
		to: "/admin/faqs",
		label: "FAQs",
		icon: CircleQuestionMark,
		group: "Content"
	},
	{
		to: "/admin/testimonials",
		label: "Testimonials",
		icon: Star,
		group: "Content"
	},
	{
		to: "/admin/services",
		label: "Services",
		icon: Stethoscope,
		group: "Content"
	},
	{
		to: "/admin/inquiries",
		label: "Inquiries",
		icon: MessageSquare,
		group: "Engagement"
	},
	{
		to: "/admin/newsletter",
		label: "Newsletter",
		icon: Mail,
		group: "Engagement"
	},
	{
		to: "/admin/therapists",
		label: "Therapists",
		icon: UserCog,
		group: "People"
	},
	{
		to: "/admin/users",
		label: "Users",
		icon: Users,
		group: "People"
	},
	{
		to: "/admin/roles",
		label: "Roles",
		icon: Shield,
		group: "People"
	},
	{
		to: "/admin/reports",
		label: "Reports",
		icon: ChartColumn,
		group: "System"
	},
	{
		to: "/admin/settings",
		label: "Settings",
		icon: Settings,
		group: "System"
	},
	{
		to: "/admin/audit-logs",
		label: "Audit Logs",
		icon: ScrollText,
		group: "System"
	}
];
function AdminShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const groups = Array.from(new Set(NAV.map((n) => n.group)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex bg-[var(--admin-bg)] text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden lg:flex w-64 flex-col border-r border-[var(--admin-border)] bg-[var(--admin-surface)] sticky top-0 h-screen",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 px-5 h-16 border-b border-[var(--admin-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-xl bg-[var(--admin-primary)] text-white font-bold",
						children: "R"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: "Recro Admin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Control Center"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex-1 overflow-y-auto px-3 py-4 space-y-5",
					children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80",
						children: g
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: NAV.filter((n) => n.group === g).map((n) => {
							const active = n.to === "/admin" ? pathname === "/admin" : pathname.startsWith(n.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								className: `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active ? "bg-primary-soft text-primary-deep" : "text-foreground/70 hover:bg-[var(--admin-bg)] hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, {
									size: 15,
									strokeWidth: 2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: n.label
								})]
							}, n.to);
						})
					})] }, g))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 border-t border-[var(--admin-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "block text-xs text-muted-foreground hover:text-foreground px-3 py-2",
						children: "← Back to site"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-w-0 flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "h-16 border-b border-[var(--admin-border)] bg-[var(--admin-surface)] flex items-center gap-4 px-6 sticky top-0 z-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 max-w-md relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							size: 15,
							className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Search customers, bookings, payments…",
							className: "w-full pl-9 pr-3 h-9 rounded-lg bg-[var(--admin-bg)] border border-[var(--admin-border)] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Quick action"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"aria-label": "Notifications",
						className: "relative grid h-9 w-9 place-items-center rounded-lg hover:bg-[var(--admin-bg)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--coral)]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 pl-1.5 pr-2 h-9 rounded-lg hover:bg-[var(--admin-bg)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-7 w-7 place-items-center rounded-full bg-primary-soft text-primary-deep text-xs font-semibold",
								children: "RA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-sm font-medium",
								children: "Admin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								size: 14,
								className: "text-muted-foreground"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 min-w-0",
				children
			})]
		})]
	});
}
function PageHeader({ title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-[22px] font-semibold tracking-tight",
			children: title
		}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground mt-1",
			children: description
		})] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2",
			children: actions
		})]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-xl border border-[var(--admin-border)] bg-[var(--admin-surface)] ${className}`,
		children
	});
}
function StatusBadge({ tone = "muted", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full ${{
			success: "bg-[color-mix(in_oklab,var(--success)_14%,white)] text-[color:var(--success)]",
			warning: "bg-[color-mix(in_oklab,var(--warning)_18%,white)] text-[color:var(--warning)]",
			info: "bg-secondary-soft text-[color:var(--secondary)]",
			danger: "bg-[color-mix(in_oklab,var(--destructive)_15%,white)] text-[color:var(--destructive)]",
			muted: "bg-[var(--admin-bg)] text-muted-foreground"
		}[tone]}`,
		children
	});
}
function DataTable({ columns, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-[var(--admin-bg)] text-muted-foreground text-[11px] uppercase tracking-wider",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-left font-semibold px-5 py-3 whitespace-nowrap",
					children: c
				}, c)) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "divide-y divide-[var(--admin-border)]",
				children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "hover:bg-[var(--admin-bg)]/60",
					children: r.map((cell, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-5 py-3.5 whitespace-nowrap",
						children: cell
					}, j))
				}, i))
			})]
		})
	});
}
//#endregion
export { StatusBadge as a, PageHeader as i, Card as n, DataTable as r, AdminShell as t };
