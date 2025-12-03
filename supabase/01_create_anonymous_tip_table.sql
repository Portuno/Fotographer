-- Tabla para el Buzón Anónimo (subida de fotos/evidencia)
CREATE TABLE IF NOT EXISTS anonymous_tips (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  file_url TEXT,
  file_name TEXT,
  file_size BIGINT,
  file_type TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT, -- Opcional: puedes no guardarlo para mantener anonimato
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE anonymous_tips ENABLE ROW LEVEL SECURITY;

-- Política: Permitir inserción anónima (cualquiera puede subir)
CREATE POLICY "Allow anonymous insert" ON anonymous_tips
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Política: Solo usuarios autenticados pueden leer (opcional, ajusta según necesites)
CREATE POLICY "Allow authenticated read" ON anonymous_tips
  FOR SELECT
  TO authenticated
  USING (true);

-- Índice para búsquedas por fecha
CREATE INDEX IF NOT EXISTS idx_anonymous_tips_uploaded_at ON anonymous_tips(uploaded_at DESC);

