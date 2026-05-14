# Experience Story Candidates

## FSD 도입으로 얽힌 코드 구조를 정리한 경험

- 원천 위치: `interview-practice.md` > `1. FSD 도입을 통한 코드 구조 개선`
- 관련 프로젝트: LH 재난관리 플랫폼 구축, monorepo 기반 프론트엔드 구조
- 관련 역량: Frontend Architecture, Design System
- 활용 가능 섹션: Core Strengths, Selected Work Case 01, Experience
- 핵심 문제: 프로젝트 규모가 커지며 순환 참조와 의존성 얽힘이 발생했다.
- 나의 역할: FSD 구조를 도입하고 slice 경계와 public API 기준으로 코드 탐색과 유지보수성을 개선하는 방향을 고민했다.
- 주요 판단: 기능 단위 경계를 만들고, public API 역할의 `index` 파일을 통해 참조 지점을 명확히 한다.
- 포트폴리오에서 쓸 수 있는 한 문장: "얽히기 쉬운 업무 화면 구조를 FSD와 public API 기준으로 정리해 팀이 탐색 가능한 프론트엔드 구조를 만들었습니다."
- 주의할 점: 생산성/만족도 개선은 수치 없이 과장하지 않는다.
- 추천 여부: Include

## FSD 도입의 시행착오를 학습으로 정리한 경험

- 원천 위치: `interview-practice.md` > `1. FSD 도입을 통한 코드 구조 개선`
- 관련 프로젝트: LH 재난관리 플랫폼 구축
- 관련 역량: Frontend Architecture, 협업/학습 태도
- 활용 가능 섹션: About, Selected Work Case 01, What I Learned
- 핵심 문제: FSD 전용 ESLint 플러그인, 같은 레이어 참조 규칙, 팀 러닝 커브를 처음부터 완벽히 알지 못했다.
- 나의 역할: 도입 과정의 시행착오를 인지하고 구조 기준을 보완하는 방향으로 학습했다.
- 주요 판단: 아키텍처는 도입 자체보다 팀이 이해하고 지킬 수 있는 규칙과 도구가 중요하다.
- 포트폴리오에서 쓸 수 있는 한 문장: "새로운 구조를 도입할 때는 패턴 자체보다 팀이 지킬 수 있는 참조 규칙과 학습 비용까지 함께 봐야 한다는 점을 배웠습니다."
- 주의할 점: 실패담처럼 과하게 강조하지 않고 trade-off learning으로 표현한다.
- 추천 여부: Include

## API 응답 변경을 UI 전체로 전파하지 않기 위한 변환 계층 설계

- 원천 위치: `interview-practice.md` > `2. INP 지표 개선 전략`
- 관련 프로젝트: LH 재난관리 플랫폼 또는 데이터 기반 업무 UI
- 관련 역량: Frontend Architecture, 유지보수성
- 활용 가능 섹션: Core Strengths, Selected Work Case 01, Selected Work Case 02
- 핵심 문제: 백엔드 응답 wrapper나 데이터 구조 변경이 상위 UI까지 불필요하게 전파될 수 있었다.
- 나의 역할: React Query `select` 옵션과 mapper를 활용해 API 응답과 UI 모델 사이의 변환 지점을 둔다.
- 주요 판단: 데이터 핵심 스펙과 wrapper 변경을 구분하고, 변경 범위를 query 또는 shared/entities 내부로 제한한다.
- 포트폴리오에서 쓸 수 있는 한 문장: "API 응답 변화가 화면 전체로 번지지 않도록 query 단계에서 UI가 사용할 형태로 데이터를 정리했습니다."
- 주의할 점: INP 자체를 성과 수치처럼 말하지 말고 변경 범위 관리 관점으로 사용한다.
- 추천 여부: Include

## AI Agent를 검증 가능한 파트너로 사용하는 원칙

- 원천 위치: `interview-practice.md` > `3. AI 협업 원칙과 활용 방식`
- 관련 프로젝트: 자사 솔루션 고도화 및 R&D, Peppearl career site build process
- 관련 역량: AI Agent Workflow
- 활용 가능 섹션: Core Strengths, Selected Work Case 03, About
- 핵심 문제: AI 산출물은 환각이나 구조 훼손 위험이 있어 그대로 신뢰하기 어렵다.
- 나의 역할: 여러 AI에 역할을 나누고, 상호 반론과 human review를 통해 검증 가능한 산출물을 만든다.
- 주요 판단: 코딩보다 요구사항, 설계, TDD 명세, 검토 기준을 먼저 확정한다.
- 포트폴리오에서 쓸 수 있는 한 문장: "AI Agent를 빠른 코드 생성보다 계획 검토와 구조 안정성을 지키는 작업 파트너로 사용합니다."
- 주의할 점: AI가 모든 것을 대신한다는 인상을 주지 않는다.
- 추천 여부: Include

## Monorepo 이후 MFE까지 검토한 아키텍처 판단 경험

- 원천 위치: `interview-practice.md` > `4. Micro Frontends(MFE) Deep Dive & 실무 회고`
- 관련 프로젝트: monorepo 기반 프론트엔드 구조 검토
- 관련 역량: Frontend Architecture
- 활용 가능 섹션: Selected Work Case 01, About 보조 문장
- 핵심 문제: monorepo가 커지면 의존성, 배포, 빌드 병목이 생길 수 있다.
- 나의 역할: Monolith, Monorepo, Polyrepo, MFE의 장단점을 비교하며 프로젝트 규모와 운영 여건에 맞는 구조를 고민했다.
- 주요 판단: MFE는 항상 정답이 아니며, 인프라와 조직 규모가 뒷받침될 때 의미가 있다.
- 포트폴리오에서 쓸 수 있는 한 문장: "구조 선택을 기술 유행이 아니라 프로젝트 규모, 배포 단위, 팀 운영 방식의 문제로 바라봤습니다."
- 주의할 점: 실제 도입 경험이 아니라 구조 검토 및 학습 회고로만 표현한다.
- 추천 여부: Maybe

## Token refresh 경합을 Single Flight 관점으로 다룬 경험

- 원천 위치: `interview-practice.md` > `5. Single Flight Pattern & Token Race Condition 해결 전략`
- 관련 프로젝트: 실제 업무 프로젝트. 공개 표현은 Case 02 하위 implementation evidence로 제한.
- 관련 역량: Frontend Architecture, 브라우저 환경 이해
- 활용 가능 섹션: Selected Work Case 02 내부 implementation note
- 핵심 문제: 여러 탭에서 동시에 token refresh를 시도하면 중복 요청과 race condition이 발생할 수 있다.
- 나의 역할: BroadcastChannel과 LocalStorage를 이용해 leader 탭이 요청하고 결과를 공유하는 흐름을 설계했다.
- 주요 판단: Safari 등 브라우저 호환성과 리소스 효율을 고려해 SharedWorker 대신 BroadcastChannel 조합을 선택했다.
- 포트폴리오에서 쓸 수 있는 한 문장: "브라우저 탭 간 경합 상황에서는 완벽한 중앙 집중보다 호환성과 리소스 비용을 고려한 동기화 전략을 선택했습니다."
- 주의할 점: 실제 업무 경험으로 확인되었지만, 인증/보안 구현 세부를 과하게 공개하지 않는다.
- 추천 여부: Include

## INP와 메인 스레드 블로킹을 고려한 UI 반응성 사고

- 원천 위치: `interview-practice.md` > `2. INP 지표 개선 전략`
- 관련 프로젝트: 확인 필요
- 관련 역량: Frontend Architecture, Performance
- 활용 가능 섹션: Core Strengths, Tech Stack 보조
- 핵심 문제: 사용자 액션 이후 화면 반응성이 늦어지는 문제를 줄여야 한다.
- 나의 역할: 데이터 변경 범위와 UI 리렌더링 전파 범위를 분리해 사고했다.
- 주요 판단: 성능 개선을 수치가 아니라 변경 범위와 반응성 관점에서 설명한다.
- 포트폴리오에서 쓸 수 있는 한 문장: "성능을 단순 최적화가 아니라 사용자 액션 이후 화면이 안정적으로 반응하는 구조의 문제로 봅니다."
- 주의할 점: INP 수치나 개선량은 공개하지 않는다.
- 추천 여부: Maybe
