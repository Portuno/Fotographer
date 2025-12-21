-- Tabla para Contacto Confidencial
CREATE TABLE IF NOT EXISTS confidential_contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT,
  subject TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE confidential_contacts ENABLE ROW LEVEL SECURITY;

-- Política: Permitir inserción anónima
CREATE POLICY "Allow anonymous insert" ON confidential_contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Política: Solo usuarios autenticados pueden leer
CREATE POLICY "Allow authenticated read" ON confidential_contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Índice para búsquedas por fecha
CREATE INDEX IF NOT EXISTS idx_confidential_contacts_submitted_at ON confidential_contacts(submitted_at DESC);

