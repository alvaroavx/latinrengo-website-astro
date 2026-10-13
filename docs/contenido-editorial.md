# Contenido editorial

## Contenido vigente

| Tema | Fuente de verdad | Límite actual |
| --- | --- | --- |
| Clases, horario y recinto | `src/pages/index.astro` | Consultas de cupo y valores por WhatsApp; no se publica disponibilidad automática |
| Presentaciones | `src/pages/presentaciones.astro` | No se promete formato, fecha o contratación sin coordinación |
| Segundo Social | `src/pages/sociales.astro` | Se anuncia para el 7 de noviembre; año, sede, entradas y programa pendientes |
| Historia | `src/pages/linea-de-tiempo.astro` | Gala Elemental solo con año 2025; Bailando Chile con 4 de julio sin año |

La portada de clases identifica a Espacio Elementos como **recinto**. LatinRengo es
el proyecto de baile; no asignar a LatinRengo la propiedad de la sede ni trasladar
contenido corporativo de Espacio Elementos a este repositorio.

## Primer Social: archivo, no anuncio vigente

El primer Social figura con fecha **18 de julio de 2026** en
`latinRengoSocialEvent` de `src/features/latin-rengo/content/social.ts`. La guía
`SocialGuide.astro` y el menú `SocialMenuPage.astro` preservan información de esa
edición, etiquetada como histórica y marcada `noindex`. Sus precios, cronograma,
menú, afiches y ruta QR no anuncian el segundo Social.

El archivo de contenido usa estados editoriales `confirmed`, `provisional` y
`withheld`. Los arreglos `publicArtists` y `publicPresentationSchedule` excluyen
`withheld`; `publicTickets`, `publicMenuCategories` y `publicFaqItems` aplican sus
filtros propios. Antes de publicar o reutilizar un dato, revisar el selector y el
componente concretos. No copiar aquí los campos de transferencia o contacto que
aparezcan en el código.

## Cómo incorporar novedades

1. Confirmar por fuente editorial el año del 4 de julio y del 7 de noviembre.
   Actualizar entonces la posición cronológica y los elementos `<time>` de la
   línea de tiempo, además del anuncio del segundo Social.
2. Para el segundo Social, confirmar por separado fecha completa, sede, programa,
   participantes, entradas, precios y condiciones antes de mostrarlos. No reutilizar
   automáticamente los datos del primer Social.
3. Revisar títulos, descripciones, enlaces internos, canonical/sitemap, imágenes
   y texto alternativo cuando se cree una nueva página de evento.
4. Mantener visibles y verificables las rutas históricas necesarias para QR.

**Desajuste editorial observado:** `SocialBridgePage.astro` aún llama “vigente” a
la guía del primer Social aunque la guía ya es histórica. Es un pendiente de
contenido del producto; esta documentación no modifica esa página.
