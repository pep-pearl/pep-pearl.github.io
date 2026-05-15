# Selected Work Source

이 파일은 대표 포트폴리오 케이스 3개의 원천 자료다. 실제 사이트에서는 스크린샷 대신 다이어그램, 코드 스니펫, state matrix, decision card를 사용한다.

## Public Policy

- 프로젝트명은 공개 가능하다.
- 업무 화면과 Figma 캡처는 기본적으로 사용하지 않는다.
- 구체적인 성과 수치는 공개하지 않는다.
- 코드 스니펫이 필요하면 먼저 사용자에게 요청한다.
- 사용자가 코드 제공이 어렵다고 답하면 다이어그램과 pseudo code 중심으로 표현한다.
- `lh_dmp`의 폴더 구조는 공개 가능하다. 단, 특정 경로/파일명/구조를 실제 사이트에 인용할 때는 민감한 회사 정보가 없는지 사용자에게 한 번 확인받는다.
- token refresh race condition 대응은 실제 업무 경험이며 공개 가능한 수준에서 사용할 수 있다.
- token refresh race condition은 별도 대표 케이스나 독립 페이지로 분리하지 않고, Case 02 내부의 implementation evidence로 사용한다.
- MFE는 실제 도입 경험이 아니라 구조 검토 및 학습 회고로만 표현한다.

## Case 01. Design System & Frontend Architecture

### Context

LH 재난관리 플랫폼 구축 프로젝트에서 복잡한 업무 화면과 도메인 로직을 React 기반 프론트엔드로 구현해야 했다. 화면 수와 기능이 늘어날수록 UI 일관성, 컴포넌트 상태, 폴더 구조, 공통 패키지 관리 기준이 중요해졌다.

### Problem

- 도메인 로직과 UI 구현이 섞이면 유지보수 비용이 커질 수 있었다.
- 화면마다 비슷한 패턴이 반복되어도 기준이 없으면 UI 일관성이 흔들릴 수 있었다.
- 팀과 프로젝트가 확장될수록 공통 컴포넌트, 상태, 접근성 기준이 필요했다.
- Headless UI와 TailwindCSS를 사용할 때도 설계 기준이 없으면 단발성 스타일 조합으로 끝날 위험이 있었다.

### My Role

UI/UX 디자인과 프론트엔드 아키텍처 설계에 참여했다. 화면 구조, 컴포넌트 기준, FSD 기반 폴더 구조, pnpm workspace / monorepo 흐름을 함께 고려하며 유지보수 가능한 프론트엔드 기반을 만드는 데 집중했다.

### Key Decisions

- Feature-Sliced Design을 기준으로 기능, 엔티티, 공용 UI의 경계를 나눈다.
- pnpm 기반 monorepo 구조로 공통 패키지와 앱 코드를 분리할 수 있게 한다.
- Monorepo + FSD + Public API 패턴으로 참조 지점과 변경 범위를 명확히 한다.
- API 응답 변화가 UI 전체로 전파되지 않도록 query/mapper 단계에서 데이터 형태를 정리한다.
- Headless UI는 접근성과 상태 제어가 필요한 컴포넌트의 기반으로 사용한다.
- TailwindCSS는 디자인 일관성을 유지하되, 의미 없는 임의 스타일이 늘어나지 않게 기준화한다.
- 실제 업무 화면 캡처 대신 컴포넌트 상태표와 아키텍처 다이어그램으로 설명한다.

### Implementation

- FSD 기준의 폴더와 모듈 참조 규칙을 정리했다.
- 공통 UI와 업무 기능 UI의 책임을 분리했다.
- Public API 역할의 `index` 파일을 통해 외부 참조 지점을 정리하는 방향을 고려했다.
- API 응답 wrapper나 데이터 구조 변경이 상위 UI까지 번지지 않도록 변환 계층을 두는 방식을 고민했다.
- 재사용 가능한 컴포넌트의 상태, hover, focus, disabled, empty, loading 케이스를 고려했다.
- TailwindCSS와 Headless UI를 함께 사용해 UI 일관성과 접근성 기반을 잡았다.
- 공통 패키지와 앱 코드가 분리될 수 있도록 pnpm workspace / monorepo 구조를 고려했다.

### What I Learned

디자인 시스템은 컴포넌트 모음만으로 충분하지 않다. 화면, 상태, 도메인 로직, 접근성, 패키지 경계가 같은 기준으로 연결되어야 실제 프로젝트에서 유지보수 가능한 시스템이 된다.

### Possible UI Representation

- FSD folder diagram
- Monorepo + FSD + Public API relationship map
- component state matrix
- data transformation boundary diagram
- token and component decision cards
- before/after style rule comparison
- public-safe architecture diagram

## Case 02. GIS / Disaster Management Platform

### Context

스마트 하천 안전차단 시스템 Web/Mobile, 도시침수 및 재난 상황관리 시스템 등 GIS 기반 업무 시스템에서 지도와 업무 데이터가 결합된 화면을 다뤘다. 사용자는 지도, 목록, 상세 정보, 필터, 팝업을 오가며 상황을 탐색하고 판단해야 했다.

### Problem

- 지도 기반 UI는 React 컴포넌트 트리와 지도 라이브러리 렌더링 흐름이 다르게 움직일 수 있다.
- GIS 팝업, 필터, 목록, 상세 패널이 서로 영향을 주기 때문에 상태 설계가 복잡해진다.
- 개발 환경이 느리거나 타입 기준이 부족하면 지도 UI의 오류를 추적하기 어려워진다.
- 공공 또는 업무 시스템처럼 보이기 쉬운 내용을 제품 관점의 구조와 인터랙션으로 설명해야 한다.

### My Role

프론트엔드 개발 환경 고도화와 GIS 서비스 UI 개선에 참여했다. Vite migration, TypeScript 도입, API spec 정리, GIS popup 렌더링 흐름 개선 등을 통해 복잡한 지도 기반 인터페이스를 더 안정적으로 다루는 데 집중했다.

### Key Decisions

- 기존 개발 환경을 Vite 기반으로 전환해 프론트엔드 작업 안정성을 높인다.
- TypeScript와 API spec을 통해 데이터 형태와 화면 상태를 더 명확히 한다.
- GIS 팝업은 `createPortal`을 활용해 지도 렌더링 영역과 React 상태 사이의 경계를 정리한다.
- 지도, 목록, 상세, 필터, 팝업 상태가 맞물릴 때는 `zustand`, `useRef`, `useEffect`를 Escape Hatch로 활용해 변경 범위를 좁힌다.
- token refresh 경합은 single-flight 흐름으로 정리하되, 전체 코드는 공개하지 않는다.
- 지도, 목록, 상세, 필터의 연결 관계를 화면 구조와 상태 흐름으로 설명한다.
- 실제 업무 화면 대신 지도 인터랙션 흐름도와 상태 다이어그램을 사용한다.

### Implementation

- Vite migration으로 개발 환경을 현대화했다.
- TypeScript를 도입해 API와 UI 상태의 예측 가능성을 높였다.
- GIS popup 렌더링에 `createPortal`을 적용해 React 상태와 지도 DOM 사이의 불일치를 줄이는 방향으로 구현했다.
- 지도 기반 화면에서 필터, 팝업, 상세 패널이 연결되는 흐름을 구조화했다.
- 브라우저 탭 간 token refresh 경합은 BroadcastChannel/LocalStorage 기반 single-flight 관점으로 다뤘다. 사이트에서는 Case 02 내부의 짧은 implementation note나 pseudo flow로 표현한다.
- 일부 프로젝트에서는 Spring Boot, PostgreSQL, MyBatis, CentOS 환경까지 함께 이해하며 데이터 처리와 운영 맥락을 다뤘다.

### What I Learned

GIS 기반 UI는 지도를 그리는 기술보다 사용자가 어떤 순서로 정보를 찾고 판단하는지가 더 중요하다. 지도 상태와 React 상태의 경계를 명확히 정리해야 복잡한 업무 흐름도 예측 가능한 인터페이스가 된다.

### Possible UI Representation

- map/list/detail interaction diagram
- GIS popup render flow
- token refresh single-flight diagram
- `createPortal` code snippet
- API spec example with sensitive fields removed
- filter and map-state flow chart

## Case 03. AI Agent Workflow for Frontend Development

### Context

자사 솔루션 고도화 및 R&D, 그리고 이 커리어 사이트 제작 과정에서 AI Agent를 작업 흐름에 구조적으로 활용하려는 실험을 진행한다. 목표는 빠른 코드 생성보다 기획, 디자인, 개발, 리뷰의 기준을 명확히 하고 사람이 검토 가능한 산출물을 만드는 것이다.

### Problem

- AI 도구를 기준 없이 사용하면 결과물의 일관성과 검증 가능성이 떨어질 수 있다.
- 기획 없이 바로 구현하면 커리어 사이트의 목적과 공개 경계가 흐려질 수 있다.
- 디자인, 개발, 리뷰 단계가 섞이면 개인정보, 과장 표현, 비공개 자료 사용 위험이 커질 수 있다.
- AI 결과를 그대로 신뢰하기보다 사람이 판단할 수 있는 문서와 체크리스트가 필요했다.

### My Role

AI 기반 개발 프로세스 도입과 프론트엔드 아키텍처 설계에 참여했다. AGENTS.md, phase rules, reusable skills, review checklist를 통해 AI Agent가 참고할 기준을 만들고, 사용자 승인 지점과 공개 경계를 명확히 하는 흐름을 구성했다.

### Key Decisions

- 프로젝트를 `Interview -> Seed -> Execute -> Evaluate -> Evolve` 흐름으로 다룬다.
- 각 주요 단계는 `Research -> Plan -> Hold -> Implement -> Review`를 따른다.
- Deep Research -> Strategic Planning -> Human Review -> Implementation 흐름으로 AI 작업을 분리한다.
- 기획, 디자인, 개발, 리뷰 단계별 rule과 prompt를 분리한다.
- 단계 전환 전 Hold를 두어 사람이 최종 판단하도록 한다.
- AI Agent가 추정한 사실은 공개하지 않고 open question으로 남긴다.

### Implementation

- `AGENTS.md`에 프로젝트 목적, 공개 경계, 단계별 작업 규칙을 정의했다.
- `rules/*.md`와 reusable skills를 기준으로 단계별 작업 경계를 분리했다.
- `docs/` 지식 베이스를 만들어 Codex가 반복해서 참고할 기준을 마련했다.
- `content/resume/resume.codex.md`와 `content/resume/resume.site.md`를 분리해 내부 이해용 자료와 공개용 카피를 나눴다.
- `docs/07-final-review-checklist.md`로 최종 검수 기준을 명확히 했다.
- AI Agent가 만든 계획은 사람이 검토하고 승인한 뒤 다음 단계로 넘기는 방식을 유지했다.

### What I Learned

AI Agent를 잘 쓰려면 더 많은 지시를 한 번에 주는 것보다, 단계별 기준과 검토 지점을 분리하는 편이 중요하다. 사람이 판단해야 할 공개 범위와 포지셔닝은 문서로 남겨야 반복 작업에서도 일관성을 지킬 수 있다.

### Possible UI Representation

- workflow timeline
- phase gate diagram
- AGENTS.md / rules / prompts relationship map
- prompt card examples
- review checklist preview
- human review gate diagram
