# Planning Rules — Peppearl Career Site

## Purpose

Use this file during the planning phase only. The goal is to turn a vague portfolio idea into a clear, buildable specification before any design or code work begins.

## Planning Philosophy

Follow a spec-first loop:

```txt
Interview → Seed → Execute → Evaluate → Evolve
```

In planning, focus on Interview and Seed.

Ask what the site actually is before deciding how to build it.

## Planning Inputs

Known user decisions:
- Public identity: Peppearl
- Main language: Korean, with English terms where useful
- Primary goal: position/interview proposals
- Secondary goals: personal branding, resume replacement, limited freelance/project possibility
- GitHub should be supporting evidence, not the main focus
- Stack preference: Vite + React + TypeScript
- Tone: minimal interactive portfolio 60% + structured career document 40%
- Must be responsive
- Dog photo can be used subtly
- Resume PDF should appear in hero and resume section

## Planning Outputs

Produce the following:
1. Planning Seed
2. Information Architecture
3. Content Inventory
4. Selected Work Strategy
5. Acceptance Criteria
6. Open Questions
7. Phase Plan

## Required Questions

If missing, ask only questions that affect decisions. Avoid long surveys.

Clarify:
- Which resume PDF exists or needs to be created
- Exact email/contact links
- External links: GitHub, LinkedIn, Wanted, blog
- Work history timeline
- Which company/project names may be public
- Which case details may be described
- Whether user site or project site will be used for GitHub Pages

## Ambiguity Scoring

Before moving to design, estimate clarity:

```txt
Ambiguity = 1 - weighted clarity
```

Use these dimensions:
- Goal clarity: 35%
- Constraint clarity: 25%
- Success criteria clarity: 25%
- Content/context clarity: 15%

Do not proceed to design if ambiguity feels above 0.2, unless the user explicitly asks to continue with assumptions.

## Planning Constraints

Do not:
- Start coding
- Invent career history
- Invent metrics
- Invent project details
- Add work screenshots without approval
- Make GitHub the hero proof
- Over-expand routes

Do:
- Prefer one-page v1
- Keep content realistic
- Emphasize depth over project count
- Use diagrams and code snippets instead of confidential images
- Make strengths visible within 3 minutes

## Recommended IA

```txt
Hero
About / Positioning
Core Strengths
Experience
Selected Work
Tech Stack
Resume
Contact
```

## Selected Work Rules

Use three cases:
1. Design System & Frontend Architecture
2. GIS / Disaster Management Platform
3. AI Agent Workflow for Frontend Development

For each case, use:

```txt
Context → Problem → My Role → Decisions → Implementation → What I Learned
```

When no verified result metrics exist, do not include a fake `Result` section. Instead, include `Decisions` and `Implementation` with enough detail.

## Planning Acceptance Checklist

Planning is ready when:
- Target visitor is clear
- Primary CTA is clear
- Sections are defined
- Public/private content boundaries are defined
- Selected work strategy is defined
- Visual direction is defined enough for design
- Technical constraints are known
- Success criteria are testable
