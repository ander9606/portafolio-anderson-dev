# Portafolio — Anderson Dev

Portafolio personal construido con React 19 + Vite + Tailwind CSS 4. Sin backend: todo estático, desplegado en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Despliegue

El workflow `.github/workflows/deploy.yml` construye y publica `dist/` en GitHub Pages en cada push a `main` (Settings → Pages → Source: GitHub Actions). Sitio publicado en https://ander9606.github.io/portafolio-anderson-dev/.

## Contenido pendiente

- `public/images/logiq360/detalle-evento.jpg` — falta esta captura. Mientras no exista, la tarjeta muestra un placeholder "Captura pendiente" automáticamente.
- `public/images/logiq360/orden-mantenimiento.jpg`, `planes-suscripcion.jpg` y `productos-alquiler-carpas.jpg` están subidas pero sin panel asignado en `proyectos.js` — quedan disponibles por si se agregan más viñetas.

## Estructura

```
src/
├── components/   # Hero, Skills, ProjectCard, Chip, VignetteModal, VignettePanel, Footer
├── data/         # proyectos.js, skills.js — contenido del sitio
├── App.jsx
└── index.css     # tokens de diseño (paleta, fuentes, efectos cómic)
```
