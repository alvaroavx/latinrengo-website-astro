# Migración y validación

Extracción de LatinRengo desde `avx-website-espacioelementos` a este proyecto Astro
autónomo. Decisión registrada en [D-001](decisiones.md).

## Alcance migrado

**Implementado:**

- Portada de clases (`src/pages/index.astro`) con sus estilos (`src/styles/latin-rengo.css`).
- Social completo en `src/features/latin-rengo/`: contenido, componentes, layout,
  analítica con consentimiento, estilos y afiches de artistas.
- Menú con función de copiar datos, archivo histórico (noindex) y puente QR
  `/latin-rengo-v3` (noindex).
- Alias `/latin-rengo` como redirección estática a la portada.
- Identidad y metadatos propios (`src/consts.ts`, `src/components/BaseHead.astro`) con
  `PUBLIC_SITE_URL` como origen único de canonical, Open Graph, JSON-LD y sitemap.
- Recursos públicos limitados a fuentes Atkinson, afiche del Social y logos de LatinRengo.

**No migrado (fuera de alcance):** páginas, contenido y recursos corporativos de Espacio
Elementos. Las referencias reales a Espacio Elementos como recinto se conservan.

## Limpieza

Se eliminaron recursos copiados sin referencias en el código:

- `src/features/latin-rengo/assets/artists/dj-animador-profe-salsa.jpg`.
- `src/features/latin-rengo/assets/artists/essencia-latina.jpg` (artista `withheld`,
  sin imagen publicada).

Ambos siguen disponibles en el repositorio de origen.

## Validación

**Validación de la migración original** del 2026-10-13 con `npm run build` y `astro preview` local:

- Build sin errores; 6 páginas generadas en la migración original.
- Todas las rutas responden 200.
- Sin referencias internas rotas en `href`, `src`, `srcset`, `content` ni `url()` de CSS.
- Sitemap original limitado a `/`, `/latin-rengo-social/` y `/latin-rengo-social/menu/`.
- Archivo, puente QR y alias marcados `noindex`.
- Contenido `withheld` ausente del HTML generado.

**No verificado:**

- Revisión visual responsive en navegador.
- Funcionamiento de copiar datos del menú y del consentimiento de Analytics en navegador.
- Dominio y hosting de producción; `PUBLIC_SITE_URL` sigue en `localhost`.
- Propiedad GA4 en el nuevo dominio.
- QR impresos que apuntan al dominio anterior: dependen de ese dominio.
- Retiro de LatinRengo del repositorio de origen.

## SEO posterior a la migración

La portada enlaza clases, presentaciones y sociales. `/presentaciones` y `/sociales` son
páginas permanentes. La guía y el menú del Social de julio de 2026 se identifican como
históricos y quedan fuera del sitemap con `noindex`; las rutas siguen disponibles para QR.
La portada publica datos `Organization` limitados a identidad, área de actividad y perfil
social. `robots.txt`, canonical, Open Graph y sitemap usan `PUBLIC_SITE_URL`.

Validación local de la etapa SEO previa: `npm run build` generó ocho páginas HTML; 119 referencias locales de
HTML resolvieron; sitemap con portada y dos actividades; JSON-LD válido; sin marcado
de ofertas vigentes en la guía histórica. No se comprobó indexación real ni vista móvil
en navegador.

## Historia y segundo Social

`/linea-de-tiempo` reúne los hitos confirmados de LatinRengo desde la primera clase
del 17 de mayo de 2025. La participación en Bailando Chile se muestra con su día y mes,
separada de la secuencia cronológica mientras falta el año. `/sociales` anuncia que el
segundo encuentro está en preparación para el 7 de noviembre, sin añadir lugar, precios,
entradas ni programa no confirmados. No se publica marcado `Event` para ese encuentro.

## Pendientes

1. Definir dominio real en `PUBLIC_SITE_URL` antes del build de producción.
2. Revisión visual responsive y prueba manual de menú, QR y consentimiento.
3. Confirmar el año, lugar y condiciones del segundo Social del 7 de noviembre y el año de la participación del 4 de julio en Bailando Chile.
4. Decidir si el repositorio de origen deja de publicar LatinRengo y cómo redirigir.
