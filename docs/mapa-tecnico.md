# Mapa técnico

## Rutas y fuente

| Ruta | Fuente | Estado de búsqueda |
| --- | --- | --- |
| `/` | [index.astro](../src/pages/index.astro) | Página principal en sitemap |
| `/presentaciones` | [presentaciones.astro](../src/pages/presentaciones.astro) | En sitemap |
| `/sociales` | [sociales.astro](../src/pages/sociales.astro) | En sitemap; segundo Social en preparación |
| `/linea-de-tiempo` | [linea-de-tiempo.astro](../src/pages/linea-de-tiempo.astro) | En sitemap |
| `/latin-rengo-social` | [Ruta](../src/pages/latin-rengo-social.astro) → [SocialGuide.astro](../src/features/latin-rengo/components/SocialGuide.astro) | Histórico, `noindex`, fuera del sitemap |
| `/latin-rengo-social/menu` | [Ruta](../src/pages/latin-rengo-social/menu.astro) → [SocialMenuPage.astro](../src/features/latin-rengo/components/SocialMenuPage.astro) | Menú histórico, `noindex`, fuera del sitemap |
| `/latin-rengo-social/archivo/social-original` | [social-original.astro](../src/pages/latin-rengo-social/archivo/social-original.astro) | `noindex`, fuera del sitemap |
| `/latin-rengo-v3` | [Ruta](../src/pages/latin-rengo-v3.astro) → [SocialBridgePage.astro](../src/features/latin-rengo/components/SocialBridgePage.astro) | Puente QR, `noindex`, fuera del sitemap |
| `/latin-rengo` | [latin-rengo.astro](../src/pages/latin-rengo.astro) | Alias de portada, fuera del sitemap |

Las rutas permanentes de actividades usan `src/components/MarketingLayout.astro`,
`src/components/BaseHead.astro` y `src/styles/latin-rengo.css`. La línea de tiempo suma
`src/styles/linea-de-tiempo.css`. La portada usa `BaseHead` directamente. Las rutas
históricas usan `src/features/latin-rengo/layouts/LatinRengoSocialLayout.astro` y
`src/features/latin-rengo/styles/social.css`.

## Metadatos y publicación estática

`PUBLIC_SITE_URL` se lee en `astro.config.mjs` y `src/consts.ts`. De ese origen salen
canonical y Open Graph de `BaseHead`, los enlaces del layout histórico, el sitemap de
`@astrojs/sitemap` y el `Sitemap:` de `src/pages/robots.txt.ts`. Sin variable definida,
el build usa `http://localhost:4321`; no se debe publicar ese resultado como producción.
La portada agrega JSON-LD `Organization` desde `src/pages/index.astro`; no se agrega
`Event` al segundo Social sin datos completos confirmados.

`astro.config.mjs` excluye del sitemap el alias, el puente QR y las rutas históricas.
`noindex` está en las páginas/componentes correspondientes. El alias usa
`Astro.redirect('/', 301)`; al ser un sitio estático, el código por sí solo no prueba
que el hosting responda HTTP 301. La redirección del dominio anterior y los QR
impresos requieren comprobación en el servidor real.

## Datos, interacción y analítica

- El contenido del primer Social está en `src/features/latin-rengo/content/social.ts`:
  evento, cronograma, artistas, entradas históricas, menú y preguntas. `SocialGuide.astro`
  lo representa; `SocialMenuPage.astro` conserva una función de copiar datos mediante
  `navigator.clipboard` con respaldo por selección de texto.
- `src/features/latin-rengo/components/LatinRengoAnalytics.astro` inicia con
  consentimiento denegado, lee/guarda la elección en `localStorage` y carga GA4
  solo tras aceptación. `src/features/latin-rengo/config/analytics.ts` define la
  variable de medición y cómo desactivarla.
- Los afiches de artistas viven en `src/features/latin-rengo/assets/artists/`;
  los recursos públicos compartidos están en `public/`. No usar `dist/` como fuente.

No hay API, autenticación, base de datos ni integración de cobro en este proyecto.
Para límites editoriales y de validación, seguir [contenido](contenido-editorial.md)
y [operación](operacion-y-validacion.md).
