# Design Rules — Peppearl Career Site

## Purpose

Use this file during design and UI implementation. The goal is a minimal but quietly interactive career site that feels professional, modern, and balanced.

## Direction

Design ratio:
- Minimal interactive portfolio: 60%
- Structured career document: 40%

The site should feel like:
- A polished career landing page
- A design-aware frontend engineer's portfolio
- A calm, structured, professional product page

It should not feel like:
- A portfolio academy template
- A public-sector/SI system page
- A designer-only visual portfolio
- A flashy creative agency site
- A generic Notion resume

## Visual Keywords

```txt
quiet confidence
minimal interaction
structured career story
soft technical elegance
```

## Layout Principles

- Text-first, not image-first
- Clear section rhythm
- Wide desktop layout with strong whitespace
- Mobile-first responsive decisions
- Cards only where they clarify grouped information
- Avoid card overload
- Use diagrams or abstract UI blocks instead of work screenshots

## Hero Rules

Hero should include:
- Main positioning line
- Short explanation
- Primary CTAs
- Secondary links

Hero should not include:
- Large face photo
- Large dog photo
- Huge GitHub stats
- Overly dramatic animation
- Inflated claims

## Dog Photo Rules

Dog photo may appear:
- In About card
- As a small profile visual
- In footer as a subtle personal touch

Dog photo should not:
- Dominate hero
- Make the site feel cute rather than professional
- Replace professional evidence

## Color Rules

Use calm, modern colors.

Recommended direction:
- Off-white or very soft dark background
- Neutral text
- One refined accent color
- Subtle borders
- Soft depth

Avoid:
- Neon-heavy palette
- Cyberpunk mood
- Loud gradients
- Random pastel overload
- Pure grayscale with no character

## Typography Rules

- Use a clean Korean-friendly sans-serif stack.
- Headings should be confident but not huge everywhere.
- Body text must be readable on mobile.
- Avoid very small low-contrast text.

Recommended system font stack:

```css
font-family: Pretendard, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## Motion Rules

Use subtle motion:
- Section entrance fade/slide
- Button hover
- Card hover depth
- Small indicator motion

Avoid:
- Heavy parallax
- Constant moving backgrounds
- Excessive scroll-jacking
- Large animated 3D objects

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Rules

Must support:
- Mobile: 360px+
- Tablet
- Desktop
- Wide desktop

Responsive behavior:
- Hero stacks on mobile
- CTA buttons wrap cleanly
- Selected Work cards become single-column on mobile
- Strength pillars stack on mobile
- Long case descriptions collapse or simplify visually
- Navigation should not crowd small screens

Prefer CSS strategies:
- Fluid widths
- `clamp()` for typography and spacing
- Grid that collapses naturally
- Avoid fixed heights unless necessary

## Accessibility Rules

- All interactive elements need visible focus styles.
- Color contrast must be readable.
- Links must be distinguishable.
- Buttons must have meaningful accessible text.
- Images must have alt text.
- Sections should use semantic headings in order.
- Motion should respect reduced-motion settings.

## Component Design Rules

Required components:
- Hero
- CTA Button
- Section Header
- Strength Card
- Experience Item
- Case Study Card
- Tech Badge
- Resume CTA
- Contact Card
- External Link

Design each component with:
- Default state
- Hover state if interactive
- Focus state if interactive
- Mobile behavior

## Image Replacement Rules

Because work screenshots and Figma images are not allowed by default, use:
- Abstract wireframe blocks
- Architecture diagrams
- Code snippets
- Decision cards
- Timeline diagrams
- Component state matrices

Do not fake actual product screenshots.
