# GSAP (GreenSock Animation Platform) Skills

## Core Concepts

### Tween Animation
```javascript
// Basic tween
gsap.to(".element", {
  x: 100,
  duration: 1,
  ease: "power2.out"
});

// From animation
gsap.from(".hero-title", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.2
});

// FromTo animation
gsap.fromTo(".card", 
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.5 }
);
```

### Timeline Animation
```javascript
// Create timeline
const tl = gsap.timeline();

// Add animations to timeline
tl.to(".badge", { opacity: 0, y: -20, duration: 1 })
  .to(".title", { opacity: 0, x: -50, duration: 1.2, delay: 0.2 })
  .to(".description", { opacity: 0, y: 20, duration: 1, delay: 0.5 })
  .to(".buttons", { opacity: 0, y: 30, duration: 0.8, delay: 0.8 });
```

## ScrollTrigger Integration

### Basic ScrollTrigger
```javascript
// Scroll-based animation
gsap.to(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top center",
    end: "bottom center",
    scrub: 1
  },
  x: 200,
  opacity: 1
});
```

### Advanced ScrollTrigger
```javascript
// Parallax effect
gsap.to(".hero-image", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: -200,
  ease: "none"
});

// Pin element
gsap.to(".sticky-element", {
  scrollTrigger: {
    trigger: ".sticky-element",
    pin: true,
    start: "top top",
    end: "+=500"
  }
});
```

### ScrollTrigger Timeline
```javascript
// Complex scroll animations
const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1
  }
});

scrollTl
  .to(".service-card-1", { y: -50, opacity: 1 })
  .to(".service-card-2", { y: -50, opacity: 1 }, "-=0.2")
  .to(".service-card-3", { y: -50, opacity: 1 }, "-=0.2");
```

## Animation Techniques

### Stagger Animations
```javascript
// Animate multiple elements with delay
gsap.to(".grid-item", {
  scale: 1,
  opacity: 1,
  duration: 0.5,
  stagger: 0.1, // 0.1s delay between each
  ease: "back.out(1.7)"
});

// Complex stagger
gsap.from(".tech-icon", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: {
    each: 0.1,
    from: "random",
    ease: "power2.out"
  }
});
```

### Easing Functions
```javascript
// Common easing
gsap.to(".element", {
  x: 100,
  duration: 1,
  ease: "power2.out"     // Smooth acceleration
});

// Advanced easing
gsap.to(".element", {
  scale: 1.2,
  duration: 0.5,
  ease: "back.out(1.7)"  // Overshoot effect
});

// Custom easing
gsap.to(".element", {
  rotation: 360,
  duration: 2,
  ease: "elastic.out(1, 0.3)"  // Bouncy effect
});
```

### Callbacks & Events
```javascript
// Animation callbacks
gsap.to(".element", {
  x: 100,
  duration: 1,
  onStart: () => console.log("Animation started"),
  onUpdate: () => console.log("Animation updating"),
  onComplete: () => console.log("Animation complete"),
  onReverseComplete: () => console.log("Reverse complete")
});

// Event listeners
const animation = gsap.to(".element", { x: 100, duration: 1 });
animation.eventCallback("onComplete", () => {
  console.log("Done!");
});
```

## Performance Optimization

### GPU Acceleration
```javascript
// Use transforms for better performance
gsap.to(".element", {
  x: 100,           // Better than left
  y: 50,            // Better than top
  scale: 1.2,       // Better than width/height
  rotation: 45,     // Better than transform
  opacity: 0.5      // Also GPU accelerated
});
```

### WillChange Property
```javascript
// Optimize for complex animations
gsap.set(".element", { willChange: "transform" });
gsap.to(".element", { x: 200, duration: 2 });
gsap.set(".element", { willChange: "auto" }); // Reset after animation
```

### Reduce Motion
```javascript
// Respect user preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

gsap.to(".element", {
  x: prefersReducedMotion ? 0 : 100,
  duration: prefersReducedMotion ? 0 : 1
});
```

## Interactive Animations

### Mouse Parallax
```javascript
// Mouse-based parallax
document.addEventListener("mousemove", (e) => {
  const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
  const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
  
  gsap.to(".parallax-element", {
    x: mouseX,
    y: mouseY,
    duration: 1,
    ease: "power2.out"
  });
});
```

### Hover Effects
```javascript
// Smooth hover animations
const card = document.querySelector(".card");
const hoverAnimation = gsap.to(card, {
  scale: 1.05,
  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  duration: 0.3,
  paused: true
});

card.addEventListener("mouseenter", () => hoverAnimation.play());
card.addEventListener("mouseleave", () => hoverAnimation.reverse());
```

### Loading Animations
```javascript
// Page load animations
window.addEventListener("load", () => {
  const tl = gsap.timeline();
  
  tl.set("body", { overflow: "hidden" })
    .from(".loader", { scale: 0, duration: 0.5 })
    .to(".loader", { scale: 0, duration: 0.5, delay: 1 })
    .set("body", { overflow: "auto" })
    .from(".hero-content", { y: 50, opacity: 0, stagger: 0.2 });
});
```

## Advanced Patterns

### Text Animations
```javascript
// Split text animation
const text = new SplitType(".headline", { types: "words, chars" });

gsap.from(text.chars, {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.02,
  ease: "power2.out"
});
```

### SVG Animations
```javascript
// SVG path animation
gsap.to(".svg-path", {
  strokeDashoffset: 0,
  duration: 2,
  ease: "power2.inOut"
});

// SVG morphing
gsap.to("#shape1", {
  morphSVG: "#shape2",
  duration: 1,
  ease: "power1.inOut"
});
```

### 3D Transforms
```javascript
// 3D card flip
gsap.to(".card-3d", {
  rotationY: 180,
  duration: 1,
  ease: "power2.inOut",
  transformPerspective: 1000
});
```

## Integration with Astro

### Component Animations
```astro
---
// Component with GSAP animations
---

<div class="animated-element" ref="elementRef">
  Content
</div>

<script>
  import { gsap } from 'gsap';
  
  export default {
    mounted() {
      gsap.from(this.elementRef, {
        opacity: 0,
        y: 50,
        duration: 1
      });
    }
  }
</script>
```

### ScrollTrigger in Astro
```astro
---
// ScrollTrigger integration
---

<section class="scroll-section">
  <div class="scroll-content">Content</div>
</section>

<script is:inline>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to(".scroll-content", {
    scrollTrigger: {
      trigger: ".scroll-section",
      start: "top 80%"
    },
    opacity: 1,
    y: 0
  });
</script>
```

## Debugging & Tools

### GSAP DevTools
```javascript
// Enable GSAP devtools
gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

// Debug animations
const animation = gsap.to(".element", { x: 100, duration: 1 });
animation.progress(0.5); // Jump to halfway point
```

### Performance Monitoring
```javascript
// Monitor animation performance
const startTime = performance.now();
gsap.to(".element", { x: 100, duration: 1, onComplete: () => {
  const endTime = performance.now();
  console.log(`Animation took ${endTime - startTime}ms`);
}});
```

## Best Practices

### Code Organization
```javascript
// Separate animation logic
class AnimationController {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupScrollTrigger();
    this.setupHoverEffects();
  }
  
  setupScrollTrigger() {
    // Scroll animations
  }
  
  setupHoverEffects() {
    // Hover animations
  }
}

// Initialize
const animations = new AnimationController();
```

### Responsive Animations
```javascript
// Media query-based animations
const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // Desktop animations
  gsap.to(".element", { x: 100, duration: 1 });
});

mm.add("(max-width: 767px)", () => {
  // Mobile animations
  gsap.to(".element", { y: 100, duration: 1 });
});
```

### Cleanup & Memory Management
```javascript
// Proper cleanup
class PageAnimations {
  constructor() {
    this.animations = [];
    this.init();
  }
  
  init() {
    this.animations.push(
      gsap.to(".element1", { x: 100, duration: 1 }),
      gsap.to(".element2", { y: 50, duration: 1 })
    );
  }
  
  destroy() {
    this.animations.forEach(animation => animation.kill());
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
```

## Common Issues & Solutions

### Performance Issues
- **Problem**: Janky animations
- **Solution**: Use transforms, avoid layout thrashing
- **Code**: `willChange: "transform"` for complex animations

### ScrollTrigger Issues
- **Problem**: Animations not triggering
- **Solution**: Check element visibility, refresh ScrollTrigger
- **Code**: `ScrollTrigger.refresh()` after DOM changes

### Timeline Issues
- **Problem**: Overlapping animations
- **Solution**: Use proper positioning and labels
- **Code**: `tl.addLabel("point", "+=1")` for precise timing

---

**Required Skills Level**: Intermediate to Advanced  
**Prerequisites**: JavaScript, DOM manipulation, CSS animations  
**Learning Resources**: [GSAP Docs](https://greensock.com/docs)  
**Community**: [GSAP Forums](https://greensock.com/forums)
