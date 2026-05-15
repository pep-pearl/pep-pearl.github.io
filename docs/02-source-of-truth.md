# Source of Truth

이 문서는 현재 확정된 의사결정을 정리한다. 이후 사용자가 변경을 지시하기 전까지 이 문서를 기준으로 삼는다.

## 기본 정체성

- Public name: Peppearl
- Role: Frontend Engineer
- Career: 3 years
- Main language: 한국어
- English: Design System, Frontend Architecture, AI Agent Workflow, React, TypeScript처럼 더 명확한 기술 용어에 한해 보조적으로 사용
- Public contact: 이메일, GitHub, 블로그 링크
- LinkedIn: `https://www.linkedin.com/in/nojam2ya`
- Blog: `https://jinjoo648.tistory.com/`를 공개하되 secondary link, footer, Related Writing 수준으로만 사용
- Wanted: 사용하지 않음
- Phone: 공개 금지
- Face photo: 사용 금지
- Profile visual: `public/images/dog_photo.png`를 About의 작은 profile visual로 사용한다. Hero와 footer에서는 사용하지 않는다.
- Public resume PDF: `public/이혜주_FrontendEngineer.pdf`

## 핵심 포지셔닝

> 지속 가능한 디자인 시스템과 확장성 있는 아키텍처로 제품의 완성도를 높이는 프론트엔드 개발자

Hero variant:

> 제품의 완성도를 높이는 프론트엔드 개발자
>
> 디자인 시스템, 확장 가능한 아키텍처, AI Agent 활용 워크플로우를 바탕으로 복잡한 서비스를 안정적이고 세련되게 구현합니다.

## 사이트 목표

- Main goal: 이직 지원, 포지션 제안, 면접 제안
- Secondary goal: 이력서 대체 링크, 개인 브랜딩, 제한적인 프로젝트 문의
- GitHub는 보조 근거로만 사용한다.
- 업무 중심으로 보여준다.
- 방문자가 3분 안에 강점을 이해할 수 있어야 한다.
- 회사명, 프로젝트명, 교육, 자격증은 공개 가능하다. 단, 사이트 제작 중 `content/resume` 또는 PDF 기준 자료에 없는 내용이 필요하면 사용자에게 인터뷰로 확인한다.
- 구체적인 성과 수치는 공개하지 않는다.

## 강조 역량

1. Design System
   - tokens
   - components
   - states
   - layout rules
   - accessibility
   - AI-readable design/publishing rules

2. Frontend Architecture
   - React + TypeScript
   - Vite
   - Feature-Sliced Design
   - pnpm workspace / monorepo
   - TailwindCSS
   - complex business UI / GIS interface

3. AI Agent Workflow
   - AGENTS.md
   - phase rules
   - reusable skills
   - review gates
   - Research -> Plan -> Hold -> Implement -> Review
   - human judgment as final authority

## 대표 케이스

1. Design System & Frontend Architecture
2. GIS / Disaster Management Platform
3. AI Agent Workflow for Frontend Development

각 케이스는 `Context -> Problem -> My Role -> Key Decisions -> Implementation -> What I Learned` 구조를 우선한다.

프로젝트명은 공개 가능하다. 필요한 코드 스니펫이 있으면 사용자에게 요청하고, 사용자가 제공하기 어렵다고 답하면 다이어그램과 pseudo code 중심으로 표현한다.

## 정보 구조

v1은 원페이지 사이트를 우선한다.

필수 섹션:

1. Hero
2. About / Positioning
3. Core Strengths
4. Experience
5. Selected Work
6. Tech Stack
7. Resume
8. Contact

다중 라우트는 콘텐츠가 충분히 준비된 뒤에만 검토한다.

## 디자인 방향

- Tone: 미니멀 인터랙티브 포트폴리오 60%, 구조화된 커리어 문서 40%
- Visual mood: minimal, structured, professional, quietly interactive, balanced, refined
- 강아지 사진은 작은 개인적 요소로만 사용한다.
- v1 motion은 CSS transition 중심으로 구현하고 Framer Motion은 사용하지 않는다.
- 반응형은 필수이며 모바일에서 콘텐츠 우선순위가 유지되어야 한다.
- 과도한 3D, 애니메이션, 글래스모피즘, 포트폴리오 학원 느낌, 공공/SI 느낌은 피한다.

## 기술 결정

- Vite
- React
- TypeScript
- TailwindCSS
- GitHub Pages
- GitHub Actions
- GitHub Pages 배포 형태: user site `https://pep-pearl.github.io/`
- Vite `base`: `/`

개발 원칙:

- content-driven structure
- semantic HTML
- small components named by intent
- no global state unless needed
- no TanStack Query unless remote data exists
- no routing unless v1 콘텐츠가 실제로 요구함
- no Framer Motion in v1

## 중단 조건

다음 행동 전에는 반드시 사용자 확인을 받는다.

- 실명 공개
- 전화번호 공개
- 얼굴 사진 사용
- 업무 화면 또는 Figma 캡처 사용
- 검증되지 않은 성과 수치 공개
- 핵심 포지셔닝 변경
- 스택 변경
- 원페이지 v1을 다중 페이지로 확장
