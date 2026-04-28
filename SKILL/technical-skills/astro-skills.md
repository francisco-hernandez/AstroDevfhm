# Astro Development Skills

## Core Concepts

### Islands Architecture
- **Understanding**: Selective client-side hydration
- **Implementation**: Use `client:*` directives for interactive components
- **Best Practice**: Minimize JavaScript for optimal performance

### File-based Routing
- **Dynamic Routes**: `[slug].astro` for dynamic content
- **Nested Routes**: Folder structure defines URL structure
- **API Routes**: `.js` or `.ts` files for backend functionality

### Astro Components
- **Structure**: Frontmatter (---) + HTML + CSS + JS
- **Props**: TypeScript interfaces for type safety
- **Slots**: Content injection patterns

## Advanced Features

### Content Collections
```typescript
// content.config.ts
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // ... other fields
  }),
});
```

### Server-side Rendering (SSR)
- **Static Site Generation**: Default mode for maximum performance
- **Hybrid Rendering**: Mix static and dynamic pages
- **SSR Mode**: Full server-side rendering for dynamic content

### Integration System
```typescript
// astro.config.mjs
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    // ... other integrations
  ],
});
```

## Performance Optimization

### Code Splitting
- **Route-based**: Automatic chunking by page
- **Component-level**: Manual splitting with `import()`
- **Asset optimization**: Automatic image optimization

### Bundle Analysis
- **Astro Studio**: Built-in analytics
- **Bundle size**: Monitor and optimize
- **Core Web Vitals**: LCP, FID, CLS optimization

## Development Workflow

### Local Development
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build locally
npm run astro    # Direct CLI access
```

### Environment Variables
```typescript
// .env
PUBLIC_API_URL=https://api.example.com
PRIVATE_KEY=secret-key

// Access in components
const apiUrl = import.meta.env.PUBLIC_API_URL;
```

## Best Practices

### Component Design
- **Single Responsibility**: Each component has one purpose
- **Props Interface**: Always define TypeScript interfaces
- **Accessibility**: Include ARIA labels and semantic HTML

### Performance
- **Minimal JavaScript**: Use islands only when necessary
- **Image Optimization**: Use Astro's built-in image component
- **CSS-in-JS**: Prefer utility classes over CSS files

### SEO Optimization
- **Meta Tags**: Dynamic titles and descriptions
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated sitemap

## Common Patterns

### Layout Pattern
```astro
---
import Layout from '../layouts/Layout.astro';
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<Layout title={title}>
  <main>
    <slot />
  </main>
</Layout>
```

### Content Rendering
```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
{posts.map(post => (
  <article>
    <h2>{post.data.title}</h2>
    <p>{post.data.description}</p>
  </article>
))}
```

### API Route Pattern
```typescript
// src/pages/api/posts.json.ts
import { getCollection } from 'astro:content';
export async function GET() {
  const posts = await getCollection('blog');
  return new Response(JSON.stringify(posts));
}
```

## Debugging & Troubleshooting

### Common Issues
- **Hydration Mismatches**: Server/client content differences
- **Import Errors**: Path resolution issues
- **Build Failures**: TypeScript or syntax errors

### Debug Tools
- **Dev Console**: Browser developer tools
- **Astro DevTools**: Browser extension
- **Build Logs**: Detailed error messages

## Migration & Upgrades

### Version Updates
- **Breaking Changes**: Check migration guides
- **Deprecation Warnings**: Address before upgrading
- **Testing**: Full test suite after upgrades

### Framework Migration
- **From React**: Component conversion patterns
- **From Next.js**: Routing and data fetching changes
- **From Static Sites**: Dynamic content integration

## Security Considerations

### Content Security Policy
- **Inline Scripts**: Avoid when possible
- **External Resources**: Whitelist trusted domains
- **Data Validation**: Sanitize user input

### Environment Security
- **Secret Management**: Never expose private keys
- **API Keys**: Use environment variables
- **CORS**: Proper cross-origin configuration

---

**Required Skills Level**: Advanced  
**Prerequisites**: HTML, CSS, JavaScript, TypeScript  
**Learning Resources**: [Astro Docs](https://docs.astro.build)  
**Community**: [Astro Discord](https://astro.build/chat)
