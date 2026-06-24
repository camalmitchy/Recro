
-- Revoke broad execute on internal SECURITY DEFINER helpers
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.tg_set_updated_at() FROM PUBLIC, anon, authenticated;
-- has_role must remain callable by signed-in users (used in RLS), but lock anon out
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

-- Replace "WITH CHECK (true)" inquiry/newsletter policies with constrained versions
DROP POLICY IF EXISTS "Anyone submit inquiry" ON public.inquiries;
CREATE POLICY "Anyone submit inquiry" ON public.inquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (length(name) BETWEEN 1 AND 200 AND length(email) BETWEEN 3 AND 320 AND length(message) BETWEEN 1 AND 5000);

DROP POLICY IF EXISTS "Anyone subscribe" ON public.newsletter_subscribers;
CREATE POLICY "Anyone subscribe" ON public.newsletter_subscribers
  FOR INSERT TO anon, authenticated
  WITH CHECK (length(email) BETWEEN 3 AND 320 AND status = 'subscribed');
