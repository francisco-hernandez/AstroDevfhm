# Tailwind CSS Development Skills

## Core Concepts

### Utility-First CSS
- **Philosophy**: Small, single-purpose classes
- **Composition**: Combine utilities for complex designs
- **Responsive**: Mobile-first breakpoints

### Configuration System
```javascript
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0040df',
        secondary: '#4c6700',
      },
      fontFamily: {
        headline: ['Epilogue', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

## Advanced Features

### Custom Design System
```css
/* src/styles/global.css */
@theme {
  --color-primary: #0040df;
  --color-surface-dim: #dadada;
  --font-headline: "Epilogue", sans-serif;
  --font-body: "Manrope", sans-serif;
}

.dark {
  --color-background: #000000;
  --color-on-background: #f4f4f5;
}
```

### Component Classes
```css
/* Reusable component styles */
.btn-primary {
  @apply bg-primary text-white px-4 py-2 rounded-lg;
}

.card {
  @apply bg-surface-container-lowest rounded-3xl shadow-sm;
}
```

### Dark Mode Implementation
```html
<!-- Class-based dark mode -->
<html class="dark">
<body class="bg-background text-on-background">
  <!-- Content -->
</body>
</html>

<!-- Responsive dark mode -->
<div class="bg-white dark:bg-black text-black dark:text-white">
  <!-- Adaptive content -->
</div>
```

## Responsive Design

### Breakpoint System
- **Mobile**: < 768px (default)
- **Tablet**: 768px - 1024px (md:)
- **Desktop**: > 1024px (lg:)
- **Large**: > 1280px (xl:)

### Responsive Patterns
```html
<!-- Mobile-first approach -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Responsive grid -->
</div>

<!-- Responsive typography -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  <!-- Adaptive text size -->
</h1>

<!-- Responsive layout -->
<div class="flex flex-col md:flex-row">
  <!-- Stack on mobile, side-by-side on desktop -->
</div>
```

## Animation & Transitions

### Transition Utilities
```html
<!-- Smooth transitions -->
<button class="transition-all duration-300 hover:scale-105">
  <!-- Animated button -->
</button>

<!-- Color transitions -->
<div class="bg-primary hover:bg-secondary transition-colors">
  <!-- Color change animation -->
</div>
```

### Custom Animations
```css
/* Define custom animations */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 8s infinite alternate ease-in-out;
}
```

## Layout Systems

### Flexbox Utilities
```html
<!-- Centering -->
<div class="flex items-center justify-center">
  <!-- Perfectly centered content -->
</div>

<!-- Navigation -->
<nav class="flex items-center justify-between">
  <!-- Spaced navigation -->
</nav>

<!-- Card layout -->
<div class="flex flex-col gap-4">
  <!-- Vertical card stack -->
</div>
```

### Grid System
```html
<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
  <!-- 3-column grid -->
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- Adaptive grid -->
</div>

<!-- Complex grid -->
<div class="grid grid-cols-12 gap-6">
  <div class="col-span-4">Sidebar</div>
  <div class="col-span-8">Main content</div>
</div>
```

## Typography

### Font System
```html
<!-- Headlines -->
<h1 class="font-headline text-5xl font-black tracking-tighter">
  <!-- Primary heading -->
</h1>

<!-- Body text -->
<p class="font-body text-lg leading-relaxed">
  <!-- Readable paragraph -->
</p>

<!-- Labels -->
<span class="font-label text-xs uppercase tracking-widest">
  <!-- Small label text -->
</span>
```

### Text Utilities
```html
<!-- Text alignment -->
<p class="text-left md:text-center lg:text-right">
  <!-- Responsive alignment -->
</p>

<!-- Text styling -->
<span class="font-bold italic underline">
  <!-- Multiple text styles -->
</span>

<!-- Text truncation -->
<p class="truncate line-clamp-3">
  <!-- Limited lines with ellipsis -->
</p>
```

## Color System

### Semantic Colors
```html
<!-- Primary colors -->
<button class="bg-primary text-on-primary">
  <!-- High contrast button -->
</button>

<!-- Surface colors -->
<div class="bg-surface-container-low text-on-surface">
  <!-- Card with proper contrast -->
</div>

<!-- State colors -->
<div class="text-error bg-error-container">
  <!-- Error message -->
</div>
```

### Opacity & Blending
```html
<!-- Transparency -->
<div class="bg-black/50 backdrop-blur-sm">
  <!-- Semi-transparent overlay -->
</div>

<!-- Gradient backgrounds -->
<div class="bg-gradient-to-r from-primary to-secondary">
  <!-- Linear gradient -->
</div>

<!-- Mix blend modes -->
<div class="mix-blend-multiply">
  <!-- Color blending -->
</div>
```

## Spacing & Sizing

### Margin & Padding
```html
<!-- Consistent spacing -->
<div class="p-4 m-2">
  <!-- Padding and margin -->
</div>

<!-- Responsive spacing -->
<div class="px-6 py-8 md:px-12 md:py-16">
  <!-- Adaptive spacing -->
</div>

<!-- Gap utilities -->
<div class="grid grid-cols-2 gap-4">
  <!-- Grid spacing -->
</div>
```

### Sizing System
```html
<!-- Fixed sizes -->
<div class="w-64 h-32">
  <!-- Fixed dimensions -->
</div>

<!-- Responsive sizes -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Adaptive width -->
</div>

<!-- Aspect ratios -->
<div class="aspect-video">
  <!-- 16:9 ratio -->
</div>
```

## Performance Optimization

### PurgeCSS Integration
```javascript
// tailwind.config.js
export default {
  content: [
    './src/**/*.{astro,html,js,ts}',
    './src/components/**/*.{astro,js,ts}',
  ],
  // Only includes used classes in production
};
```

### CSS Optimization
```css
/* Minimize custom CSS */
/* Use utilities instead */
.component {
  /* Avoid custom properties when possible */
}

/* Critical CSS */
@layer base {
  /* Base styles first */
}
@layer components {
  /* Component styles */
}
@layer utilities {
  /* Utility classes */
}
```

## Best Practices

### Class Organization
```html
<!-- Logical grouping -->
<div class="flex items-center justify-between w-full px-8 py-4">
  <!-- Layout: flex items-center justify-between -->
  <!-- Sizing: w-full -->
  <!-- Spacing: px-8 py-4 -->
</div>
```

### Responsive Design
```html
<!-- Mobile-first approach -->
<div class="text-sm md:text-base lg:text-lg">
  <!-- Start small, scale up -->
</div>
```

### Accessibility
```html
<!-- Focus states -->
<button class="focus:outline-none focus:ring-2 focus:ring-primary">
  <!-- Accessible focus indicators -->
</button>

<!-- Screen reader support -->
<span class="sr-only">Hidden text for screen readers</span>
```

## Debugging & Tools

### DevTools Integration
- **Visual Helper**: Browser extension for class inspection
- **CSS Audit**: Identify unused styles
- **Performance Monitor**: Bundle size analysis

### Common Issues
- ** specificity conflicts**: Utility vs. custom CSS
- **responsive breakpoints**: Mobile-first testing
- **dark mode transitions**: Smooth color changes

## Advanced Patterns

### Component Variants
```html
<!-- Base component with variants -->
<button class="btn btn-primary btn-large">
  <!-- Composable button styles -->
</button>

<!-- State variations -->
<button class="btn-primary hover:btn-primary-active focus:btn-primary-focus">
  <!-- Interactive states -->
</button>
```

### Theme System
```html
<!-- Theme-aware components -->
<div class="bg-surface text-on-surface dark:bg-surface-dark dark:text-on-surface-dark">
  <!-- Theme-adaptive styling -->
</div>
```

---

**Required Skills Level**: Intermediate to Advanced  
**Prerequisites**: CSS fundamentals, Responsive design  
**Learning Resources**: [Tailwind Docs](https://tailwindcss.com/docs)  
**Community**: [Tailwind Discord](https://tailwindcss.com/discord)
