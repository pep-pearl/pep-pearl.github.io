# Resume Source for Codex

이 파일은 Codex가 사이트 콘텐츠, 섹션 구조, 대표 케이스를 만들 때 참고할 구조화된 이력서 원천 자료다. 공개 사이트에는 `content/resume/resume.site.md`를 우선 사용한다.

## Privacy

- Public identity는 Peppearl이다.
- 전화번호는 절대 공개하지 않는다.
- phone 값은 `DO_NOT_PUBLISH`로만 표기한다.
- 실명, 얼굴 사진, 업무 화면, Figma 캡처, 검증되지 않은 성과 수치는 사용자 승인 전까지 사용하지 않는다.

## Profile

## Quick Facts

- Public name: Peppearl
- Role: Frontend Engineer
- Career: 3 years
- Email: [jinjoo648@naver.com](mailto:jinjoo648@naver.com)
- Phone: DO_NOT_PUBLISH
- LinkedIn: [https://www.linkedin.com/in/nojam2ya](https://www.linkedin.com/in/nojam2ya)
- Wanted: not used
- Public resume PDF: `이혜주_FrontendEngineer.pdf`

```yaml
public_name: Peppearl
role: Frontend Engineer
career: 3 years
email: jinjoo648@naver.com
phone: DO_NOT_PUBLISH
main_language: Korean
positioning: 지속 가능한 디자인 시스템과 확장성 있는 아키텍처로 제품의 완성도를 높이는 프론트엔드 개발자
```

## Summary

React와 TypeScript를 중심으로 제품 UI의 기준과 구조를 함께 다루는 프론트엔드 개발자입니다. 디자인 시스템, 프론트엔드 아키텍처, AI Agent Workflow를 연결해 복잡한 업무 서비스를 일관되고 유지보수하기 쉬운 형태로 만드는 데 관심이 있습니다.

## 핵심 역량

### Design System

- UI를 단발성 화면이 아니라 반복 가능한 기준으로 정리한다.
- tokens, components, states, layout rules, accessibility를 함께 고려한다.
- Headless UI, TailwindCSS 기반의 일관된 컴포넌트 구현 경험을 보유한다.
- 실제 화면 대신 상태표, 의사결정 기록, 다이어그램으로 설계 의도를 설명할 수 있다.

### Frontend Architecture

- React, TypeScript, Vite 기반 프론트엔드 개발 경험을 보유한다.
- Feature-Sliced Design과 pnpm workspace / monorepo 구조를 실무 맥락에서 다뤘다.
- 화면, 상태, 도메인 로직, 공용 UI의 경계를 나누는 구조를 중요하게 본다.
- GIS, 재난관리, 복잡한 업무 UI처럼 정보량이 많은 인터페이스를 다룬 경험이 있다.

### AI Agent Workflow

- Cursor, Antigravity, Codex 등 AI 도구를 작업 파트너로 사용한다.
- AI Agent를 단순 코드 생성기가 아니라 기획, 구현, 리뷰, 리팩터링을 돕는 구조화 도구로 본다.
- AGENTS.md, rule, prompt, review gate를 통해 사람이 검토 가능한 기준을 먼저 세우는 방식을 지향한다.

## 기술 스택

```yaml
frontend:
  - React
  - TypeScript
  - JavaScript
  - Vite
  - TailwindCSS
  - styled-components
  - Headless UI
state_and_data:
  - Zustand
  - Jotai
  - React Query
architecture:
  - Feature-Sliced Design
  - pnpm
  - pnpm workspace
  - Monorepo
backend_and_database:
  - Spring Boot
  - PostgreSQL
  - MyBatis
infra:
  - Linux
  - CentOS
visualization:
  - Chart.js
gis_and_map_ui:
  - GIS service UI
  - map popup
  - createPortal
ai_tools:
  - Cursor
  - Antigravity
  - Codex
```

## 경력

```yaml
current_role: Frontend Engineer
career_years: 3 years
company_name: 확인 필요
position_title: 확인 필요
period: 확인 필요
domains:
  - disaster management
  - GIS / map-based business systems
  - road / river / safety management interfaces
public_note: 회사명, 직책, 세부 도메인은 공개 가능. 정확한 표기는 content/resume 또는 PDF 기준으로 반영하고, 자료에 없으면 사용자에게 인터뷰한다.
```

경력 요약:

재난, GIS, 도로/하천 안전 관련 업무 시스템을 중심으로 프론트엔드 개발을 수행했습니다. 복잡한 도메인 데이터를 사용자가 탐색하고 판단할 수 있는 화면 구조로 정리하고, React 기반 개발 환경과 UI/UX 기준을 개선하는 작업에 참여했습니다.

## 프로젝트

### 1. 자사 솔루션 고도화 및 R&D

```yaml
period: 2026.02 - 진행중
stack:
  - React
  - TypeScript
  - Vite
  - pnpm
role: 프론트엔드 아키텍처 설계 및 AI 기반 개발 프로세스 도입
keywords:
  - AI Pair Programming
  - Cursor
  - Antigravity
  - prototype
  - workflow
```

요약:

신규 솔루션 또는 프로토타입을 빠르게 검증하기 위해 React, TypeScript, Vite, pnpm 기반의 개발 환경을 다루고, AI 도구를 기획과 구현, 리뷰 과정에 연결하는 작업 흐름을 실험했습니다. AI를 코드 생성기로만 사용하지 않고, 반복 작업을 줄이면서 사람이 검토 가능한 기준과 산출물을 만드는 방향에 초점을 둡니다.

### 2. LH 재난관리 플랫폼 구축

```yaml
period: 2025.06 - 2026.02
stack:
  - React
  - TypeScript
  - Vite
  - TailwindCSS
  - Headless UI
role: UI/UX 디자인 및 프론트엔드 아키텍처 설계 주도
keywords:
  - FSD
  - Monorepo
  - pnpm
  - DI
  - design consistency
  - accessibility
```

요약:

복잡한 재난관리 도메인의 화면과 기능을 유지보수 가능한 구조로 정리하는 프로젝트입니다. Feature-Sliced Design, pnpm 기반 monorepo, Headless UI와 TailwindCSS를 활용해 UI 일관성, 접근성, 확장 가능한 프론트엔드 구조를 함께 고려했습니다.

### 3. 스마트 하천 안전차단 시스템 Web/Mobile

```yaml
period: 2024.06 - 2025.03
stack:
  - React
  - TypeScript
  - Vite
  - styled-components
role: 프론트엔드 환경 고도화 및 GIS 서비스 최적화
keywords:
  - Vite migration
  - TypeScript
  - API spec
  - createPortal
  - GIS popup
```

요약:

지도 기반 서비스에서 프론트엔드 개발 환경과 GIS UI 렌더링 흐름을 개선한 프로젝트입니다. Vite 마이그레이션, TypeScript 도입, API 스펙 정리, `createPortal` 기반 GIS 팝업 처리 등을 통해 개발 안정성과 화면 상태 관리의 예측 가능성을 높이는 방향으로 작업했습니다.

성과 수치 공개 주의:

- 빌드 속도, 오류 감소 등 수치가 있다면 공개 전 검증 및 사용자 승인이 필요하다.

### 4. 도시침수 및 재난 상황관리 시스템

```yaml
period: 2023.06 - 2024.06
stack:
  - React
  - JavaScript
  - styled-components
  - Spring Boot
  - PostgreSQL
  - CentOS
role: 풀스택 기반 데이터 처리 및 인프라 보안 조치
keywords:
  - MyBatis
  - Spring Boot
  - report automation
  - CentOS
  - security
```

요약:

프론트엔드뿐 아니라 데이터 처리, 백엔드 로직, 서버 환경까지 함께 이해하며 작업한 프로젝트입니다. MyBatis 기반 데이터 조회, Spring Boot 로직, 보고서 자동화, CentOS 서버 설치 및 보안 설정 등 복잡한 업무 데이터를 시스템화하는 작업에 참여했습니다.

## 교육

교육 이력은 공개 가능하다. 정확한 학교명, 전공명, 졸업/예정일은 `content/resume` 또는 PDF 기준으로 반영한다. 자료에 없거나 추가 설명이 필요하면 사용자에게 인터뷰한다.

```yaml
education_status: public_allowed
public_note: content/resume 또는 PDF 기준으로 반영. 누락 시 인터뷰.
```

## 자격증

자격증은 공개 가능하다. 정확한 자격증명, 발급기관, 취득일은 `content/resume` 또는 PDF 기준으로 반영한다. 자료에 없거나 추가 설명이 필요하면 사용자에게 인터뷰한다.

```yaml
certifications_status: public_allowed
public_note: content/resume 또는 PDF 기준으로 반영. 누락 시 인터뷰.
```

## 링크

- GitHub: [https://github.com/pep-pearl](https://github.com/pep-pearl)
- Blog: [https://jinjoo648.tistory.com/](https://jinjoo648.tistory.com/)
- LinkedIn: [https://www.linkedin.com/in/nojam2ya](https://www.linkedin.com/in/nojam2ya)

## 공개 정책 업데이트

- 회사명, 프로젝트명, 교육, 자격증은 공개 가능하다.
- 구체적인 성과 수치는 공개하지 않는다.
- 코드 스니펫이 필요하면 먼저 사용자에게 요청한다.
- 사용자가 코드 제공이 어렵다고 답하면 다이어그램과 pseudo code 중심으로 표현한다.

## 공개용 작성 노트

선호:

- 구조화하다
- 기준을 세우다
- 유지보수하기 쉽게 만들다
- 사용자 흐름을 단순화하다
- 검증하고 다듬다
- 확장 가능한 구조
- 제품의 완성도를 높이다

피하기:

- 최고
- 완벽
- 압도적
- 모든 문제를 해결
- 천재적
- 겸손한 사람
- AI로 다 해냄
