# Responsive Plan

## Source Basis

이 문서는 `planning/08-responsive-content-priority.md`를 development 단계에서 바로 확인할 수 있도록 정리한 responsive summary다.

## Breakpoints

TailwindCSS로 옮기기 쉬운 mobile-first 기준을 권장한다.

| Range | Purpose |
| --- | --- |
| 360px+ | 최소 지원 mobile width |
| 480px+ | compact mobile 여유 폭 |
| 768px+ | tablet, 일부 2열 전환 |
| 1024px+ | desktop layout 시작 |
| 1280px+ | wide desktop max-width rhythm |

## Mobile-First Principle

모바일에서 먼저 보여야 하는 정보 순서:

1. Peppearl
2. Frontend Engineer
3. 제품의 완성도를 높이는 프론트엔드 개발자
4. 짧은 hero description
5. PDF 이력서 다운로드
6. 이메일로 연락하기
7. Core Strengths 3개
8. Selected Work 핵심 카드

이 순서는 화면 폭과 관계없이 유지한다.

## Tablet 2-Column Rules

768px 이상에서는 정보량이 적은 그룹부터 2열 전환을 허용한다.

- About: text + small ProfileCard
- Core Strengths: 2열 후 남은 1개는 넓게 또는 다음 줄
- Selected Work: Case 01 강조 + Case 02/03 보조 가능
- Tech Stack: group cards 2열
- Resume/Contact: CTA와 설명을 좌우 배치 가능

Experience timeline은 tablet에서도 무리한 2열보다 읽기 쉬운 vertical timeline을 우선한다.

## Desktop 2-3 Column Rules

1024px 이상:

- Hero: text 중심 좌측 + evidence/mini diagram 우측 가능. dog photo는 hero visual로 사용하지 않는다.
- Core Strengths: 3열
- Selected Work: 3열 overview 또는 Case 01 wide + Case 02/03 stack
- WorkCaseDetail: text와 diagram 2열
- Tech Stack: 2-3열 group grid
- Resume/Contact: action bridge 형태의 2열

## Hero Responsive

Mobile:

- single column
- identity, role, headline, description, CTA 순서
- PDF와 Email CTA는 첫 화면 안에서 접근 가능하게 배치
- secondary links는 compact text group

Tablet/Desktop:

- headline line length를 제한해 읽기 리듬 유지
- selected work anchor는 primary보다 낮은 위계
- GitHub는 secondary link group에만 둔다

## Core Strengths Responsive

Mobile:

- 1열 stack
- 각 카드에는 summary와 evidence 2-4개
- 긴 설명은 잘라내기보다 문장 자체를 짧게 유지

Tablet:

- 2열 가능
- AI Agent Workflow 카드가 혼자 남으면 full width 또는 balanced width

Desktop:

- 3열
- 카드 높이를 억지로 맞추지 말고 title/summary/evidence rhythm을 맞춘다

## Experience Timeline Responsive

Mobile:

- 단순 vertical list
- period, role/project, one-line summary, tags

Tablet/Desktop:

- period column + content column
- 현재/최근 프로젝트가 먼저 보이게 한다
- 구체적인 회사명/직책은 source 또는 PDF 기준으로만 표시

## Selected Work Card Responsive

Mobile:

- 1열 stack
- title, memory line, decisions 2-3개 우선
- detail은 expand 또는 아래 상세 블록으로 점진 공개

Tablet:

- 2열 grid
- Case 01은 넓게 둘 수 있다

Desktop:

- overview 3열 또는 Case 01 강조 layout
- detail은 diagram과 narrative를 2열로 구성 가능

## Long Text Compression / Expansion

Mobile:

- 긴 About 두 번째 문단, case implementation, related writing, token refresh note는 접거나 뒤로 미룬다.
- Context/Problem/Decision 중 핵심만 먼저 노출한다.
- What I Learned는 한 문장으로 유지한다.

Desktop:

- case detail에서 Context -> Problem -> My Role -> Decisions -> Implementation -> What I Learned 구조를 더 온전히 보여준다.
- diagram과 decision card를 함께 배치한다.

## CTA Placement

- Hero: PDF download, Email, Selected Work anchor
- Selected Work 이후: Resume/Contact bridge CTA
- Resume: PDF download 반복
- Contact: Email primary, LinkedIn/Blog/GitHub secondary

모바일에서는 PDF와 Email CTA가 Contact까지 내려가지 않아도 접근 가능해야 한다.

## Header / MobileNav

Mobile:

- brand + compact menu button
- Resume 또는 Contact quick action 중 하나를 노출할 수 있으나 header를 붐비게 만들지 않는다.
- nav open 시 About, Strengths, Work, Resume, Contact anchor 제공

Desktop:

- anchor nav 표시
- active section indicator 가능
- GitHub는 nav primary item으로 두지 않는다

## Dog Photo Placement

Mobile:

- About의 ProfileCard 안 작은 이미지 또는 profile chip
- hero에는 배치하지 않는다

Tablet/Desktop:

- About text 옆 small profile visual로 사용

dog photo는 어떤 viewport에서도 첫인상이나 CTA보다 큰 시각 비중을 차지하면 안 된다.
