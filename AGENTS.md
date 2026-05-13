# AGENTS.md — Peppearl Career Site

## 0. Agent Prime Directive

You are working on **Peppearl's personal career site**: a GitHub Pages website that combines resume, career description, and portfolio into one polished experience.

Do not start by coding. First clarify, structure, and validate the specification. This project follows a spec-first loop:

```txt
Interview → Seed → Execute → Evaluate → Evolve
```

For every major phase, use:

```txt
Research → Plan → Hold → Implement → Review
```

`Hold` means: before moving from planning to design, from design to development, or from development to deployment, produce a short review summary and wait for human approval unless the user has explicitly told you to continue.

## 1. Product Definition

This is not a general developer blog, GitHub showcase, or toy-project archive.

It is a **career landing page** for:
- Position proposals
- Interview proposals
- Recruiter review
- Frontend lead review
- CTO / founder review
- Resume replacement link

The site should make visitors think:

> Peppearl is a frontend developer who improves product completeness through sustainable design systems, scalable frontend architecture, and structured AI Agent workflows.

## 2. Core Positioning

Primary positioning:

> 지속 가능한 디자인 시스템과 확장성 있는 아키텍처로 제품의 완성도를 높이는 프론트엔드 개발자

Hero variant:

> 제품의 완성도를 높이는 프론트엔드 개발자
>
> 디자인 시스템, 확장 가능한 아키텍처, AI Agent 활용 워크플로우를 바탕으로 복잡한 서비스를 안정적이고 세련되게 구현합니다.


## 2A. Project Knowledge Base

Before starting any planning, design, development, or review task, read the project knowledge base.

Required references:

1. `docs/00-project-purpose.md`
2. `docs/01-codex-context-map.md`
3. `docs/02-source-of-truth.md`
4. `docs/03-privacy-and-publication-boundaries.md`
5. `docs/04-content-strategy.md`
6. `content/resume/resume.codex.md`
7. `content/work/selected-work-source.md`

For public website copy, prefer:

- `content/resume/resume.site.md`

When information is missing, update:

- `docs/06-open-questions.md`

Do not invent missing facts, links, dates, metrics, or screenshots.

## 3. Target Audience

Prioritize content and UX for:
1. Recruiters
2. Frontend team leads
3. CTOs / engineering leaders
4. Startup founders
5. Potential project clients

Recruiters need fast clarity. Frontend leads need evidence. CTOs/founders need confidence. The site must support all three without becoming noisy.

## 4. Brand Personality

Desired:
- Minimal
- Structured
- Professional
- Quietly interactive
- Balanced
- Calmly confident
- Humble through evidence, not self-description

Avoid:
- Portfolio academy look
- Excessive animation
- Exaggerated self-promotion
- Public-sector/SI visual mood
- Designer-only impression
- GitHub-centered personal-work bragging
- Empty buzzwords
- Unsupported numbers or claims

## 5. Public Identity & Privacy Rules

Use the public identity **Peppearl**.

Allowed:
- Alias: Peppearl
- Email
- GitHub link
- LinkedIn / Wanted / blog links
- Resume PDF download
- Company names if provided by the user
- Project names if provided by the user
- Code snippets

Not allowed unless the user later explicitly approves:
- Real name as main public identity
- Face photo
- Phone number
- Work screenshots
- Figma screenshots
- Confidential documents
- Performance/result metrics without verified source

Profile visual:
- Use a small dog photo only as a subtle personal element.
- Prefer About card or footer.
- Do not make the dog photo the main hero image.

## 6. Core Strength Pillars

All planning, design, content, and implementation should reinforce these three pillars.

### 6.1 Design System

Show repeatable UI thinking:
- Tokens
- Components
- States
- Layout rules
- Accessibility
- AI-readable design/publishing rules

### 6.2 Frontend Architecture

Show maintainable frontend thinking:
- React + TypeScript
- Vite
- Feature-Sliced Design
- pnpm workspace / monorepo experience
- TailwindCSS
- Zustand / TanStack Query experience where relevant
- Complex business UI / GIS interface experience

### 6.3 AI Agent Workflow

Show structured AI usage:
- AGENTS.md
- Phase rules
- Prompt templates
- Review gates
- Research → Plan → Hold → Implement → Review
- Human judgment as final authority

## 7. Recommended Information Architecture

Initial version should be a one-page site.

Required sections:
1. Hero
2. About / Positioning
3. Core Strengths
4. Experience
5. Selected Work
6. Tech Stack
7. Resume
8. Contact

Selected Work should include:
- Case 01. Design System & Frontend Architecture
- Case 02. GIS / Disaster Management Platform
- Case 03. AI Agent Workflow for Frontend Development

Optional later routes:
- `/work/design-system-architecture`
- `/work/gis-disaster-platform`
- `/work/ai-agent-workflow`
- `/resume`

Do not create many pages in v1 unless content clearly supports them.

## 8. Content Rules

Main language:
- Korean first
- Use English terms only where they improve clarity, such as Design System, Frontend Architecture, AI Agent Workflow, React, TypeScript.

Tone:
- Direct
- Specific
- Not boastful
- No fake confidence
- No unsupported achievements

Preferred case-study format:

```txt
Context → Problem → My Role → Decisions → Implementation → What I Learned
```

When metrics are unavailable, do not invent results. Emphasize decisions, constraints, implementation quality, and learning.

## 9. Design Rules

Design direction:
- Minimal interactive portfolio 60%
- Structured career document 40%

Must be:
- Responsive
- Text-first but visually polished
- Calm and modern
- Easy to scan in 3 minutes
- Clear on mobile

Avoid:
- Too much gradient
- Heavy glassmorphism
- Random 3D
- Overdecorated cards
- Portfolio-template cliché
- Public-sector/SI mood
- Dark cyberpunk look
- Empty white/gray monotony

Use motion carefully:
- Small entrance transitions
- Hover/focus transitions
- Section reveal if subtle
- Respect reduced-motion preferences

## 10. Development Rules

Required stack:
- Vite
- React
- TypeScript
- TailwindCSS
- GitHub Pages
- GitHub Actions

Recommended implementation principles:
- Content-driven structure using TS/JSON/MD data files
- Components should be small and named by intent
- Do not introduce global state unless there is actual interactive state that needs it
- Do not introduce TanStack Query unless remote data exists
- Do not overengineer routing
- Prefer semantic HTML
- Keep accessibility, keyboard navigation, and responsive layout from the beginning

## 11. Suggested File Structure

```txt
.
├─ AGENTS.md
├─ README.md
├─ package.json
├─ vite.config.ts
├─ index.html
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  └─ routes.tsx
│  ├─ pages/
│  │  └─ HomePage.tsx
│  ├─ widgets/
│  │  ├─ hero/
│  │  ├─ about/
│  │  ├─ strengths/
│  │  ├─ experience/
│  │  ├─ selected-work/
│  │  ├─ tech-stack/
│  │  ├─ resume/
│  │  └─ contact/
│  ├─ features/
│  │  └─ theme/
│  ├─ entities/
│  │  ├─ profile/
│  │  ├─ project/
│  │  └─ experience/
│  ├─ shared/
│  │  ├─ ui/
│  │  ├─ lib/
│  │  ├─ config/
│  │  └─ assets/
│  ├─ content/
│  │  ├─ profile.ts
│  │  ├─ projects.ts
│  │  ├─ experience.ts
│  │  └─ links.ts
│  └─ styles/
│     └─ globals.css
├─ public/
│  ├─ resume.pdf
│  └─ images/
│     └─ gom-profile.*
├─ rules/
│  ├─ planning.rules.md
│  ├─ content.rules.md
│  ├─ design.rules.md
│  ├─ development.rules.md
│  └─ review.rules.md
├─ prompts/
│  ├─ 00-interview.prompt.md
│  ├─ 01-planning.prompt.md
│  ├─ 02-design.prompt.md
│  ├─ 03-development.prompt.md
│  └─ 04-review.prompt.md
└─ .github/
   └─ workflows/
      └─ deploy.yml
```

Use this structure as guidance, not rigid law. If simpler is better, simplify and explain why.

## 12. GitHub Pages Constraints

Before deployment, confirm whether the site will be published as:
- user site: `https://<username>.github.io/`
- project site: `https://<username>.github.io/<repo>/`

Set Vite `base` accordingly:
- user site or custom domain: `/`
- project site: `/<repo>/`

If React Router is used for multiple routes, ensure refresh behavior works on GitHub Pages. Prefer one-page navigation for v1.

## 13. Accessibility & Quality Gates

Before final delivery, check:
- Semantic landmarks: header, main, section, nav, footer
- Keyboard focus states
- Alt text for dog/profile image
- Responsive layout from 360px width upward
- Color contrast
- Reduced motion support
- Resume download link works
- Contact link works
- No broken external links
- No confidential assets
- Build passes
- Type check passes
- Lint passes if configured

Target:
- Lighthouse Accessibility: 90+
- Lighthouse Performance: 90+ where reasonable
- No TypeScript errors
- No console errors

## 14. Phase Behavior

### Planning Phase

Do not code. Produce:
- Clarifying questions if needed
- Planning Seed
- IA
- Content inventory
- Acceptance criteria

### Design Phase

Do not implement full code yet. Produce:
- Design direction
- Layout plan
- Component inventory
- Token proposal
- Responsive behavior
- Motion rules

### Development Phase

Implement according to approved planning and design. Do not invent new content. Use placeholders only when clearly marked.

### Review Phase

Review against:
- Goal fit
- Content clarity
- Design direction
- Responsiveness
- Accessibility
- Performance
- Privacy constraints
- GitHub Pages deployability

## 15. Communication Rules

When reporting work:
- Start with what changed
- Mention unresolved assumptions
- Mention files changed
- Mention how to verify
- Avoid long generic explanations
- Never claim something works unless checked

When uncertain:
- State the uncertainty
- Offer the smallest safe next step
- Do not fabricate information

## 16. Stop Conditions

Stop and ask before:
- Publishing private or sensitive information
- Adding real name, phone number, or face photo
- Using work screenshots or Figma screenshots
- Inventing metrics
- Changing core positioning
- Replacing the stack
- Expanding from one-page site to multi-page site

## 17. Final Acceptance Definition

The v1 site is complete when:
- A recruiter can understand Peppearl's strengths within 3 minutes.
- Career history is understandable without opening the PDF.
- Resume PDF is available in hero and resume section.
- Three selected cases are credible without confidential screenshots.
- Design feels minimal, calm, and quietly interactive.
- Mobile/tablet/desktop layouts are polished.
- GitHub Pages deployment works.
