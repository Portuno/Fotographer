-- Tabla para el formulario de Reclutamiento
CREATE TABLE IF NOT EXISTS recruitment_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code_name TEXT NOT NULL,
  email TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE recruitment_submissions ENABLE ROW LEVEL SECURITY;

-- Política: Permitir inserción anónima
CREATE POLICY "Allow anonymous insert" ON recruitment_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Política: Solo usuarios autenticados pueden leer
CREATE POLICY "Allow authenticated read" ON recruitment_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Índice para búsquedas por email y fecha
CREATE INDEX IF NOT EXISTS idx_recruitment_email ON recruitment_submissions(email);
CREATE INDEX IF NOT EXISTS idx_recruitment_submitted_at ON recruitment_submissions(submitted_at DESC);

