# Decisiones

| ID | Decisión | Fecha | Estado |
| --- | --- | --- | --- |
| D-001 | LatinRengo tiene su propio proyecto Astro | 2026-10-13 | Vigente |

## D-001: LatinRengo tiene su propio proyecto Astro

**Fecha:** 2026-10-13. **Decidió:** Álvaro, mediante solicitud explícita. **Estado:** vigente.

**Contexto:** LatinRengo compartía repositorio con el sitio de Espacio Elementos.
El usuario solicitó inicializar `latinrengo-website-astro` y migrar únicamente LatinRengo.

**Decisión:** Mantener LatinRengo en un proyecto Astro autónomo con sus páginas y recursos.

**Alternativas descartadas:**
- Continuar exclusivamente en el repositorio compartido: no satisface la separación solicitada.
- Copiar el sitio corporativo completo: incorpora contenido ajeno al nuevo sitio.

**Consecuencias:** El nuevo sitio tiene dependencias, configuración y documentación propias.
La extracción local conserva el origen; no cambia dominio ni hosting existentes.

**Condiciones de revisión:** Cambios explícitos en responsabilidad del producto o estrategia de publicación.
