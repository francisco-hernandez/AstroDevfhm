// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // shortcut: dominio provisional de Vercel; cambiar a https://devfhm.com cuando el dominio apunte aquí (C-14)
  site: 'https://astro-devfhm.vercel.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
