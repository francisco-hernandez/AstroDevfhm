# Project Setup Guide

## Initial Setup

### Prerequisites
- **Node.js**: 22.12.0 or higher
- **Package Manager**: npm or yarn
- **IDE**: VS Code with Astro extensions
- **Git**: For version control

### Installation Steps
```bash
# Clone the repository
git clone <repository-url>
cd astro-site

# Install dependencies
npm install

# Start development server
npm run dev
```

## Environment Configuration

### Environment Variables
```bash
# Create .env file
touch .env

# Add environment variables
PUBLIC_API_URL=https://api.example.com
PRIVATE_KEY=your-secret-key
```

### Configuration Files
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        config: './tailwind.config.js'
      })
    ]
  },
  site: 'https://your-domain.com',
  output: 'static'
});
```

## Development Workflow

### Daily Development
```bash
# Start development server
npm run dev

# Watch for changes
# Server runs on http://localhost:4321

# Type checking (if using TypeScript)
npm run type-check
```

### Code Quality
```bash
# Lint code
npm run lint

# Format code
npm run format

# Run tests
npm run test
```

## Branch Strategy

### Git Workflow
```bash
# Main branches
main          # Production-ready code
develop       # Integration branch

# Feature branches
feature/component-name
feature/blog-system
feature/dark-mode

# Release branches
release/v1.0.0

# Hotfix branches
hotfix/critical-bug-fix
```

### Commit Convention
```bash
# Format: type(scope): description
feat(navigation): add mobile menu
fix(footer): resolve dark mode issue
docs(readme): update installation guide
style(components): improve button styling
refactor(blog): optimize content loading
test(api): add unit tests for endpoints
```

## Code Structure

### File Organization
```
src/
components/           # Reusable components
  ui/                # Basic UI components
  layout/            # Layout components
  features/          # Feature-specific components

layouts/             # Page layouts
  BaseLayout.astro   # Main layout
  BlogLayout.astro   # Blog layout

pages/               # Route pages
  index.astro        # Homepage
  blog/              # Blog routes
  api/               # API routes

styles/              # Global styles
  global.css         # Base styles
  components.css     # Component styles

utils/               # Utility functions
  helpers.ts         # Helper functions
  constants.ts       # Constants
  types.ts           # TypeScript types
```

### Component Structure
```astro
---
// Component: Card.astro
import type { CardProps } from '@/types/components';

interface Props extends CardProps {
  title: string;
  description?: string;
  image?: string;
}

const { title, description, image } = Astro.props;
---

<div class="card">
  {image && <img src={image} alt={title} />}
  <h3>{title}</h3>
  {description && <p>{description}</p>}
  <slot />
</div>

<style>
  .card {
    @apply bg-surface-container-lowest rounded-3xl p-6;
  }
</style>
```

## Development Guidelines

### Component Development
1. **Single Responsibility**: Each component has one purpose
2. **TypeScript First**: Always define interfaces for props
3. **Accessibility First**: Include ARIA labels and semantic HTML
4. **Responsive Design**: Mobile-first approach
5. **Performance**: Minimize client-side JavaScript

### CSS Guidelines
1. **Utility-First**: Use Tailwind utilities
2. **Component Classes**: Create reusable component classes
3. **Dark Mode**: Always include dark mode variants
4. **Responsive**: Use responsive prefixes
5. **Performance**: Avoid unused CSS

### JavaScript Guidelines
1. **TypeScript**: Use strict TypeScript
2. **ES6+**: Use modern JavaScript features
3. **Error Handling**: Always handle errors gracefully
4. **Performance**: Optimize for bundle size
5. **Security**: Sanitize user input

## Testing Strategy

### Unit Testing
```typescript
// Component test example
import { render } from '@testing-library/astro';
import Card from './Card.astro';

test('Card renders title correctly', async () => {
  const { getByText } = await render(Card, {
    props: { title: 'Test Title' }
  });
  
  expect(getByText('Test Title')).toBeInTheDocument();
});
```

### Integration Testing
```typescript
// Page integration test
import { render } from '@testing-library/astro';
import Index from '../pages/index.astro';

test('Homepage loads correctly', async () => {
  const { getByText } = await render(Index);
  
  expect(getByText('DEVFHM')).toBeInTheDocument();
});
```

### E2E Testing
```typescript
// Playwright test example
import { test, expect } from '@playwright/test';

test('Navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  await page.click('text=Services');
  await expect(page).toHaveURL('/#services');
});
```

## Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npm run analyze

# Check Core Web Vitals
npm run lighthouse
```

### Optimization Techniques
1. **Image Optimization**: Use Astro's Image component
2. **Code Splitting**: Lazy load components
3. **CSS Purging**: Remove unused styles
4. **Font Optimization**: Use modern font loading
5. **Caching**: Implement proper caching headers

### Performance Monitoring
```javascript
// Performance monitoring
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(`${entry.name}: ${entry.duration}ms`);
  }
});

observer.observe({ entryTypes: ['measure', 'navigation'] });
```

## Security Best Practices

### Content Security Policy
```javascript
// CSP configuration
const csp = {
  'default-src': ["'self'"],
  'script-src': ["'self'", 'https://cdn.jsdelivr.net'],
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", 'data:', 'https:'],
  'font-src': ["'self'", 'https://fonts.googleapis.com'],
};
```

### Environment Security
```bash
# .env.example (commit to repo)
PUBLIC_API_URL=https://api.example.com
PRIVATE_KEY=your-secret-key

# .env.local (don't commit)
PRIVATE_KEY=actual-secret-key
```

### Input Validation
```typescript
// Validate user input
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500)
});

function validateContact(data: unknown) {
  return contactSchema.parse(data);
}
```

## Deployment Process

### Build Process
```bash
# Production build
npm run build

# Preview build locally
npm run preview

# Deploy to hosting
npm run deploy
```

### Environment Setup
```bash
# Production environment
NODE_ENV=production
PUBLIC_API_URL=https://api.production.com

# Staging environment
NODE_ENV=staging
PUBLIC_API_URL=https://api.staging.com
```

### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

## Troubleshooting

### Common Issues
1. **Build Failures**: Check TypeScript errors
2. **Styling Issues**: Verify Tailwind configuration
3. **Performance**: Check bundle size
4. **SEO**: Verify meta tags
5. **Accessibility**: Test with screen readers

### Debug Tools
- **Browser DevTools**: For debugging CSS and JS
- **Astro DevTools**: For Astro-specific debugging
- **Lighthouse**: For performance analysis
- ** axe DevTools**: For accessibility testing

## Documentation

### Code Documentation
```typescript
/**
 * Component: Card
 * Description: Reusable card component with title and content
 * @example
 * <Card title="Hello World">
 *   <p>Card content</p>
 * </Card>
 */
export interface CardProps {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Card image URL */
  image?: string;
}
```

### README Structure
```markdown
# Project Name

## Description
Brief project description

## Features
List of key features

## Installation
Setup instructions

## Usage
How to use the project

## Contributing
Guidelines for contributors

## License
Project license
```

---

**Last Updated**: April 2026  
**Maintainer**: DEVFHM Team  
**Review Frequency**: Monthly
