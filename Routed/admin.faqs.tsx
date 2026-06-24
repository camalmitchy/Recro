import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/faqs")({
  component: () => (
    <AdminCrud
      title="FAQs"
      description="Public FAQ entries grouped by category."
      table="faqs"
      orderBy={{ column: "sort_order", ascending: true }}
      columns={[
        { key: "question", label: "Question" },
        { key: "category", label: "Category" },
        { key: "sort_order", label: "Order" },
        { key: "is_published", label: "Status", render: (r) => <StatusBadge tone={r.is_published ? "success" : "muted"}>{r.is_published ? "Live" : "Hidden"}</StatusBadge> },
      ]}
      fields={[
        { name: "question", label: "Question", required: true },
        { name: "answer", label: "Answer", type: "textarea", required: true },
        { name: "category", label: "Category" },
        { name: "sort_order", label: "Sort order", type: "number", defaultValue: 0 },
        { name: "is_published", label: "Published", type: "checkbox", defaultValue: true },
      ]}
    />
  ),
});
