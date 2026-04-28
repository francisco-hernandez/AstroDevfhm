# SKILL - Development Resources

## Overview

The SKILL directory contains comprehensive documentation and resources for developing and maintaining the DEVFHM Astro site. This is your complete guide to understanding, contributing to, and extending the project.

## Directory Structure

```
SKILL/
README.md                           # This file - Main index
technical-skills/                   # Core technology documentation
  astro-skills.md                   # Astro framework expertise
  tailwind-skills.md                # Tailwind CSS mastery
  gsap-skills.md                    # GSAP animation library
development-guides/                  # Development workflows
  project-setup.md                  # Project initialization
  coding-standards.md               # Code quality standards
design-system/                      # Design resources
  design-tokens.md                  # Design tokens & variables
  component-library.md               # Reusable components
content-management/                 # Content workflows
  internationalization.md            # i18n implementation
  content-workflow.md               # Content creation process
performance/                        # Performance optimization
deployment/                         # Deployment strategies
testing/                           # Testing methodologies
```

## Quick Start

### For New Developers
1. **Read Project Setup** - `development-guides/project-setup.md`
2. **Learn Tech Stack** - `technical-skills/` directory
3. **Understand Design System** - `design-system/` directory
4. **Review Coding Standards** - `development-guides/coding-standards.md`

### For Content Creators
1. **Content Workflow** - `content-management/content-workflow.md`
2. **Internationalization** - `content-management/internationalization.md`
3. **Style Guidelines** - `design-system/design-tokens.md`

### For Designers
1. **Design Tokens** - `design-system/design-tokens.md`
2. **Component Library** - `design-system/component-library.md`
3. **Color System** - `design-system/design-tokens.md#color-system`

## Technical Skills

### Astro Framework
- **File**: `technical-skills/astro-skills.md`
- **Topics**: Islands Architecture, Content Collections, SSR
- **Level**: Intermediate to Advanced
- **Prerequisites**: HTML, CSS, JavaScript, TypeScript

### Tailwind CSS
- **File**: `technical-skills/tailwind-skills.md`
- **Topics**: Utility-first CSS, Dark Mode, Responsive Design
- **Level**: Intermediate
- **Prerequisites**: CSS fundamentals, Responsive design

### GSAP Animations
- **File**: `technical-skills/gsap-skills.md`
- **Topics**: Tween animations, ScrollTrigger, Performance
- **Level**: Intermediate to Advanced
- **Prerequisites**: JavaScript, DOM manipulation

### UI Design
- **File**: `technical-skills/ui-design-skills.md`
- **Topics**: Visual Design Principles, Figma Mastery, Component Systems, Design Tokens
- **Level**: Intermediate to Advanced
- **Prerequisites**: Visual design fundamentals, Figma proficiency

### UX Design
- **File**: `technical-skills/ux-design-skills.md`
- **Topics**: User Research, Design Thinking, Usability Testing, Information Architecture
- **Level**: Intermediate to Advanced
- **Prerequisites**: Psychology basics, research methods, design thinking

## Development Resources

### Project Setup
- **File**: `development-guides/project-setup.md`
- **Content**: Installation, configuration, workflow
- **Includes**: Environment setup, Git workflow, CI/CD

### Coding Standards
- **File**: `development-guides/coding-standards.md`
- **Content**: Best practices, conventions, quality guidelines
- **Includes**: TypeScript, Astro, CSS, JavaScript standards

## Design System

### Design Tokens
- **File**: `design-system/design-tokens.md`
- **Content**: Colors, typography, spacing, animations
- **Includes**: Dark mode tokens, responsive scales

### Component Library
- **File**: `design-system/component-library.md`
- **Content**: Reusable components, usage examples
- **Includes**: Buttons, cards, forms, navigation

## Content Management

### Internationalization
- **File**: `content-management/internationalization.md`
- **Content**: Multilingual support, translation workflow
- **Includes**: Language switching, SEO optimization

### Content Workflow
- **File**: `content-management/content-workflow.md`
- **Content**: Creation, validation, publishing process
- **Includes**: Content templates, quality checks

## Key Features

### Multilingual Support
- **Languages**: Spanish (ES), English (EN)
- **Implementation**: Client-side language switching
- **Content**: Paired articles with translation slugs

### Dark Mode
- **Implementation**: Class-based dark mode
- **Colors**: Pure black theme with semantic tokens
- **Components**: All components support dark mode

### Performance
- **Optimization**: Code splitting, lazy loading
- **Monitoring**: Core Web Vitals tracking
- **Tools**: Bundle analysis, performance audits

### Accessibility
- **Standards**: WCAG compliance
- **Features**: Keyboard navigation, screen reader support
- **Testing**: axe DevTools integration

## Development Workflow

### Daily Development
```bash
# Start development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm run test
```

### Content Creation
```bash
# Create new article
npm run create:article "Article Title"

# Validate content
npm run validate:content

# Generate sitemap
npm run generate:sitemap
```

### Deployment
```bash
# Build production
npm run build

# Preview build
npm run preview

# Deploy
npm run deploy
```

## Learning Path

### Beginner (1-2 weeks)
1. **Project Setup** - Understand the project structure
2. **Basic Astro** - Learn Astro fundamentals
3. **Tailwind Basics** - Master utility classes
4. **Content Management** - Learn Markdown workflow

### Intermediate (2-4 weeks)
1. **Advanced Astro** - Islands Architecture, Content Collections
2. **GSAP Animations** - Basic animations and interactions
3. **Design System** - Understand tokens and components
4. **Internationalization** - Multilingual content handling

### Advanced (1-2 months)
1. **Performance Optimization** - Bundle analysis, optimization
2. **Advanced Animations** - Complex GSAP implementations
3. **Testing** - Unit tests, integration tests, E2E
4. **Deployment** - CI/CD, hosting, monitoring

## Common Tasks

### Adding New Component
1. Create component in `src/components/`
2. Add to component library documentation
3. Update design tokens if needed
4. Add tests
5. Update documentation

### Creating New Article
1. Plan content in content workflow
2. Create article files (ES and EN)
3. Add images and optimize
4. Validate content
5. Publish and test

### Updating Design System
1. Update design tokens
2. Update affected components
3. Test across all breakpoints
4. Update documentation
5. Test dark mode

## Troubleshooting

### Common Issues
- **Build fails**: Check TypeScript errors, validate markdown
- **Styling issues**: Verify Tailwind configuration, check dark mode
- **Performance issues**: Check bundle size, optimize images
- **SEO issues**: Verify meta tags, check structured data

### Debug Tools
- **Browser DevTools**: For debugging CSS and JS
- **Astro DevTools**: For Astro-specific debugging
- **Lighthouse**: For performance analysis
- **axe DevTools**: For accessibility testing

## Best Practices

### Code Quality
- **TypeScript First**: Always use TypeScript for type safety
- **Component Design**: Single responsibility, reusable components
- **Performance**: Optimize for Core Web Vitals
- **Accessibility**: WCAG compliance, semantic HTML

### Content Quality
- **SEO Optimization**: Proper meta tags, structured data
- **Multilingual**: Consistent translations, cultural adaptation
- **Images**: Optimized, accessible, responsive
- **Links**: Internal linking strategy, proper anchors

### Development Process
- **Git Workflow**: Feature branches, proper commits
- **Code Reviews**: Peer review for all changes
- **Testing**: Unit tests, integration tests, E2E
- **Documentation**: Keep docs up to date

## Resources

### Official Documentation
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs)

### Community
- [Astro Discord](https://astro.build/chat)
- [Tailwind Discord](https://tailwindcss.com/discord)
- [GSAP Forums](https://greensock.com/forums)

### Tools
- [VS Code](https://code.visualstudio.com) with Astro extensions
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Contributing

### How to Contribute
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Update documentation
5. Submit pull request

### Contribution Guidelines
- Follow coding standards
- Add tests for new features
- Update documentation
- Ensure accessibility compliance
- Test across browsers

## Support

### Getting Help
- **Documentation**: Check SKILL directory first
- **Issues**: Create GitHub issue for bugs
- **Questions**: Ask in team channels
- **Code Reviews**: Request review from team members

### Contact Information
- **Maintainer**: DEVFHM Team
- **Email**: contacto@devfhm.com
- **Website**: https://devfhm.com

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Maintainer**: DEVFHM Team  

This SKILL directory is your comprehensive resource for developing with the DEVFHM Astro site. Whether you're a new developer learning the stack or an experienced contributor extending features, you'll find everything you need here.
