# AGENTS.MD - DEVFHM Astro Site

## Project Overview

**DEVFHM** is a modern, multilingual portfolio website built with Astro 6.1.5, featuring a blog system, dark mode, and advanced animations. This project showcases UX/UI design expertise with a focus on disruptive digital experiences.

## Architecture Summary

### Technology Stack

- **Framework**: Astro 6.1.5 (Islands Architecture)
- **Styling**: Tailwind CSS 4.2.2 with custom design system
- **Animations**: GSAP with ScrollTrigger
- **Content**: Astro Content Collections
- **Languages**: TypeScript, JavaScript
- **Build Tool**: Vite
- **Node**: 22.12.0+

### Key Features

- **Multilingual Support**: Spanish/English with client-side switching
- **Dark Mode**: Pure black theme with semantic color system
- **Content Management**: Markdown-based blog with schema validation
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance**: Optimized build with lazy loading
- **SEO**: Semantic HTML with meta tags

## Project Structure

```
src/
components/           # Reusable UI components
  Footer.astro       # Site footer with links and branding
  Navbar.astro       # Navigation with theme/language toggles
  Welcome.astro      # Hero section component

layouts/             # Page templates
  Layout.astro       # Main layout with global scripts

pages/               # Route-based pages
  index.astro        # Homepage (54KB - comprehensive landing)
  blog.astro         # Blog listing page
  blog/[...slug].astro # Dynamic blog post pages
  articulo.astro     # Article template component
  404.astro         # Custom error page

content/             # Markdown content
  blog/              # 12 articles (ES/EN pairs)
    - AI & Design topics
    - Brutalist architecture
    - Web 3 challenges
    - Micro-interactions
    - Color psychology

styles/              # Global styles
  global.css         # CSS variables, dark mode, utilities

assets/              # Static assets
public/              # Public files (images, favicons, scripts)
```

## Component Architecture

### Core Components

**Navbar.astro** (24KB)

- Multi-language navigation system
- Dark/light mode toggle with localStorage persistence
- Mobile responsive menu with overlay
- Active link highlighting with Intersection Observer
- Translation system with JSON-based dictionaries

**Layout.astro** (7KB)

- HTML structure with semantic tags
- Global script integration (GSAP, animations)
- Client-side theme and language logic
- FAQ accordion functionality
- Mobile menu state management

**Footer.astro** (2KB)

- Minimal footer with essential links
- Dark mode optimized styling
- Social and legal navigation

### Page Components

**index.astro** (54KB) - Main Landing Page

- Hero section with animated blobs and parallax
- Tech stack carousel with scrolling animations
- Services grid with interactive cards
- About section with statistics
- Projects showcase with hover effects
- FAQ accordion with smooth transitions
- Blog posts preview with language filtering
- Contact form with validation

**blog.astro** (10KB) - Content Hub

- Dynamic blog listing with language detection
- Grid layout with article cards
- Category filtering and search capabilities
- Responsive pagination

## Content System

### Blog Architecture

- **Schema Validation**: Structured content with TypeScript
- **Multilingual**: Paired ES/EN articles with translation slugs
- **Metadata**: Rich frontmatter with SEO optimization
- **Categories**: AI, Design, Web 3, UX Psychology
- **Media**: Featured images with optimized loading

### Content Collections Configuration

```typescript
// content.config.ts
{
  title: string,
  description?: string,
  category?: string,
  pubDate?: Date,
  image?: string,
  author: string (default: 'Geek Sloth'),
  authorRole?: string,
  readTime: string (default: '5 MIN READ'),
  featured?: boolean,
  lang: string (default: 'es'),
  translationSlug?: string
}
```

## Design System

### Color Architecture

- **Semantic Variables**: CSS custom properties for theming
- **Dark Mode**: Pure black (#000000) with high contrast
- **Brand Colors**: Primary (#0040df), Secondary (#4c6700), Accent (#C1FF00)
- **Surface System**: Layered backgrounds for depth
- **Typography Scale**: Epilogue (headlines), Manrope (body)

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

## Animation System

### GSAP Integration

- **Hero Animations**: Staggered entrance effects
- **ScrollTrigger**: Section-based reveal animations
- **Parallax**: Mouse-responsive hero image
- **Micro-interactions**: Button states, card hovers
- **Carousel**: Smooth tech stack scrolling

### Performance Optimizations

- **Lazy Loading**: Images and heavy components
- **Code Splitting**: Route-based chunks
- **CSS Optimization**: Purged styles in production
- **Asset Compression**: Optimized images and scripts

## Internationalization

### Language System

- **Client-side Switching**: No page reload required
- **LocalStorage**: Persistent language preference
- **Fallback Logic**: System preference detection
- **Content Mapping**: Automatic article pairing
- **URL Structure**: Same URL, different content

### Translation Architecture

```javascript
// Dynamic content switching
const translations = {
  es: { "nav.home": "Inicio", ... },
  en: { "nav.home": "Home", ... }
};
```

## Development Workflow

### Local Development

```bash
npm run dev      # Development server (localhost:4321)
npm run build    # Production build
npm run preview  # Preview production build
```

### Build Process

- **Vite**: Fast development and optimized builds
- **Astro**: Server-side rendering with client hydration
- **Tailwind**: Just-in-time CSS generation
- **TypeScript**: Type safety and IDE support

## Performance Characteristics

### Optimization Features

- **Islands Architecture**: Selective client-side JavaScript
- **Minimal JS**: Only essential interactions hydrated
- **CSS-in-JS**: Tailwind with custom utilities
- **Image Optimization**: Responsive images with lazy loading
- **Bundle Analysis**: Optimized chunk splitting

### Core Web Vitals

- **LCP**: Optimized hero image loading
- **FID**: Minimal JavaScript blocking
- **CLS**: Stable layout with proper dimensions

## SEO & Accessibility

### SEO Implementation

- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Dynamic titles and descriptions
- **Structured Data**: Article schema markup
- **Open Graph**: Social media optimization
- **Sitemap**: Auto-generated for content

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Semantic markup and ARIA labels
- **Color Contrast**: WCAG compliant dark/light themes
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

## Deployment & Hosting

### Build Output

```
dist/
  index.html          # Main entry point
  blog/               # Blog routes
  assets/             # Optimized static files
  _astro/             # Astro-generated chunks
```

### Hosting Requirements

- **Static Hosting**: Netlify, Vercel, Cloudflare Pages
- **Node Version**: 22.12.0+
- **Environment**: Production build optimization
- **CDN**: Global asset distribution

## Maintenance & Updates

### Content Management

- **Markdown Editing**: Simple content updates
- **Schema Validation**: Type-safe content creation
- **Image Management**: Optimized asset pipeline
- **Blog Posts**: Add new articles in MD/MDX format

### Code Maintenance

- **Component Updates**: Modular architecture for easy changes
- **Style Updates**: CSS custom properties for theming
- **Dependency Updates**: Regular npm audit and updates
- **Performance Monitoring**: Core Web Vitals tracking

## Future Enhancements

### Planned Features

- **CMS Integration**: Strapi or Contentful for content management
- **Search Functionality**: Client-side blog search
- **Analytics**: Privacy-focused visitor tracking
- **PWA**: Offline capabilities and install prompt
- **Performance**: Further optimization and monitoring

### Scalability Considerations

- **Content Growth**: Efficient pagination and filtering
- **Traffic Handling**: CDN and caching strategies
- **Feature Expansion**: Modular component system
- **Multi-author**: Extended content management system

---

**Project Status**: Production Ready  
**Last Updated**: April 2026  
**Maintainer**: DEVFHM Team  
**License**: Private

This documentation serves as a comprehensive guide for developers, designers, and content managers working with the DEVFHM Astro site.

# AGENTS.MD - DEVFHM Astro Site (Philosophical & Technical core)

## Core Philosophy: Japanese Digital Craftsmanship

Este sitio no es solo un portafolio; es una pieza de artesanía digital basada en:

- **Ma (間):** El espacio entre elementos es tan importante como el contenido. Usa márgenes generosos para evitar la fatiga visual.
- **Kanso (簡素):** Eliminación de lo no esencial. Código limpio, sin "bloat" y funcional.
- **Seijaku (静寂):** Animaciones fluidas. Nada debe ser "atropellado". El movimiento debe ser sutil y natural (Growth-only logic).
- **Wabi-sabi:** Identidad orgánica basada en el "perezoso desarrollador", balanceando lo profesional con lo humano.

## Technical Guardrails

- **Preservación de Contenido:** PROHIBIDO eliminar o modificar texto "quemado" o estructuras de contenido originales sin petición expresa.
- **Animaciones (GSAP):** Deben iniciar pequeñas y crecer suavemente. Evitar cambios de tamaño bruscos o loops infinitos que distraigan.
- **Tech Stack Priority:** Astro 6.1.5 (Islands), Tailwind CSS 4.2.2, GSAP (ScrollTrigger).

## Component Design Criteria

1. **Navbar:** Debe ser sutil. El efecto de reducción/crecimiento debe ser imperceptible al scroll inicial.
2. **Hero:** La palabra "Digital" debe ser prominente (Large Typography).
3. **Mascota:** Integrar visualmente al "perezoso desarrollador" de forma equilibrada en el layout.
