
-- payment-proofs bucket RLS (path layout: <user_id>/<filename>)
DROP POLICY IF EXISTS "Users upload own proof" ON storage.objects;
CREATE POLICY "Users upload own proof"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'payment-proofs' AND auth.uid()::text = (storage.foldername(name))[1]);

DROP POLICY IF EXISTS "Users view own proof" ON storage.objects;
CREATE POLICY "Users view own proof"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'payment-proofs' AND (
  auth.uid()::text = (storage.foldername(name))[1]
  OR public.has_role(auth.uid(), 'admin')
  OR public.has_role(auth.uid(), 'finance')
));

DROP POLICY IF EXISTS "Users delete own proof" ON storage.objects;
CREATE POLICY "Users delete own proof"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'payment-proofs' AND auth.uid()::text = (storage.foldername(name))[1]);
