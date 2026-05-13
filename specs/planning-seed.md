# Planning Seed — Peppearl Career Site

## 1. Project Summary

Build a personal career website for **Peppearl** on GitHub Pages. The site combines resume, career description, and portfolio into one polished web experience.

The site is not a GitHub showcase or toy-project archive. It is a career landing page designed to help recruiters, frontend leads, CTOs, startup founders, and potential clients understand Peppearl's strengths within 3 minutes and feel confident enough to send a position or interview proposal.

## 2. Primary Goal

Make Peppearl look like a frontend developer who improves product completeness through sustainable design systems, scalable frontend architecture, and structured AI Agent workflows.

Primary conversion:
- Position proposal
- Interview proposal
- Email contact
- Resume PDF download

Secondary conversion:
- LinkedIn / Wanted / blog visit
- GitHub visit as supporting proof only

## 3. Target Audience Priority

1. Recruiters
2. Frontend team leads
3. CTOs / engineering leaders
4. Startup founders
5. Potential freelance or project clients

## 4. Core Positioning

> 지속 가능한 디자인 시스템과 확장성 있는 아키텍처로 제품의 완성도를 높이는 프론트엔드 개발자

Hero-friendly variant:

> 제품의 완성도를 높이는 프론트엔드 개발자
>
> 디자인 시스템, 확장 가능한 아키텍처, AI Agent 활용 워크플로우를 바탕으로 복잡한 서비스를 안정적이고 세련되게 구현합니다.

## 5. Desired Impression

The site should communicate:
- Professional but not inflated
- Minimal but not plain
- Elegant but not decorative
- Developer-first, with strong design-system sense
- Steady, thoughtful, and humble through evidence, not self-praise
- Able to learn unfamiliar domains and produce polished, maintainable work

Avoid:
- Portfolio-school look
- Excessive self-branding
- Overly dramatic animations
- Public-sector/SI visual mood
- Designer-only impression
- GitHub-centered personal project bragging
- Unsupported claims or fake metrics

## 6. Core Strengths to Highlight

### 6.1 Design System

Show that Peppearl can think in repeatable UI rules, tokens, components, states, accessibility, and team-friendly standards.

Evidence types:
- Design token examples
- Component state rules
- Publishing rules
- Accessibility thinking
- AI-readable design and implementation rules

### 6.2 Frontend Architecture

Show that Peppearl can structure screens, state, API boundaries, components, and routes for maintainability.

Evidence types:
- React + TypeScript
- Vite
- Feature-Sliced Design
- pnpm workspace / monorepo experience
- TailwindCSS
- Zustand / TanStack Query experience
- Complex business UI and GIS-style interface experience

### 6.3 AI Agent Workflow

Show that Peppearl uses AI Agents as structured collaborators for planning, design, implementation, review, and refactoring.

Evidence types:
- AGENTS.md
- Phase-specific rule files
- Prompt templates
- Research → Plan → Hold → Implement → Review workflow
- Human review gates

## 7. Content Privacy Constraints

Allowed:
- Alias: Peppearl
- Email
- GitHub
- LinkedIn / Wanted / blog links
- Company names if user provides them
- Project names if user provides them
- Code snippets
- Resume PDF download

Not allowed:
- Real name as main public identity
- Face photo
- Phone number
- Work screenshots unless user later approves a specific image
- Figma screenshots unless user later approves a specific image
- Quantified performance/result metrics unless user later provides verified data

Profile image strategy:
- Use a small dog photo, not in a loud hero position.
- Preferred placement: About card or footer-level personal touch.

## 8. Recommended Site Structure

Initial release should be a polished one-page site. Use sections instead of many routes to reduce content burden.

Sections:
1. Hero
2. About / Positioning
3. Core Strengths
   - Design System
   - Frontend Architecture
   - AI Agent Workflow
4. Experience
5. Selected Work
   - Case 01. Design System & Frontend Architecture
   - Case 02. GIS / Disaster Management Platform
   - Case 03. AI Agent Workflow for Frontend Development
6. Tech Stack
7. Resume
8. Contact

Optional future routes:
- `/work/design-system-architecture`
- `/work/gis-disaster-platform`
- `/work/ai-agent-workflow`
- `/resume`

## 9. Portfolio Case Strategy

Use depth over quantity. Do not force many projects.

Recommended case format:

```txt
Context → Problem → My Role → Decisions → Implementation → What I Learned
```

Avoid exaggerated `Outcome` sections when no verified numbers exist. Use qualitative outcomes and decision quality instead.

### Case 01 — Design System & Frontend Architecture

Core message:
> 디자인 시스템과 프론트엔드 구조를 함께 정리해 복잡한 업무 시스템의 UI 품질과 유지보수성을 높인 경험

Show:
- UI/UX planning participation
- Design tokens
- Component state rules
- Layout rules
- FSD-based architecture
- Code or structure snippets
- Diagram instead of real screenshots

### Case 02 — GIS / Disaster Management Platform

Core message:
> 지도 기반의 복잡한 업무 시스템에서 사용자의 탐색, 조회, 판단 흐름을 프론트엔드 관점에서 구조화한 경험

Show:
- Map-centered UI thinking
- List/detail panels
- Layer control
- Popup / modal / drawer patterns
- Filter and map-state interaction
- OpenLayers / Cesium learning direction
- Route and page structure design

Keep it from looking like a public-sector/SI portfolio. Emphasize product complexity, interaction, and structure.

### Case 03 — AI Agent Workflow for Frontend Development

Core message:
> AI Agent를 단순 코드 생성 도구가 아니라 기획, 설계, 검수, 리팩터링을 보조하는 구조화된 작업 파트너로 사용한 경험

Show:
- This portfolio-building process itself
- AGENTS.md
- Planning/design/development rules
- Prompt templates
- Human review gates
- Evaluation checklist

## 10. Design Direction

Ratio:
- B: Minimal interactive portfolio — 60%
- A: Structured career document — 40%

Mood:
- Minimal
- Quietly interactive
- Structured
- Professional
- Calm confidence

Must be fully responsive.

## 11. Technical Stack

Required:
- Vite
- React
- TypeScript
- TailwindCSS
- GitHub Pages
- GitHub Actions deployment

Recommended:
- React Router only if routes are actually needed
- Framer Motion for small, controlled microinteractions
- MD/JSON/TS content config for easy editing

Avoid unless necessary:
- Zustand
- TanStack Query
- Heavy animation/3D libraries
- Unnecessary global state

## 12. Success Criteria

The site is successful when:
- Peppearl's strengths are understood within 3 minutes.
- Career history is understandable without opening a PDF.
- One link is enough to send to an interviewer or recruiter.
- Three selected cases feel credible even without confidential screenshots or metrics.
- Resume PDF is accessible from hero and resume section.
- Site deploys automatically to GitHub Pages.
- Layout is responsive across desktop, tablet, and mobile.
- Design does not look like a template, portfolio academy work, or public-sector system page.
