# Configuración de Variables de Entorno

## Crear archivo .env

1. En la raíz del proyecto, crea un archivo llamado `.env`
2. Agrega la siguiente línea:

```env
PUBLIC_GOOGLE_SCRIPT_URL=PUBLIC_GOOGLE_SCRIPT_URL
```

**Reemplaza `TU_ID_AQUI` con la URL que obtuviste al desplegar tu Apps Script.**

## Ejemplo

```env
PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx1234567890abcdefghijklmnop/exec
```

## Importante

- Después de crear o modificar `.env`, reinicia el servidor de desarrollo
- **En producción (Vercel)**: Configura esta variable en Vercel Dashboard → Settings → Environment Variables

## Verificar que funciona

1. Reinicia el servidor: `npm run dev`
2. Abre la consola del navegador (F12)
3. Si ves un error sobre "Configuración faltante", verifica que:
   - El archivo `.env` existe en la raíz del proyecto
   - La variable se llama exactamente `PUBLIC_GOOGLE_SCRIPT_URL`
   - No hay espacios alrededor del `=`
   - La URL es válida

