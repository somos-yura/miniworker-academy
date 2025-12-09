# Guía Completa: Configurar Google Sheets para Waitlist

## Paso 1: Crear la Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nombra la hoja (ej: "Waitlist Miniworker Academy")
4. En la primera fila, agrega estos encabezados:
   - **Columna A**: `Fecha`
   - **Columna B**: `Email`
5. Guarda la hoja

## Paso 2: Crear el Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Se abrirá un editor de código
3. Borra todo el código que viene por defecto
4. Pega este código:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Obtener el email desde FormData o JSON
    let email;
    if (e.parameter && e.parameter.email) {
      // Si viene como FormData
      email = e.parameter.email;
    } else if (e.postData && e.postData.contents) {
      // Si viene como JSON
      const data = JSON.parse(e.postData.contents);
      email = data.email;
    } else {
      email = null;
    }
    
    // Validar que el email no esté vacío
    if (!email || email.trim() === '') {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Email vacío' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Email inválido' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Verificar si el email ya existe
    const data = sheet.getDataRange().getValues();
    const emails = data.map(row => row[1]).filter(Boolean);
    if (emails.includes(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Email ya registrado' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Agregar el email a la hoja
    const fecha = new Date();
    sheet.appendRow([fecha, email]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Email guardado correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Waitlist API funcionando' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Guarda el proyecto (Ctrl+S o Cmd+S)
6. Nombra el proyecto (ej: "Waitlist Handler")

## Paso 3: Desplegar como Web App

1. En el editor de Apps Script, haz clic en **Desplegar** → **Nueva implementación**
2. Haz clic en el icono de engranaje ⚙️ junto a "Tipo" y selecciona **Aplicación web**
3. Configura:
   - **Descripción**: "Waitlist API"
   - **Ejecutar como**: "Yo" (tu cuenta)
   - **Quién tiene acceso**: "Cualquiera" (importante para que funcione desde tu sitio)
4. Haz clic en **Desplegar**
5. **Autoriza el acceso** cuando te lo pida:
   - Haz clic en "Revisar permisos"
   - Selecciona tu cuenta de Google
   - Haz clic en "Avanzado" → "Ir a [nombre del proyecto] (no seguro)"
   - Haz clic en "Permitir"
6. **Copia la URL de la aplicación web** (algo como: `https://script.google.com/macros/s/.../exec`)
   - Esta es tu `PUBLIC_GOOGLE_SCRIPT_URL`

## Paso 4: Configurar en tu Proyecto Astro

1. Crea un archivo `.env` en la raíz del proyecto (si no existe)
2. Agrega esta línea:

```env
PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/TU_ID_AQUI/exec
```

**Reemplaza `TU_ID_AQUI` con la URL que copiaste en el paso anterior.**

3. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Paso 5: Probar

1. Abre tu sitio en el navegador
2. Ve a la sección de waitlist
3. Ingresa un email de prueba
4. Haz clic en "Inscribirme"
5. Verifica en tu Google Sheet que el email se haya guardado

## Solución de Problemas

### Error: "Configuración faltante"
- Verifica que el archivo `.env` existe y tiene `PUBLIC_GOOGLE_SCRIPT_URL`
- Reinicia el servidor después de crear/modificar `.env`

### Error: "Email ya registrado"
- El script verifica duplicados automáticamente
- Si quieres permitir duplicados, elimina esa validación del código

### Error CORS
- Google Apps Script con `mode: 'no-cors'` no devuelve respuesta, pero funciona
- El email se guarda aunque veas un "error" en la consola
- Para ver respuestas reales, necesitarías usar un proxy o cambiar la configuración

### No se guardan los emails
- Verifica que la hoja tenga los encabezados correctos (Fecha, Email)
- Verifica que el script tenga permisos para editar la hoja
- Revisa los logs en Apps Script: **Ver** → **Registros de ejecución**

## Notas Importantes

- Los emails se guardan con la fecha y hora automáticamente
- El script valida duplicados para evitar emails repetidos
- Puedes exportar los emails desde Google Sheets cuando quieras
- La URL de la aplicación web es pública, pero solo acepta emails válidos
