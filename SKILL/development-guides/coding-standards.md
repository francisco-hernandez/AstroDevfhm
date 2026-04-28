# Coding Standards & Best Practices

## General Principles

### Code Quality
1. **Readability First**: Code should be easy to understand
2. **Consistency**: Follow established patterns throughout the project
3. **Simplicity**: Avoid over-engineering solutions
4. **Performance**: Write efficient, optimized code
5. **Maintainability**: Design for future modifications

### Documentation Standards
- **Comments**: Explain "why" not "what"
- **JSDoc**: Document functions and complex logic
- **README**: Keep project documentation up to date
- **Changelog**: Track significant changes

## TypeScript Standards

### Type Definitions
```typescript
// Use interfaces for object shapes
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Use types for unions or computed types
type UserRole = 'admin' | 'editor' | 'viewer';

// Use generics for reusable components
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
```

### Function Signatures
```typescript
// Always return types explicitly
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Use async/await for promises
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// Use optional parameters wisely
function createUser(
  name: string,
  email: string,
  role: UserRole = 'viewer'
): User {
  return { id: generateId(), name, email, role };
}
```

### Error Handling
```typescript
// Use Result pattern for operations
type Result<T, E = Error> = {
  success: true;
  data: T;
} | {
  success: false;
  error: E;
};

function safeParseJSON<T>(json: string): Result<T> {
  try {
    const data = JSON.parse(json);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}
```

## Astro Component Standards

### Component Structure
```astro
---
// 1. Imports first
import type { ComponentProps } from '@/types/components';
import Layout from '@/layouts/Layout.astro';
import { formatDate } from '@/utils/date';

// 2. Props interface
interface Props extends ComponentProps {
  title: string;
  date: Date;
  author?: string;
}

// 3. Props destructuring
const { title, date, author = 'Anonymous' } = Astro.props;

// 4. Data fetching (if needed)
const formattedDate = formatDate(date);
---

<!-- 5. Component markup -->
<Layout title={title}>
  <article class="blog-post">
    <header>
      <h1>{title}</h1>
      <time datetime={date.toISOString()}>{formattedDate}</time>
      {author && <p>By {author}</p>}
    </header>
    <main>
      <slot />
    </main>
  </article>
</Layout>

<!-- 6. Component styles -->
<style>
  .blog-post {
    @apply max-w-4xl mx-auto p-6;
  }
</style>
```

### Props Validation
```astro
---
import { z } from 'astro:content';

// Define schema for props
const propsSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().optional(),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([])
});

// Validate props
const props = propsSchema.parse(Astro.props);
const { title, description, featured, tags } = props;
---
```

### Client-Side Scripts
```astro
---
// Component with client-side interactivity
---

<div class="interactive-component">
  <button id="toggle-btn">Toggle</button>
  <div id="content" class="hidden">Content</div>
</div>

<script>
  // Use proper event handling
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const content = document.getElementById('content');
    
    if (toggleBtn && content) {
      toggleBtn.addEventListener('click', () => {
        content.classList.toggle('hidden');
      });
    }
  });
</script>
```

## CSS & Tailwind Standards

### Class Organization
```html
<!-- Logical grouping of classes -->
<div class="flex items-center justify-between w-full px-8 py-4 bg-white dark:bg-black rounded-lg shadow-md">
  <!-- Layout: flex items-center justify-between -->
  <!-- Sizing: w-full -->
  <!-- Spacing: px-8 py-4 -->
  <!-- Colors: bg-white dark:bg-black -->
  <!-- Borders: rounded-lg -->
  <!-- Shadows: shadow-md -->
</div>
```

### Component Classes
```css
/* Define reusable component classes */
.btn {
  @apply px-4 py-2 rounded-lg font-medium transition-all duration-200;
}

.btn-primary {
  @apply bg-primary text-white hover:bg-primary-dark;
}

.btn-secondary {
  @apply bg-surface text-on-surface hover:bg-surface-dark;
}

.card {
  @apply bg-surface-container-lowest rounded-3xl p-6 shadow-sm;
}
```

### Responsive Design
```html
<!-- Mobile-first approach -->
<div class="text-sm md:text-base lg:text-lg">
  <!-- Start small, scale up -->
</div>

<!-- Responsive layout -->
<div class="flex flex-col md:flex-row gap-4">
  <!-- Stack on mobile, side-by-side on desktop -->
</div>
```

### Dark Mode
```html
<!-- Always include dark mode variants -->
<div class="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
  <!-- Adaptive colors -->
</div>

<!-- Use semantic color variables -->
<div class="bg-surface text-on-surface">
  <!-- Theme-aware colors -->
</div>
```

## JavaScript Standards

### Modern ES6+ Features
```typescript
// Use destructuring
const { name, email } = user;

// Use spread operator
const newUser = { ...user, role: 'admin' };

// Use template literals
const message = `Hello ${name}, your email is ${email}`;

// Use arrow functions
const double = (x: number): number => x * 2;

// Use async/await
const fetchData = async (): Promise<Data> => {
  const response = await fetch('/api/data');
  return response.json();
};
```

### Error Handling
```typescript
// Use try-catch for async operations
async function loadData(): Promise<Data[]> {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to load data:', error);
    throw error; // Re-throw for caller to handle
  }
}

// Use Result type for operations
function validateEmail(email: string): Result<boolean> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    return { success: true, data: true };
  }
  return { success: false, error: new Error('Invalid email format') };
}
```

### Performance Optimization
```typescript
// Use memoization for expensive operations
const memoizedCalculate = memoize((items: Item[]) => {
  return items.reduce((sum, item) => sum + item.value, 0);
});

// Use requestAnimationFrame for animations
function animateElement(element: Element) {
  requestAnimationFrame(() => {
    element.classList.add('animated');
  });
}

// Use lazy loading for heavy operations
const loadComponent = lazy(() => import('./HeavyComponent'));
```

## File Naming Conventions

### Components
```
components/
  Button.astro           # PascalCase for components
  Navigation.astro       # Descriptive names
  BlogCard.astro         # Compound names
  SearchInput.astro      # Specific functionality
```

### Utilities
```
utils/
  dateHelpers.ts         # camelCase for utilities
  apiClient.ts           # Descriptive names
  constants.ts           # Plural for collections
  validators.ts          # Functionality-based
```

### Pages
```
pages/
  index.astro            # Homepage
  about.astro            # Simple pages
  blog/index.astro       # Section index
  blog/[slug].astro      # Dynamic routes
  api/users.ts           # API routes
```

## Import/Export Standards

### Import Organization
```typescript
// 1. External libraries
import { gsap } from 'gsap';
import { z } from 'zod';

// 2. Internal modules (absolute imports)
import Layout from '@/layouts/Layout.astro';
import { formatDate } from '@/utils/date';
import type { User } from '@/types/user';

// 3. Relative imports
import './styles.css';
import { localHelper } from './helpers';
```

### Export Patterns
```typescript
// Named exports for utilities
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Default export for main component
export default function BlogPost(props: BlogPostProps) {
  return <article>{props.children}</article>;
}

// Type exports
export type BlogPostProps = {
  title: string;
  content: string;
};
```

## Testing Standards

### Unit Tests
```typescript
// Test file naming: component.test.ts
import { render, screen } from '@testing-library/astro';
import { expect, test } from 'vitest';

import Button from './Button.astro';

test('Button renders with correct text', async () => {
  const { getByText } = await render(Button, {
    props: { text: 'Click me' }
  });
  
  expect(getByText('Click me')).toBeInTheDocument();
});

test('Button handles click events', async () => {
  const handleClick = vi.fn();
  const { getByRole } = await render(Button, {
    props: { text: 'Click me', onClick: handleClick }
  });
  
  getByRole('button').click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Integration Tests
```typescript
// Test file naming: page.integration.test.ts
import { render } from '@testing-library/astro';
import { expect, test } from 'vitest';

import BlogIndex from '../pages/blog/index.astro';

test('Blog page lists posts correctly', async () => {
  const { getAllByRole } = await render(BlogIndex);
  
  const articles = getAllByRole('article');
  expect(articles).toHaveLength(3);
});
```

## Performance Standards

### Bundle Optimization
```typescript
// Dynamic imports for code splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Tree shaking for unused exports
export { usedFunction } from './utils';
// unusedFunction will be tree-shaken

// Optimize imports
import { debounce } from 'lodash-es/debounce'; // Specific import
```

### Image Optimization
```astro
---
import { Image } from 'astro:assets';
import heroImage from '@/images/hero.jpg';
---

<!-- Optimized image -->
<Image 
  src={heroImage} 
  alt="Hero image"
  widths={[400, 800, 1200]}
  formats={['webp', 'jpg']}
  loading="lazy"
/>
```

### CSS Optimization
```css
/* Use CSS custom properties for theming */
:root {
  --color-primary: #0040df;
  --color-surface: #ffffff;
}

.dark {
  --color-primary: #2d5bff;
  --color-surface: #000000;
}

/* Minimize custom CSS, use utilities */
.component {
  /* Only for complex animations or special cases */
}
```

## Security Standards

### Input Validation
```typescript
// Validate all user input
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1).max(50).trim(),
  email: z.string().email(),
  message: z.string().min(10).max(500).trim()
});

function validateContactForm(data: unknown) {
  return contactFormSchema.parse(data);
}
```

### Content Security Policy
```astro
---
// Set CSP headers
Astro.response.headers.set(
  'Content-Security-Policy',
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
);
---
```

### Environment Variables
```typescript
// Use environment variables for sensitive data
const apiKey = import.meta.env.PUBLIC_API_KEY;
const privateSecret = import.meta.env.PRIVATE_SECRET;

// Never expose private variables to client
```

## Git Standards

### Commit Messages
```bash
# Format: type(scope): description
feat(components): add interactive button component
fix(navigation): resolve mobile menu issue
docs(readme): update installation instructions
style(css): improve dark mode styling
refactor(api): optimize data fetching
test(components): add unit tests for cards
```

### Branch Naming
```bash
# Feature branches
feature/user-authentication
feature/blog-system

# Bugfix branches
fix/mobile-navigation
fix/performance-issues

# Release branches
release/v1.0.0
release/v1.1.0
```

---

**Last Updated**: April 2026  
**Review Frequency**: Bi-weekly  
**Enforcement**: Code reviews and linting tools
