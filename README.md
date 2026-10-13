# LatinRengo — sitio Astro

Sitio estático independiente de LatinRengo, extraído de `avx-website-espacioelementos`.
Incluye exclusivamente clases de salsa y bachata, Social, menú y archivo histórico.

## Desarrollo

Requiere Node.js 22.12 o superior y npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada de clases LatinRengo |
| `/latin-rengo` | Redirección estática a la portada |
| `/latin-rengo-social` | Guía del Social |
| `/latin-rengo-social/menu` | Menú y función de copiar datos |
| `/latin-rengo-social/archivo/social-original` | Archivo histórico, noindex |
| `/latin-rengo-v3` | Puente de compatibilidad para QR, noindex |

Las rutas conservadas sirven en el nuevo host. Los QR que apuntan al dominio anterior
siguen dependiendo de ese dominio y no se redirigen mediante este repositorio.

## Configuración

Copiar `.env.example` a `.env` y configurar `PUBLIC_SITE_URL` con el dominio real
antes de generar un build de producción. Sin configuración se usa `http://localhost:4321`.
La misma variable alimenta canonical, Open Graph, JSON-LD y sitemap.
El sitemap excluye el archivo, el puente QR y el alias `/latin-rengo`.

GA4 conserva el comportamiento e ID del módulo de origen, con consentimiento previo.
`PUBLIC_GA_MEASUREMENT_ID` permite sustituirlo; `off`, `disabled` o `false` lo desactivan.
La configuración de propiedad y medición en otro dominio no está verificada.

## Código y documentación

- `src/pages/index.astro`: portada y contenido de clases.
- `src/features/latin-rengo/content/social.ts`: evento, artistas, programa, entradas y menú.
- `src/features/latin-rengo/`: componentes, analítica, estilos y afiches del Social.
- `src/components/BaseHead.astro` y `src/consts.ts`: identidad y metadatos LatinRengo.
- `src/styles/global.css`: base tipográfica mínima de clases y archivo.
- `public/`: únicamente imágenes y fuentes utilizadas.
- [Migración y validación](docs/migracion.md).
- [Decisión de separación](docs/decisiones.md).

`src/` es la fuente de verdad; `dist/`, `.astro/` y `node_modules/` se regeneran y no se versionan.
No hay backend, autenticación ni integración financiera. Los datos y contactos ya publicados
se conservaron en su código original; no se reproducen en la documentación.

El Social mantiene el contenido del evento del 18 de julio de 2026, incluidas sus entradas
y fechas. La actualización editorial posterior al evento queda pendiente.
