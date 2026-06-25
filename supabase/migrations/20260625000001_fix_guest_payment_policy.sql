-- Allow anonymous users to create payments (for guest bookings)
DROP POLICY IF EXISTS "Guest users can create payments" ON public.payments;

CREATE POLICY "Guest users can create payments"
ON public.payments 
FOR INSERT 
TO anon
WITH CHECK (
  user_id IS NULL 
  AND booking_id IS NOT NULL
);

-- Update existing policy for authenticated users to allow payments without user_id
DROP POLICY IF EXISTS "Users can create their own payments" ON public.payments;

CREATE POLICY "Users can create their own payments"
ON public.payments 
FOR INSERT 
TO authenticated
WITH CHECK (
  auth.uid() = user_id 
  OR user_id IS NULL
);
