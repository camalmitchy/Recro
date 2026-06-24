import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/blog")({
  component: () => (
    <AdminCrud
      title="Blog posts"
      description="Articles and insights for the public blog."
      table="blog_posts"
      orderBy={{ column: "created_at", ascending: false }}
      columns={[
        { key: "title", label: "Title" },
        { key: "author", label: "Author" },
        { key: "slug", label: "Slug" },
        { key: "is_published", label: "Status", render: (r) => <StatusBadge tone={r.is_published ? "success" : "muted"}>{r.is_published ? "Published" : "Draft"}</StatusBadge> },
      ]}
      fields={[
        { name: "title", label: "Title", required: true },
        { name: "slug", label: "Slug", required: true },
        { name: "author", label: "Author" },
        { name: "excerpt", label: "Excerpt", type: "textarea" },
        { name: "body", label: "Body (markdown)", type: "textarea" },
        { name: "cover_url", label: "Cover image URL" },
        { name: "is_published", label: "Published", type: "checkbox" },
      ]}
    />
  ),
});
