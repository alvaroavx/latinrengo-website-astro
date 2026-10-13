# Operación y validación

## Entorno local

`package.json` requiere Node.js 22.12 o superior. El proyecto usa Astro 5 y
`@astrojs/sitemap`; no hay backend ni base de datos en este repositorio.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`src/` es la fuente de verdad. No editar ni versionar `dist/`, `.astro/` o
`node_modules/`. Mantener las dependencias locales de este proyecto.

## Configuración

`.env.example` documenta `PUBLIC_SITE_URL` y `PUBLIC_GA_MEASUREMENT_ID`.
`PUBLIC_SITE_URL` alimenta canonical, Open Graph, JSON-LD, sitemap y `robots.txt`.
Su valor de respaldo es `http://localhost:4321`, válido solo para trabajo local.
La variable de GA4 es opcional; `off`, `disabled` y `false` desactivan la medición.
La configuración y propiedad GA4 para un nuevo dominio no están verificadas aquí.

## Comprobaciones tras cambios

1. Ejecutar `npm run build` desde la raíz de este repositorio.
2. Revisar las rutas afectadas en `dist/` y que el sitemap incluya solo páginas
   indexables. Comprobar que canonical, Open Graph y `robots.txt` usan el origen
   esperado del build.
3. Revisar enlaces, anclas y assets locales, incluyendo afiches y referencias CSS.
4. Si cambian navegación, diseño o interacción, revisar móvil y escritorio en
   navegador. Comprobar el consentimiento de analítica, la copia del menú y el
   recorrido de QR cuando correspondan. Una inspección estática no sustituye esa prueba.
5. Ejecutar `git diff --check` y revisar el alcance del worktree. No mezclar
   archivos no relacionados ni tratar un build local como prueba de publicación.

La validación local más reciente de la iteración de la línea de tiempo generó
nueve páginas HTML y resolvió 179 referencias y anclas locales. Ese resultado
describe el build local de entonces; debe repetirse después de nuevos cambios.

## Antes de publicar

- Confirmar el dominio y construir con `PUBLIC_SITE_URL` real. Verificar en el
  hosting el sitemap, `robots.txt`, canonical y la respuesta HTTP del alias
  `/latin-rengo`; Astro estático no garantiza por sí solo un 301 del servidor.
- Comprobar que las URL antiguas de QR siguen llegando al destino esperado.
  Este repositorio no controla redirecciones del dominio anterior.
- Confirmar el año y los datos públicos del segundo Social antes de crear marcado
  de evento o prometer venta/entrada. No copiar datos de la edición 2026.
- Verificar indexación en la propiedad de búsqueda y medición GA4 del dominio
  publicado con acceso real a esos servicios.

No hay prueba de deploy o de teléfono real registrada para la versión actual.
No hacer commit, push ni deploy sin solicitud explícita.
