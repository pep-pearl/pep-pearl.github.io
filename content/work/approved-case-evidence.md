# Approved Case Evidence Source

이 문서는 사용자 `[comment]`로 승인된 포트폴리오 근거 자료를 케이스별로 정리한다. 실제 사이트 문구를 만들 때는 이 파일을 우선 참고한다.

## Case 01. Design System & Frontend Architecture

### 승인된 근거

- FSD / monorepo 구조 개선은 실제 적용 프로젝트 경험이다.
- 데이터 변경 방어 계층은 실제 적용 프로젝트 경험이다.
- `D:\01_Projects\workspace\lh_dmp`의 폴더 구조는 공개 가능하다.
- 단, 특정 경로/파일명/구조를 사이트에 인용할 때는 민감한 회사 정보가 섞이지 않도록 사용자에게 한 번 확인받는다.
- 코드는 제공이 어렵거나 일부만 공개 가능하므로, 기본은 diagram과 pseudo code 중심이다.

### 핵심 메시지

Monorepo + FSD + Public API 패턴을 통해 화면, 상태, 도메인 로직, 공용 UI의 참조 경계를 정리했고, API 응답 변화가 UI 전체로 전파되지 않도록 변경 범위를 좁혔다.

### 사용할 수 있는 표현

- "복잡한 업무 화면의 의존성이 얽히지 않도록 feature 단위 경계와 public API 기준을 정리했습니다."
- "API 응답 변화가 화면 전체로 번지지 않도록 query 단계에서 UI가 사용할 데이터 형태를 정리했습니다."
- "Monorepo 구조 안에서도 기능 단위 경계와 공용 API를 명확히 해 팀이 탐색 가능한 구조를 만들었습니다."

### 추천 시각화

- Monorepo + FSD + Public API relationship map
- 폴더 구조 일부
- 데이터 변경 방어 계층 diagram
- component state matrix

### 주의

- 개발 생산성, 만족도 같은 표현은 수치 없이 과장하지 않는다.
- `lh_dmp` 폴더 구조 자체는 공개 가능하지만, 실제 인용 전 사용자 확인을 거친다.
- MFE는 실제 도입 경험이 아니라 학습 회고/구조 검토로만 표현한다.

## Case 02. GIS / Disaster Management Platform

### 승인된 근거

- GIS 상태 변경 범위 관리 경험은 실제 적용 경험이다.
- 지도, 목록, 상세, 필터, 팝업 상태가 맞물릴 때 `zustand`, `useRef`, `useEffect`를 Escape Hatch로 활용한 관점을 포함할 수 있다.
- token refresh race condition 대응은 실제 업무 경험이다.
- token refresh race condition은 별도 대표 케이스나 독립 페이지로 분리하지 않고, Case 02 내부의 구현 근거로 사용한다.
- GIS popup / `createPortal` 관련 코드는 현재 제공 불가이므로 diagram 중심으로 표현한다.

### 핵심 메시지

GIS 기반 업무 시스템에서는 지도 상태, React 상태, 전역 상태, 상세/목록/필터 흐름이 함께 움직인다. Peppearl은 이 흐름을 변경 범위와 동기화 관점에서 정리했다.

### 사용할 수 있는 표현

- "지도 기반 업무 UI에서는 데이터 형태와 화면 상태가 함께 움직이기 때문에, 변경 지점을 좁히는 구조가 중요하다고 보고 접근했습니다."
- "필요한 경우 zustand, useRef, useEffect를 Escape Hatch로 활용해 지도와 React 상태 사이의 경계를 다뤘습니다."
- "탭 간 token refresh 경합처럼 드물지만 치명적인 상태 불일치 가능성도 브라우저 호환성과 리소스 비용을 함께 고려해 다뤘습니다."

### Token Race Condition 공개용 흐름

아래는 사이트에서 설명 가능한 수준의 pseudo flow다. 실제 코드 전체를 공개하지 않는다. 화면에서는 Case 02 상세 영역의 implementation note, expandable block, 또는 짧은 sequence diagram으로 표현하는 것이 적합하다.

```txt
1. access token 만료 또는 401 응답 발생
2. refresh 요청이 이미 진행 중인지 storage lock 확인
3. lock이 있으면 짧게 대기하며 최신 token 신호를 확인
4. lock이 없으면 현재 탭이 refresh leader가 됨
5. leader 탭이 refresh 요청 수행
6. 성공 시 BroadcastChannel로 token-updated 이벤트 전달
7. 대기 중인 탭은 최신 token으로 원래 요청 재시도
8. 실패 또는 timeout이면 lock을 해제하고 로그인 흐름으로 넘김
```

### 추천 시각화

- map/list/detail/filter state flow
- GIS popup render boundary diagram
- single-flight token refresh sequence
- Escape Hatch decision card

### 주의

- 인증/보안 구현 세부를 과하게 공개하지 않는다.
- endpoint, storage key, 프로젝트 내부 타입명 등은 사이트 본문에 노출하지 않는다.
- 구체적인 성과 수치는 쓰지 않는다.

## Case 03. AI Agent Workflow for Frontend Development

### 승인된 근거

- Case 03은 현재 포트폴리오 제작 과정 자체를 근거로 사용 가능하다.
- 자사 솔루션 R&D에서 공개 가능한 별도 AI workflow 예시는 없다.
- AI 관련 블로그 글은 없다.
- AI가 개발을 대신한다는 인상을 주지 않아야 하며, 인간 검수/검토/승인 gate를 적극적으로 보여줘야 한다.

### 핵심 메시지

AI Agent를 코드 생성기가 아니라, 사람이 검토 가능한 기준과 산출물을 만드는 작업 파트너로 사용한다.

### 사용할 수 있는 표현

- "AI Agent를 코드 생성기가 아니라, 계획과 검토 기준을 함께 만드는 작업 파트너로 사용합니다."
- "구현 전에 요구사항과 검토 기준을 먼저 문서화해 구조적 훼손을 줄이는 방식으로 작업합니다."
- "작업 단계마다 사람이 검토하고 승인하는 지점을 두어 AI 산출물이 제품 기준을 넘지 않도록 관리합니다."

### 추천 시각화

- Deep Research -> Strategic Planning -> Human Review -> Implementation timeline
- AGENTS.md / rules / prompts / planning relationship map
- Hold gate diagram
- Human review checklist preview

### 주의

- AI 생산성 수치나 자동화 성과를 공개하지 않는다.
- 사람의 판단을 대체한다는 표현을 쓰지 않는다.
- 자사 R&D 사례를 암시하지 말고 현재 포트폴리오 제작 흐름을 공개 근거로 삼는다.
