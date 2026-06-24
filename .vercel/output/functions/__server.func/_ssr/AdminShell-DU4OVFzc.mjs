import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./use-auth-BFFzin-l.mjs";
import { B as Mail, C as Settings, E as ScrollText, F as MessageSquare, J as HeartHandshake, K as Inbox, O as Plus, P as MicVocal, Q as FileText, T as Search, V as LogOut, W as LayoutDashboard, _ as Star, b as Shield, c as UserCog, dt as CalendarDays, et as CreditCard, g as Stethoscope, ht as Bell, i as Users, it as CircleQuestionMark, lt as ChartColumn, mt as BookOpen, o as User, r as Video, st as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuSeparator, i as DropdownMenuLabel, n as DropdownMenuContent, o as DropdownMenuTrigger, r as DropdownMenuItem, s as cn, t as DropdownMenu } from "./dropdown-menu-Sj0K9LUY.mjs";
import { g as Link, l as useRouterState, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/radix-ui__react-popover.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminShell-DU4OVFzc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
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
	const { user, signOut } = useAuth();
	const navigate = useNavigate();
	const [notificationsOpen, setNotificationsOpen] = (0, import_react.useState)(false);
	const handleSignOut = async () => {
		await signOut();
		navigate({ to: "/" });
	};
	function initials(name, email) {
		const src = (name || email || "U").trim();
		const parts = src.split(/\s+/);
		if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
		return src.slice(0, 2).toUpperCase();
	}
	const notifications = [
		{
			id: 1,
			title: "New booking received",
			time: "5 min ago",
			unread: true
		},
		{
			id: 2,
			title: "Payment confirmed",
			time: "1 hour ago",
			unread: true
		},
		{
			id: 3,
			title: "New inquiry submitted",
			time: "2 hours ago",
			unread: false
		}
	];
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 ml-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md relative",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
							open: notificationsOpen,
							onOpenChange: setNotificationsOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									"aria-label": "Notifications",
									className: "relative grid h-9 w-9 place-items-center rounded-lg hover:bg-[var(--admin-bg)] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 16 }), notifications.some((n) => n.unread) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--coral)]" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
								className: "w-80 p-0",
								align: "end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-4 border-b border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-sm",
											children: "Notifications"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "max-h-[400px] overflow-y-auto",
										children: notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-8 text-center text-sm text-muted-foreground",
											children: "No notifications"
										}) : notifications.map((notification) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `p-4 border-b border-border hover:bg-surface transition-colors cursor-pointer ${notification.unread ? "bg-primary-soft/30" : ""}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-medium",
														children: notification.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground mt-1",
														children: notification.time
													})]
												}), notification.unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary-deep shrink-0 mt-1.5" })]
											})
										}, notification.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3 border-t border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-xs text-primary-deep hover:underline w-full text-center",
											children: "View all notifications"
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
							className: "flex items-center gap-2 pl-1.5 pr-2 h-9 rounded-lg hover:bg-[var(--admin-bg)] transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-full bg-primary-soft text-primary-deep text-xs font-semibold",
									children: user ? initials(user.user_metadata?.full_name, user.email) : "RA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline text-sm font-medium",
									children: user?.user_metadata?.full_name || "Admin"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									size: 14,
									className: "text-muted-foreground"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-56",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, {
									className: "flex flex-col gap-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold truncate",
										children: user?.user_metadata?.full_name || user?.email || "Admin"
									}), user?.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-normal text-muted-foreground truncate",
										children: user.email
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									className: "focus:bg-primary-soft focus:text-primary-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admin",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "mr-2 h-4 w-4" }), "Admin Dashboard"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									asChild: true,
									className: "focus:bg-primary-soft focus:text-primary-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/profile",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }), "My Profile"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: handleSignOut,
									className: "text-destructive focus:text-destructive focus:bg-destructive/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), "Sign out"]
								})
							]
						})] })
					]
				})]
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
