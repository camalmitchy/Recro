import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/testimonials")({
  component: () => (
    <AdminCrud
      title="Testimonials"
      description="Client testimonials displayed across the site."
      table="testimonials"
      orderBy={{ column: "created_at", ascending: false }}
      columns={[
        { key: "author_name", label: "Author" },
        { key: "author_role", label: "Role" },
        { key: "rating", label: "Rating" },
        { key: "is_published", label: "Status", render: (r) => <StatusBadge tone={r.is_published ? "success" : "muted"}>{r.is_published ? "Live" : "Hidden"}</StatusBadge> },
      ]}
      fields={[
        { name: "author_name", label: "Author name", required: true },
        { name: "author_role", label: "Role / context" },
        { name: "quote", label: "Quote", type: "textarea", required: true },
        { name: "rating", label: "Rating (1-5)", type: "number" },
        { name: "is_published", label: "Published", type: "checkbox", defaultValue: true },
      ]}
    />
  ),
});
