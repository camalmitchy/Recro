import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Settings, I as MessageCircle, M as Pen, Q as FileText, et as CreditCard, it as CircleQuestionMark, mt as BookOpen, o as User, pt as Briefcase, q as Heart, r as Video, ut as Calendar } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-BVuCcadn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CdSh150q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var mockUser = {
	email: "minanicamala@gmail.com",
	name: "minanicamala13",
	avatar: "MN",
	memberSince: "January 2024",
	totalSessions: 12,
	upcomingSessions: 0,
	completedSessions: 12,
	lifetimeSpend: 45e3
};
var TABS = [
	{
		key: "overview",
		label: "Overview",
		icon: Heart
	},
	{
		key: "personal-info",
		label: "Personal Info",
		icon: User
	},
	{
		key: "appointments",
		label: "Appointments",
		icon: Calendar
	},
	{
		key: "bookings",
		label: "Bookings",
		icon: Briefcase
	},
	{
		key: "payments",
		label: "Payments",
		icon: CreditCard
	},
	{
		key: "resources",
		label: "Resources",
		icon: BookOpen
	},
	{
		key: "settings",
		label: "Settings",
		icon: Settings
	}
];
function ProfilePage() {
	const [tab, setTab] = (0, import_react.useState)("overview");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-[#3F5B43] text-white relative pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-20 w-20 place-items-center rounded-full bg-white text-[#3F5B43] text-2xl font-bold",
									children: mockUser.avatar
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-3xl font-bold tracking-tight",
									children: mockUser.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/80 mt-1",
									children: mockUser.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-white/60 text-sm mt-1",
									children: ["Member since ", mockUser.memberSince]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/booking",
								search: { service: void 0 },
								className: "bg-white text-[#3F5B43] hover:bg-white/90 px-6 py-2.5 rounded-xl font-semibold transition",
								children: "Book a session"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-2.5 rounded-xl font-semibold transition flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { size: 16 }), "Edit"]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page -mt-16 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							emoji: "📋",
							label: "Total Sessions",
							value: mockUser.totalSessions.toString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							emoji: "🕐",
							label: "Upcoming",
							value: mockUser.upcomingSessions.toString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							emoji: "✓",
							label: "Completed",
							value: mockUser.completedSessions.toString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							emoji: "💰",
							label: "Lifetime Spend",
							value: `KES ${mockUser.lifetimeSpend.toLocaleString()}`
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-12 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-4 border-b border-border mb-8 overflow-x-auto",
					children: TABS.map((t) => {
						const Icon = t.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setTab(t.key),
							className: `pb-3 px-3 text-sm font-medium whitespace-nowrap transition border-b-2 -mb-px flex items-center gap-2 ${tab === t.key ? "border-[#3F5B43] text-[#3F5B43] bg-[#3F5B43]/5" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-surface"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 }), t.label]
						}, t.key);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-[1fr_320px] gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary-deep mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 32 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-semibold mb-2",
											children: "No upcoming sessions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-sm mb-6",
											children: "You don't have any scheduled sessions at the moment"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/booking",
											search: { service: void 0 },
											className: "btn-primary inline-flex",
											children: "Book a session"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold mb-4",
									children: "Recent activity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-surface divide-y divide-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityItem, {
											date: "Dec 15, 2024",
											title: "Individual Therapy Session",
											status: "Completed",
											amount: "KES 3,500"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityItem, {
											date: "Dec 8, 2024",
											title: "Family Counseling",
											status: "Completed",
											amount: "KES 4,000"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityItem, {
											date: "Dec 1, 2024",
											title: "Individual Therapy Session",
											status: "Completed",
											amount: "KES 3,500"
										})
									]
								})] })]
							}),
							tab === "personal-info" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6 max-w-2xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-surface p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-semibold mb-4",
											children: "Personal Information"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Full name",
													value: mockUser.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Email",
													value: mockUser.email
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Phone",
													value: "+254 712 345 678"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Date of Birth",
													value: "January 15, 1990"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Gender",
													value: "Prefer not to say"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
													label: "Address",
													value: "Nairobi, Kenya"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "mt-6 btn-primary",
											children: "Edit Information"
										})
									]
								})
							}),
							tab === "appointments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
											size: 48,
											className: "mx-auto mb-4 opacity-30"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-semibold mb-2 text-foreground",
											children: "No upcoming appointments"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm mb-6",
											children: "Schedule your next therapy session"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/booking",
											search: { service: void 0 },
											className: "btn-primary inline-flex",
											children: "Book an appointment"
										})
									]
								})
							}),
							tab === "bookings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
										size: 48,
										className: "mx-auto mb-4 opacity-30"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold mb-2 text-foreground",
										children: "No bookings yet"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: "Your booking history will appear here"
									})
								]
							}),
							tab === "payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border-2 border-dashed border-border bg-surface p-12 text-center text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
										size: 48,
										className: "mx-auto mb-4 opacity-30"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold mb-2 text-foreground",
										children: "No payment history"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: "Your payment records will appear here"
									})
								]
							}),
							tab === "resources" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 24 }),
											title: "Mental Health Articles",
											description: "Read helpful articles about mental wellness",
											link: "/resources"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 24 }),
											title: "Video Resources",
											description: "Watch educational videos and sessions",
											link: "/resources"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 24 }),
											title: "Self-Help Guides",
											description: "Download guides for personal growth",
											link: "/resources"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 24 }),
											title: "FAQ & Support",
											description: "Find answers to common questions",
											link: "/faq"
										})
									]
								})
							}),
							tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6 max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border bg-surface p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-semibold mb-4",
											children: "Preferences"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "rounded"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm",
														children: "Email notifications"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "rounded"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm",
														children: "SMS reminders"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														className: "rounded"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm",
														children: "Marketing communications"
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border bg-surface p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-semibold mb-4",
											children: "Security"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "btn-primary",
											children: "Change Password"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-destructive/20 bg-destructive/5 p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-semibold mb-2 text-destructive",
												children: "Danger Zone"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground mb-4",
												children: "Permanently delete your account and all data"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "px-4 py-2 rounded-lg bg-destructive text-white hover:bg-destructive/90 transition text-sm font-semibold",
												children: "Delete Account"
											})
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-[#3F5B43] text-white p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl mb-3",
									children: "💬"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold mb-2",
									children: "Need extra support?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/80 text-sm mb-4",
									children: "Our team is here to help you with any questions or concerns"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "w-full bg-white text-[#3F5B43] hover:bg-white/90 px-4 py-2.5 rounded-xl font-semibold transition flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }), "Contact us"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold mb-4",
								children: "Quick links"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLink, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 16 }),
										label: "Browse services",
										to: "/services"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLink, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 16 }),
										label: "Read articles",
										to: "/resources"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLink, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 16 }),
										label: "Watch sessions",
										to: "/resources"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickLink, {
										icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { size: 16 }),
										label: "FAQ",
										to: "/faq"
									})
								]
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function StatCard({ emoji, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-surface p-6 shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-3xl mb-2",
				children: emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-2xl font-bold",
				children: value
			})
		]
	});
}
function ActivityItem({ date, title, status, amount }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 flex items-center justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: date
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium mt-0.5",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-right",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-soft text-primary-deep",
				children: status
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold mt-1",
				children: amount
			})]
		})]
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm font-medium",
		children: value
	})] });
}
function ResourceCard({ icon, title, description, link }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: link,
		className: "rounded-2xl border border-border bg-surface p-6 hover:border-primary/30 hover:shadow-sm transition",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-primary-deep mb-3",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-semibold mb-1",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: description
			})
		]
	});
}
function QuickLink({ icon, label, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex items-center gap-3 p-3 rounded-xl hover:bg-surface-2 transition text-sm font-medium",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: icon
		}), label]
	});
}
//#endregion
export { ProfilePage as component };
