import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useAuth } from "./use-auth-BFFzin-l.mjs";
import { H as LoaderCircle, _t as ArrowLeft, ct as Check, et as CreditCard, ft as Building2, gt as ArrowRight, l as Upload, tt as Clock, y as Smartphone } from "../_libs/lucide-react.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteShell } from "./SiteShell-CtOG-apJ.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { l as createServerFn } from "./esm-9EjmF9OT.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-Dpn8S0gM.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-_WIQ47_l.mjs";
import { t as Route } from "./booking-BIxYqigh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-CoFPRfQV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initiateMpesaStk = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => d).handler(createSsrRpc("2b9d60752e85dda3652c42f85865d9466bc8e5a6418c99d2d30c17989247766e"));
var SERVICES = [
	{
		key: "individual",
		label: "Individual Therapy",
		description: "50-minute one-on-one session for adults.",
		duration: "50 min",
		durationMin: 50,
		amount: 6500
	},
	{
		key: "couples",
		label: "Couples Therapy",
		description: "75-minute session for partners.",
		duration: "75 min",
		durationMin: 75,
		amount: 1e4
	},
	{
		key: "family",
		label: "Family Therapy",
		description: "75-minute session for the family system.",
		duration: "75 min",
		durationMin: 75,
		amount: 12e3
	},
	{
		key: "group",
		label: "Group Therapy (intake)",
		description: "Screening conversation for an upcoming group.",
		duration: "30 min",
		durationMin: 30,
		amount: 0
	},
	{
		key: "children",
		label: "Grief Camp",
		description: "50-minute session tailored for young clients.",
		duration: "50 min",
		durationMin: 50,
		amount: 6e3
	},
	{
		key: "corporate",
		label: "Corporate Scoping Call",
		description: "30-minute scoping for a corporate engagement.",
		duration: "30 min",
		durationMin: 30,
		amount: 0
	}
];
var CLINICIANS = [{
	id: "michelle",
	name: "Dr. Michelle Karume",
	role: "Founder · Clinical Psychologist · Grief Specialist"
}];
var TIME_SLOTS = [
	"9:00",
	"10:05",
	"11:10",
	"12:15",
	"13:20",
	"14:25",
	"15:30"
];
var STEPS = [
	"Service",
	"Time",
	"Intake",
	"Pay"
];
function getDateStrip(daysAhead = 14) {
	const out = [];
	const today = /* @__PURE__ */ new Date();
	for (let i = 0; i < daysAhead; i++) {
		const d = new Date(today);
		d.setDate(today.getDate() + i);
		out.push({
			date: d,
			key: d.toISOString().slice(0, 10),
			dow: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
			day: String(d.getDate()),
			mon: d.toLocaleDateString("en-US", { month: "short" })
		});
	}
	return out;
}
function BookingPage() {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	const { service: serviceParam } = Route.useSearch();
	const stkPush = useServerFn(initiateMpesaStk);
	const dateStrip = (0, import_react.useMemo)(() => getDateStrip(14), []);
	const initialServiceKey = SERVICES.find((s) => s.key === serviceParam)?.key ?? SERVICES[0].key;
	const [step, setStep] = (0, import_react.useState)(serviceParam ? 1 : 0);
	const [serviceKey, setServiceKey] = (0, import_react.useState)(initialServiceKey);
	const [clinicianId, setClinicianId] = (0, import_react.useState)(CLINICIANS[0].id);
	const [dateKey, setDateKey] = (0, import_react.useState)(dateStrip[1]?.key ?? dateStrip[0].key);
	const [time, setTime] = (0, import_react.useState)("12:15");
	const [format, setFormat] = (0, import_react.useState)("in_person");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [bookingId, setBookingId] = (0, import_react.useState)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [paid, setPaid] = (0, import_react.useState)(false);
	const service = SERVICES.find((s) => s.key === serviceKey);
	const clinician = CLINICIANS.find((c) => c.id === clinicianId);
	const selectedDate = dateStrip.find((d) => d.key === dateKey) ?? dateStrip[0];
	(0, import_react.useEffect)(() => {
		if (!loading && !user) navigate({ to: "/join-us" });
	}, [
		loading,
		user,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		if (user) {
			setName((n) => n || user.user_metadata?.full_name || "");
			setEmail((e) => e || user.email || "");
			setPhone((p) => p || user.user_metadata?.phone || "");
		}
	}, [user]);
	const whenLabel = `${selectedDate.dow.charAt(0)}${selectedDate.dow.slice(1).toLowerCase()} ${selectedDate.day} ${selectedDate.mon}, ${time}`;
	const createBookingIfNeeded = async () => {
		if (bookingId || !user) return bookingId;
		setCreating(true);
		const reference = "RG-" + Math.random().toString(36).slice(2, 8).toUpperCase();
		const { data, error } = await supabase.from("bookings").insert({
			user_id: user.id,
			reference,
			client_name: name || user.email || "Client",
			client_email: email || user.email || "",
			client_phone: phone,
			preferred_date: dateKey,
			preferred_time: time,
			notes: `${service.label} · ${format === "video" ? "Video" : "In person"} · ${clinician.name}${notes ? "\n" + notes : ""}`,
			amount_kes: service.amount,
			status: "pending",
			payment_status: "pending"
		}).select().single();
		setCreating(false);
		if (error) {
			toast.error(error.message);
			return null;
		}
		setBookingId(data.id);
		return data.id;
	};
	const onNext = async () => {
		if (step === 2) {
			if (!notes.trim()) {
				toast.error("Please share a short note so your clinician can prepare.");
				return;
			}
			if (!await createBookingIfNeeded()) return;
		}
		setStep(Math.min(STEPS.length, step + 1));
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-page py-20 text-center text-muted-foreground",
		children: "Loading…"
	}) });
	const showSummary = step >= 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "Booking"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl md:text-5xl font-semibold tracking-tight",
				children: "Book a session"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 flex items-center gap-3 flex-wrap",
				children: STEPS.map((s, i) => {
					const done = i < step;
					const active = i === step;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition ${done ? "bg-primary text-primary-foreground" : active ? "border-2 border-primary text-primary-deep bg-background" : "border-2 border-border text-muted-foreground bg-background"}`,
								children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs tracking-[0.18em] font-semibold uppercase ${active ? "text-foreground" : "text-muted-foreground"}`,
								children: s
							}),
							i < STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block w-10 h-px bg-border" })
						]
					}, s);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 border-t border-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-10 grid gap-10 ${showSummary && step === 3 ? "lg:grid-cols-[1fr_360px]" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: SERVICES.map((s) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setServiceKey(s.key),
								className: `text-left rounded-2xl border bg-card p-6 md:p-7 transition shadow-[var(--shadow-soft)] hover:border-primary ${s.key === serviceKey ? "border-primary ring-1 ring-primary" : "border-border"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl font-semibold",
										children: s.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: s.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center justify-between text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 15 }),
												" ",
												s.duration
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: s.amount ? `Ksh ${s.amount.toLocaleString()}` : "Free"
										})]
									})
								]
							}, s.key);
						})
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl font-semibold",
							children: "Choose a clinician"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid sm:grid-cols-2 gap-3",
							children: CLINICIANS.map((c) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setClinicianId(c.id),
									className: `text-left rounded-2xl border p-5 transition ${c.id === clinicianId ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-xl font-semibold",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: c.role
									})]
								}, c.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10 font-serif text-2xl font-semibold",
							children: "Pick a date"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 -mx-2 overflow-x-auto pb-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-2 flex gap-3 min-w-max",
								children: dateStrip.map((d) => {
									const sel = d.key === dateKey;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setDateKey(d.key),
										className: `shrink-0 w-[88px] rounded-2xl border px-3 py-3 text-center transition ${sel ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card hover:border-primary"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `text-[11px] tracking-[0.18em] font-semibold ${sel ? "text-primary-foreground/80" : "text-muted-foreground"}`,
												children: d.dow
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-2xl font-serif font-semibold leading-none",
												children: d.day
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `mt-1 text-xs ${sel ? "text-primary-foreground/80" : "text-muted-foreground"}`,
												children: d.mon
											})
										]
									}, d.key);
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10 font-serif text-2xl font-semibold",
							children: "Pick a time"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",
							children: TIME_SLOTS.map((t) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setTime(t),
									className: `rounded-2xl border px-4 py-3 text-sm font-medium transition ${t === time ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card hover:border-primary"}`,
									children: t
								}, t);
							})
						})
					] }),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground",
							children: "Session format"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid sm:grid-cols-2 gap-4",
							children: [{
								id: "in_person",
								label: "In person",
								sub: "Nairobi practice"
							}, {
								id: "video",
								label: "Video",
								sub: "Secure link sent on confirm"
							}].map((f) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setFormat(f.id),
									className: `text-left rounded-2xl border p-5 transition ${f.id === format ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-xl font-semibold",
										children: f.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: f.sub
									})]
								}, f.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground",
							children: "What brings you in? *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 6,
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							placeholder: "A short paragraph helps your therapist prepare. Confidential — only your clinician sees this.",
							className: "mt-3 w-full rounded-2xl border border-border bg-card px-5 py-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-y"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid sm:grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									value: name,
									onChange: setName,
									placeholder: "Jane Doe"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									type: "email",
									value: email,
									onChange: setEmail,
									placeholder: "jane@example.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									value: phone,
									onChange: setPhone,
									placeholder: "+254 7XX XXX XXX"
								})
							]
						})
					] }),
					step === 3 && bookingId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentStep, {
						bookingId,
						phone,
						amount: service.amount,
						onPaid: () => {
							setPaid(true);
							setStep(4);
						},
						stkPush,
						userId: user.id
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmStep, { paid })
				] }), step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-7 shadow-[var(--shadow-soft)] h-fit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl font-semibold",
							children: "Booking summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Service",
									v: service.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Clinician",
									v: clinician.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "When",
									v: whenLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Duration",
									v: service.duration
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Format",
									v: format === "video" ? "Video" : "In person"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 border-t border-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl font-semibold",
								children: service.amount ? `Ksh ${service.amount.toLocaleString()}` : "Free"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex items-center justify-between",
				children: [step > 0 && step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setStep(Math.max(0, step - 1)),
					className: "inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: "text-sm text-muted-foreground hover:text-foreground",
					children: "← Back to services"
				}), step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onNext,
					disabled: creating,
					className: "btn-primary disabled:opacity-50",
					children: creating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						size: 15,
						className: "animate-spin"
					}), " Creating…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })] })
				}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/profile",
					className: "btn-primary",
					children: ["View my bookings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 })]
				}) : null]
			})
		]
	}) });
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-medium text-right",
			children: v
		})]
	});
}
function PaymentStep({ bookingId, phone, amount, onPaid, stkPush, userId }) {
	const [method, setMethod] = (0, import_react.useState)("mpesa");
	const [mpesaPhone, setMpesaPhone] = (0, import_react.useState)(phone);
	const [stkBusy, setStkBusy] = (0, import_react.useState)(false);
	const [proof, setProof] = (0, import_react.useState)(null);
	const [bankRef, setBankRef] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const triggerStk = async () => {
		if (!amount) {
			toast.error("This service requires a quote — we'll be in touch.");
			return;
		}
		if (!mpesaPhone) {
			toast.error("Enter your M-Pesa phone number");
			return;
		}
		setStkBusy(true);
		try {
			if ((await stkPush({ data: {
				bookingId,
				phone: mpesaPhone,
				amountKes: amount
			} }))?.dummy) toast.success("STK push simulated (Daraja keys not yet configured). A pending payment was recorded.");
			else toast.success("STK push sent. Check your phone to authorise the payment.");
			onPaid();
		} catch (e) {
			toast.error(e?.message ?? "STK push failed");
		} finally {
			setStkBusy(false);
		}
	};
	const submitBank = async () => {
		if (!proof) {
			toast.error("Please upload your bank slip");
			return;
		}
		if (!bankRef.trim()) {
			toast.error("Enter the transfer reference");
			return;
		}
		setUploading(true);
		try {
			const ext = proof.name.split(".").pop() ?? "pdf";
			const path = `${userId}/${bookingId}-${Date.now()}.${ext}`;
			const up = await supabase.storage.from("payment-proofs").upload(path, proof, { upsert: false });
			if (up.error) throw up.error;
			const { error } = await supabase.from("payments").insert({
				booking_id: bookingId,
				user_id: userId,
				method: "bank",
				amount_kes: amount,
				reference: bankRef.trim(),
				proof_url: path,
				status: "pending",
				notes: "SBM Bank transfer — awaiting admin verification"
			});
			if (error) throw error;
			toast.success("Proof uploaded. We'll verify and confirm by email.");
			onPaid();
		} catch (e) {
			toast.error(e?.message ?? "Upload failed");
		} finally {
			setUploading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-3xl font-semibold",
			children: "Payment"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid sm:grid-cols-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setMethod("mpesa"),
				className: `text-left rounded-2xl border p-5 transition ${method === "mpesa" ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { size: 18 }), " M-Pesa STK"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Pay via your Safaricom line. We'll prompt your phone."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setMethod("bank"),
				className: `text-left rounded-2xl border p-5 transition ${method === "bank" ? "border-primary ring-1 ring-primary bg-background" : "border-border bg-card hover:border-primary"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { size: 18 }), " SBM Bank transfer"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "KES / USD accounts · upload your slip for verification."
				})]
			})]
		}),
		method === "mpesa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground",
					children: "M-Pesa number *"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: mpesaPhone,
					onChange: (e) => setMpesaPhone(e.target.value),
					placeholder: "07XX XXX XXX",
					className: "w-full rounded-2xl border border-border bg-card px-5 py-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs rounded-full bg-primary-soft text-primary-deep px-3 py-1.5 inline-block",
					children: "Buy Goods · Till 747736 · Recro Group Limited"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: triggerStk,
					disabled: stkBusy,
					className: "btn-primary disabled:opacity-50",
					children: stkBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						size: 15,
						className: "animate-spin"
					}), " Sending STK…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { size: 15 }), " Pay & confirm"] })
				}) })
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-primary-soft p-4 text-xs leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-primary-deep mb-1",
								children: "Kenya Shilling Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Bank:" }), " SBM Bank"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Account name:" }), " Recro Group Limited"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Account number:" }), " 0182074946001"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swift:" }), " CKENKENA"] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-surface p-4 text-xs leading-relaxed border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-primary-deep mb-1",
								children: "USD Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Bank:" }), " SBM Bank"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Account name:" }), " Recro Group Limited"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Account number:" }), " 0182074946003"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swift:" }), " SBMKKENA"] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Bank reference / slip number",
					value: bankRef,
					onChange: setBankRef,
					placeholder: "e.g. TXN20260620-9381"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground",
						children: "Proof of payment (PDF or image)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/*,application/pdf",
						onChange: (e) => setProof(e.target.files?.[0] ?? null),
						className: "mt-2 block w-full text-sm"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: submitBank,
					disabled: uploading,
					className: "btn-primary disabled:opacity-50",
					children: uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						size: 15,
						className: "animate-spin"
					}), " Uploading…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 }), " Submit for verification"] })
				})
			]
		})
	] });
}
function ConfirmStep({ paid }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center py-12 rounded-3xl border border-border bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 26 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-serif text-3xl font-semibold",
				children: paid ? "Payment received" : "You're all set"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground max-w-md mx-auto",
				children: "We've recorded your booking. A coordinator will confirm your session by email shortly. You can track status in your profile."
			})
		]
	});
}
function Field({ label, value, onChange, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-[11px] tracking-[0.18em] font-semibold uppercase text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		value,
		placeholder,
		onChange: (e) => onChange(e.target.value),
		className: "mt-2 w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
	})] });
}
//#endregion
export { BookingPage as component };
