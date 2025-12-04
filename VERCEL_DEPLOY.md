# Guía de Despliegue en Vercel

El código está preparado para funcionar en Vercel sin problemas. Solo necesitas configurar la variable de entorno.

## Pasos para Desplegar

### 1. Preparar el Proyecto

Asegúrate de que tu código esté en un repositorio Git (GitHub, GitLab, o Bitbucket).

### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en **"Add New Project"**
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un proyecto Astro

### 3. Configurar Variables de Entorno

**IMPORTANTE:** Debes configurar la variable de entorno en Vercel:

1. En la página de configuración del proyecto, ve a **Settings** → **Environment Variables**
2. Agrega una nueva variable:
   - **Name**: `PUBLIC_GOOGLE_SCRIPT_URL`
   - **Value**: Tu URL de Google Apps Script (ej: `https://script.google.com/macros/s/AKfycbx.../exec`)
   - **Environment**: Selecciona todas (Production, Preview, Development)
3. Haz clic en **Save**

### 4. Desplegar

1. Vercel detectará automáticamente los cambios y desplegará
2. O puedes hacer clic en **Deploy** manualmente
3. Espera a que termine el build

## ¿Por qué funciona?

✅ **Variables `PUBLIC_*` en Astro**: Las variables que empiezan con `PUBLIC_` se exponen al cliente, perfecto para URLs públicas como Google Apps Script

✅ **Modo `no-cors`**: Funciona desde cualquier dominio, incluyendo Vercel

✅ **Google Apps Script**: Acepta peticiones desde cualquier origen cuando está configurado como "Cualquiera"

✅ **Astro + Vercel**: Integración nativa, no requiere configuración especial

## Verificar que Funciona

1. Después del despliegue, visita tu sitio en Vercel
2. Ve a la sección de waitlist
3. Ingresa un email de prueba
4. Verifica en tu Google Sheet que se haya guardado

## Troubleshooting

### Error: "Configuración faltante"
- Verifica que agregaste `PUBLIC_GOOGLE_SCRIPT_URL` en Vercel
- Asegúrate de que el valor es la URL completa del Apps Script
- Reinicia el despliegue después de agregar la variable

### Los emails no se guardan
- Verifica que el Apps Script está desplegado como "Cualquiera"
- Revisa los logs en Google Apps Script (Ver → Registros de ejecución)
- Verifica que la URL en Vercel es correcta

### Build falla
- Verifica que todas las dependencias están en `package.json`
- Revisa los logs de build en Vercel para ver el error específico

## Configuración Adicional (Opcional)

Si quieres usar diferentes URLs para desarrollo y producción:

1. En Vercel, agrega la variable dos veces:
   - Una para **Production** con la URL de producción
   - Otra para **Preview/Development** con la URL de desarrollo (o la misma)

## Notas Importantes

- ⚠️ **No subas el archivo `.env` a Git** (ya está en `.gitignore`)
- ✅ **Siempre configura las variables en Vercel** para producción
- ✅ La misma URL de Apps Script funciona para desarrollo y producción
- ✅ No necesitas cambiar nada en el código

## Comandos Útiles

```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Desplegar desde terminal
vercel

# Desplegar a producción
vercel --prod
```

