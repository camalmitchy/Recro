import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./use-auth-BFFzin-l.mjs";
import { A as Phone, B as Mail, L as Menu, V as LogOut, W as LayoutDashboard, o as User, t as X, z as MapPin } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuSeparator, i as DropdownMenuLabel, n as DropdownMenuContent, o as DropdownMenuTrigger, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-Sj0K9LUY.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-BVuCcadn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_icon_default = "/assets/logo_icon-CbsVFrxK.png";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/grief-camp",
		label: "Grief Camp"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/insights",
		label: "Insights"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function initials(name, email) {
	const src = (name || email || "U").trim();
	const parts = src.split(/\s+/);
	if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
	return src.slice(0, 2).toUpperCase();
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user, signOut } = useAuth();
	const navigate = useNavigate();
	const handleSignOut = async () => {
		await signOut();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_icon_default,
						alt: "Recro Group Logo",
						className: "h-11 w-11 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-bold tracking-tight text-foreground",
							children: "Recro Group"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5",
							children: "Restoring families"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						activeProps: { className: "text-primary-deep bg-primary-soft" },
						className: "px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors",
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [!user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/join-us",
						className: "hidden sm:inline-flex btn-primary",
						children: "Join Us"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						className: "grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary-deep text-sm font-semibold border border-border hover:bg-primary/15 transition",
						"aria-label": "Account menu",
						children: initials(user.user_metadata?.full_name, user.email)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-56",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, {
								className: "flex flex-col gap-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold truncate",
									children: user.user_metadata?.full_name || user.email
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						className: "lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background",
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-3 flex flex-col gap-1",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "px-3 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-primary-soft",
					children: n.label
				}, n.to)), !user && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/join-us",
					onClick: () => setOpen(false),
					className: "btn-primary mt-2",
					children: "Join Us"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16 grid gap-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_icon_default,
							alt: "Recro Group Logo",
							className: "h-11 w-11 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-bold tracking-tight",
								children: "Recro Group"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5",
								children: "Restoring families"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground leading-relaxed",
						children: "Behavioral health and relationship-focused care for individuals, couples, families, children and corporate teams."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold text-foreground",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-primary-deep",
							children: "About us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-primary-deep",
							children: "Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/grief-camp",
							className: "hover:text-primary-deep",
							children: "Grief Camp"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/insights",
							className: "hover:text-primary-deep",
							children: "Insights"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold text-foreground",
					children: "Engage"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/booking",
							search: { service: void 0 },
							className: "hover:text-primary-deep",
							children: "Book a Session"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-primary-deep",
							children: "Contact us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faq",
							className: "hover:text-primary-deep",
							children: "FAQs"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/join-us",
							className: "hover:text-primary-deep",
							children: "Join us"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold text-foreground",
					children: "Reach us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 15,
								className: "mt-0.5 text-primary"
							}), " +254 700 000 000"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 15,
								className: "mt-0.5 text-primary"
							}), " hello@recrogroup.org"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								size: 15,
								className: "mt-0.5 text-primary"
							}), " Nairobi, Kenya"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Copyright © 2017 - 2024 Recro Group Limited. Restoring families." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "Privacy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "Terms"
					})]
				})]
			})
		})]
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
