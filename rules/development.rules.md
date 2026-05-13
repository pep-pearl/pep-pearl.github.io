# Development Rules — Peppearl Career Site

## Purpose

Use this file during implementation. The goal is to build a responsive, maintainable, GitHub Pages-ready Vite React site.

## Required Stack

- Vite
- React
- TypeScript
- TailwindCSS
- GitHub Pages
- GitHub Actions

## Implementation Priorities

Prioritize:
1. Content clarity
2. Responsive layout
3. Accessibility
4. Maintainability
5. Fast static loading
6. Small, tasteful interactions

Do not prioritize:
- Complex routing in v1
- Heavy animation frameworks unless useful
- Global state without need
- Data fetching libraries without remote data
- Overengineered architecture

## Architecture

Use a light FSD-inspired structure. Do not make the project heavier than necessary.

Recommended:

```txt
src/
├─ app/
├─ pages/
├─ widgets/
├─ features/
├─ entities/
├─ shared/
├─ content/
└─ styles/
```

Use:
- `widgets` for section-level blocks
- `entities` for domain concepts like project, experience, profile
- `shared/ui` for reusable UI primitives
- `content` for editable content data

## Content-Driven Rule

Keep content out of component bodies where possible.

Use files like:
- `src/content/profile.ts`
- `src/content/projects.ts`
- `src/content/experience.ts`
- `src/content/links.ts`

This lets Peppearl edit content without touching layout logic.

## TypeScript Rules

- Define explicit types for project, experience, link, strength, and CTA data.
- Avoid `any`.
- Avoid unnecessary type gymnastics.
- Use `as const` only where it improves inference.
- Prefer readable types over clever types.

## React Rules

- Prefer function components.
- Keep components small.
- Use semantic HTML.
- Avoid unnecessary memoization.
- Do not use `useEffect` unless there is an actual side effect.
- Use controlled motion and interaction.

## Styling Rules

Use TailwindCSS for most styling.

Allow custom CSS for:
- Global typography
- CSS variables
- Reduced motion
- Complex decorative backgrounds
- Selection style

Avoid:
- Inline styles unless dynamic
- Arbitrary values everywhere
- Unnamed random colors
- Repeating large class strings without extracting components

## Routing Rules

For v1, prefer one-page sections and anchor navigation.

If using routes:
- Keep `/` as primary experience
- Use detail routes only if content is deep enough
- Ensure GitHub Pages refresh behavior is handled
- Consider `HashRouter` or static fallback strategy if necessary

## GitHub Pages Rules

Confirm deploy type before setting `base`:

- User site or custom domain: `base: '/'`
- Project site: `base: '/<repo>/'`

Do not hardcode absolute asset paths that break under a project subpath.

## Deployment Rules

Use GitHub Actions deployment.

Recommended workflow should:
- Install pnpm
- Install dependencies
- Build site
- Upload Pages artifact
- Deploy to Pages

Before finalizing, verify repository Pages settings use GitHub Actions as source.

## Accessibility Rules

- Use `main`, `section`, `nav`, `footer`, `header`.
- Maintain heading order.
- Use descriptive link text.
- Add focus-visible styles.
- Add alt text for images.
- Ensure CTA buttons are keyboard reachable.
- Do not rely on color alone.

## Performance Rules

- Avoid large image assets.
- Compress dog photo before use.
- Lazy-load non-critical images if needed.
- Avoid unnecessary JS libraries.
- Keep animations CSS-first where possible.
- Do not load remote fonts unless necessary.

## Responsive Rules

Test at minimum:
- 360px
- 390px
- 768px
- 1024px
- 1440px

Do not consider a section complete until mobile layout is checked.

## Security / Privacy Rules

Before committing:
- No phone number
- No private screenshots
- No Figma captures
- No confidential file names
- No real name unless explicitly approved
- No hidden `.env` or private tokens

## Definition of Done

A development task is done when:
- It builds successfully
- TypeScript passes
- Layout works on mobile and desktop
- Accessibility basics are checked
- Content follows privacy rules
- No console errors
- No broken CTA links
