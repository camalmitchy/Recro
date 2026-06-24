
-- Extend payments to support STK push tracking and proof uploads
ALTER TABLE public.payments
  ADD COLUMN IF NOT EXISTS mpesa_checkout_id TEXT,
  ADD COLUMN IF NOT EXISTS mpesa_receipt TEXT,
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS proof_url TEXT;

CREATE INDEX IF NOT EXISTS payments_mpesa_checkout_id_idx ON public.payments(mpesa_checkout_id);

-- Allow authenticated users to insert their own payments (booking page initiates STK / bank)
DROP POLICY IF EXISTS "Users can create their own payments" ON public.payments;
CREATE POLICY "Users can create their own payments"
ON public.payments FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view their own payments" ON public.payments;
CREATE POLICY "Users can view their own payments"
ON public.payments FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'finance'));

-- Service role bypasses RLS; the public webhook + admin server fns update via service role.
