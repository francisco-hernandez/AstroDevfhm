import type { APIRoute } from 'astro';

// se genera con el dominio de `site` (astro.config.mjs), así sigue siendo correcto al cambiar a devfhm.com
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
