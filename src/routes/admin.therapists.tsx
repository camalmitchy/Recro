import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/therapists")({
  component: () => (
    <AdminCrud
      title="Therapists"
      description="Clinical team — visible on public services pages."
      table="therapists"
      orderBy={{ column: "created_at", ascending: false }}
      columns={[
        { key: "full_name", label: "Name" },
        { key: "title", label: "Title" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "is_active", label: "Status", render: (r) => <StatusBadge tone={r.is_active ? "success" : "muted"}>{r.is_active ? "Active" : "Hidden"}</StatusBadge> },
      ]}
      fields={[
        { name: "full_name", label: "Full name", required: true },
        { name: "title", label: "Title (e.g. Counselling Psychologist)" },
        { name: "email", label: "Email" },
        { name: "phone", label: "Phone" },
        { name: "bio", label: "Short bio", type: "textarea" },
        { name: "photo_url", label: "Photo URL" },
        { name: "is_active", label: "Active", type: "checkbox", defaultValue: true },
      ]}
    />
  ),
});
