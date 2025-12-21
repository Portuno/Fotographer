-- Crear bucket de almacenamiento para las fotos del buzón anónimo
INSERT INTO storage.buckets (id, name, public)
VALUES ('anonymous-tips', 'anonymous-tips', false)
ON CONFLICT (id) DO NOTHING;

-- Política: Permitir subida anónima de archivos
CREATE POLICY "Allow anonymous upload" ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'anonymous-tips');

-- Política: Permitir lectura solo a usuarios autenticados (opcional)
CREATE POLICY "Allow authenticated read" ON storage.objects
  FOR SELECT
  TO authenticated
  USING (bucket_id = 'anonymous-tips');

