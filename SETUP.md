# Instrucciones para ejecutar MEDIA MACHINE Website

## Requisitos Previos

- Node.js 18+ instalado
- npm o yarn como gestor de paquetes
- Git

## Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/romeromateo221-wq/MEDIA-MACHINE.git
cd MEDIA-MACHINE
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abre en tu navegador:**
- Navega a `http://localhost:3000`

## Compilación para Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con metadata
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación
│   ├── Footer.tsx          # Pie de página
│   └── sections/           # Secciones de contenido
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── AboutSection.tsx
│       ├── PortfolioSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── FAQSection.tsx
│       └── ContactSection.tsx
└── styles/
    └── globals.css
```

## Características

✨ **Diseño Moderno**
- Glassmorphism effects
- Animaciones suaves con Framer Motion
- Dark mode profesional
- Totalmente responsivo

🎯 **Componentes**
- Header dinámico con navegación
- Hero section impactante
- 6+ secciones de servicios
- Portafolio con filtrado
- Testimonios de clientes
- FAQ interactivo
- Formulario de contacto
- Footer completo

🚀 **Optimizaciones**
- Next.js 14 con App Router
- TypeScript
- Tailwind CSS
- Framer Motion para animaciones
- SEO optimizado

## Personalización

### Colores
Los colores están definidos en `tailwind.config.ts`. Actualiza los valores en la sección `colors` para cambiar la paleta.

### Contenido
Todo el contenido se encuentra en los componentes de `src/components/sections/`. Edita directamente el contenido en los archivos .tsx.

### Imágenes
Coloca las imágenes en la carpeta `public/images/`. Las referencias en los componentes apuntan a `/images/`.

## Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta .next a Netlify
```

## Variables de Entorno

Si necesitas agregar APIs o servicios:
1. Crea un archivo `.env.local`
2. Agrega tus variables
3. Accede a ellas en tus componentes

```
NEXT_PUBLIC_API_URL=tu_api_url
```

## Mejoras Futuras

- [ ] Integración con CMS
- [ ] Blog/Artículos
- [ ] Galería avanzada
- [ ] Sistema de reservas
- [ ] Chat en vivo
- [ ] Analytics mejorado

## Soporte

Para reportar problemas o sugerencias, abre un issue en el repositorio.

## Licencia

Este proyecto es propiedad de MEDIA MACHINE.

© 2026 MEDIA MACHINE. Todos los derechos reservados.
