// Supabase Edge Function para enviar emails con Resend
// Esta función actúa como proxy para evitar problemas de CORS
// Copia y pega este código completo en el editor de Supabase Edge Functions

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_URL = 'https://api.resend.com/emails';

// Headers CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Manejar CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Log inicial para debugging
    console.log('Edge Function send-email invocada');
    
    // Obtener la API key de Resend desde las variables de entorno de Supabase
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    console.log('RESEND_API_KEY existe:', resendApiKey ? 'SÍ (longitud: ' + resendApiKey.length + ')' : 'NO');
    
    if (!resendApiKey) {
      const errorMsg = 'RESEND_API_KEY no está configurada en Supabase. Ve a Settings > Edge Functions > Secrets y agrega RESEND_API_KEY';
      console.error(errorMsg);
      return new Response(
        JSON.stringify({ 
          error: errorMsg,
          hint: 'Configura el secret RESEND_API_KEY en Supabase Dashboard'
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Parsear el body de la petición
    let emailData;
    try {
      const bodyText = await req.text();
      console.log('Body recibido:', bodyText);
      emailData = JSON.parse(bodyText);
      console.log('Email data parseado:', { 
        to: emailData.to, 
        subject: emailData.subject, 
        hasHtml: !!emailData.html,
        from: emailData.from 
      });
    } catch (parseError) {
      console.error('Error parseando JSON:', parseError);
      return new Response(
        JSON.stringify({ 
          error: 'Error al parsear el body de la petición',
          details: parseError.message 
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Validar datos
    const missingFields = [];
    if (!emailData.to) missingFields.push('to');
    if (!emailData.subject) missingFields.push('subject');
    if (!emailData.html) missingFields.push('html');
    
    if (missingFields.length > 0) {
      console.error('Faltan campos requeridos:', missingFields);
      return new Response(
        JSON.stringify({ 
          error: 'Faltan campos requeridos',
          missingFields: missingFields,
          received: {
            to: !!emailData.to,
            subject: !!emailData.subject,
            html: !!emailData.html
          }
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Enviar email a través de Resend
    console.log('Enviando email a:', emailData.to);
    
    const resendPayload = {
      from: emailData.from || 'onboarding@resend.dev',
      to: Array.isArray(emailData.to) ? emailData.to : [emailData.to],
      subject: emailData.subject,
      html: emailData.html
    };
    
    console.log('Payload para Resend:', {
      from: resendPayload.from,
      to: resendPayload.to,
      subject: resendPayload.subject,
      htmlLength: resendPayload.html?.length || 0
    });
    
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify(resendPayload)
    });

    console.log('Respuesta de Resend - Status:', response.status, response.statusText);

    let responseData;
    try {
      const responseText = await response.text();
      console.log('Respuesta de Resend (texto):', responseText);
      
      if (responseText) {
        try {
          responseData = JSON.parse(responseText);
          console.log('Respuesta de Resend (JSON):', responseData);
        } catch (parseError) {
          console.error('Error parseando JSON de Resend:', parseError);
          responseData = { raw: responseText };
        }
      } else {
        responseData = {};
      }
    } catch (error) {
      console.error('Error obteniendo respuesta de Resend:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Error al obtener respuesta de Resend',
          details: error.message 
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    if (!response.ok) {
      console.error('Resend devolvió error:', response.status, responseData);
      return new Response(
        JSON.stringify({ 
          error: 'Error al enviar email a través de Resend',
          status: response.status,
          details: responseData 
        }),
        { 
          status: response.status >= 400 && response.status < 500 ? response.status : 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: responseData }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error en Edge Function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Error desconocido',
        details: error.stack 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});

