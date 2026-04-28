# Content Management Workflow

## Overview

This guide covers the complete workflow for creating, managing, and publishing content in the DEVFHM Astro site, including blog posts, articles, and multilingual content management.

## Content Creation Process

### 1. Planning Phase

#### Content Strategy
```markdown
## Content Categories
- AI & Design / IA y Diseño
- Brutalist Architecture / Arquitectura Brutalista
- Web 3 Challenges / Desafíos Web 3
- Micro-interactions / Micro-interacciones
- Color Psychology / Psicología del Color

## Content Types
- Blog Posts (Technical articles)
- Case Studies (Project showcases)
- Tutorials (How-to guides)
- Opinion Pieces (Industry insights)
```

#### Content Calendar
```typescript
// Content planning structure
interface ContentPlan {
  title: string;
  category: ContentCategory;
  targetAudience: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime: string;
  publishDate: Date;
  author: string;
  priority: 'high' | 'medium' | 'low';
  status: 'planned' | 'in-progress' | 'review' | 'published';
}
```

### 2. Writing Phase

#### Article Template
```markdown
---
title: "Article Title in English"
description: "Brief description of the article content"
category: "Category Name"
pubDate: 2024-01-15
image: "/images/article-image.jpg"
author: "Author Name"
authorRole: "Author Role"
readTime: "5 MIN READ"
featured: false
lang: "en"
translationSlug: "spanish-article-slug"
tags: ["tag1", "tag2", "tag3"]
seoTitle: "SEO-optimized title"
seoDescription: "SEO-optimized description"
---

# Article Title

## Introduction
Hook the reader with a compelling introduction...

## Main Content
### Section 1
Content for section 1...

### Section 2
Content for section 2...

## Conclusion
Summarize key points and provide call-to-action...

---

## Related Articles
- [Related Article 1](../related-article-1/)
- [Related Article 2](../related-article-2/)
```

#### Writing Guidelines
```markdown
## Style Guide
- Use clear, concise language
- Break up long paragraphs
- Use headings and subheadings
- Include code examples when relevant
- Add images with alt text
- Include internal links

## Tone and Voice
- Professional but approachable
- Technical but accessible
- Action-oriented and helpful
- Consistent across all content

## Length Guidelines
- Blog Posts: 800-1500 words
- Tutorials: 1200-2000 words
- Case Studies: 1000-1800 words
- Opinion Pieces: 600-1000 words
```

### 3. Translation Phase

#### Translation Process
```typescript
// Translation workflow
interface TranslationWorkflow {
  originalContent: string;
  targetLanguage: 'es' | 'en';
  translator: string;
  status: 'pending' | 'in-progress' | 'review' | 'completed';
  reviewNotes?: string;
}

// Translation checklist
const translationChecklist = {
  title: 'Translated accurately',
  description: 'Localized appropriately',
  metadata: 'Consistent with original',
  images: 'Alt text translated',
  links: 'Updated for target language',
  formatting: 'Preserved correctly',
  seo: 'Optimized for target language'
};
```

#### Translation Best Practices
```markdown
## Translation Guidelines
1. Maintain original meaning and tone
2. Adapt cultural references appropriately
3. Localize examples and case studies
4. Preserve technical accuracy
5. Keep similar reading level
6. Maintain keyword density for SEO

## Common Issues to Avoid
- Literal translations that don't make sense
- Cultural references that don't translate
- Technical terms that lose meaning
- SEO keywords that don't apply in target language
- Formatting that breaks in translation
```

## File Organization

### Directory Structure
```
src/content/blog/
  2024/
    01-january/
      article-name-en.md
      article-name-es.md
    02-february/
      another-article-en.md
      another-article-es.md
  images/
    article-name/
      hero-image.jpg
      inline-image-1.png
      inline-image-2.svg
```

### Naming Conventions
```bash
# Article files
article-title-en.md    # English version
article-title-es.md    # Spanish version

# Image files
article-hero.jpg       # Hero image
article-inline-1.png   # Inline image
article-diagram.svg    # Diagram/SVG

# Directory names
kebab-case             # Always use kebab-case
lowercase              # Always use lowercase
no-spaces              # Use hyphens instead of spaces
```

## Content Validation

### Schema Validation
```typescript
// Content validation
import { z } from 'astro:content';

const blogSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(50).max(200),
  category: z.enum(['AI & Design', 'Brutalist Design', 'Web 3', 'Micro-interactions', 'Color Psychology']),
  pubDate: z.coerce.date(),
  image: z.string().url(),
  author: z.string().min(1),
  authorRole: z.string().optional(),
  readTime: z.string().regex(/^\d+ MIN READ$/),
  featured: z.boolean().default(false),
  lang: z.enum(['es', 'en']),
  translationSlug: z.string().optional(),
  tags: z.array(z.string()).optional()
});

// Validation function
function validateContent(content: unknown) {
  return blogSchema.parse(content);
}
```

### Quality Checklist
```typescript
// Content quality checklist
const qualityChecklist = {
  content: {
    title: 'Compelling and descriptive',
    introduction: 'Engaging and informative',
    structure: 'Logical flow with clear sections',
    conclusion: 'Strong summary and CTA',
    length: 'Appropriate for topic'
  },
  technical: {
    markdown: 'Valid markdown syntax',
    images: 'Optimized and accessible',
    links: 'Working and relevant',
    metadata: 'Complete and accurate',
    seo: 'Optimized title and description'
  },
  translation: {
    accuracy: 'Faithful to original',
    localization: 'Culturally appropriate',
    consistency: 'Terminology consistent',
    completeness: 'All sections translated'
  }
};
```

## Publishing Process

### Pre-Publishing Checklist
```bash
# Content Review Checklist
[ ] Content written and edited
[ ] Translation completed and reviewed
[ ] Images optimized and accessible
[ ] Metadata complete and accurate
[ ] SEO optimized
[ ] Internal links added
[ ] Categories and tags assigned
[ ] Featured status set if applicable
[ ] Publication date set
[ ] Author information complete
```

### Publishing Steps
```bash
# 1. Final Review
npm run build
npm run preview

# 2. Test in different browsers
# Chrome, Firefox, Safari, Edge

# 3. Test mobile responsiveness
# Mobile, tablet, desktop views

# 4. Test language switching
# Spanish to English and vice versa

# 5. Test all links and images
# Internal links, external links, images

# 6. SEO validation
# Meta tags, structured data, sitemap

# 7. Performance check
# Page load speed, Core Web Vitals

# 8. Deploy to production
npm run build
npm run deploy
```

## Content Management

### Content Updates
```typescript
// Content update workflow
interface ContentUpdate {
  articleId: string;
  updateType: 'minor' | 'major' | 'translation';
  changes: string[];
  author: string;
  date: Date;
  reviewRequired: boolean;
}

// Version control for content
function updateContent(articleId: string, updates: ContentUpdate) {
  // Create backup
  const backup = createContentBackup(articleId);
  
  // Apply updates
  applyUpdates(articleId, updates);
  
  // Validate changes
  validateContentUpdates(articleId);
  
  // Update last modified
  updateLastModified(articleId, updates.date);
}
```

### Content Archiving
```typescript
// Content archival process
interface ArchiveContent {
  articleId: string;
  archiveReason: 'outdated' | 'replaced' | 'deprecated';
  replacementId?: string;
  archiveDate: Date;
  notes: string;
}

function archiveContent(articleId: string, reason: string) {
  // Move to archive
  moveToArchive(articleId);
  
  // Update internal links
  updateInternalLinks(articleId);
  
  // Create redirect if needed
  createRedirect(articleId);
  
  // Update sitemap
  updateSitemap();
}
```

## SEO Optimization

### On-Page SEO
```markdown
## SEO Checklist for Each Article
- Title tag (50-60 characters)
- Meta description (150-160 characters)
- H1 tag (matches title)
- Proper heading hierarchy (H1, H2, H3)
- Internal linking (2-3 relevant links)
- External linking (1-2 authoritative sources)
- Image alt text (descriptive)
- URL structure (short and descriptive)
- Schema markup (Article schema)
```

### Technical SEO
```typescript
// SEO optimization
interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: 'article';
  };
  structuredData: {
    '@context': 'https://schema.org';
    '@type': 'Article';
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified: string;
  };
}
```

## Analytics & Performance

### Content Analytics
```typescript
// Content performance tracking
interface ContentAnalytics {
  articleId: string;
  views: number;
  readTime: number;
  bounceRate: number;
  shares: number;
  comments: number;
  conversionRate: number;
  language: 'es' | 'en';
  publishDate: Date;
}

// Analytics functions
function trackContentView(articleId: string) {
  // Track page view
  analytics.track('page_view', {
    article_id: articleId,
    timestamp: new Date(),
    user_agent: navigator.userAgent
  });
}

function trackEngagement(articleId: string, engagementType: string) {
  // Track user engagement
  analytics.track('engagement', {
    article_id: articleId,
    type: engagementType,
    timestamp: new Date()
  });
}
```

### Performance Monitoring
```typescript
// Content performance metrics
interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

// Performance optimization
function optimizeContentPerformance() {
  // Lazy load images
  lazyLoadImages();
  
  // Optimize fonts
  optimizeFontLoading();
  
  // Minimize CSS
  optimizeCSS();
  
  // Enable compression
  enableCompression();
}
```

## Content Tools

### Content Management Scripts
```bash
#!/bin/bash
# content-tools.sh

# Create new article
create-article() {
  local title="$1"
  local category="$2"
  local author="$3"
  
  # Create article files
  touch "src/content/blog/${title}-en.md"
  touch "src/content/blog/${title}-es.md"
  
  # Add template
  echo "Adding article template..."
}

# Validate content
validate-content() {
  echo "Validating content..."
  npm run build
  
  if [ $? -eq 0 ]; then
    echo "Content validation passed"
  else
    echo "Content validation failed"
    exit 1
  fi
}

# Generate sitemap
generate-sitemap() {
  echo "Generating sitemap..."
  npm run build:sitemap
}
```

### Content Automation
```typescript
// Automated content tasks
class ContentAutomation {
  // Auto-generate excerpts
  static generateExcerpt(content: string, maxLength: number = 150): string {
    return content.substring(0, maxLength) + '...';
  }
  
  // Auto-generate read time
  static calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} MIN READ`;
  }
  
  // Auto-generate slug
  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
}
```

## Troubleshooting

### Common Issues
```typescript
// Common content issues and solutions
const contentIssues = {
  'build-fails': {
    cause: 'Invalid markdown or missing metadata',
    solution: 'Validate markdown syntax and check frontmatter'
  },
  'images-not-loading': {
    cause: 'Incorrect image paths or optimization issues',
    solution: 'Verify image paths and check optimization settings'
  },
  'translation-not-working': {
    cause: 'Missing translation keys or incorrect language codes',
    solution: 'Check translation object and language detection'
  },
  'seo-not-indexed': {
    cause: 'Missing meta tags or robots.txt issues',
    solution: 'Add proper meta tags and check robots.txt'
  }
};
```

### Debug Tools
```typescript
// Content debugging tools
class ContentDebugger {
  // Validate markdown
  static validateMarkdown(content: string): boolean {
    try {
      // Parse markdown
      const parsed = marked.parse(content);
      return true;
    } catch (error) {
      console.error('Markdown validation failed:', error);
      return false;
    }
  }
  
  // Check image optimization
  static checkImageOptimization(imagePath: string): boolean {
    // Check image size and format
    const stats = fs.statSync(imagePath);
    return stats.size < 500000; // Less than 500KB
  }
  
  // Validate SEO
  static validateSEO(metadata: any): boolean {
    return (
      metadata.title && 
      metadata.description && 
      metadata.title.length <= 60 &&
      metadata.description.length <= 160
    );
  }
}
```

---

**Last Updated**: April 2026  
**Review Frequency**: Monthly  
**Content Version**: 2.0.0
