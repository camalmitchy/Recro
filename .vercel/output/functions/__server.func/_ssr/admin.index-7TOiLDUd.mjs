import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Mail, F as MessageSquare, G as Landmark, J as HeartHandshake, O as Plus, P as MicVocal, Q as FileText, at as CircleCheck, d as TrendingDown, dt as CalendarDays, et as CreditCard, g as Stethoscope, gt as ArrowRight, l as Upload, tt as Clock, u as TrendingUp } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as StatusBadge, i as PageHeader, n as Card } from "./AdminShell-DU4OVFzc.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Pie, n as BarChart, o as Line, r as LineChart, s as CartesianGrid, t as PieChart, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-7TOiLDUd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KPIS = [
	{
		label: "Today's bookings",
		value: 14,
		delta: "+12%",
		up: true,
		to: "/admin/bookings",
		icon: CalendarDays
	},
	{
		label: "Pending appointments",
		value: 7,
		delta: "+2",
		up: true,
		to: "/admin/appointments",
		icon: Clock
	},
	{
		label: "Confirmed appointments",
		value: 23,
		delta: "+5%",
		up: true,
		to: "/admin/appointments",
		icon: CircleCheck
	},
	{
		label: "Pending M-Pesa",
		value: 9,
		delta: "-1",
		up: false,
		to: "/admin/payments",
		icon: CreditCard
	},
	{
		label: "Bank transfers to verify",
		value: 4,
		delta: "+1",
		up: true,
		to: "/admin/payments",
		icon: Landmark
	},
	{
		label: "Grief camp applications",
		value: 18,
		delta: "+6",
		up: true,
		to: "/admin/grief-camp",
		icon: HeartHandshake
	},
	{
		label: "Corporate leads",
		value: 5,
		delta: "+2",
		up: true,
		to: "/admin/corporate-speaking",
		icon: MicVocal
	},
	{
		label: "New inquiries",
		value: 11,
		delta: "+4",
		up: true,
		to: "/admin/inquiries",
		icon: MessageSquare
	},
	{
		label: "Newsletter signups",
		value: 42,
		delta: "+18",
		up: true,
		to: "/admin/newsletter",
		icon: Mail
	}
];
var bookingsTrend = [
	{
		d: "Mon",
		v: 8
	},
	{
		d: "Tue",
		v: 12
	},
	{
		d: "Wed",
		v: 14
	},
	{
		d: "Thu",
		v: 11
	},
	{
		d: "Fri",
		v: 18
	},
	{
		d: "Sat",
		v: 22
	},
	{
		d: "Sun",
		v: 14
	}
];
var paymentMix = [
	{
		name: "M-Pesa",
		value: 64,
		color: "#3FA34D"
	},
	{
		name: "Bank Transfer",
		value: 28,
		color: "#4A6FA5"
	},
	{
		name: "Card (soon)",
		value: 8,
		color: "#A68A64"
	}
];
var serviceDemand = [
	{
		s: "Individual",
		v: 42
	},
	{
		s: "Couples",
		v: 28
	},
	{
		s: "Family",
		v: 18
	},
	{
		s: "Children",
		v: 22
	},
	{
		s: "Grief",
		v: 16
	},
	{
		s: "Corporate",
		v: 9
	}
];
var griefTrend = [
	{
		d: "W1",
		v: 3
	},
	{
		d: "W2",
		v: 5
	},
	{
		d: "W3",
		v: 8
	},
	{
		d: "W4",
		v: 11
	},
	{
		d: "W5",
		v: 14
	},
	{
		d: "W6",
		v: 18
	}
];
var QUICK = [
	{
		label: "Add Appointment",
		icon: Plus,
		to: "/admin/appointments"
	},
	{
		label: "Create Booking",
		icon: CalendarDays,
		to: "/admin/bookings"
	},
	{
		label: "Upload Media",
		icon: Upload,
		to: "/admin/media"
	},
	{
		label: "Publish Blog Post",
		icon: FileText,
		to: "/admin/blog"
	},
	{
		label: "Add Service",
		icon: Stethoscope,
		to: "/admin/services"
	},
	{
		label: "Review Payments",
		icon: CreditCard,
		to: "/admin/payments"
	},
	{
		label: "Grief Applications",
		icon: HeartHandshake,
		to: "/admin/grief-camp"
	}
];
var ACTIVITY = [
	{
		t: "2m ago",
		text: "New booking — Amina K. · Individual therapy",
		to: "/admin/bookings",
		tone: "info"
	},
	{
		t: "9m ago",
		text: "M-Pesa payment received · KES 4,500 · ref RKJ29A",
		to: "/admin/payments",
		tone: "success"
	},
	{
		t: "21m ago",
		text: "Bank transfer proof uploaded · Wanjiku M.",
		to: "/admin/payments",
		tone: "warning"
	},
	{
		t: "44m ago",
		text: "Grief Camp application · age 10–13",
		to: "/admin/grief-camp",
		tone: "info"
	},
	{
		t: "1h ago",
		text: "Corporate inquiry · Acme Ltd · keynote",
		to: "/admin/corporate-speaking",
		tone: "info"
	},
	{
		t: "2h ago",
		text: "Contact form · partnership question",
		to: "/admin/inquiries",
		tone: "muted"
	}
];
var QUEUE = {
	"Needs attention": [
		{
			who: "Wanjiku M.",
			type: "Bank transfer",
			status: "Verify proof",
			tone: "warning",
			action: "Review"
		},
		{
			who: "Brian O.",
			type: "Booking",
			status: "Awaiting therapist assignment",
			tone: "info",
			action: "Assign"
		},
		{
			who: "Grace N.",
			type: "Grief camp",
			status: "New application",
			tone: "info",
			action: "Open"
		}
	],
	"Pending payments": [{
		who: "Amina K.",
		type: "M-Pesa",
		status: "Awaiting STK confirmation",
		tone: "warning",
		action: "Resend"
	}, {
		who: "James K.",
		type: "Bank transfer",
		status: "Proof not uploaded",
		tone: "warning",
		action: "Remind"
	}],
	"Awaiting confirmation": [{
		who: "Couples · Wanjiku & James",
		type: "Appointment",
		status: "Tomorrow 14:00",
		tone: "info",
		action: "Confirm"
	}, {
		who: "Acme Ltd",
		type: "Corporate workshop",
		status: "Friday 10:00",
		tone: "info",
		action: "Confirm"
	}],
	"Recently updated": [{
		who: "Maria P.",
		type: "Booking",
		status: "Marked completed",
		tone: "success",
		action: "View"
	}, {
		who: "Tom W.",
		type: "Payment",
		status: "Verified · KES 6,000",
		tone: "success",
		action: "View"
	}]
};
function Dashboard() {
	const [tab, setTab] = (0, import_react.useState)("Needs attention");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Control Center",
				description: "Everything that needs your attention today, at a glance."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3",
				children: KPIS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: k.to,
					className: "group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-4 hover:border-primary/40 transition-colors h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-lg bg-primary-soft text-primary-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k.icon, { size: 16 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-0.5 text-[11px] font-semibold ${k.up ? "text-[color:var(--success)]" : "text-[color:var(--destructive)]"}`,
									children: [
										k.up ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 11 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { size: 11 }),
										" ",
										k.delta
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-semibold tracking-tight",
								children: k.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: k.label
							})
						]
					})
				}, k.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Bookings over time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Last 7 days"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: "success",
							children: "+18% WoW"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: bookingsTrend,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "#E7EFE9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "d",
									stroke: "#52606D",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "#52606D",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "v",
									stroke: "#4F6F52",
									strokeWidth: 2.5,
									dot: { r: 3 }
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold mb-1",
							children: "Payment breakdown"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-2",
							children: "This month"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-44",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: paymentMix,
								dataKey: "value",
								innerRadius: 45,
								outerRadius: 70,
								paddingAngle: 2,
								children: paymentMix.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: p.color }, p.name))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {})] }) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1.5 mt-2",
							children: paymentMix.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-2.5 w-2.5 rounded-full",
											style: { background: p.color }
										}),
										" ",
										p.name
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: [p.value, "%"]
								})]
							}, p.name))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold mb-1",
							children: "Service demand"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-3",
							children: "Bookings by service · last 30 days"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: serviceDemand,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#E7EFE9"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "s",
										stroke: "#52606D",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "#52606D",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "v",
										fill: "#4A6FA5",
										radius: [
											6,
											6,
											0,
											0
										]
									})
								]
							}) })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold mb-1",
							children: "Grief camp applications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-3",
							children: "Weekly trend"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: griefTrend,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "#E7EFE9"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "d",
										stroke: "#52606D",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "#52606D",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "v",
										stroke: "#6B7A5F",
										strokeWidth: 2.5,
										dot: { r: 3 }
									})
								]
							}) })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold mb-3",
						children: "Quick actions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: QUICK.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: q.to,
							className: "flex items-center gap-2 px-3 py-2.5 rounded-lg border border-[var(--admin-border)] hover:border-primary/40 hover:bg-primary-soft/40 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.icon, {
								size: 15,
								className: "text-primary-deep"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: q.label
							})]
						}, q.label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Live activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Updates in real-time"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-[var(--admin-border)]",
						children: ACTIVITY.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: a.to,
							className: "flex items-center justify-between gap-4 py-2.5 hover:bg-[var(--admin-bg)]/60 rounded-md px-2 -mx-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${a.tone === "success" ? "bg-[var(--success)]" : a.tone === "warning" ? "bg-[var(--warning)]" : a.tone === "info" ? "bg-[var(--info)]" : "bg-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm truncate",
									children: a.text
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground shrink-0",
								children: a.t
							})]
						}) }, i))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-[var(--admin-border)] px-5 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Work queue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mb-3",
							children: "Daily operations · clear these to keep clients moving"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 -mb-px overflow-x-auto",
						children: Object.keys(QUEUE).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setTab(k),
							className: `px-3 py-2 text-sm font-medium border-b-2 whitespace-nowrap ${tab === k ? "border-primary text-primary-deep" : "border-transparent text-muted-foreground hover:text-foreground"}`,
							children: [
								k,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 text-xs text-muted-foreground",
									children: [
										"(",
										QUEUE[k].length,
										")"
									]
								})
							]
						}, k))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-[var(--admin-border)]",
					children: QUEUE[tab].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-[var(--admin-bg)]/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary-deep text-xs font-semibold shrink-0",
								children: row.who.split(" ").map((w) => w[0]).slice(0, 2).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium truncate",
									children: row.who
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground truncate",
									children: [
										row.type,
										" · ",
										row.status
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: row.tone,
								children: row.type
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-1 text-sm font-semibold text-primary-deep hover:underline",
								children: [
									row.action,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 13 })
								]
							})]
						})]
					}, i))
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
