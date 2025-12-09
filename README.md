# MiniWorker Academy

Landing Page

# 🚀 Tecnologías

- [Astro](https://astro.build) - Framework web moderno para construir sitios rápidos
- TypeScript - Tipado estático para JavaScript
- HTML/CSS - Estructura y estilos

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd miniworker-academy
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (ver sección de Configuración)

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
PUBLIC_GOOGLE_SCRIPT_URL=tu_url_de_google_script_aqui
```

Para más detalles sobre la configuración, consulta [ENV_SETUP.md](./ENV_SETUP.md).

**Nota**: En producción (Vercel), configura esta variable en Vercel Dashboard → Settings → Environment Variables.

## 📜 Comandos Disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente antes de desplegar |
| `npm run lint`            | Ejecuta ESLint para verificar errores de código |
| `npm run lint:fix`        | Ejecuta ESLint y corrige automáticamente los errores |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtiene ayuda sobre el CLI de Astro             |

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/       # Componentes Astro reutilizables
│   │   ├── FeatureCard.astro
│   │   ├── FeaturesSection.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── HowItWorksSection.astro
│   │   ├── MessageCard.astro
│   │   ├── MessagesSection.astro
│   │   ├── Navigation.astro
│   │   ├── StepCard.astro
│   │   └── WaitlistSection.astro
│   ├── data/            # Datos y configuraciones
│   │   ├── features.ts
│   │   ├── howItWorks.ts
│   │   └── messages.ts
│   ├── layouts/         # Layouts base
│   │   └── Layout.astro
│   └── pages/           # Páginas del sitio
│       └── index.astro
├── astro.config.mjs     # Configuración de Astro
├── eslint.config.mjs    # Configuración de ESLint
├── package.json
└── tsconfig.json        # Configuración de TypeScript
```

## 📚 Documentación Adicional

- [Configuración de Variables de Entorno](./ENV_SETUP.md)
- [Configuración de Google Sheets](./GOOGLE_SHEETS_SETUP.md)
