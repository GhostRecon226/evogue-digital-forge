CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'unknown',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_leads_source_created_at ON public.leads (source, created_at DESC);
CREATE INDEX idx_leads_email ON public.leads (lower(email));

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (incl. anon) to insert a lead from the public form.
CREATE POLICY "Anyone can submit a lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND source IS NOT NULL
  AND length(source) <= 100
);

-- No SELECT/UPDATE/DELETE policies → reads/edits/deletes are denied for anon
-- and authenticated roles by default. Workspace owner views via backend.
