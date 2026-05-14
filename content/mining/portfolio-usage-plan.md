# Portfolio Usage Plan

이 문서는 면접 준비 자료, 블로그, 사용자 `[comment]`를 반영해 사이트에 어떻게 사용할지 정리한다. 원문 답변 문체와 긴 코드 블록은 사이트에 직접 사용하지 않는다.

## About에 반영할 내용

### 일하는 방식

- 바로 구현하기보다 구조와 기준을 먼저 정리한다.
- 새로운 구조를 도입할 때 시행착오와 팀 러닝 커브를 함께 고려한다.
- 기술 선택을 유행이 아니라 프로젝트 규모, 배포 방식, 유지보수 비용의 문제로 본다.
- AI Agent를 사용할 때도 사람 검토와 승인 지점을 분명히 둔다.

### 학습 태도

- React 19, MFE, route metadata 등 프론트엔드 흐름을 학습하고 기존 방식과 비교한다.
- 학습 글은 현재 숙련도를 과장하는 근거가 아니라 사고방식의 보조 증거로만 사용한다.

### 복잡한 문제를 정리하는 방식

- API 응답 변경이 UI 전체로 전파되지 않도록 변환 계층을 둔다.
- FSD와 public API를 통해 참조 경계를 명확히 한다.
- 지도 기반 UI에서는 전역 상태, refs, effects를 필요에 따라 Escape Hatch로 사용하되, 흐름을 diagram으로 설명한다.
- AI Agent 산출물도 human review와 상호 검증을 거친다.

### 겸손함을 직접 말하지 않고 드러낼 수 있는 문장

- "새로운 구조를 도입할 때는 패턴 자체보다 팀이 이해하고 지킬 수 있는 기준까지 함께 고민했습니다."
- "정답을 단정하기보다 프로젝트 규모와 운영 제약에 맞는 구조를 선택하려고 합니다."
- "AI Agent를 빠른 코드 생성보다 사람이 검토할 수 있는 계획과 기준을 만드는 데 활용합니다."

## Core Strengths에 반영할 내용

### 반복해서 드러나는 강점

- 경계를 나누는 사고
- 변경 범위를 제한하려는 태도
- 팀이 이해할 수 있는 구조와 기준을 만드는 방식
- 도구와 아키텍처의 trade-off를 비교하는 습관
- 사람 검토를 중심에 둔 AI 활용 방식

### Design System과 연결되는 경험

- 컴포넌트 상태와 접근성 기준
- Headless UI, TailwindCSS 기반 UI 일관성
- public API 관점의 컴포넌트 노출 방식

### Frontend Architecture와 연결되는 경험

- FSD 도입
- Monorepo + FSD + Public API 패턴
- React Query `select`를 활용한 데이터 변환 계층
- route metadata 타입 확장 글
- MFE 구조 검토 및 학습 회고
- token refresh race condition 대응

### AI Agent Workflow와 연결되는 경험

- Deep Research
- Strategic Planning
- Human Review & Iteration
- Hold gate
- cross-checking
- model tiering

## Selected Work에 반영할 내용

## Case 01. Design System & Frontend Architecture

### 추가하면 좋은 경험 소재

- FSD 도입으로 순환 참조와 얽힌 의존성을 정리한 경험
- public API 역할의 `index` 파일로 참조 지점을 명확히 한 경험
- Monorepo + FSD + Public API 패턴으로 데이터 변경 방어 목적까지 함께 다룬 경험
- React Query `select`를 Anti-Corruption Layer처럼 사용해 데이터 변경 범위를 제한한 경험
- MFE는 실제 도입이 아니라 구조 검토/학습 회고로만 다룬다.

### 추가하면 좋은 블로그 글

- `FE 아키텍처를 고민하며`
- `[React Router] 라우트에 페이지 제목(meta) 넣고 useMatches로 꺼내 쓰는 방법`

### 사이트 카피 후보

- "복잡한 업무 화면의 의존성이 얽히지 않도록 feature 단위 경계와 public API 기준을 정리했습니다."
- "API 응답 변화가 화면 전체로 번지지 않도록 query 단계에서 UI가 사용할 데이터 형태를 정리했습니다."
- "구조 선택을 기술 유행이 아니라 프로젝트 규모, 배포 단위, 팀 운영 방식의 문제로 바라봤습니다."

### 주의할 점

- 생산성이나 만족도 개선을 수치 없이 과장하지 않는다.
- MFE는 실제 도입 경험이 아니라 학습 회고로 표기한다.
- `lh_dmp` 폴더 구조 자체는 공개 가능하지만, 실제 사이트에 특정 경로/파일명/구조를 인용할 때는 사용자 확인을 거친다.

### 사용자에게 확인할 질문

- 코드 일부를 사용할 경우 사용자가 별도 제공한 조각만 사용한다.
- `lh_dmp` 폴더 구조를 실제 문구나 다이어그램에 인용할 때는 민감한 회사 정보가 없는지 사용자에게 한 번 확인받는다.

## Case 02. GIS / Disaster Management Platform

### 추가하면 좋은 경험 소재

- 지도, 목록, 상세, 필터, 팝업 상태가 맞물릴 때 변경 범위를 좁히는 사고
- `zustand`, `useRef`, `useEffect`를 통해 필요한 경우 Escape Hatch를 사용한 경험
- token refresh race condition 대응은 실제 업무 경험으로, 공개 가능한 수준에서 보조 사례로 사용 가능
- token refresh race condition은 별도 케이스가 아니라 Case 02 내부 implementation evidence로 사용
- GIS popup 또는 `createPortal` 코드는 현재 제공 불가이므로 diagram 중심으로 표현

### 추가하면 좋은 블로그 글

- 현재 확인된 블로그 글 중 GIS/OpenLayers/Cesium 직접 관련 글은 없음

### 사이트 카피 후보

- "지도 기반 업무 UI에서는 데이터 형태와 화면 상태가 함께 움직이기 때문에, 변경 지점을 좁히는 구조가 중요하다고 보고 접근했습니다."
- "탭 간 token refresh 경합처럼 드물지만 치명적인 상태 불일치 가능성도 브라우저 호환성과 리소스 비용을 함께 고려해 다뤘습니다."

### 주의할 점

- GIS 관련 블로그 글을 근거로 쓰지 않는다.
- token race condition 코드는 전체 공개하지 않는다.
- 보안/인증 구현이 상세히 노출되지 않도록 single-flight 흐름과 pseudo code 중심으로 설명한다.

### 사용자에게 확인할 질문

- 추가 질문 없음. token race condition은 Case 02의 하위 구현 근거로 사용하고, 화면에서는 짧은 implementation note 또는 접을 수 있는 pseudo flow로 표현한다.

## Case 03. AI Agent Workflow for Frontend Development

### 추가하면 좋은 경험 소재

- Deep Research: 관련 코드와 의존성을 먼저 분석하고 research 문서화
- Strategic Planning: 구현 전 plan 문서로 리스크, 변경 지점, 검증 기준 정리
- Human Review & Iteration: 사람이 계획을 검토하고 승인 전까지 구현하지 않음
- Hold gate: 단계 전환 전 멈추고 검토
- Model tiering: 작업 성격에 따라 모델 역할을 나눔

### 추가하면 좋은 블로그 글

- 현재 확인된 블로그 글 중 AI Agent / Cursor / Codex / Antigravity 직접 관련 글은 없음
- 이 케이스는 블로그보다 `AGENTS.md`, `rules/*.md`, `prompts/*.md`, planning 문서 자체를 근거로 쓰는 편이 적합함

### 사이트 카피 후보

- "AI Agent를 코드 생성기가 아니라, 계획과 검토 기준을 함께 만드는 작업 파트너로 사용합니다."
- "구현 전에 요구사항과 검토 기준을 먼저 문서화해 구조적 훼손을 줄이는 방식으로 작업합니다."
- "작업 단계마다 사람이 검토하고 승인하는 지점을 두어 AI 산출물이 제품 기준을 넘지 않도록 관리합니다."

### 주의할 점

- AI가 모든 것을 대신한다는 인상을 주지 않는다.
- 검수, 검토, 승인 등 인간 개입을 적극적으로 시사한다.
- 생산성 수치나 속도 개선 수치를 쓰지 않는다.
- 자사 R&D 공개 예시는 없음. 현재 포트폴리오 제작 과정 자체를 근거로 한다.

### 사용자에게 확인할 질문

- Case 03을 현재 포트폴리오 제작 과정 자체로 보여주는 방향은 가능으로 확인됨.
- 추가 질문 없음. 실제 디자인 단계에서는 화면 표현 수준만 결정하면 된다.

## Resume / Contact / Footer에 반영할 내용

### Resume

- 면접 자료나 블로그 내용을 길게 넣지 않는다.
- Resume section은 PDF 다운로드와 짧은 경력 요약에 집중한다.

### Contact

- 면접 준비 자료나 블로그 글을 넣지 않는다.
- Email CTA만 명확히 둔다.

### Footer

- Blog 링크는 footer 또는 secondary links에 둔다.
- GitHub보다 업무 경험과 Selected Work가 먼저 보이게 한다.
- Blog 글 후보는 Related Writing 수준으로만 사용한다.
