# Interview Experience Audit

원천: `interview-practice.md`

## 전체 평가

면접 준비 자료는 사이트에 그대로 넣기보다 경험 서사로 재구성해야 한다. 현재 문서는 Q&A와 기술 설명이 섞여 있어 사이트에 바로 넣으면 면접 답변집처럼 보일 수 있다. 다만 FSD, INP/데이터 변경 대응, AI 협업 원칙, MFE 검토, token race condition 대응은 Peppearl의 핵심 포지셔닝과 잘 연결된다.

## 포트폴리오에 활용 가능한 경험 유형

- 기존 구조의 한계를 발견하고 FSD로 경계를 재정리한 경험
- API 응답 구조 변경이 UI 전체로 번지지 않게 방어한 경험
- React Query `select`를 변환 계층처럼 사용한 판단
- AI Agent를 교차 검증, 선 설계 후 구현, human-in-the-loop 방식으로 사용한 경험
- Monorepo, Polyrepo, MFE를 비교하며 아키텍처 선택 기준을 고민한 경험
- BroadcastChannel / LocalStorage 기반 token race condition 대응 전략

## 사용하면 좋은 내용

- FSD 도입 과정에서 "초기 시행착오와 학습"을 함께 다룬 부분
- 같은 레이어 참조, public API, slice 경계에 대한 고민
- 데이터 변경 범위를 `shared`, `entities`, query 내부로 제한하려는 판단
- AI 결과를 그대로 믿지 않고 상호 반론과 사람 검토를 둔 방식
- MFE를 "항상 정답"이 아니라 규모와 운영 여건에 따라 판단해야 한다는 관점
- token refresh 경합에서 브라우저 호환성과 리소스 효율을 고려한 선택

## 사용하면 위험한 내용

- "개발 생산성", "만족도", "효율성 극대화" 같은 표현은 구체적 수치 없이 과장처럼 보일 수 있다.
- MFE는 실제 도입 경험이 아니라 구조 검토 및 학습 회고로 확인되었다. 실제 도입처럼 표현하면 경력 과장이 될 수 있다.
- token race condition은 실제 업무 경험으로 확인되었다. 다만 인증/보안 구현 세부를 과하게 노출하지 않도록 흐름과 pseudo code 중심으로 다뤄야 하며, 별도 대표 케이스가 아니라 Case 02 내부 implementation evidence로 사용한다.
- 면접 답변의 강한 자기 주장 문체를 그대로 쓰면 사이트 톤과 맞지 않는다.
- "수학적으로 더 낮추는" 같은 표현은 포트폴리오 카피에서는 과하게 보일 수 있다.

## 기술 설명으로만 남겨야 하는 내용

- Single Flight Pattern 자체 정의
- SharedWorker와 BroadcastChannel의 일반 비교
- MFE Build-time / Runtime 일반 설명
- React Query `select`의 API 설명
- INP 지표의 일반 정의

이 내용들은 사이트 본문에 길게 넣지 않고, 필요한 경우 diagram 또는 pseudo code의 배경 설명으로만 사용한다.

## 사이트 카피로 바꾸기 좋은 내용

### 원천의 방향

- 기존 구조가 커지며 의존성이 복잡해졌다.
- FSD와 public API를 통해 탐색 가능한 구조를 만들었다.
- API 응답 변경이 UI 전체로 전파되지 않게 변환 계층을 두었다.
- AI Agent는 계획과 검토를 거친 뒤 구현에 사용했다.

### 사이트용 문장 후보

- "프로젝트 규모가 커지며 얽히기 쉬운 의존성을 feature 단위의 경계와 public API 기준으로 정리했습니다."
- "API 응답 구조가 바뀌어도 화면 전체가 흔들리지 않도록 query 단계에서 데이터를 정리하는 방식을 고민했습니다."
- "AI Agent를 빠른 코드 생성보다 계획 검토와 구조 안정성을 지키는 파트너로 사용했습니다."

## Selected Work에 연결 가능한 내용

### Case 01. Design System & Frontend Architecture

- FSD 도입과 public API
- Monorepo 경계 문제
- React Query `select`를 통한 데이터 변환
- MFE 검토를 통한 아키텍처 판단

### Case 02. GIS / Disaster Management Platform

- 데이터 구조 변경이 UI에 미치는 영향 관리
- 지도/목록/상세/필터 같은 복잡한 UI 상태의 변경 범위 관리에 응용 가능
- token race condition은 실제 업무 경험으로 확인되었으며, Case 02의 하위 구현 근거로 연결한다.

### Case 03. AI Agent Workflow for Frontend Development

- Multi-role cross-checking
- Planning-first workflow
- Human-in-the-loop
- Model tiering
- 환각과 구조적 훼손을 방지하는 원칙

## About / Core Strengths / Experience에 연결 가능한 내용

### About

- 복잡한 문제를 바로 구현하지 않고 구조와 기준부터 정리하는 태도
- 정답을 단정하지 않고 프로젝트 규모와 제약을 보고 판단하는 방식

### Core Strengths

- Design System: 컴포넌트 상태와 public API 기준
- Frontend Architecture: FSD, monorepo, MFE 검토, query 변환 계층
- AI Agent Workflow: 선 설계, 상호 검증, human review

### Experience

- 복잡한 업무 시스템에서 구조적 경계를 정리한 경험
- 데이터 변경과 UI 변경의 영향 범위를 분리하려 한 경험
- 운영/브라우저 호환성까지 고려한 기술 선택 경험

## 면접 답변집처럼 보이지 않게 바꿔야 할 내용

- 질문형 제목은 제거한다.
- "저는..."으로 시작하는 답변식 문장을 줄인다.
- 일반 기술 정의는 생략하거나 diagram caption으로 축약한다.
- 결과는 수치 대신 "변경 범위를 제한했다", "경계를 명확히 했다", "검토 가능한 흐름을 만들었다"처럼 표현한다.
- 실제 프로젝트 경험인지 학습/검토인지 구분한다.
