import es from './es';
import en from './en';

export type Lang = 'es' | 'en';

const dicts = { es, en };

export const t = (lang: Lang) => dicts[lang];

export const paths = {
  es: { home: '/', blog: '/blog/', privacy: '/privacidad/', terms: '/terminos/', post: (slug: string) => `/blog/${slug}/` },
  en: { home: '/en/', blog: '/en/blog/', privacy: '/en/privacy/', terms: '/en/terms/', post: (slug: string) => `/en/blog/${slug}/` },
};

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
