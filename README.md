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

El workflow `.github/workflows/deploy.yml` construye y publica `dist/` en GitHub Pages en cada push a `main`. Actívalo en **Settings → Pages → Source: GitHub Actions**.

## Contenido pendiente

- `public/images/logiq360/` — faltan las 4 capturas reales (`dashboard-operaciones.jpg`, `inventario-categorias.jpg`, `detalle-evento.jpg`, `nueva-cotizacion.jpg`). Mientras no existan, la tarjeta muestra un placeholder "Captura pendiente" automáticamente.

## Estructura

```
src/
├── components/   # Hero, ProjectCard, VignetteModal, VignettePanel, Footer
├── data/         # proyectos.js — contenido de cada proyecto
├── App.jsx
└── index.css     # tokens de diseño (paleta, fuentes, efectos cómic)
```
