# Review Rules — Peppearl Career Site

## Purpose

Use this file to evaluate planning, design, content, implementation, and deployment.

Review should not only check whether the site works. It should check whether the site supports Peppearl's career goal.

## Review Loop

Use:

```txt
Mechanical → Semantic → Strategic
```

### Mechanical Review

Check objective correctness:
- Build passes
- TypeScript passes
- No console errors
- Links work
- Resume downloads
- Responsive layout works
- No missing alt text
- No obvious accessibility failures

### Semantic Review

Check whether the content and design mean the right thing:
- Is the positioning clear?
- Does the site feel like a frontend developer site, not a designer-only site?
- Does it avoid public-sector/SI mood?
- Does it avoid exaggerated claims?
- Are the selected works credible without screenshots?

### Strategic Review

Check whether it serves the career goal:
- Can a recruiter understand the strengths within 3 minutes?
- Can a frontend lead see enough technical depth?
- Is GitHub supporting evidence rather than the main story?
- Are CTAs visible and useful?
- Would this be safe to send as a single interview link?

## Review Checklist

### Goal Fit

- [ ] Position/interview proposal goal is obvious.
- [ ] Hero states clear frontend positioning.
- [ ] Design system, architecture, and AI Agent workflow are visible.
- [ ] GitHub is not overemphasized.

### Content

- [ ] Uses Peppearl identity.
- [ ] Korean main content is natural.
- [ ] English terms are used only where helpful.
- [ ] No fake metrics.
- [ ] No excessive self-praise.
- [ ] Humility is shown through learning/tradeoff notes.

### Privacy

- [ ] No phone number.
- [ ] No face photo.
- [ ] No work screenshots unless approved.
- [ ] No Figma screenshots unless approved.
- [ ] No confidential details.
- [ ] No unverified result numbers.

### Design

- [ ] Minimal but not plain.
- [ ] Interactive but not flashy.
- [ ] No portfolio academy mood.
- [ ] No public-sector/SI mood.
- [ ] Dog photo is subtle.
- [ ] Cards and decorations are not overused.

### Responsiveness

- [ ] 360px mobile works.
- [ ] Tablet works.
- [ ] Desktop works.
- [ ] CTAs wrap cleanly.
- [ ] Case cards remain readable.
- [ ] Navigation remains usable.

### Accessibility

- [ ] Semantic HTML landmarks exist.
- [ ] Heading order is logical.
- [ ] Focus states are visible.
- [ ] Image alt text exists.
- [ ] Reduced motion is respected.
- [ ] Color contrast is acceptable.

### Deployment

- [ ] Vite `base` is correct.
- [ ] GitHub Actions workflow exists.
- [ ] Build output deploys to GitHub Pages.
- [ ] No asset path breaks under deployed URL.

## Output Format

When reviewing, report:

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

Use final verdict:
- `PASS`
- `PASS_WITH_MINOR_FIXES`
- `NEEDS_REVISION`
- `BLOCKED`
