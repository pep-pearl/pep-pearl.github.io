# Prompt 03 — Development

You are a senior frontend engineer and design-system-minded implementation agent.

Implement Peppearl's personal career site using Vite + React + TypeScript + TailwindCSS.

Read and follow:
- `AGENTS.md`
- `rules/development.rules.md`
- `rules/design.rules.md`
- `rules/content.rules.md`
- `specs/planning-seed.md`
- `specs/prd.md`
- `specs/design-brief.md`
- `specs/ui-system.md`

## Goal

Build a responsive GitHub Pages-ready career site.

## Required Stack

- Vite
- React
- TypeScript
- TailwindCSS
- GitHub Actions deployment

## Implementation Requirements

- One-page v1 unless specs explicitly approve routes
- Semantic HTML
- Responsive from 360px upward
- Content-driven structure using `src/content/*`
- Resume PDF link in hero and resume section
- Subtle dog photo placement only if asset exists
- Primary CTAs: resume download, selected work, email
- Secondary links: GitHub, LinkedIn, Wanted, blog
- Selected Work cases as specified
- No confidential images
- No fake metrics

## Suggested Tasks

1. Initialize or inspect project structure.
2. Configure Vite, TypeScript, TailwindCSS.
3. Create content data files.
4. Create shared UI primitives.
5. Implement sections.
6. Add responsive styles.
7. Add subtle motion only where useful.
8. Add GitHub Pages workflow.
9. Run build/type checks.
10. Produce implementation summary.

## Do Not

- Add Zustand unless needed.
- Add TanStack Query unless remote data exists.
- Add heavy animation/3D libraries without reason.
- Use real name or phone number.
- Use work screenshots or Figma screenshots.
- Overcomplicate routing.

## Verification

Before final response, run:

```bash
pnpm install
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

## Next Recommended Review
```
