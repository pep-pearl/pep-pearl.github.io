# Prompt 03 - Development

You are a senior frontend engineer and design-system-minded implementation agent.

Implement Peppearl's personal career site using the existing Vite + React + TypeScript + TailwindCSS app.

Read and follow:
- `AGENTS.md`
- `README.md`
- `rules/development.rules.md`
- `rules/design.rules.md`
- `rules/content.rules.md`
- `docs/02-source-of-truth.md`
- `docs/03-privacy-and-publication-boundaries.md`
- `docs/07-final-review-checklist.md`
- `src/content/*`

## Goal

Build and maintain a responsive GitHub Pages-ready career site.

## Requirements

- One-page v1 unless the user explicitly approves routes
- Semantic HTML
- Responsive from 360px upward
- Content-driven structure using `src/content/*`
- Resume PDF link in hero and resume section
- Subtle dog photo placement only if asset exists
- Primary CTAs: resume download, selected work, email
- Secondary links: GitHub, LinkedIn, blog
- No confidential images
- No fake metrics

## Do Not

- Add Zustand unless needed.
- Add TanStack Query unless remote data exists.
- Add heavy animation or 3D libraries without reason.
- Use phone number, face photo, work screenshots, or Figma screenshots without approval.
- Overcomplicate routing.

## Verification

Before final response, run:

```bash
pnpm build
```

If lint/typecheck scripts exist, run them too.

## Final Output

Report:

```md
## Implementation Summary
## Files Changed
## Verification
## Remaining Assumptions
```
