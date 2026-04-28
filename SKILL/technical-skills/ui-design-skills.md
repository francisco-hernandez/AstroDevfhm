# UI Design Skills

## Overview

UI (User Interface) Design focuses on creating visually appealing and functional interfaces that users can interact with effectively. This skill combines visual design principles, technical knowledge, and user-centered thinking to create intuitive digital experiences.

## Core Fundamentals

### Visual Design Principles
```css
/* Color Theory in UI */
:root {
  /* Primary Colors - Brand Identity */
  --ui-primary: #0040df;
  --ui-primary-variant: #2d5bff;
  --ui-primary-container: #dde1ff;
  
  /* Secondary Colors - Supporting Elements */
  --ui-secondary: #4c6700;
  --ui-secondary-variant: #b8f300;
  --ui-secondary-container: #baf600;
  
  /* Surface Colors - Backgrounds and Cards */
  --ui-surface: #f9f9f9;
  --ui-surface-variant: #e2e2e2;
  --ui-surface-container: #eeeeee;
  
  /* Semantic Colors - Status and Feedback */
  --ui-success: #00c853;
  --ui-warning: #ff9800;
  --ui-error: #d32f2f;
  --ui-info: #2196f3;
}
```

### Typography Fundamentals
```css
/* Typography Scale for UI */
:root {
  /* Font Families */
  --ui-font-display: "Epilogue", sans-serif;
  --ui-font-body: "Manrope", sans-serif;
  --ui-font-mono: "JetBrains Mono", monospace;
  
  /* Type Scale - Modular Scale */
  --ui-text-xs: 0.75rem;    /* 12px */
  --ui-text-sm: 0.875rem;   /* 14px */
  --ui-text-base: 1rem;     /* 16px */
  --ui-text-lg: 1.125rem;   /* 18px */
  --ui-text-xl: 1.25rem;    /* 20px */
  --ui-text-2xl: 1.5rem;   /* 24px */
  --ui-text-3xl: 1.875rem; /* 30px */
  --ui-text-4xl: 2.25rem;  /* 36px */
  
  /* Line Heights */
  --ui-leading-tight: 1.25;
  --ui-leading-normal: 1.5;
  --ui-leading-relaxed: 1.75;
  
  /* Letter Spacing */
  --ui-tracking-tight: -0.025em;
  --ui-tracking-normal: 0;
  --ui-tracking-wide: 0.025em;
}
```

### Layout and Spacing
```css
/* Spacing System - 8pt Grid */
:root {
  --ui-space-1: 0.25rem;  /* 4px */
  --ui-space-2: 0.5rem;   /* 8px */
  --ui-space-3: 0.75rem;  /* 12px */
  --ui-space-4: 1rem;     /* 16px */
  --ui-space-6: 1.5rem;   /* 24px */
  --ui-space-8: 2rem;     /* 32px */
  --ui-space-12: 3rem;    /* 48px */
  --ui-space-16: 4rem;    /* 64px */
  --ui-space-24: 6rem;    /* 96px */
}

/* Container System */
.ui-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--ui-space-4);
}

.ui-section {
  padding: var(--ui-space-16) 0;
}
```

## Design Tools & Software

### Figma Mastery
```typescript
// Figma Component Structure
interface FigmaComponent {
  name: string;
  type: 'component' | 'variant' | 'instance';
  properties: {
    width: number;
    height: number;
    fills: Color[];
    strokes: Color[];
    effects: Effect[];
  };
  constraints: {
    horizontal: 'LEFT' | 'RIGHT' | 'CENTER' | 'SCALE' | 'STRETCH';
    vertical: 'TOP' | 'BOTTOM' | 'CENTER' | 'SCALE' | 'STRETCH';
  };
}

// Auto Layout Properties
interface AutoLayout {
  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
  itemSpacing: number;
  padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  primaryAxisAlignItems: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';
  counterAxisAlignItems: 'MIN' | 'CENTER' | 'MAX';
}
```

### Component Design Patterns
```typescript
// Button Component Variants
interface ButtonVariants {
  primary: {
    background: var(--ui-primary);
    color: var(--ui-on-primary);
    border: 'none';
    padding: 'var(--ui-space-3) var(--ui-space-6)';
    borderRadius: 'var(--ui-radius-lg)';
  };
  
  secondary: {
    background: 'transparent';
    color: var(--ui-primary);
    border: '2px solid var(--ui-primary)';
    padding: 'var(--ui-space-3) var(--ui-space-6)';
    borderRadius: 'var(--ui-radius-lg)';
  };
  
  ghost: {
    background: 'transparent';
    color: var(--ui-on-surface);
    border: '2px solid var(--ui-outline)';
    padding: 'var(--ui-space-3) var(--ui-space-6)';
    borderRadius: 'var(--ui-radius-lg)';
  };
}
```

## Heuristic Principles

### Visual Hierarchy
```css
/* Hierarchy through Typography */
.ui-heading-1 {
  font-size: var(--ui-text-4xl);
  font-weight: 800;
  line-height: var(--ui-leading-tight);
  letter-spacing: var(--ui-tracking-tight);
  color: var(--ui-on-surface);
}

.ui-heading-2 {
  font-size: var(--ui-text-3xl);
  font-weight: 700;
  line-height: var(--ui-leading-tight);
  color: var(--ui-on-surface);
}

.ui-heading-3 {
  font-size: var(--ui-text-2xl);
  font-weight: 600;
  line-height: var(--ui-leading-normal);
  color: var(--ui-on-surface-variant);
}

.ui-body-large {
  font-size: var(--ui-text-lg);
  font-weight: 400;
  line-height: var(--ui-leading-relaxed);
  color: var(--ui-on-surface);
}

.ui-body-small {
  font-size: var(--ui-text-sm);
  font-weight: 400;
  line-height: var(--ui-leading-normal);
  color: var(--ui-on-surface-variant);
}
```

### Color and Contrast
```css
/* Contrast Ratios for Accessibility */
.ui-text-primary {
  color: var(--ui-on-surface);
  /* Contrast ratio: 7:1 or higher */
}

.ui-text-secondary {
  color: var(--ui-on-surface-variant);
  /* Contrast ratio: 4.5:1 or higher */
}

.ui-text-tertiary {
  color: var(--ui-outline);
  /* Contrast ratio: 3:1 or higher */
}

/* Interactive States */
.ui-interactive {
  transition: all 0.2s ease;
}

.ui-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.ui-interactive:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Golden Ratio in Design
```css
/* Golden Ratio (1:1.618) */
:root {
  --ui-golden-ratio: 1.618;
  --ui-golden-ratio-inverse: 0.618;
}

/* Apply Golden Ratio to Layout */
.ui-golden-layout {
  display: grid;
  grid-template-columns: 1fr var(--ui-golden-ratio)fr;
  gap: var(--ui-space-4);
}

/* Golden Rectangle */
.ui-golden-rectangle {
  aspect-ratio: var(--ui-golden-ratio);
}

/* Typography Scale based on Golden Ratio */
.ui-golden-text {
  font-size: calc(var(--ui-text-base) * var(--ui-golden-ratio));
}
```

## Component Systems

### Atomic Design
```typescript
// Atomic Design Structure
interface AtomicDesign {
  atoms: {
    button: ButtonComponent;
    input: InputComponent;
    icon: IconComponent;
    avatar: AvatarComponent;
  };
  
  molecules: {
    searchBox: SearchBoxComponent;
    card: CardComponent;
    listItem: ListItemComponent;
    dropdown: DropdownComponent;
  };
  
  organisms: {
    header: HeaderComponent;
    navigation: NavigationComponent;
    footer: FooterComponent;
    sidebar: SidebarComponent;
  };
  
  templates: {
    articleLayout: ArticleLayoutTemplate;
    productListLayout: ProductListLayoutTemplate;
    dashboardLayout: DashboardLayoutTemplate;
  };
  
  pages: {
    homepage: HomePage;
    aboutPage: AboutPage;
    contactPage: ContactPage;
  };
}
```

### Design Tokens Implementation
```typescript
// Design Token System
interface DesignTokens {
  colors: {
    primary: ColorToken;
    secondary: ColorToken;
    neutral: ColorToken;
    semantic: SemanticColorToken;
  };
  
  typography: {
    fontFamily: FontFamilyToken;
    fontSize: FontSizeToken;
    fontWeight: FontWeightToken;
    lineHeight: LineHeightToken;
    letterSpacing: LetterSpacingToken;
  };
  
  spacing: {
    scale: SpacingToken[];
    semantic: SemanticSpacingToken;
  };
  
  borders: {
    radius: BorderRadiusToken;
    width: BorderWidthToken;
  };
  
  shadows: {
    elevation: ShadowToken[];
  };
  
  motion: {
    duration: DurationToken;
    easing: EasingToken;
  };
}
```

## Responsive Design

### Breakpoint System
```css
/* Responsive Breakpoints */
:root {
  --ui-breakpoint-xs: 0px;
  --ui-breakpoint-sm: 576px;
  --ui-breakpoint-md: 768px;
  --ui-breakpoint-lg: 992px;
  --ui-breakpoint-xl: 1200px;
  --ui-breakpoint-2xl: 1400px;
}

/* Mobile-First Approach */
.ui-container {
  width: 100%;
  padding: 0 var(--ui-space-4);
}

@media (min-width: 768px) {
  .ui-container {
    max-width: 720px;
    margin: 0 auto;
  }
}

@media (min-width: 992px) {
  .ui-container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .ui-container {
    max-width: 1140px;
  }
}
```

### Adaptive Layouts
```css
/* Grid System */
.ui-grid {
  display: grid;
  gap: var(--ui-space-4);
  grid-template-columns: repeat(12, 1fr);
}

/* Responsive Grid Classes */
.ui-col-12 { grid-column: span 12; }
.ui-col-6 { grid-column: span 6; }
.ui-col-4 { grid-column: span 4; }
.ui-col-3 { grid-column: span 3; }

@media (max-width: 768px) {
  .ui-col-6,
  .ui-col-4,
  .ui-col-3 {
    grid-column: span 12;
  }
}
```

## Iconography

### Icon System
```typescript
// Icon Design Principles
interface IconSystem {
  style: {
    family: 'Material Symbols';
    weight: 400;
    opticalSize: 24;
    size: 24;
  };
  
  categories: {
    navigation: string[];
    actions: string[];
    content: string[];
    social: string[];
    status: string[];
  };
  
  sizes: {
    xs: 16;
    sm: 20;
    md: 24;
    lg: 32;
    xl: 40;
  };
}

// Icon Component
interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}
```

### Icon Usage Guidelines
```css
/* Icon Sizing */
.ui-icon-xs { width: 16px; height: 16px; }
.ui-icon-sm { width: 20px; height: 20px; }
.ui-icon-md { width: 24px; height: 24px; }
.ui-icon-lg { width: 32px; height: 32px; }
.ui-icon-xl { width: 40px; height: 40px; }

/* Icon Colors */
.ui-icon-primary { color: var(--ui-primary); }
.ui-icon-secondary { color: var(--ui-secondary); }
.ui-icon-on-primary { color: var(--ui-on-primary); }
.ui-icon-on-surface { color: var(--ui-on-surface); }

/* Icon States */
.ui-icon-interactive {
  transition: all 0.2s ease;
  cursor: pointer;
}

.ui-icon-interactive:hover {
  transform: scale(1.1);
  color: var(--ui-primary);
}
```

## Visual Effects

### Shadows and Elevation
```css
/* Elevation System */
:root {
  --ui-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ui-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ui-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --ui-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --ui-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.ui-elevation-1 { box-shadow: var(--ui-shadow-xs); }
.ui-elevation-2 { box-shadow: var(--ui-shadow-sm); }
.ui-elevation-3 { box-shadow: var(--ui-shadow-md); }
.ui-elevation-4 { box-shadow: var(--ui-shadow-lg); }
.ui-elevation-5 { box-shadow: var(--ui-shadow-xl); }
```

### Gradients and Overlays
```css
/* Gradient System */
.ui-gradient-primary {
  background: linear-gradient(135deg, var(--ui-primary) 0%, var(--ui-primary-variant) 100%);
}

.ui-gradient-surface {
  background: linear-gradient(180deg, var(--ui-surface) 0%, var(--ui-surface-variant) 100%);
}

/* Overlay Effects */
.ui-overlay-dark {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.ui-overlay-light {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}
```

## State Management

### Interactive States
```css
/* Button States */
.ui-button {
  background: var(--ui-primary);
  color: var(--ui-on-primary);
  border: none;
  padding: var(--ui-space-3) var(--ui-space-6);
  border-radius: var(--ui-radius-lg);
  font-weight: 600;
  transition: all 0.2s ease;
}

.ui-button:hover {
  background: var(--ui-primary-variant);
  transform: translateY(-2px);
  box-shadow: var(--ui-shadow-md);
}

.ui-button:active {
  transform: translateY(0);
  box-shadow: var(--ui-shadow-sm);
}

.ui-button:disabled {
  background: var(--ui-surface-variant);
  color: var(--ui-on-surface-variant);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

### Form States
```css
/* Input Field States */
.ui-input {
  background: var(--ui-surface);
  border: 2px solid var(--ui-outline);
  color: var(--ui-on-surface);
  padding: var(--ui-space-3);
  border-radius: var(--ui-radius-md);
  transition: all 0.2s ease;
}

.ui-input:focus {
  outline: none;
  border-color: var(--ui-primary);
  box-shadow: 0 0 0 3px rgba(0, 64, 223, 0.1);
}

.ui-input:invalid {
  border-color: var(--ui-error);
}

.ui-input:disabled {
  background: var(--ui-surface-variant);
  color: var(--ui-on-surface-variant);
  cursor: not-allowed;
}
```

## Accessibility in UI Design

### Color Accessibility
```css
/* High Contrast Mode */
@media (prefers-contrast: high) {
  :root {
    --ui-primary: #0000ff;
    --ui-on-primary: #ffffff;
    --ui-surface: #ffffff;
    --ui-on-surface: #000000;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
```

### Focus Management
```css
/* Focus Indicators */
.ui-focusable:focus {
  outline: 2px solid var(--ui-primary);
  outline-offset: 2px;
}

.ui-focusable:focus-visible {
  outline: 2px solid var(--ui-primary);
  outline-offset: 2px;
}

/* Skip Links */
.ui-skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--ui-primary);
  color: var(--ui-on-primary);
  padding: 8px;
  text-decoration: none;
  border-radius: var(--ui-radius-sm);
  z-index: 1000;
}

.ui-skip-link:focus {
  top: 6px;
}
```

## Performance Optimization

### Asset Optimization
```typescript
// Image Optimization for UI
interface ImageOptimization {
  formats: ['webp', 'avif', 'jpg', 'png'];
  sizes: [16, 24, 32, 48, 64, 96, 128, 256, 512];
  compression: {
    quality: 85;
    progressive: true;
  };
  responsive: {
    srcset: boolean;
    sizes: boolean;
    loading: 'lazy' | 'eager';
  };
}

// Icon Optimization
interface IconOptimization {
  format: 'svg' | 'png';
  sprites: boolean;
  optimization: {
    removeMetadata: boolean;
    convertColors: boolean;
    minify: boolean;
  };
}
```

### CSS Optimization
```css
/* CSS Custom Properties for Performance */
:root {
  /* Use CSS variables for theming */
  --ui-transition-fast: 150ms;
  --ui-transition-normal: 300ms;
  --ui-transition-slow: 500ms;
  
  --ui-easing-in: cubic-bezier(0.4, 0, 1, 1);
  --ui-easing-out: cubic-bezier(0, 0, 0.2, 1);
  --ui-easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efficient Transitions */
.ui-transition {
  transition: all var(--ui-transition-normal) var(--ui-easing-out);
}
```

## Best Practices

### Design System Maintenance
```typescript
// Design System Versioning
interface DesignSystemVersion {
  version: string;
  components: ComponentRegistry;
  tokens: TokenRegistry;
  documentation: DocumentationRegistry;
  changelog: ChangelogEntry[];
}

// Component Versioning
interface ComponentVersion {
  major: number; // Breaking changes
  minor: number; // New features
  patch: number; // Bug fixes
}
```

### Code Standards
```typescript
// Component Naming Convention
interface ComponentNaming {
  convention: 'PascalCase';
  examples: {
    button: 'Button';
    inputField: 'InputField';
    navigationMenu: 'NavigationMenu';
    userAvatar: 'UserAvatar';
  };
}

// File Organization
interface FileOrganization {
  structure: {
    components: 'src/components/ui/';
    tokens: 'src/tokens/';
    utilities: 'src/utils/ui/';
    styles: 'src/styles/ui/';
  };
}
```

### Testing UI Components
```typescript
// Visual Testing
interface VisualTesting {
  tools: ['Chromatic', 'Storybook', 'Percy'];
  coverage: '100% component coverage';
  regression: 'Automated visual regression testing';
  accessibility: 'Automated accessibility testing';
}

// Component Testing
interface ComponentTesting {
  unit: 'Jest + Testing Library';
  integration: 'Cypress';
  e2e: 'Playwright';
  visual: 'Chromatic';
}
```

---

**Required Skills Level**: Intermediate to Advanced  
**Prerequisites**: Visual design fundamentals, Figma proficiency  
**Learning Resources**: [Figma Documentation](https://www.figma.com)  
**Community**: [Design Systems Community](https://designsystems.com)
