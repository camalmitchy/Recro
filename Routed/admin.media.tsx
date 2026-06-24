import { createFileRoute } from "@tanstack/react-router";
import { AdminCrud } from "@/components/admin/AdminCrud";
import { StatusBadge } from "@/components/admin/AdminShell";

export const Route = createFileRoute("/admin/media")({
  component: () => (
    <AdminCrud
      title="Media items"
      description="Videos, podcasts and audio published in the media library."
      table="media_items"
      orderBy={{ column: "created_at", ascending: false }}
      columns={[
        { key: "title", label: "Title" },
        { key: "media_type", label: "Type" },
        { key: "url", label: "URL" },
        { key: "is_published", label: "Status", render: (r) => <StatusBadge tone={r.is_published ? "success" : "muted"}>{r.is_published ? "Published" : "Hidden"}</StatusBadge> },
      ]}
      fields={[
        { name: "title", label: "Title", required: true },
        { name: "media_type", label: "Type", type: "select", options: [{ value: "video", label: "Video" }, { value: "podcast", label: "Podcast" }, { value: "audio", label: "Audio" }] },
        { name: "url", label: "Media URL", required: true },
        { name: "thumbnail_url", label: "Thumbnail URL" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "is_published", label: "Published", type: "checkbox", defaultValue: true },
      ]}
    />
  ),
});
