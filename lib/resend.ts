// Servicio para enviar emails usando Supabase Edge Function
// La Edge Function actúa como proxy para evitar problemas de CORS
// IMPORTANTE: Necesitas configurar RESEND_API_KEY en Supabase (Settings > Edge Functions > Secrets)

import { supabase } from './supabase';

export interface EmailData {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

// Función para enviar email usando Supabase Edge Function (que llama a Resend)
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  
  if (!supabaseUrl) {
    console.error('VITE_SUPABASE_URL no está configurada');
    return false;
  }

  try {
    // Preparar el body
    const emailBody = {
      to: data.to,
      subject: data.subject,
      html: data.html,
      from: data.from || 'onboarding@resend.dev'
    };
    
    console.log('Enviando email con datos:', {
      to: emailBody.to,
      subject: emailBody.subject,
      hasHtml: !!emailBody.html,
      htmlLength: emailBody.html?.length || 0,
      from: emailBody.from
    });
    
    // Llamar a la Edge Function de Supabase
    const { data: responseData, error } = await supabase.functions.invoke('send-email', {
      body: emailBody
    });

    if (error) {
      console.error('❌ Error al llamar a la Edge Function:', error);
      
      // Intentar obtener el mensaje de error del response
      try {
        if (error.context?.response) {
          const errorText = await error.context.response.text();
          console.error('Mensaje de error de la Edge Function:', errorText);
          try {
            const errorJson = JSON.parse(errorText);
            console.error('Error parseado:', errorJson);
            if (errorJson.error) {
              console.error('⚠️ Error:', errorJson.error);
            }
            if (errorJson.missingFields) {
              console.error('⚠️ Campos faltantes:', errorJson.missingFields);
            }
          } catch (e) {
            // Si no es JSON, mostrar el texto
            console.error('Error (texto):', errorText);
          }
        }
      } catch (e) {
        console.error('No se pudo leer el error:', e);
      }
      
      if (error.message) {
        console.error('Mensaje:', error.message);
      }
      return false;
    }

    // Log de respuesta para debugging
    console.log('Respuesta de Edge Function:', responseData);

    if (responseData?.error) {
      console.error('❌ Error al enviar email:', responseData.error);
      // Si el error indica que falta la API key, mostrar mensaje más claro
      if (responseData.error.includes('RESEND_API_KEY') || responseData.error.includes('no está configurada')) {
        console.error('⚠️ IMPORTANTE: Configura RESEND_API_KEY en Supabase');
        console.error('   Ve a: Settings > Edge Functions > Secrets');
        console.error('   Agrega: RESEND_API_KEY = tu_api_key_de_resend');
      }
      if (responseData.missingFields) {
        console.error('⚠️ Campos faltantes:', responseData.missingFields);
      }
      if (responseData.details) {
        console.error('Detalles:', responseData.details);
      }
      return false;
    }

    return true;
  } catch (error: any) {
    console.error('Error sending email:', error);
    // Intentar obtener más información
    if (error.response) {
      try {
        const errorText = await error.response.text();
        console.error('Error response:', errorText);
      } catch (e) {
        // Ignorar si no se puede leer
      }
    }
    return false;
  }
};

// Templates de email
export const emailTemplates = {
  newAnonymousTip: (fileName: string, fileUrl: string) => ({
    subject: '🔴 Nueva Evidencia - Buzón Anónimo',
    html: `
      <div style="font-family: 'Courier New', monospace; background-color: #1a1a1a; color: #fff; padding: 20px;">
        <div style="background-color: #3f2e21; padding: 20px; border: 2px solid #7f1d1d;">
          <h2 style="color: #b91c1c; text-transform: uppercase; border-bottom: 2px solid #7f1d1d; padding-bottom: 10px;">
            🔴 NUEVA EVIDENCIA RECIBIDA
          </h2>
          <p><strong>Archivo:</strong> ${fileName}</p>
          <p><strong>URL:</strong> <a href="${fileUrl}" style="color: #b91c1c;">Ver archivo</a></p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            Caso #8920-X - El Fotógrafo
          </p>
        </div>
      </div>
    `
  }),

  newRecruitment: (codeName: string, email: string) => ({
    subject: '🔴 Nuevo Reclutamiento - El Fotógrafo',
    html: `
      <div style="font-family: 'Courier New', monospace; background-color: #1a1a1a; color: #fff; padding: 20px;">
        <div style="background-color: #3f2e21; padding: 20px; border: 2px solid #7f1d1d;">
          <h2 style="color: #b91c1c; text-transform: uppercase; border-bottom: 2px solid #7f1d1d; padding-bottom: 10px;">
            🔴 NUEVO RECLUTAMIENTO
          </h2>
          <p><strong>Nombre Clave:</strong> ${codeName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            Caso #8920-X - El Fotógrafo
          </p>
        </div>
      </div>
    `
  }),

  newContact: (name: string, email: string, message: string, subject?: string) => ({
    subject: subject || '🔴 Nuevo Contacto Confidencial - El Fotógrafo',
    html: `
      <div style="font-family: 'Courier New', monospace; background-color: #1a1a1a; color: #fff; padding: 20px;">
        <div style="background-color: #3f2e21; padding: 20px; border: 2px solid #7f1d1d;">
          <h2 style="color: #b91c1c; text-transform: uppercase; border-bottom: 2px solid #7f1d1d; padding-bottom: 10px;">
            🔴 NUEVO CONTACTO CONFIDENCIAL
          </h2>
          <p><strong>Nombre:</strong> ${name || 'No proporcionado'}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Asunto:</strong> ${subject}</p>` : ''}
          <div style="margin-top: 15px; padding: 10px; background-color: #1a1a1a; border-left: 3px solid #7f1d1d;">
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message || 'Sin mensaje'}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">
            Caso #8920-X - El Fotógrafo
          </p>
        </div>
      </div>
    `
  })
};

