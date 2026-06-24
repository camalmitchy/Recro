import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { O as Plus, j as Pencil, p as Trash2, t as X } from "../_libs/lucide-react.mjs";
import { _ as DialogTrigger$1, a as Overlay2, c as Title2, d as DialogClose, f as DialogContent$1, g as DialogTitle$1, h as DialogPortal$1, i as Description2, l as Trigger2, m as DialogOverlay$1, n as Cancel, o as Portal2, p as DialogDescription$1, r as Content2, s as Root2, t as Action, u as Dialog$1 } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { s as cn } from "./dropdown-menu-Sj0K9LUY.mjs";
import { n as buttonVariants } from "./button-QhyPz88T.mjs";
import { i as PageHeader, n as Card, r as DataTable } from "./AdminShell-DU4OVFzc.mjs";
import { t as supabase } from "./client-Bat_bAlP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminCrud-BYAfBYTO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var AlertDialog = Root2;
var AlertDialogTrigger = Trigger2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
var inp = "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
function AdminCrud({ title, description, table, columns, fields, orderBy }) {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const load = async () => {
		setLoading(true);
		let q = supabase.from(table).select("*");
		if (orderBy) q = q.order(orderBy.column, { ascending: orderBy.ascending ?? false });
		const { data, error } = await q;
		if (error) toast.error(error.message);
		setRows(data ?? []);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		load();
	}, [table]);
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		const fd = new FormData(e.currentTarget);
		const payload = {};
		for (const f of fields) {
			let v;
			if (f.type === "checkbox") v = fd.get(f.name) === "on";
			else if (f.type === "number") {
				const raw = fd.get(f.name);
				v = raw === "" || raw == null ? null : Number(raw);
			} else v = fd.get(f.name);
			if (v === "") v = null;
			payload[f.name] = v;
		}
		const { error } = await (editing ? supabase.from(table).update(payload).eq("id", editing.id) : supabase.from(table).insert(payload));
		setBusy(false);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success(editing ? "Updated" : "Created");
		setOpen(false);
		setEditing(null);
		load();
	};
	const remove = async (id) => {
		const { error } = await supabase.from(table).delete().eq("id", id);
		if (error) toast.error(error.message);
		else {
			toast.success("Deleted");
			load();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title,
			description,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: (o) => {
					setOpen(o);
					if (!o) setEditing(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setEditing(null),
						className: "inline-flex items-center gap-1.5 text-sm font-semibold px-3 h-9 rounded-lg bg-[var(--admin-primary)] text-white hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Add"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing ? `Edit ${title.replace(/s$/, "")}` : `New ${title.replace(/s$/, "")}` }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "space-y-3 max-h-[60vh] overflow-y-auto pr-1",
						children: [fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: f.label
							}), f.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: f.name,
								required: f.required,
								defaultValue: editing?.[f.name] ?? f.defaultValue ?? "",
								rows: 4,
								className: inp
							}) : f.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: f.name,
								required: f.required,
								defaultValue: editing?.[f.name] ?? f.defaultValue ?? f.options?.[0]?.value,
								className: inp,
								children: f.options?.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o.value,
									children: o.label
								}, o.value))
							}) : f.type === "checkbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: f.name,
									defaultChecked: editing?.[f.name] ?? f.defaultValue ?? false
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: f.type ?? "text",
								name: f.name,
								required: f.required,
								defaultValue: editing?.[f.name] ?? f.defaultValue ?? "",
								className: inp
							})]
						}, f.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: busy,
							className: "btn-primary",
							children: busy ? "Saving…" : "Save"
						}) })]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "Loading…"
		}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-10 text-center text-muted-foreground text-sm",
			children: "No records yet."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: [...columns.map((c) => c.label), "Actions"],
			rows: rows.map((r) => [...columns.map((c) => c.render ? c.render(r) : r[c.key] ?? "—"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEditing(r);
						setOpen(true);
					},
					className: "grid h-8 w-8 place-items-center rounded-md hover:bg-[var(--admin-bg)]",
					"aria-label": "Edit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 14 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid h-8 w-8 place-items-center rounded-md hover:bg-[var(--admin-bg)] text-destructive",
						"aria-label": "Delete",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 14 })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Delete this record?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This action cannot be undone." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					onClick: () => remove(r.id),
					children: "Delete"
				})] })] })] })]
			}, "a")])
		}) })]
	});
}
//#endregion
export { AdminCrud as t };
