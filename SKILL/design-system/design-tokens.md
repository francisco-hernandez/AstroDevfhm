# Design System - Design Tokens

## Color System

### Primary Colors
```css
:root {
  /* Brand Colors */
  --color-primary: #0040df;
  --color-primary-fixed: #dde1ff;
  --color-primary-container: #2d5bff;
  --color-on-primary: #ffffff;
  --color-on-primary-container: #efefff;
  --color-primary-fixed-dim: #b8c3ff;
  --color-on-primary-fixed: #001355;
  --color-on-primary-fixed-variant: #0035bd;
  --color-primary-container-dim: #b8c3ff;
}
```

### Secondary Colors
```css
:root {
  /* Secondary Colors */
  --color-secondary: #4c6700;
  --color-secondary-fixed: #baf600;
  --color-secondary-container: #b8f300;
  --color-on-secondary: #ffffff;
  --color-on-secondary-container: #506c00;
  --color-secondary-fixed-dim: #a3d800;
  --color-on-secondary-fixed: #151f00;
  --color-on-secondary-fixed-variant: #394e00;
}
```

### Tertiary Colors
```css
:root {
  /* Tertiary Colors */
  --color-tertiary: #913a00;
  --color-tertiary-fixed: #ffdbcc;
  --color-tertiary-container: #b84b00;
  --color-on-tertiary: #ffffff;
  --color-on-tertiary-container: #ffece5;
  --color-tertiary-fixed-dim: #ffb693;
  --color-on-tertiary-fixed: #351000;
  --color-on-tertiary-fixed-variant: #7a3000;
}
```

### Surface Colors
```css
:root {
  /* Surface System */
  --color-background: #f9f9f9;
  --color-on-background: #1a1c1c;
  --color-surface: #f9f9f9;
  --color-on-surface: #1a1c1c;
  --color-surface-variant: #e2e2e2;
  --color-on-surface-variant: #434656;
  --color-surface-container: #eeeeee;
  --color-surface-container-low: #f3f3f4;
  --color-surface-container-high: #e8e8e8;
  --color-surface-container-highest: #e2e2e2;
  --color-surface-container-lowest: #ffffff;
  --color-surface-dim: #dadada;
  --color-surface-bright: #f9f9f9;
  --color-inverse-surface: #2f3131;
  --color-inverse-on-surface: #f0f1f1;
}
```

### Dark Mode Colors
```css
.dark {
  /* Dark Mode Overrides */
  --color-background: #000000;
  --color-on-background: #f4f4f5;
  --color-surface: #000000;
  --color-on-surface: #f4f4f5;
  --color-surface-container-low: #0a0a0a;
  --color-surface-container-high: #1a1a1a;
  --color-surface-container: #1a1a1a;
  --color-surface-container-highest: #2a2a2a;
  --color-surface-container-lowest: #000000;
  --color-outline-variant: #3a3a3a;
  --color-on-surface-variant: #a1a1aa;
  --color-outline: #52525b;
}
```

### Error Colors
```css
:root {
  /* Error Colors */
  --color-error: #ba1a1a;
  --color-error-container: #ffdad6;
  --color-on-error: #ffffff;
  --color-on-error-container: #93000a;
}
```

### Outline Colors
```css
:root {
  /* Outline Colors */
  --color-outline: #747688;
  --color-outline-variant: #c4c5d9;
  --color-surface-tint: #104af0;
}
```

## Typography System

### Font Families
```css
:root {
  /* Font Families */
  --font-headline: "Epilogue", sans-serif;
  --font-body: "Manrope", sans-serif;
  --font-label: "Epilogue", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

### Font Sizes
```css
:root {
  /* Font Sizes - Fluid Typography */
  --font-size-xs: clamp(0.75rem, 0.75rem + 0vw, 0.75rem);
  --font-size-sm: clamp(0.875rem, 0.85rem + 0.125vw, 0.875rem);
  --font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1rem);
  --font-size-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.125rem);
  --font-size-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.25rem);
  --font-size-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.5rem);
  --font-size-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 1.875rem);
  --font-size-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 2.25rem);
  --font-size-5xl: clamp(3rem, 2.55rem + 2.25vw, 3rem);
  --font-size-6xl: clamp(3.75rem, 3.15rem + 3vw, 3.75rem);
  --font-size-7xl: clamp(4.5rem, 3.75rem + 3.75vw, 4.5rem);
}
```

### Font Weights
```css
:root {
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
}
```

### Line Heights
```css
:root {
  /* Line Heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.2;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.8;
}
```

### Letter Spacing
```css
:root {
  /* Letter Spacing */
  --letter-spacing-tighter: -0.05em;
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
}
```

## Spacing System

### Base Spacing
```css
:root {
  /* Base Spacing Unit */
  --spacing-unit: 0.25rem; /* 4px */
  
  /* Spacing Scale */
  --spacing-0: 0;
  --spacing-1: calc(var(--spacing-unit) * 1); /* 4px */
  --spacing-2: calc(var(--spacing-unit) * 2); /* 8px */
  --spacing-3: calc(var(--spacing-unit) * 3); /* 12px */
  --spacing-4: calc(var(--spacing-unit) * 4); /* 16px */
  --spacing-5: calc(var(--spacing-unit) * 5); /* 20px */
  --spacing-6: calc(var(--spacing-unit) * 6); /* 24px */
  --spacing-8: calc(var(--spacing-unit) * 8); /* 32px */
  --spacing-10: calc(var(--spacing-unit) * 10); /* 40px */
  --spacing-12: calc(var(--spacing-unit) * 12); /* 48px */
  --spacing-16: calc(var(--spacing-unit) * 16); /* 64px */
  --spacing-20: calc(var(--spacing-unit) * 20); /* 80px */
  --spacing-24: calc(var(--spacing-unit) * 24); /* 96px */
  --spacing-32: calc(var(--spacing-unit) * 32); /* 128px */
}
```

### Component Spacing
```css
:root {
  /* Component-specific spacing */
  --spacing-component-padding: var(--spacing-6);
  --spacing-section-padding: var(--spacing-16);
  --spacing-container-margin: var(--spacing-8);
  --spacing-gap: var(--spacing-4);
}
```

## Border Radius System

### Border Radius
```css
:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.125rem; /* 2px */
  --radius-base: 0.25rem; /* 4px */
  --radius-md: 0.375rem; /* 6px */
  --radius-lg: 0.5rem; /* 8px */
  --radius-xl: 1rem; /* 16px */
  --radius-2xl: 1.5rem; /* 24px */
  --radius-3xl: 2rem; /* 32px */
  --radius-full: 9999px;
}
```

### Component Radius
```css
:root {
  /* Component-specific radius */
  --radius-button: var(--radius-lg);
  --radius-card: var(--radius-2xl);
  --radius-container: var(--radius-3xl);
  --radius-avatar: var(--radius-full);
}
```

## Shadow System

### Box Shadows
```css
:root {
  /* Box Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}
```

### Colored Shadows
```css
:root {
  /* Colored Shadows */
  --shadow-primary: 0 4px 15px rgba(0, 64, 223, 0.15);
  --shadow-secondary: 0 4px 15px rgba(76, 103, 0, 0.15);
  --shadow-tertiary: 0 4px 15px rgba(145, 58, 0, 0.15);
  --shadow-error: 0 4px 15px rgba(186, 26, 26, 0.15);
}
```

## Animation System

### Duration
```css
:root {
  /* Animation Durations */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 750ms;
  --duration-slowest: 1000ms;
}
```

### Easing
```css
:root {
  /* Animation Easing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-back-in: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  --ease-back-out: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-back-in-out: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-circ-in: cubic-bezier(0.6, 0.04, 0.98, 0.335);
  --ease-circ-out: cubic-bezier(0.075, 0.82, 0.165, 1);
  --ease-circ-in-out: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  --ease-expo-in: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-expo-out: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-expo-in-out: cubic-bezier(1, 0, 0, 1);
}
```

## Breakpoint System

### Responsive Breakpoints
```css
:root {
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Container Queries
```css
:root {
  /* Container Sizes */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

## Z-Index System

### Z-Index Scale
```css
:root {
  /* Z-Index Scale */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
  --z-index-toast: 1080;
}
```

## Special Tokens

### Hero Section
```css
:root {
  /* Hero Section Specific */
  --hero-dots: #0040df;
  --hero-gradient-1: rgba(0, 64, 223, 0.3);
  --hero-gradient-2: rgba(193, 255, 0, 0.2);
  --hero-gradient-3: rgba(45, 91, 255, 0.2);
}

.dark {
  --hero-dots: #ffffff;
}
```

### Brand Colors
```css
:root {
  /* Brand Accent Colors */
  --brand-accent: #C1FF00;
  --brand-accent-container: #4c6700;
  --brand-accent-on: #000000;
  --brand-gradient-start: #0040df;
  --brand-gradient-end: #2D5BFF;
}
```

## Usage Guidelines

### Color Usage
- **Primary**: Main actions, links, important elements
- **Secondary**: Secondary actions, accents
- **Tertiary**: Highlight elements, special features
- **Surface**: Backgrounds, cards, containers
- **Error**: Error states, destructive actions

### Typography Usage
- **Headline**: H1-H3 headings, important titles
- **Body**: Paragraph text, content
- **Label**: Form labels, small text
- **Mono**: Code, technical content

### Spacing Usage
- **Component**: Internal component spacing
- **Section**: Section margins and padding
- **Layout**: Grid and flexbox gaps

---

**Last Updated**: April 2026  
**Review Frequency**: Quarterly  
**Token Version**: 1.0.0
