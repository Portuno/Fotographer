// Configuración de Supabase Client
// IMPORTANTE: Estas variables deben estar en tu archivo .env.local
// VITE_SUPABASE_URL=tu_url_de_supabase
// VITE_SUPABASE_ANON_KEY=tu_anon_key

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ Missing Supabase environment variables');
  console.error('Por favor crea un archivo .env.local con:');
  console.error('VITE_SUPABASE_URL=tu_url');
  console.error('VITE_SUPABASE_ANON_KEY=tu_key');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Tipos para las tablas
export interface AnonymousTip {
  id?: string;
  file_url: string;
  file_name: string;
  file_size: number;
  file_type: string;
  uploaded_at?: string;
  ip_address?: string;
  user_agent?: string;
}

export interface RecruitmentSubmission {
  id?: string;
  code_name: string;
  email: string;
  submitted_at?: string;
  ip_address?: string;
  user_agent?: string;
}

export interface ConfidentialContact {
  id?: string;
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
  submitted_at?: string;
  ip_address?: string;
  user_agent?: string;
}

// Funciones helper para subir archivos
export const uploadFileToSupabase = async (
  file: File,
  bucketName: string = 'anonymous-tips'
): Promise<{ url: string; path: string } | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading file:', error);
      return null;
    }

    // El archivo se subió correctamente, ahora obtener su URL
    // Usar URL pública directamente (más simple y confiable)
    // Si el bucket es privado, guardaremos el path y generaremos URLs cuando sea necesario
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    // Guardar el path completo para referencia futura
    // La URL pública funcionará si el bucket es público, si no, usaremos el path
    return {
      url: publicUrl || filePath, // Usar path como fallback si no hay URL pública
      path: filePath
    };
  } catch (error) {
    console.error('Error in uploadFileToSupabase:', error);
    return null;
  }
};

// Función para obtener información del cliente (sin IP real por privacidad)
export const getClientInfo = () => {
  return {
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    // No capturamos IP real para mantener anonimato
    ip_address: null
  };
};

