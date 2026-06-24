import { createFileRoute, Outlet, Navigate } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin · Recro Group" },
      { name: "description", content: "Recro Group internal admin dashboard." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen grid place-items-center text-muted-foreground">Loading…</div>;
  if (!user) return <Navigate to="/join-us" />;
  // No role check - all logged-in users have full access
  return <AdminShell><Outlet /></AdminShell>;
}
