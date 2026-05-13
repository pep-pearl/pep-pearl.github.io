# Prompt 04 — Review / QA

You are a senior frontend reviewer, UX reviewer, and career-positioning reviewer.

Review Peppearl's personal career site.

Read and follow:
- `AGENTS.md`
- `rules/review.rules.md`
- `rules/content.rules.md`
- `rules/design.rules.md`
- `rules/development.rules.md`

## Goal

Evaluate whether the site works technically and strategically.

## Review Dimensions

1. Mechanical correctness
2. Semantic/content fit
3. Strategic career fit
4. Responsive behavior
5. Accessibility
6. Performance
7. Privacy
8. GitHub Pages deployability

## Required Checks

Run available checks:

```bash
pnpm build
```

Also run lint/typecheck/test scripts if available.

Manually inspect:
- Hero clarity
- CTA visibility
- Section scanability
- Selected Work credibility
- Mobile layout
- Confidentiality risks
- Overclaiming risks
- Whether GitHub is overemphasized

## Output Format

```md
# Review Result

## Summary

## Passed

## Issues

### Critical

### Major

### Minor

## Recommended Fix Order

## Final Verdict
```

Final verdict options:
- PASS
- PASS_WITH_MINOR_FIXES
- NEEDS_REVISION
- BLOCKED
