# LatinRengo

Sitio Astro independiente de LatinRengo para clases de salsa y bachata en Rengo,
presentaciones de baile, fiestas sociales y la historia de la comunidad. La portada,
las páginas de actividades y la línea de tiempo conviven con la guía histórica del
primer Social y sus rutas conservadas para QR.

## Empezar

Requiere Node.js 22.12 o superior y npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`src/` es la fuente de verdad. `dist/`, `.astro/` y `node_modules/` son generados.
Antes de un build de producción, configurar `PUBLIC_SITE_URL` con el origen real;
el valor de respaldo es `http://localhost:4321`. No hay dominio ni despliegue
de producción verificados en este repositorio.

## Mapa rápido

| Necesidad | Dónde mirar |
| --- | --- |
| Páginas públicas | `src/pages/` y [mapa técnico](docs/mapa-tecnico.md) |
| Primer Social histórico, menú y QR | `src/features/latin-rengo/` y [contenido editorial](docs/contenido-editorial.md) |
| Metadatos, sitemap y analítica | [mapa técnico](docs/mapa-tecnico.md) |
| Ejecutar, validar y preparar publicación | [operación y validación](docs/operacion-y-validacion.md) |
| Trabajar con asistentes | [IA First](docs/ia-first.md) y [AGENTS.md](AGENTS.md) |
| Documentación completa | [docs/README.md](docs/README.md) |

El segundo Social se anuncia para el **7 de noviembre**, sin año, lugar, precios ni
entradas confirmados aquí. La participación en Bailando Chile se registra como
**4 de julio**, sin año confirmado. No completar esas fechas por inferencia.
