-- Ensure anonymous users can create bookings (guest bookings)
-- Drop and recreate the policy to ensure it's properly set

DROP POLICY IF EXISTS "Anon create bookings" ON public.bookings;

CREATE POLICY "Anon create bookings" 
ON public.bookings 
FOR INSERT 
TO anon 
WITH CHECK (
  user_id IS NULL 
  AND length(client_name) > 0 
  AND length(client_email) > 0
);

-- Also ensure payment-proofs bucket allows guest uploads
DROP POLICY IF EXISTS "Guest users upload proof" ON storage.objects;

CREATE POLICY "Guest users upload proof"
ON storage.objects 
FOR INSERT 
TO anon, authenticated
WITH CHECK (
  bucket_id = 'payment-proofs' 
  AND (
    -- Authenticated users can upload to their own folder
    auth.uid()::text = (storage.foldername(name))[1]
    OR
    -- Anonymous users can upload to guest-* folders
    (storage.foldername(name))[1] LIKE 'guest-%'
  )
);

-- Allow guest users to view their uploaded proofs temporarily
DROP POLICY IF EXISTS "Guest users view proof" ON storage.objects;

CREATE POLICY "Guest users view proof"
ON storage.objects 
FOR SELECT 
TO anon, authenticated
USING (
  bucket_id = 'payment-proofs' 
  AND (
    -- Authenticated users can view their own
    auth.uid()::text = (storage.foldername(name))[1]
    OR
    -- Anonymous users can view guest uploads
    (storage.foldername(name))[1] LIKE 'guest-%'
    OR
    -- Admins can view all
    public.has_role(auth.uid(), 'admin')
  )
);
