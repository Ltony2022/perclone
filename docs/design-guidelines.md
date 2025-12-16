# Design Guidelines & System Documentation

## Overview
This document defines the comprehensive design system, guidelines, and standards for the Education AI platform. Following modern UI/UX best practices with award-winning design principles from Dribbble, Awwwards, and industry leaders.

## Design Philosophy

### Core Principles
- **Mobile-First Responsive Design**: Design for mobile devices first, then scale up
- **Performance-Focused**: Optimize for speed and accessibility
- **Inclusive Design**: Ensure accessibility for all users
- **Modern Minimalism**: Clean, uncluttered interfaces with purposeful whitespace
- **Micro-Interactions**: Subtle animations that enhance user experience

### Design Trends 2024-2025
- Glassmorphism and frosted glass effects
- Neumorphism (subtle, soft UI elements)
- Gradient overlays and vibrant color schemes
- Asymmetrical layouts and broken grid systems
- Immersive hero sections with parallax scrolling
- Interactive 3D elements and micro-animations
- Dark mode as primary design consideration

## Color System

### Primary Palette
```css
/* Education AI Brand Colors */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--primary-light: #818cf8;
--primary: #6366f1;
--primary-dark: #4f46e5;

/* Accent Colors */
--accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--accent-light: #f472b6;
--accent: #ec4899;
--accent-dark: #db2777;

/* Success & Trust */
--success: #10b981;
--success-light: #34d399;
--success-gradient: linear-gradient(135deg, #10b981 0%, #34d399 100%);

/* Warning & Attention */
--warning: #f59e0b;
--warning-light: #fbbf24;
--warning-gradient: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
```

### Neutral Palette
```css
/* Grays */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-300: #d1d5db;
--gray-400: #9ca3af;
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
--gray-900: #111827;

/* Dark Mode */
--dark-bg: #0a0a0a;
--dark-surface: #1a1a1a;
--dark-surface-light: #2a2a2a;
```

### Semantic Colors
```css
/* Information */
--info: #3b82f6;
--info-light: #60a5fa;
--info-dark: #2563eb;

/* Success States */
--success-bg: #dcfce7;
--success-text: #166534;
--success-border: #22c55e;

/* Error States */
--error-bg: #fef2f2;
--error-text: #dc2626;
--error-border: #ef4444;
--error-light: #fca5a5;

/* Warning States */
--warning-bg: #fffbeb;
--warning-text: #d97706;
--warning-border: #f59e0b;
```

## Typography System

### Font Stack
```css
/* Primary Sans-Serif */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Vietnamese Support */
--font-vietnamese: 'Inter', 'Noto Sans', 'Roboto', sans-serif;

/* Monospace */
--font-mono: 'JetBrains Mono', 'Fira Code', Monaco, monospace;
```

### Type Scale
```css
/* Display Styles */
--text-6xl: 3.75rem;     /* 60px - Hero titles */
--text-5xl: 3rem;        /* 48px - Section headers */
--text-4xl: 2.25rem;     /* 36px - Large titles */
--text-3xl: 1.875rem;    /* 30px - Medium titles */

/* Body Styles */
--text-2xl: 1.5rem;      /* 24px - Large body */
--text-xl: 1.25rem;      /* 20px - Medium body */
--text-lg: 1.125rem;     /* 18px - Body */
--text-base: 1rem;       /* 16px - Base */
--text-sm: 0.875rem;     /* 14px - Small */
--text-xs: 0.75rem;      /* 12px - Caption */

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Typography Classes
```css
.heading-hero {
  font-size: var(--text-6xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: -0.025em;
}

.heading-section {
  font-size: var(--text-5xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: -0.025em;
}

.heading-card {
  font-size: var(--text-3xl);
  font-weight: 600;
  line-height: var(--leading-snug);
}

.body-large {
  font-size: var(--text-xl);
  font-weight: 400;
  line-height: var(--leading-relaxed);
}

.body {
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: var(--leading-normal);
}

.caption {
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: var(--leading-normal);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

## Spacing System

### 8-Point Grid System
```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */
--space-48: 12rem;    /* 192px */
--space-56: 14rem;    /* 224px */
--space-64: 16rem;    /* 256px */
```

### Container Sizes
```css
.container-xs { max-width: 20rem; }    /* 320px */
.container-sm { max-width: 24rem; }    /* 384px */
.container-md { max-width: 28rem; }    /* 448px */
.container-lg { max-width: 32rem; }    /* 512px */
.container-xl { max-width: 36rem; }    /* 576px */
.container-2xl { max-width: 42rem; }   /* 672px */
.container-3xl { max-width: 48rem; }   /* 768px */
.container-4xl { max-width: 56rem; }   /* 896px */
.container-5xl { max-width: 64rem; }   /* 1024px */
.container-6xl { max-width: 72rem; }   /* 1152px */
.container-7xl { max-width: 80rem; }   /* 1280px */
.container-full { max-width: 100%; }
```

## Layout Patterns

### Grid System
```css
/* CSS Grid Template Areas */
.grid-auto-fit { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.grid-auto-fill { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
.grid-12-col { grid-template-columns: repeat(12, 1fr); }

/* Responsive Breakpoints */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Mobile-First Approach
```css
/* Base styles for mobile */
.hero-section {
  padding: var(--space-16) var(--space-4);
  min-height: 100vh;
}

/* Scale up for larger screens */
@media (min-width: 768px) {
  .hero-section {
    padding: var(--space-24) var(--space-8);
    min-height: 80vh;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    padding: var(--space-32) var(--space-16);
    min-height: 100vh;
  }
}
```

## Component Design Patterns

### Button System
```css
/* Primary Button */
.btn-primary {
  background: var(--primary-gradient);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  transform: translateY(0);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: var(--space-3) var(--space-6);
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--gray-600);
  padding: var(--space-3) var(--space-6);
  font-weight: 500;
  transition: color 0.3s ease;
}

.btn-ghost:hover {
  color: var(--primary);
}
```

### Card System
```css
.card {
  background: white;
  border-radius: 1rem;
  padding: var(--space-6);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
```

### Input System
```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--gray-200);
  border-radius: 0.75rem;
  font-size: var(--text-base);
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.input-error {
  border-color: var(--error);
}

.input-success {
  border-color: var(--success);
}
```

## Animation & Micro-Interactions

### Transitions
```css
/* Standard Transitions */
.transition-fast { transition: all 0.15s ease; }
.transition { transition: all 0.3s ease; }
.transition-slow { transition: all 0.5s ease; }

/* Easing Functions */
.ease-bounce { transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.ease-smooth { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
.ease-sharp { transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1); }
```

### Keyframe Animations
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
.animate-fade-in-scale { animation: fadeInScale 0.4s ease-out; }
.animate-float { animation: float 3s ease-in-out infinite; }
```

### Hover Effects
```css
.hover-lift:hover {
  transform: translateY(-8px);
  transition: transform 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
  transition: box-shadow 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
```

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Clear focus states for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Alternative Text**: Descriptive alt text for all images

### Focus Management
```css
.focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.focus-ring {
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
}
```

## Performance Guidelines

### Image Optimization
- Use WebP format with JPEG fallbacks
- Implement lazy loading for below-the-fold content
- Use responsive images with srcset
- Optimize file sizes (under 100KB for hero images)

### CSS Performance
- Minimize unused CSS
- Use CSS containment for performance
- Implement critical CSS inlining
- Use efficient selectors (avoid deep nesting)

### Animation Performance
```css
/* GPU-accelerated animations */
.accelerated {
  transform: translateZ(0);
  will-change: transform;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Education AI Specific Guidelines

### Trust Signals
- Use badges and certifications
- Display student/testimonial counts
- Show security and privacy guarantees
- Include success metrics and ROI data

### Content Strategy
- Lead with benefits, not features
- Use social proof and testimonials
- Provide clear pricing transparency
- Include risk-free trial offers

### Visual Elements
- Use educational icons and metaphors
- Incorporate AI/tech aesthetics
- Show before/after scenarios
- Use data visualization elements

### Call-to-Action Patterns
- Primary CTAs: "Start Free Trial", "Get Started"
- Secondary CTAs: "Learn More", "View Demo"
- Urgency CTAs: "Join 10,000+ Students"
- Social CTAs: "See Success Stories"

## Mobile-First Implementation

### Breakpoint Strategy
```css
/* Mobile First - Base styles */
/* 320px - 768px: Mobile */
.hero-title { font-size: 2rem; }
.hero-subtitle { font-size: 1.125rem; }

/* Small tablets - 768px+ */
@media (min-width: 768px) {
  .hero-title { font-size: 3rem; }
  .hero-subtitle { font-size: 1.25rem; }
}

/* Tablets - 1024px+ */
@media (min-width: 1024px) {
  .hero-title { font-size: 4rem; }
  .hero-subtitle { font-size: 1.5rem; }
}

/* Desktop - 1280px+ */
@media (min-width: 1280px) {
  .hero-title { font-size: 4.5rem; }
  .hero-subtitle { font-size: 1.75rem; }
}
```

### Touch-Friendly Design
- Minimum touch target: 44px × 44px
- Adequate spacing between interactive elements
- Thumb-friendly navigation placement
- Swipe gestures for mobile interactions

## Design Tokens

### Core Design Tokens
```json
{
  "color": {
    "primary": "#6366f1",
    "primary-light": "#818cf8",
    "primary-dark": "#4f46e5",
    "accent": "#ec4899",
    "accent-light": "#f472b6",
    "success": "#10b981",
    "warning": "#f59e0b",
    "error": "#ef4444"
  },
  "typography": {
    "font-family": {
      "primary": "Inter, sans-serif",
      "mono": "JetBrains Mono, monospace"
    },
    "font-size": {
      "hero": "3.75rem",
      "h1": "3rem",
      "h2": "2.25rem",
      "h3": "1.875rem",
      "body": "1.125rem",
      "small": "0.875rem"
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "2rem",
    "xl": "4rem",
    "xxl": "8rem"
  },
  "border-radius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "0.75rem",
    "xl": "1rem",
    "2xl": "1.5rem",
    "full": "9999px"
  },
  "elevation": {
    "sm": "0 1px 3px rgba(0,0,0,0.12)",
    "md": "0 4px 6px rgba(0,0,0,0.1)",
    "lg": "0 10px 15px rgba(0,0,0,0.1)",
    "xl": "0 20px 25px rgba(0,0,0,0.1)"
  }
}
```

## Implementation Guidelines

### CSS Architecture
1. **Utility-First**: Use Tailwind for consistent spacing, colors, and typography
2. **Component Classes**: Create reusable component classes for complex patterns
3. **Custom Properties**: Use CSS variables for theming and consistency
4. **BEM Methodology**: Follow BEM naming for complex components

### JavaScript Integration
```typescript
// Theme switching
const theme = {
  dark: {
    colors: { primary: '#6366f1' },
    fonts: { primary: 'Inter, sans-serif' }
  },
  light: {
    colors: { primary: '#4f46e5' },
    fonts: { primary: 'Inter, sans-serif' }
  }
};

// Animation utilities
const animations = {
  fadeInUp: 'fadeInUp 0.6s ease-out',
  float: 'float 3s ease-in-out infinite'
};
```

This comprehensive design system ensures consistency, accessibility, and exceptional user experience across all Education AI platform interfaces. All designs should follow these guidelines to maintain brand coherence and user experience standards.