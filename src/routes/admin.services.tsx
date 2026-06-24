import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/services")({
  component: () => (
    <AdminCrud
      title="Services"
      description="Therapy and program services shown on the public site."
      table="services"
      orderBy={{ column: "created_at", ascending: false }}
      columns={[
        { key: "title", label: "Title" },
        { key: "slug", label: "Slug" },
        { key: "category", label: "Category" },
        { key: "price_kes", label: "Price (KES)" },
        { key: "is_published", label: "Status", render: (r) => <StatusBadge tone={r.is_published ? "success" : "muted"}>{r.is_published ? "Published" : "Draft"}</StatusBadge> },
      ]}
      fields={[
        { name: "title", label: "Title", required: true },
        { name: "slug", label: "Slug", required: true },
        { name: "category", label: "Category" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "price_kes", label: "Price (KES)", type: "number" },
        { name: "duration_min", label: "Duration (min)", type: "number" },
        { name: "is_published", label: "Published", type: "checkbox", defaultValue: true },
      ]}
    />
  ),
});
