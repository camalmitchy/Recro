import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as AuthProvider } from "./use-auth-BFFzin-l.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$39 } from "./booking-BIxYqigh.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-SdZX4hGb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CYDOggpF.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$38 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Recro Group — Restoring families" },
			{
				name: "description",
				content: "Bright, modern psychotherapy and behavioral health care for individuals, couples, families, children and organizations in Kenya."
			},
			{
				name: "author",
				content: "Recro Group Limited"
			},
			{
				name: "theme-color",
				content: "#4F6F52"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Recro Group"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$38.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			richColors: true,
			position: "top-right"
		})] })
	});
}
var BASE_URL = "";
var Route$37 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				priority: "1.0",
				changefreq: "weekly"
			},
			{
				path: "/about",
				priority: "0.8",
				changefreq: "monthly"
			},
			{
				path: "/services",
				priority: "0.9",
				changefreq: "monthly"
			},
			{
				path: "/media",
				priority: "0.7",
				changefreq: "weekly"
			},
			{
				path: "/grief-camp",
				priority: "0.9",
				changefreq: "weekly"
			},
			{
				path: "/blog",
				priority: "0.8",
				changefreq: "weekly"
			},
			{
				path: "/faq",
				priority: "0.6",
				changefreq: "monthly"
			},
			{
				path: "/contact",
				priority: "0.7",
				changefreq: "monthly"
			},
			{
				path: "/booking",
				priority: "0.8",
				changefreq: "monthly"
			}
		].map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$35 = () => import("./signup-Bm_d5rdt.mjs");
var Route$36 = createFileRoute("/signup")({
	head: () => ({ meta: [{ title: "Create account — Recro Group" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("./services-BHGSt6Hn.mjs");
var Route$35 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | Therapy, counselling & corporate wellness — Recro Group" }, {
		name: "description",
		content: "Explore Recro Group's services: individual therapy, couples and family counselling, group therapy, grief camps and corporate wellness programs."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./reset-password-Dj2rQpW-.mjs");
var Route$34 = createFileRoute("/reset-password")({
	head: () => ({ meta: [{ title: "Reset password — Recro Group" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./profile-CdSh150q.mjs");
var Route$33 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "My profile — Recro Group" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./media-BXAtVXht.mjs");
var Route$32 = createFileRoute("/media")({ component: lazyRouteComponent($$splitComponentImporter$31, "component") });
var $$splitComponentImporter$30 = () => import("./login-CUcDKkD5.mjs");
var Route$31 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Sign in — Recro Group" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./join-us-kZNQuM3l.mjs");
var Route$30 = createFileRoute("/join-us")({
	head: () => ({ meta: [
		{ title: "Join Us — Recro Group" },
		{
			name: "description",
			content: "Create your Recro Group account or sign in to book sessions, manage appointments, and access resources."
		},
		{
			property: "og:title",
			content: "Join Recro Group"
		},
		{
			property: "og:description",
			content: "Sign in or create an account to access care, bookings and resources."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./insights-BsthEVC_.mjs");
var Route$29 = createFileRoute("/insights")({
	head: () => ({ meta: [{ title: "Insights | Articles, talks & resources — Recro Group" }, {
		name: "description",
		content: "Articles, talks, and resources from our therapists to help you navigate relationships, grief, and life."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./grief-camp-DGkcGkwH.mjs");
var Route$28 = createFileRoute("/grief-camp")({
	head: () => ({ meta: [
		{ title: "Grief Camp 2026 | Recro Group" },
		{
			name: "description",
			content: "retreat for adolescents (10–16) who have lost a parent or sibling. Recro Grief Camp 14–16 August 2026."
		},
		{
			property: "og:title",
			content: "Recro Grief Camp 2026"
		},
		{
			property: "og:description",
			content: "A safe place to grieve out loud — 14–16 August 2026."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./faq-ESdpcmzH.mjs");
var Route$27 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ | Recro Group" }, {
		name: "description",
		content: "Answers to common questions about therapy, fees, confidentiality, sessions and Grief Camp at Recro Group."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./contact-u3t7rJ8L.mjs");
var Route$26 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact us | Recro Group" }, {
		name: "description",
		content: "Reach out to Recro Group to book a session, request information or partner with our team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./blog-B0na2cIY.mjs");
var Route$25 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "Blog & insights | Recro Group" }, {
		name: "description",
		content: "Practical, compassionate writing on mental health, relationships, grief and growth from the Recro Group team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./admin-Nws-KZSz.mjs");
var Route$24 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Admin · Recro Group" },
		{
			name: "description",
			content: "Recro Group internal admin dashboard."
		},
		{
			name: "robots",
			content: "noindex,nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./about-O6tv5cWr.mjs");
var Route$23 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Recro Group | Behavioral health for Kenyan families" },
		{
			name: "description",
			content: "Recro Group is a Behavioral Health Organization using psychotherapy to walk alongside individuals, families, couples, groups and organizations."
		},
		{
			property: "og:title",
			content: "About Recro Group"
		},
		{
			property: "og:description",
			content: "A holistic, systemic approach to healing for individuals, families, couples, groups and organisations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./routes-CnVwnO_s.mjs");
var Route$22 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Recro Group — Restoring families through therapy & care" },
		{
			name: "description",
			content: "Recro Group offers psychotherapy, family and couples counselling, children's grief support and corporate wellness across Kenya. Book a safe, professional session today."
		},
		{
			property: "og:title",
			content: "Recro Group — Restoring families"
		},
		{
			property: "og:description",
			content: "Bright, hopeful behavioral health care for individuals, couples, families, children and corporate teams."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./admin.index-7TOiLDUd.mjs");
var Route$21 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./admin.users-CWt4QEsx.mjs");
var Route$20 = createFileRoute("/admin/users")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./admin.therapists-D4xVMExY.mjs");
var Route$19 = createFileRoute("/admin/therapists")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./admin.testimonials-3iUMovLm.mjs");
var Route$18 = createFileRoute("/admin/testimonials")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./admin.settings-70y-zv96.mjs");
var Route$17 = createFileRoute("/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./admin.services-D9vz2J32.mjs");
var Route$16 = createFileRoute("/admin/services")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./admin.roles-BwGBchMN.mjs");
var Route$15 = createFileRoute("/admin/roles")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./admin.resources-8l5cdaSH.mjs");
var Route$14 = createFileRoute("/admin/resources")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./admin.reports-CY8jCSTD.mjs");
var Route$13 = createFileRoute("/admin/reports")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./admin.payments-BKujCtCt.mjs");
var Route$12 = createFileRoute("/admin/payments")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./admin.newsletter-DdlaCvnF.mjs");
var Route$11 = createFileRoute("/admin/newsletter")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./admin.media-BQ24lGjN.mjs");
var Route$10 = createFileRoute("/admin/media")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./admin.inquiries-D9JhR7Nx.mjs");
var Route$9 = createFileRoute("/admin/inquiries")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./admin.grief-camp-C1HpNF4J.mjs");
var Route$8 = createFileRoute("/admin/grief-camp")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.faqs-DiWOHSWp.mjs");
var Route$7 = createFileRoute("/admin/faqs")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.customers-CR-YVnjQ.mjs");
var Route$6 = createFileRoute("/admin/customers")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.corporate-speaking-TTYniPCg.mjs");
var Route$5 = createFileRoute("/admin/corporate-speaking")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.bookings-djOydSZA.mjs");
var Route$4 = createFileRoute("/admin/bookings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.blog-DG3nfXgx.mjs");
var Route$3 = createFileRoute("/admin/blog")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.audit-logs-Bbv2KE_R.mjs");
var Route$2 = createFileRoute("/admin/audit-logs")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.appointments-C_BjQbcJ.mjs");
var Route$1 = createFileRoute("/admin/appointments")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route = createFileRoute("/api/public/mpesa/callback")({ server: { handlers: { POST: async ({ request }) => {
	let payload;
	try {
		payload = await request.json();
	} catch {
		return new Response("bad json", { status: 400 });
	}
	const stk = payload?.Body?.stkCallback;
	if (!stk?.CheckoutRequestID) return new Response("ok");
	const { supabaseAdmin } = await import("./client.server-D1oHePJa.mjs");
	const resultCode = stk.ResultCode;
	const items = stk.CallbackMetadata?.Item ?? [];
	const get = (n) => items.find((i) => i.Name === n)?.Value;
	const receipt = get("MpesaReceiptNumber");
	const amount = get("Amount");
	const phone = get("PhoneNumber");
	const success = resultCode === 0;
	const { data: payment } = await supabaseAdmin.from("payments").select("id, booking_id").eq("mpesa_checkout_id", stk.CheckoutRequestID).maybeSingle();
	if (!payment) return new Response("ok");
	await supabaseAdmin.from("payments").update({
		status: success ? "paid" : "failed",
		mpesa_receipt: receipt ?? null,
		phone: phone ? String(phone) : void 0,
		amount_kes: amount ?? void 0,
		notes: stk.ResultDesc ?? null,
		verified_at: success ? (/* @__PURE__ */ new Date()).toISOString() : null
	}).eq("id", payment.id);
	if (success && payment.booking_id) await supabaseAdmin.from("bookings").update({
		payment_status: "paid",
		status: "confirmed"
	}).eq("id", payment.booking_id);
	return new Response("ok");
} } } });
var SitemapDotxmlRoute = Route$37.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$38
});
var SignupRoute = Route$36.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$38
});
var ServicesRoute = Route$35.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$38
});
var ResetPasswordRoute = Route$34.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$38
});
var ProfileRoute = Route$33.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$38
});
var MediaRoute = Route$32.update({
	id: "/media",
	path: "/media",
	getParentRoute: () => Route$38
});
var LoginRoute = Route$31.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$38
});
var JoinUsRoute = Route$30.update({
	id: "/join-us",
	path: "/join-us",
	getParentRoute: () => Route$38
});
var InsightsRoute = Route$29.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => Route$38
});
var GriefCampRoute = Route$28.update({
	id: "/grief-camp",
	path: "/grief-camp",
	getParentRoute: () => Route$38
});
var FaqRoute = Route$27.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$38
});
var ContactRoute = Route$26.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$38
});
var BookingRoute = Route$39.update({
	id: "/booking",
	path: "/booking",
	getParentRoute: () => Route$38
});
var BlogRoute = Route$25.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$38
});
var AdminRoute = Route$24.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$38
});
var AboutRoute = Route$23.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$38
});
var IndexRoute = Route$22.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$38
});
var AdminIndexRoute = Route$21.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminUsersRoute = Route$20.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => AdminRoute
});
var AdminTherapistsRoute = Route$19.update({
	id: "/therapists",
	path: "/therapists",
	getParentRoute: () => AdminRoute
});
var AdminTestimonialsRoute = Route$18.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => AdminRoute
});
var AdminSettingsRoute = Route$17.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRoute
});
var AdminServicesRoute = Route$16.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => AdminRoute
});
var AdminRolesRoute = Route$15.update({
	id: "/roles",
	path: "/roles",
	getParentRoute: () => AdminRoute
});
var AdminResourcesRoute = Route$14.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => AdminRoute
});
var AdminReportsRoute = Route$13.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AdminRoute
});
var AdminPaymentsRoute = Route$12.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AdminRoute
});
var AdminNewsletterRoute = Route$11.update({
	id: "/newsletter",
	path: "/newsletter",
	getParentRoute: () => AdminRoute
});
var AdminMediaRoute = Route$10.update({
	id: "/media",
	path: "/media",
	getParentRoute: () => AdminRoute
});
var AdminInquiriesRoute = Route$9.update({
	id: "/inquiries",
	path: "/inquiries",
	getParentRoute: () => AdminRoute
});
var AdminGriefCampRoute = Route$8.update({
	id: "/grief-camp",
	path: "/grief-camp",
	getParentRoute: () => AdminRoute
});
var AdminFaqsRoute = Route$7.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => AdminRoute
});
var AdminCustomersRoute = Route$6.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => AdminRoute
});
var AdminCorporateSpeakingRoute = Route$5.update({
	id: "/corporate-speaking",
	path: "/corporate-speaking",
	getParentRoute: () => AdminRoute
});
var AdminBookingsRoute = Route$4.update({
	id: "/bookings",
	path: "/bookings",
	getParentRoute: () => AdminRoute
});
var AdminBlogRoute = Route$3.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => AdminRoute
});
var AdminAuditLogsRoute = Route$2.update({
	id: "/audit-logs",
	path: "/audit-logs",
	getParentRoute: () => AdminRoute
});
var AdminAppointmentsRoute = Route$1.update({
	id: "/appointments",
	path: "/appointments",
	getParentRoute: () => AdminRoute
});
var ApiPublicMpesaCallbackRoute = Route.update({
	id: "/api/public/mpesa/callback",
	path: "/api/public/mpesa/callback",
	getParentRoute: () => Route$38
});
var AdminRouteChildren = {
	AdminAppointmentsRoute,
	AdminAuditLogsRoute,
	AdminBlogRoute,
	AdminBookingsRoute,
	AdminCorporateSpeakingRoute,
	AdminCustomersRoute,
	AdminFaqsRoute,
	AdminGriefCampRoute,
	AdminInquiriesRoute,
	AdminMediaRoute,
	AdminNewsletterRoute,
	AdminPaymentsRoute,
	AdminReportsRoute,
	AdminResourcesRoute,
	AdminRolesRoute,
	AdminServicesRoute,
	AdminSettingsRoute,
	AdminTestimonialsRoute,
	AdminTherapistsRoute,
	AdminUsersRoute,
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	BlogRoute,
	BookingRoute,
	ContactRoute,
	FaqRoute,
	GriefCampRoute,
	InsightsRoute,
	JoinUsRoute,
	LoginRoute,
	MediaRoute,
	ProfileRoute,
	ResetPasswordRoute,
	ServicesRoute,
	SignupRoute,
	SitemapDotxmlRoute,
	ApiPublicMpesaCallbackRoute
};
var routeTree = Route$38._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
