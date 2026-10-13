# Guía IA First

Esta guía sirve para que una persona o un asistente encuentre la respuesta en el
repositorio sin convertir documentación histórica en comportamiento actual.
El punto de entrada humano es el [README](../README.md); las reglas de edición están
en [AGENTS.md](../AGENTS.md). El índice de esta carpeta está en [README](README.md).

## Orden de evidencia

1. Para afirmar qué muestra o genera el sitio, leer la ruta o componente en `src/`.
2. Para configuración y build, leer `package.json`, `astro.config.mjs`, `src/consts.ts`
   y `.env.example`. El valor de respaldo `localhost` no es un dominio publicado.
3. Para contexto de migración o decisiones, leer [migración](migracion.md) y
   [decisiones](decisiones.md), identificándolos como antecedentes.
4. Separar siempre **implementado**, **validado localmente**, **pendiente editorial**
   y **no verificado externamente**. Un build no prueba indexación ni funcionamiento
   en un teléfono real.

## Mapa de preguntas

| Pregunta | Fuente inmediata |
| --- | --- |
| ¿Qué páginas existen y cuáles pueden indexarse? | [Mapa técnico](mapa-tecnico.md), `src/pages/`, `astro.config.mjs` |
| ¿Dónde se cambia el texto de las clases? | [index.astro](../src/pages/index.astro) |
| ¿Dónde se cambia la historia? | [linea-de-tiempo.astro](../src/pages/linea-de-tiempo.astro) |
| ¿Dónde se anuncia el segundo Social? | [sociales.astro](../src/pages/sociales.astro) |
| ¿Dónde está el primer Social y qué queda oculto? | [Contenido editorial](contenido-editorial.md), [social.ts](../src/features/latin-rengo/content/social.ts) |
| ¿Cómo se construyen canonical, sitemap y robots? | [BaseHead.astro](../src/components/BaseHead.astro), [astro.config.mjs](../astro.config.mjs), [robots.txt.ts](../src/pages/robots.txt.ts) |
| ¿Cómo funciona el consentimiento? | [LatinRengoAnalytics.astro](../src/features/latin-rengo/components/LatinRengoAnalytics.astro) |
| ¿Qué comprobar tras un cambio? | [Operación y validación](operacion-y-validacion.md) |

## Reglas para nuevas ediciones

- No deducir años, artistas, sede, precios, entradas ni resultados de competencias.
  La participación en Bailando Chile figura como **4 de julio** sin año y el segundo
  Social como **7 de noviembre** sin año confirmado.
- Mantener el primer Social del 18 de julio de 2026 como edición histórica. Las rutas
  de guía, menú y QR siguen disponibles por compatibilidad; no representan venta actual.
- Respetar los estados `confirmed`, `provisional` y `withheld` de
  `src/features/latin-rengo/content/social.ts`. Antes de reutilizar contenido,
  inspeccionar el filtro específico del componente; no asumir que todos filtran igual.
- No llevar a documentos datos bancarios ni personales publicados en componentes.
  Referir al archivo y símbolo que los contiene, sin reproducir valores.
- Si una respuesta depende del dominio, Search Console, GA4, hosting, servidor,
  navegador o dispositivo, declarar el límite y pedir evidencia de ese entorno.

## Alcance de la documentación

`docs/` es un mapa de lectura y operación, no un CMS. `src/` conserva la verdad
editorial y funcional. Este proyecto no tiene backend, base de datos, autenticación
ni proceso de venta integrado según el código inspeccionado.
