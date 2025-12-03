# 📋 Instrucciones para Integrar Supabase y Resend

## 🗄️ Parte 1: Configurar Supabase

### Paso 1: Crear las Tablas en Supabase

1. Ve a tu proyecto en [Supabase](https://supabase.com)
2. En el menú lateral, ve a **SQL Editor**
3. Ejecuta los siguientes archivos SQL **en orden**:

   - `supabase/01_create_anonymous_tip_table.sql` - Tabla para el buzón anónimo
   - `supabase/02_create_recruitment_table.sql` - Tabla para reclutamiento
   - `supabase/03_create_contact_table.sql` - Tabla para contacto confidencial
   - `supabase/04_create_storage_bucket.sql` - Bucket para almacenar fotos

4. Verifica que las tablas se hayan creado correctamente:
   - Ve a **Table Editor** en el menú lateral
   - Deberías ver: `anonymous_tips`, `recruitment_submissions`, `confidential_contacts`

### Paso 2: Obtener las Credenciales de Supabase

1. En tu proyecto de Supabase, ve a **Settings** (⚙️) > **API**
2. Copia los siguientes valores:
   - **Project URL** → Esta será tu `VITE_SUPABASE_URL`
   - **anon public** key → Esta será tu `VITE_SUPABASE_ANON_KEY`

### Paso 3: Configurar Storage (Bucket para Fotos)

1. Ve a **Storage** en el menú lateral de Supabase
2. Verifica que el bucket `anonymous-tips` se haya creado (se crea automáticamente con el SQL)
3. Si no existe, créalo manualmente:
   - Click en **New bucket**
   - Nombre: `anonymous-tips`
   - **Public bucket**: Desactivado (privado)
   - Click en **Create bucket**

---

## 📧 Parte 2: Configurar Resend y Edge Function

### Paso 1: Crear Cuenta en Resend

1. Ve a [Resend](https://resend.com) y crea una cuenta
2. Verifica tu email

### Paso 2: Obtener API Key

1. Una vez dentro de Resend, ve a **API Keys** en el menú lateral
2. Click en **Create API Key**
3. Dale un nombre (ej: "El Fotógrafo")
4. Copia la API key (solo se muestra una vez, guárdala bien) - **La necesitarás en el Paso 4**

### Paso 3: Crear Edge Function en Supabase (Manual desde el Dashboard)

1. Ve a tu proyecto en Supabase
2. En el menú lateral, ve a **Edge Functions**
3. Click en **Create a new function**
4. Nombre de la función: `send-email`
5. Click en **Create function**

6. **Reemplaza todo el código** con el siguiente (copia y pega completo):

```typescript
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
    // Obtener la API key de Resend desde las variables de entorno de Supabase
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY no está configurada en Supabase' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Parsear el body de la petición
    const emailData = await req.json();

    // Validar datos
    if (!emailData.to || !emailData.subject || !emailData.html) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos: to, subject, html' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Enviar email a través de Resend
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: emailData.from || 'onboarding@resend.dev',
        to: Array.isArray(emailData.to) ? emailData.to : [emailData.to],
        subject: emailData.subject,
        html: emailData.html
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Error al enviar email', details: responseData }),
        { 
          status: response.status,
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
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
```

7. Click en **Deploy** para desplegar la función

### Paso 4: Configurar la API Key de Resend en Supabase (⚠️ CRÍTICO)

**Este paso es OBLIGATORIO - sin esto los emails no funcionarán**

1. En Supabase Dashboard, ve a **Settings** (⚙️) en el menú lateral
2. Busca y haz click en **Edge Functions** en el submenú
3. Busca la sección **Secrets** (puede estar en una pestaña o sección separada)
4. Click en **Add new secret** o **New secret**
5. Completa:
   - **Name**: `RESEND_API_KEY` (exactamente así, sin espacios)
   - **Value**: Pega la API key que copiaste de Resend en el Paso 2
6. Click en **Save** o **Add secret**
7. **Espera 10-15 segundos** para que el secret se propague

**Verificar que está configurado:**
- Deberías ver `RESEND_API_KEY` en la lista de secrets
- Si no aparece, recarga la página y verifica de nuevo

**⚠️ IMPORTANTE**: 
- El nombre debe ser exactamente `RESEND_API_KEY` (case-sensitive)
- No agregues espacios antes o después del nombre
- La API key debe ser la correcta de Resend (empieza con `re_`)

### Paso 5: Verificar Dominio en Resend (Opcional)

**Opción A: Usar dominio de prueba (Para empezar rápido)**
- Por defecto, el código usa `onboarding@resend.dev` que es el dominio de prueba
- Funciona inmediatamente pero los emails pueden ir a spam
- Perfecto para desarrollo y pruebas

**Opción B: Verificar tu dominio (Recomendado para producción)**
1. Ve a **Domains** en Resend
2. Agrega tu dominio `versaproducciones.es`
3. Sigue las instrucciones para verificar el dominio (agregar registros DNS)
4. Una vez verificado, actualiza la Edge Function (línea donde dice `onboarding@resend.dev`) y cámbiala por:
   ```typescript
   from: emailData.from || 'El Fotógrafo <noreply@versaproducciones.es>',
   ```

---

## 🔧 Parte 3: Configurar Variables de Entorno (Solo para el Frontend)

1. Crea un archivo `.env.local` en la raíz del proyecto (junto a `package.json`)
2. Agrega las siguientes variables:

```env
VITE_SUPABASE_URL=tu_url_de_supabase_aqui
VITE_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

3. Reemplaza los valores con los que obtuviste en la Parte 1, Paso 2

**⚠️ IMPORTANTE**: 
- El archivo `.env.local` NO debe subirse a Git (ya está en `.gitignore`)
- **NO necesitas** `VITE_RESEND_API_KEY` aquí porque la API key está en Supabase (Edge Functions Secrets)
- Nunca compartas tus API keys públicamente

---

## 📦 Parte 4: Instalar Dependencias

Ejecuta en tu terminal:

```bash
npm install
```

Esto instalará `@supabase/supabase-js` que agregamos al `package.json`.

---

## ✅ Parte 5: Verificar que Todo Funcione

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Prueba cada formulario:
   - **Buzón Anónimo**: Sube una imagen de prueba
   - **Reclutamiento**: Completa el formulario
   - **Contacto Confidencial**: Envía un mensaje de prueba

3. Verifica:
   - En Supabase: Ve a **Table Editor** y revisa que los datos se hayan guardado
   - En tu email: Deberías recibir notificaciones en `versaproducciones.es@gmail.com`

---

## 🔍 Solución de Problemas

### Error: "Missing Supabase environment variables"
- Verifica que el archivo `.env.local` existe y tiene las variables correctas
- Reinicia el servidor de desarrollo después de crear/modificar `.env.local`

### Error 400 al subir archivos (Storage)
- Verifica que el bucket `anonymous-tips` existe en Supabase Storage
- Verifica las políticas de Storage: Ve a **Storage** > **Policies** y asegúrate de que hay políticas que permiten INSERT
- Si el bucket es privado, verifica que las políticas permitan la subida anónima

### Error 500 en Edge Function (send-email)
**Este es el error más común y significa que falta configurar el secret:**

1. **Verificar los logs de la Edge Function:**
   - Ve a **Edge Functions** en Supabase
   - Click en la función `send-email`
   - Ve a la pestaña **Logs**
   - Busca el error más reciente (debería mostrar el mensaje exacto)

2. **Configurar el secret (si falta):**
   - Ve a **Settings** (⚙️) > **Edge Functions** en Supabase
   - Busca la sección **Secrets**
   - Verifica que existe el secret `RESEND_API_KEY`
   - Si NO existe, créalo:
     - Click en **Add new secret** o **New secret**
     - Name: `RESEND_API_KEY` (exactamente así, sin espacios)
     - Value: Tu API key de Resend (debe empezar con `re_`)
     - Click en **Save**
   - **Espera 10-15 segundos** para que se propague

3. **Verificar que el secret está correcto:**
   - El nombre debe ser exactamente `RESEND_API_KEY` (case-sensitive)
   - La API key debe ser válida (cópiala de nuevo de Resend si es necesario)
   - Recarga la página de Edge Functions para verificar

4. **Probar de nuevo:**
   - Después de configurar el secret, intenta enviar un formulario
   - Revisa los logs de nuevo para ver si el error cambió

### No recibo emails
- **Primero verifica el error 500 arriba** - es la causa más común
- Verifica que la API key de Resend es correcta y está activa
- Revisa la consola del navegador para ver errores detallados
- Verifica que el dominio esté verificado en Resend (si usas dominio personalizado)
- Revisa los logs de la Edge Function en Supabase: Ve a **Edge Functions** > **send-email** > **Logs**

### Error de CORS
- Supabase debería manejar CORS automáticamente
- Si hay problemas, verifica que la Edge Function tiene los headers CORS correctos (ya están incluidos en el código)

---

## 📝 Notas Importantes

- **Privacidad**: No estamos guardando IPs reales para mantener el anonimato del buzón
- **Límites**: Resend tiene límites en el plan gratuito (3,000 emails/mes)
- **Storage**: Supabase tiene 1GB gratis en el plan gratuito
- **Seguridad**: Las políticas RLS están configuradas para permitir inserción anónima pero lectura solo autenticada

---

## 🎯 Próximos Pasos (Opcional)

- Configurar notificaciones automáticas
- Agregar validación de archivos más estricta
- Implementar rate limiting para prevenir spam
- Agregar dashboard para ver los envíos

