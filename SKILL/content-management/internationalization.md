# Internationalization (i18n) Guide

## Overview

The DEVFHM Astro site supports multilingual content with Spanish (ES) and English (EN) languages. The internationalization system is client-side based, allowing seamless language switching without page reloads.

## Architecture

### Language Detection
```javascript
// Language priority system
const languagePriority = [
  localStorage.getItem('lang'),     // User preference
  navigator.language,              // Browser preference
  'es'                            // Default fallback
];

const currentLang = languagePriority.find(Boolean) || 'es';
```

### Translation System
```javascript
// Translation object structure
const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "hero.title": "Curando el <br /> Futuro <span class='text-outline-digital ml-2'>Digital</span>",
    // ... more translations
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "hero.title": "Curating the <br /> Future <span class='text-outline-digital ml-2'>Digital</span>",
    // ... more translations
  }
};
```

## Content Structure

### Blog Content Organization
```
src/content/blog/
  spanish-articles.md
  english-articles.md
  paired-articles/
    article-es.md
    article-en.md
```

### Content Schema
```typescript
// content.config.ts
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().optional().default('Geek Sloth'),
    authorRole: z.string().optional(),
    readTime: z.string().optional().default('5 MIN READ'),
    featured: z.boolean().optional().default(false),
    lang: z.string().optional().default('es'),
    translationSlug: z.string().optional(), // Links to paired article
  }),
});
```

## Implementation Guide

### Language Toggle Component
```astro
---
// LanguageToggle.astro
interface Props {
  currentLang: 'es' | 'en';
}

const { currentLang } = Astro.props;
---

<button 
  id="lang-toggle"
  class="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low dark:bg-white/10 hover:bg-surface-container-high dark:hover:bg-white/20 transition-all font-headline font-black text-xs tracking-tighter dark:text-white"
>
  {currentLang === 'es' ? 'EN' : 'ES'}
</button>
```

### Translation Function
```javascript
// Translation system implementation
function updateLanguage() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[currentLang] && translations[currentLang][key]) {
      const content = translations[currentLang][key];
      
      // Handle HTML content
      if (content.includes('<br') || content.includes('<span')) {
        el.innerHTML = content;
      } else {
        // Handle form inputs
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', content);
        } else {
          // Handle regular text content
          const icon = el.querySelector('.material-symbols-outlined');
          el.innerText = content;
          if (icon) el.appendChild(icon);
        }
      }
    }
  });

  // Show/hide language-specific elements
  document.querySelectorAll('[data-lang]').forEach(el => {
    const elLang = el.getAttribute('data-lang');
    if (elLang === currentLang) {
      el.style.removeProperty('display');
    } else {
      el.style.setProperty('display', 'none', 'important');
    }
  });

  // Update button text
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.innerText = currentLang === 'es' ? 'EN' : 'ES';
  }
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
  localStorage.setItem('lang', currentLang);
}
```

### Content Language Switching
```javascript
// Article page language switching
function handleArticleLanguageSwitch() {
  const articleLang = document.body.getAttribute('data-article-lang');
  const translationSlug = document.body.getAttribute('data-translation-slug');

  if (articleLang && translationSlug) {
    // Navigate to paired article
    window.location.href = `/blog/${translationSlug}`;
  } else if (articleLang && !translationSlug) {
    // Toggle content on same page
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage();
  } else {
    // Default: toggle i18n on main site
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage();
  }
}
```

## Translation Keys

### Navigation
```javascript
// Navigation translations
const navTranslations = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre mi",
    "nav.projects": "Proyectos",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.contact": "Contacto"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.contact": "Contact"
  }
};
```

### Hero Section
```javascript
// Hero section translations
const heroTranslations = {
  es: {
    "hero.badge": "IDENTIDAD / 01",
    "hero.title": "Curando el <br /> Futuro <span class='text-outline-digital ml-2'>Digital</span>",
    "hero.desc": "Diseño UX/UI de alto impacto con alma disruptiva. Arquitectura digital para marcas que no temen destacar.",
    "hero.cta": "Comenzar Proyecto",
    "hero.portfolio": "Ver Portafolio"
  },
  en: {
    "hero.badge": "IDENTITY / 01",
    "hero.title": "Curating the <br /> Future <span class='text-outline-digital ml-2'>Digital</span>",
    "hero.desc": "High-impact UX/UI design with a disruptive soul. Digital architecture for brands that dare to stand out.",
    "hero.cta": "Start Project",
    "hero.portfolio": "View Portfolio"
  }
};
```

### Services Section
```javascript
// Services translations
const servicesTranslations = {
  es: {
    "services.badge": "SERVICIOS / 02",
    "services.title": "Soluciones sin <span class='bg-primary-container/20 px-2 italic'>límites</span>",
    "services.s1_title": "Páginas web empresariales",
    "services.s1_desc": "Arquitectura robusta para corporaciones que buscan liderazgo digital y estabilidad.",
    "services.s2_title": "Tiendas en línea o Ecommerce",
    "services.s2_desc": "Convertimos visitantes en clientes fieles con embudos de venta optimizados."
  },
  en: {
    "services.badge": "SERVICES / 02",
    "services.title": "Limitless <span class='bg-primary-container/20 px-2 italic'>Solutions</span>",
    "services.s1_title": "Enterprise Web Pages",
    "services.s1_desc": "Robust architecture for corporations seeking digital leadership and stability.",
    "services.s2_title": "Online Stores or Ecommerce",
    "services.s2_desc": "We convert visitors into loyal customers with optimized sales funnels."
  }
};
```

## Content Management

### Creating New Articles

#### Spanish Article
```markdown
---
title: "Inteligencia Artificial: Aliada o Enemiga del Diseño"
description: "Explorando el impacto de la IA en el diseño UX/UI moderno"
category: "IA y Diseño"
pubDate: 2024-01-15
image: "/images/ai-design.jpg"
author: "Geek Sloth"
authorRole: "UX Designer"
readTime: "8 MIN READ"
featured: true
lang: "es"
translationSlug: "artificial-intelligence-ally-or-enemy-design"
---

# Contenido del artículo en español...

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

#### English Translation
```markdown
---
title: "Artificial Intelligence: Ally or Enemy of Design"
description: "Exploring the impact of AI on modern UX/UI design"
category: "AI & Design"
pubDate: 2024-01-15
image: "/images/ai-design.jpg"
author: "Geek Sloth"
authorRole: "UX Designer"
readTime: "8 MIN READ"
featured: true
lang: "en"
translationSlug: "inteligencia-artificial-aliada-enemiga-diseno"
---

# Article content in English...

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

### Content Categories

#### Supported Categories
```typescript
type ContentCategory = 
  | 'IA y Diseño' | 'AI & Design'
  | 'Diseño Brutalista' | 'Brutalist Design'
  | 'Web 3' | 'Web 3'
  | 'Micro-interacciones' | 'Micro-interactions'
  | 'Psicología del Color' | 'Color Psychology';
```

#### Category Mapping
```javascript
const categoryMapping = {
  es: {
    'IA y Diseño': 'AI & Design',
    'Diseño Brutalista': 'Brutalist Design',
    'Web 3': 'Web 3',
    'Micro-interacciones': 'Micro-interactions',
    'Psicología del Color': 'Color Psychology'
  },
  en: {
    'AI & Design': 'IA y Diseño',
    'Brutalist Design': 'Diseño Brutalista',
    'Web 3': 'Web 3',
    'Micro-interactions': 'Micro-interacciones',
    'Color Psychology': 'Psicología del Color'
  }
};
```

## SEO & Meta Tags

### Dynamic Meta Tags
```astro
---
// Dynamic meta tags based on language
const { title, description, lang } = Astro.props;

const metaTitle = lang === 'es' 
  ? `${title} | DEVFHM`
  : `${title} | DEVFHM`;

const metaDescription = description;
---

<head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
  <html lang={lang} />
</head>
```

### Structured Data
```astro
---
// JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "inLanguage": lang,
  "datePublished": pubDate,
  "author": {
    "@type": "Person",
    "name": author
  }
};
---

<script type="application/ld+json">
  {JSON.stringify(structuredData)}
</script>
```

## URL Structure

### Same URL Approach
```
/blog/article-slug     # Shows content based on current language
/                       # Homepage with language-specific content
```

### Language-Specific URLs (Future)
```
/es/blog/articulo-es   # Spanish version
/en/blog/article-en    # English version
```

## Testing i18n

### Language Switching Test
```typescript
// Test language switching
describe('Language Switching', () => {
  test('Should switch from Spanish to English', () => {
    const langToggle = document.getElementById('lang-toggle');
    const navHome = document.querySelector('[data-key="nav.home"]');
    
    // Initial state
    expect(navHome.textContent).toBe('Inicio');
    
    // Switch language
    langToggle.click();
    
    // Updated state
    expect(navHome.textContent).toBe('Home');
  });
});
```

### Content Loading Test
```typescript
// Test content loading
describe('Content Loading', () => {
  test('Should load correct language content', async () => {
    const posts = await getCollection('blog');
    const spanishPosts = posts.filter(post => post.data.lang === 'es');
    const englishPosts = posts.filter(post => post.data.lang === 'en');
    
    expect(spanishPosts.length).toBeGreaterThan(0);
    expect(englishPosts.length).toBeGreaterThan(0);
  });
});
```

## Performance Considerations

### Translation Caching
```javascript
// Cache translations for performance
const translationCache = new Map();

function getCachedTranslation(key, lang) {
  const cacheKey = `${lang}-${key}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }
  
  const translation = translations[lang]?.[key];
  translationCache.set(cacheKey, translation);
  
  return translation;
}
```

### Lazy Loading
```javascript
// Lazy load translations
async function loadTranslations(lang) {
  if (!translations[lang]) {
    const module = await import(`./translations/${lang}.js`);
    translations[lang] = module.default;
  }
}
```

## Best Practices

### Translation Guidelines
1. **Consistent Keys**: Use consistent translation keys across languages
2. **HTML Preservation**: Preserve HTML structure in translations
3. **Context Awareness**: Consider context when translating
4. **Character Limits**: Keep similar character lengths for UI elements
5. **Cultural Adaptation**: Adapt content for cultural differences

### Content Guidelines
1. **Paired Content**: Always create paired content for both languages
2. **Metadata Consistency**: Keep metadata consistent between translations
3. **URL Slugs**: Use translation slugs for content pairing
4. **Image Alt Text**: Translate image alt text appropriately
5. **Date Formats**: Use appropriate date formats for each language

### Development Guidelines
1. **Language Detection**: Implement proper language detection
2. **Fallback Handling**: Handle missing translations gracefully
3. **SEO Optimization**: Optimize for multilingual SEO
4. **Performance**: Optimize translation loading and caching
5. **Testing**: Test all language combinations

---

**Last Updated**: April 2026  
**Review Frequency**: Monthly  
**Supported Languages**: Spanish (ES), English (EN)
