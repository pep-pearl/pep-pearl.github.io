# Selected Work Plan

대표 케이스는 깊이 3개로 제한한다. 각 케이스는 업무 화면 캡처 없이도 문제, 판단, 구현, 학습이 보이도록 설계한다.

## Case 01. Design System & Frontend Architecture

### 이 케이스가 보여줘야 하는 역량

- UI/UX 디자인 의도를 구현 기준으로 바꾸는 역량
- Design System과 Frontend Architecture를 분리하지 않고 함께 다루는 역량
- Feature-Sliced Design, pnpm workspace / monorepo, Headless UI, TailwindCSS 기반 구조화 경험
- 컴포넌트 상태, 접근성, 공통 UI 경계를 정리하는 판단
- API 응답 변화가 UI 전체로 전파되지 않게 하는 변경 범위 관리

### 방문자가 기억해야 하는 한 문장

복잡한 업무 시스템의 화면, 데이터, 도메인 로직을 유지보수 가능한 프론트엔드 구조와 UI 기준으로 정리했다.

### 포함할 프로젝트/경험

- LH 재난관리 플랫폼 구축
- UI/UX 디자인 및 프론트엔드 아키텍처 설계
- Monorepo + FSD + Public API 패턴
- FSD 기반 slice 경계와 참조 규칙
- API 응답 변경을 query/mapper 단계에서 방어한 경험
- Headless UI, TailwindCSS 기반 컴포넌트 기준

### 공개 가능한 내용

- 프로젝트명
- 사용 기술
- 폴더 구조: `D:\01_Projects\workspace\lh_dmp`의 폴더 구조는 공개 가능
- 화면, 상태, 도메인 로직, 공용 UI 경계를 정리한 방향
- 컴포넌트 상태와 접근성 기준
- 구조 다이어그램과 decision card
- 일부 코드 조각은 필요 시 사용자 확인 후 제한적으로 사용 가능

### 공개하면 안 되는 내용

- 업무 화면 이미지
- Figma 캡처
- 고객사 내부 문서
- 내부 코드 전체
- 계정, 서버, 내부 URL
- 구체적인 성과 수치
- 프로젝트 전체 탐색을 전제로 한 과도한 코드 발췌

### 화면에서 보여줄 방식

- FSD folder diagram
- Monorepo + FSD + Public API relationship map
- component state matrix
- UI decision cards
- token/component/layout rule preview
- 데이터 변경 방어 계층 diagram
- 짧은 case card와 확장 가능한 detail block

### 필요한 추가 자료

- `lh_dmp` 폴더 구조 자체는 공개 가능하다. 다만 v1에서는 실제 사이트에 특정 경로/파일명을 인용하지 않고 public-safe 추상 구조 다이어그램으로만 표현한다.
- 코드는 전체 탐색하지 않는다. 필요한 경우 사용자에게 특정 코드 조각 요청 후 일부만 사용한다.
- 코드 제공이 어렵다면 pseudo code와 diagram으로 대체한다.

### 확정된 코멘트 반영

- FSD 경험은 실제 적용 프로젝트 경험 기반이므로 사용 가능하다.
- 데이터 변경 방어 계층은 실제 적용 프로젝트 경험 기반이므로 사용 가능하다.
- FSD/monorepo 관련 코드는 제공이 어렵지만, `lh_dmp` 폴더 구조는 공개 가능하다. 인용 전 사용자 확인을 거친다.
- MFE는 실제 도입 경험이 아니라 학습 회고/구조 검토로만 다룬다.

## Case 02. GIS / Disaster Management Platform

### 이 케이스가 보여줘야 하는 역량

- 지도 기반 업무 UI의 복잡한 상태 흐름을 구조화하는 역량
- 지도, 목록, 상세, 필터, 팝업이 맞물리는 화면 상태를 관리하는 판단
- React 상태와 지도 렌더링 영역의 경계를 다루는 판단
- Vite migration, TypeScript, API spec, `createPortal` 기반 문제 해결 경험
- `zustand`, `useRef`, `useEffect`를 Escape Hatch로 활용한 상태 관리 경험
- 공공/SI 느낌이 아니라 제품 복잡도와 사용자 흐름 중심으로 설명하는 능력

### 방문자가 기억해야 하는 한 문장

GIS 기반 업무 시스템에서 지도, 팝업, 목록, 상세, 필터가 맞물리는 흐름을 예측 가능한 프론트엔드 구조로 정리했다.

### 포함할 프로젝트/경험

- 스마트 하천 안전차단 시스템 Web/Mobile
- 도시침수 및 재난 상황관리 시스템
- LH 재난관리 플랫폼의 업무 UI 상태 관리 경험
- GIS popup 렌더링
- Vite migration
- TypeScript 도입
- API spec 정리
- token refresh race condition 대응

### 공개 가능한 내용

- 프로젝트명
- GIS UI의 문제 구조
- 지도, 목록, 상세, 필터, 팝업의 흐름
- `createPortal` 사용 방향
- `zustand`, `useRef`, `useEffect` 기반 Escape Hatch 관점
- token refresh 경합 대응의 개념적 흐름
- 개발 환경과 타입 안정성 개선 방향

### 공개하면 안 되는 내용

- 실제 업무 화면 이미지
- 지도 데이터 원본
- 고객사 내부 정보
- 서버 정보
- 계정, 토큰, 내부 URL
- 구체적인 성과 수치
- 전체 API client 코드

### 화면에서 보여줄 방식

- map/list/detail interaction diagram
- GIS popup render flow
- filter and map state flow
- Case 02 내부 implementation note 또는 token refresh single-flight diagram
- public-safe pseudo code
- public-safe API shape example

### 필요한 추가 자료

- GIS popup 또는 `createPortal` 관련 공개 가능한 코드 조각은 현재 없음.
- 지도 상태 흐름은 diagram 중심으로 표현한다.
- token race condition은 실제 업무 경험이므로 공개 가능한 수준에서 사용 가능하다.
- token race condition은 별도 대표 케이스나 독립 페이지로 분리하지 않고, Case 02 내부의 하위 구현 근거로 사용한다.
- token race condition 코드는 전체를 쓰지 않고, `content/work/approved-case-evidence.md`의 정리본을 우선 참고한다.

### 확정된 코멘트 반영

- `createPortal` / GIS popup 코드는 제공 불가.
- 코드 제공이 어려우므로 지도 상태 흐름은 diagram 중심으로 표현한다.
- token race condition 대응은 실제 업무 경험이며 공개 가능한 수준에서 사용 가능하다. 화면에서는 짧은 implementation note 또는 접을 수 있는 pseudo flow가 적합하다.
- GIS/OpenLayers/Cesium 관련 블로그 글은 현재 없음.

## Case 03. AI Agent Workflow for Frontend Development

### 이 케이스가 보여줘야 하는 역량

- AI Agent를 기준 있는 작업 파트너로 사용하는 방식
- 기획, 디자인, 개발, 리뷰 단계를 분리하는 구조화 역량
- AGENTS.md, rules, prompts, review checklist를 활용한 협업 프로세스 설계
- 사람이 최종 판단하는 review gate를 중요하게 보는 태도
- Deep Research -> Strategic Planning -> Human Review -> Implementation 흐름

### 방문자가 기억해야 하는 한 문장

AI Agent를 단순 코드 생성기가 아니라, 사람이 검토 가능한 기준과 산출물을 만드는 구조화된 작업 파트너로 사용한다.

### 포함할 프로젝트/경험

- Peppearl career site build process
- AGENTS.md
- phase rules
- prompt templates
- review checklist
- human-in-the-loop workflow
- vibe coding workflow 정리본

### 공개 가능한 내용

- 이 저장소의 공개 문서 구조
- Interview -> Seed -> Execute -> Evaluate -> Evolve 흐름
- Research -> Plan -> Hold -> Implement -> Review 단계
- rules/prompts/docs/content 분리 방식
- AI Agent를 검토 가능한 워크플로우로 쓰는 관점
- Deep Research, Strategic Planning, Human Review 단계의 요약

### 공개하면 안 되는 내용

- 비공개 업무 프롬프트
- 내부 문서
- 고객사 자료
- AI 사용으로 얻은 구체적 생산성 수치
- 사람의 판단을 대체한다는 표현
- 자사 솔루션 R&D의 비공개 AI workflow 예시

### 화면에서 보여줄 방식

- workflow timeline
- phase gate diagram
- AGENTS.md / rules / prompts relationship map
- prompt card examples
- review checklist preview
- human approval gate 강조

### 필요한 추가 자료

- 현재 포트폴리오 제작 과정 자체를 근거로 사용한다.
- 자사 솔루션 R&D에서 추가 공개 가능한 AI workflow 예시는 없음.
- 실제 prompt 전문은 필요 시 요약 카드로만 사용한다.
- `content/work/ai-agent-workflow-source.md`를 우선 참고한다.

### 확정된 코멘트 반영

- Case 03은 포트폴리오 제작 과정 자체로 보여줘도 된다.
- 자사 솔루션 R&D 공개 예시는 없음.
- 블로그에서 AI Agent 관련 글은 없음.
- AI가 모든 것을 대신한다는 인상을 주면 안 되며, 검수/검토 등 인간 개입을 적극적으로 보여줘야 한다.
