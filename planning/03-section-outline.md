# Section Outline

이 문서는 실제 화면에 들어갈 수 있는 콘텐츠 초안이다. 디자인과 구현 단계에서 문장 길이는 조정할 수 있지만, 의미와 공개 경계는 유지한다.

## Hero

### Eyebrow

```md
Peppearl · Frontend Engineer
```

### Headline

```md
제품의 완성도를 높이는 프론트엔드 개발자
```

### Description

```md
디자인 시스템, 확장 가능한 아키텍처, AI Agent 활용 워크플로우를 바탕으로 복잡한 서비스를 안정적이고 세련되게 구현합니다.
```

### Primary CTAs

- PDF 이력서 다운로드
- 대표 프로젝트 보기
- 이메일로 연락하기

### Secondary Links

- LinkedIn
- Blog
- GitHub

GitHub는 보조 링크로만 보이게 한다.

## About

```md
React와 TypeScript를 중심으로 제품 UI의 기준과 구조를 함께 다루는 프론트엔드 개발자입니다.
디자인 시스템과 프론트엔드 아키텍처를 연결해 복잡한 서비스를 일관되고 유지보수하기 쉬운 형태로 만드는 데 관심이 있습니다.
바로 구현하기보다 구조와 기준을 먼저 정리하고, 팀이 이해할 수 있는 경계와 검토 가능한 작업 흐름을 남기는 방식을 중요하게 봅니다.
```

```md
재난/GIS 기반 업무 시스템을 개발하며 복잡한 도메인 데이터를 사용자가 이해하고 판단할 수 있는 인터페이스로 정리해 왔습니다.
최근에는 AI Agent를 기획, 디자인, 개발, 리뷰 과정에 구조적으로 활용하는 작업 흐름을 실험하고 있습니다.
```

Profile visual:

- `dog_photo.png`
- 프로필 이미지처럼 사용 가능
- Hero의 메인 이미지가 아니라 About 또는 footer의 작은 요소로 사용

## Core Strengths

### Design System

```md
디자인 의도를 구현 단위의 기준으로 바꾸는 데 관심이 있습니다.
token, component state, layout rule, accessibility를 함께 고려해 팀이 같은 기준으로 화면을 확장할 수 있는 구조를 지향합니다.
```

Evidence:

- component states
- design tokens
- Headless UI + TailwindCSS
- accessibility-aware UI
- reusable layout rules

### Frontend Architecture

```md
React와 TypeScript 기반에서 화면, 상태, 도메인 로직, 공용 UI의 경계를 정리합니다.
FSD와 pnpm workspace / monorepo 경험을 바탕으로 복잡한 서비스도 유지보수하기 쉬운 구조로 다듬는 방향을 중요하게 봅니다.
```

Evidence:

- React + TypeScript
- Vite
- Feature-Sliced Design
- pnpm workspace / monorepo
- GIS and business UI complexity

### AI Agent Workflow

```md
AI Agent를 단순 코드 생성기가 아니라 작업 기준을 명확히 하고 검토 가능한 결과물을 만들기 위한 협업 도구로 사용합니다.
단계별 rule, prompt, review gate를 나누어 기획부터 리뷰까지 안정적인 작업 흐름을 만드는 데 관심이 있습니다.
```

Evidence:

- AGENTS.md
- phase rules
- prompt templates
- review checklist
- human approval gates

## Experience

### Section Intro

```md
3년간 재난, GIS, 도로/하천 안전 관련 업무 시스템을 중심으로 프론트엔드 개발을 수행했습니다.
React 기반 화면 구현뿐 아니라 UI/UX 설계, 프론트엔드 구조 설계, 개발 환경 개선, 일부 백엔드와 인프라 작업까지 경험했습니다.
```

### Timeline Draft

1. 자사 솔루션 고도화 및 R&D  
   `2026.02 - 진행중`  
   React, TypeScript, Vite, pnpm 기반의 프론트엔드 구조와 AI 기반 개발 프로세스 실험

2. LH 재난관리 플랫폼 구축  
   `2025.06 - 2026.02`  
   UI/UX 디자인 및 프론트엔드 아키텍처 설계, FSD, monorepo, TailwindCSS, Headless UI

3. 스마트 하천 안전차단 시스템 Web/Mobile  
   `2024.06 - 2025.03`  
   Vite migration, TypeScript, API spec, GIS popup, `createPortal`

4. 도시침수 및 재난 상황관리 시스템  
   `2023.06 - 2024.06`  
   React, JavaScript, styled-components, Spring Boot, PostgreSQL, CentOS 기반의 데이터 처리와 운영 맥락 경험

정확한 회사명, 직책, 교육, 자격증 표기는 `content/resume` 또는 PDF 기준으로 반영한다. 자료에 없으면 사용자에게 인터뷰한다.

## Selected Work

### Case 01. Design System & Frontend Architecture

```md
복잡한 재난관리 플랫폼에서 화면과 기능이 늘어날수록 UI 일관성과 코드 구조의 기준이 중요해졌습니다.
FSD, pnpm 기반 monorepo, Public API 패턴, Headless UI, TailwindCSS를 활용해 화면, 상태, 도메인 로직, 공용 UI의 경계를 정리하고 확장 가능한 프론트엔드 기반을 마련했습니다.
API 응답 변화가 화면 전체로 번지지 않도록 query 단계에서 UI가 사용할 데이터 형태를 정리하는 방식도 함께 고민했습니다.
```

Related Writing:

- FE 아키텍처를 고민하며
- React Router meta/useMatches 글

### Case 02. GIS / Disaster Management Platform

```md
지도 기반 업무 시스템에서는 단순한 화면 구현보다 지도 상태, 팝업, 목록, 상세 패널, 필터가 맞물리는 흐름을 안정적으로 설계하는 일이 중요했습니다.
Vite, TypeScript, API spec, createPortal 등을 활용해 GIS UI의 렌더링 흐름과 개발 안정성을 개선했습니다.
필요한 경우 zustand, useRef, useEffect를 Escape Hatch로 활용해 지도와 React 상태 사이의 경계를 다뤘고, token refresh 경합처럼 드문 상태 불일치 가능성도 공개 가능한 수준에서 보조 사례로 설명할 수 있습니다.
```

### Case 03. AI Agent Workflow for Frontend Development

```md
AI Agent를 활용해 기획, 디자인, 개발, 리뷰 단계를 나누고 각 단계마다 rule과 prompt를 정리하는 작업 방식을 실험했습니다.
중요한 것은 AI가 코드를 대신 쓰는 것이 아니라, 사람이 검토할 수 있는 기준과 산출물을 먼저 만드는 것이라고 보고 있습니다.
Deep Research, Strategic Planning, Human Review, Hold gate를 통해 구현 전에 요구사항과 검토 기준을 먼저 문서화하는 흐름을 사용합니다.
```

## Tech Stack

```yaml
Frontend:
  - React
  - TypeScript
  - JavaScript
  - Vite
  - TailwindCSS
  - styled-components
  - Headless UI
Architecture:
  - Feature-Sliced Design
  - pnpm workspace
  - Monorepo
State and Data:
  - Zustand
  - Jotai
  - React Query
Backend Collaboration:
  - Spring Boot
  - PostgreSQL
  - MyBatis
  - Linux / CentOS
Workflow:
  - AI Agent Workflow
  - Cursor
  - Antigravity
  - Codex
```

## Resume

```md
더 자세한 경력은 PDF 이력서에서 확인할 수 있습니다.
공개용 PDF 파일명은 `이혜주_FrontendEngineer.pdf`입니다.
```

CTA:

- PDF 이력서 다운로드

주의:

- 사이트의 main public identity는 Peppearl로 유지한다.
- 전화번호는 사이트 본문과 데이터에 노출하지 않는다.

## Contact

```md
포지션 제안이나 면접 제안은 이메일로 편하게 연락해 주세요.
```

Links:

- Email: `jinjoo648@naver.com`
- LinkedIn: `https://www.linkedin.com/in/nojam2ya`
- Blog: `https://jinjoo648.tistory.com/`
- GitHub: `https://github.com/pep-pearl`

Wanted는 사용하지 않는다.
