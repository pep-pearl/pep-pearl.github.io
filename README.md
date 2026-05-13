# Peppearl Career Site Agent Pack

This pack contains the operating instructions, rules, prompts, and planning seed for building Peppearl's personal career site with Codex.

## Files

```txt
AGENTS.md
rules/
  planning.rules.md
  content.rules.md
  design.rules.md
  development.rules.md
  review.rules.md
prompts/
  00-interview.prompt.md
  01-planning.prompt.md
  02-design.prompt.md
  03-development.prompt.md
  04-review.prompt.md
specs/
  planning-seed.md
```

## Recommended Workflow

Use these prompts in order:

1. `prompts/00-interview.prompt.md`
2. `prompts/01-planning.prompt.md`
3. `prompts/02-design.prompt.md`
4. `prompts/03-development.prompt.md`
5. `prompts/04-review.prompt.md`

The workflow is:

```txt
Interview → Seed → Design → Development → Review → Evolve
```

At every phase boundary, review before continuing.

## Project Summary

Build a GitHub Pages personal career site for Peppearl.

The site should combine:
- Resume
- Career description
- Portfolio
- Selected case studies
- Contact CTA

Main goal:
- Position/interview proposals

Core strengths:
- Design System
- Frontend Architecture
- AI Agent Workflow

Stack:
- Vite
- React
- TypeScript
- TailwindCSS
- GitHub Pages

## How to Use in Codex

1. Put this pack at the root of the repository.
2. Start Codex with the contents of `AGENTS.md` available.
3. Run the prompts in order.
4. Do not skip planning and design gates.
5. Use review output as the next iteration input.
