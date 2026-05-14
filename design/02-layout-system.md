# 02. Layout System

## Overall Container

권장 layout 방향:

- Page max-width: 넓은 desktop에서도 본문 line length가 길어지지 않는 1120-1200px 범위
- Reading width: 긴 문단은 680-760px 범위
- Wide content: Selected Work diagram/detail은 1040-1200px 범위까지 허용
- Page padding: mobile 1rem대, tablet 2rem대, desktop 2.5-4rem대

실제 수치는 development에서 Tailwind theme로 옮기되, 핵심은 "본문은 읽기 쉽게 좁히고, diagram과 case grid는 넓게 쓰는 것"이다.

## Section Spacing

섹션 간격은 모두 동일하지 않게 rhythm을 둔다.

| Section | Spacing Character |
| --- | --- |
| Hero | 가장 넉넉한 상하 여백, 첫 CTA가 접히지 않도록 조정 |
| About | Hero와 가까운 연결감, summary가 길어지지 않게 |
| Core Strengths | 3개 축이 한 번에 보이도록 compact but clear |
| Experience | 문서형 rhythm, timeline 항목 사이 적당한 여백 |
| Selected Work | 가장 깊은 영역, overview와 detail 사이 여백 충분히 |
| Tech Stack | 정보 밀도가 있으므로 compact group rhythm |
| Resume | CTA bridge처럼 간결하고 명확하게 |
| Contact | 마지막 행동 유도, 여백은 넉넉하되 과장 없이 |
| Footer | 낮은 위계, compact |

## Content Grid

기본 grid:

- Mobile: 1 column
- Tablet: 2 columns when content naturally pairs
- Desktop: 12-column mental grid 또는 2/3-column content grid

Grid 사용 원칙:

- 텍스트는 너무 넓게 펼치지 않는다.
- 카드 그리드는 동일한 반복감이 강하지 않게 카드 내용의 구조를 다르게 둔다.
- diagram은 text와 나란히 배치하되, 모바일에서는 설명 리스트로 먼저 이해 가능해야 한다.

## Hero Layout

Mobile:

```txt
[Peppearl · Frontend Engineer]
[H1]
[Description]
[Primary CTA: PDF]
[Secondary primary: Email]
[Anchor: Selected Work]
[LinkedIn · Blog · GitHub]
```

Tablet/Desktop:

```txt
Left: identity, H1, description, CTA group
Right: small evidence cluster or abstract structure preview
```

Hero visual 주의:

- dog photo 사용 금지
- 큰 3D object 금지
- GitHub stats 금지
- 실제 업무 화면처럼 보이는 mock 금지

우측 영역을 둔다면 "Design System / Architecture / AI Workflow" 세 축을 선이나 작은 diagram card로 암시하는 정도가 적합하다.

## About Layout

Mobile:

```txt
[Section heading]
[Summary paragraph 1]
[Summary paragraph 2 optional/short]
[Profile chip with small dog photo]
[Keywords]
```

Desktop:

```txt
Left: About text
Right: ProfileCard
```

ProfileCard에는 dog photo를 작게 사용하고, 핵심 콘텐츠는 summary와 keywords다.

## Core Strengths Layout

Mobile:

```txt
[Design System card]
[Frontend Architecture card]
[AI Agent Workflow card]
```

Tablet:

```txt
[Design System] [Frontend Architecture]
[AI Agent Workflow wide or balanced]
```

Desktop:

```txt
[Design System] [Frontend Architecture] [AI Agent Workflow]
```

각 카드에는 summary, evidence bullets, 작은 diagram hint가 들어갈 수 있다. 아이콘 하나와 제목만 있는 템플릿 느낌은 피한다.

## Experience Layout

Mobile:

```txt
[Intro]
[2026.02 - 진행중] 자사 솔루션 고도화 및 R&D
[2025.06 - 2026.02] LH 재난관리 플랫폼 구축
[2024.06 - 2025.03] 스마트 하천 안전차단 시스템
[2023.06 - 2024.06] 도시침수 및 재난 상황관리 시스템
```

Desktop:

```txt
Left column: period / meta
Right column: project, role, summary, tags
```

Timeline은 프로젝트 목록처럼 딱딱하게 보이지 않게 one-line contribution과 tags를 함께 둔다. 구체 회사명/직책은 source 또는 PDF 기준만 사용한다.

## Selected Work Layout

Mobile:

```txt
[Section heading]
[Case 01 card]
  [summary]
  [key decisions]
  [expand/detail link]
[Case 02 card]
[Case 03 card]
[detail blocks stacked]
```

Desktop option A:

```txt
[Case 01 wide card]
[Case 02 card] [Case 03 card]
[Case detail: text left + diagram right]
```

Desktop option B:

```txt
[Case 01] [Case 02] [Case 03]
[Selected detail region]
```

권장: Case 01을 조금 더 강조한다. Design System & Frontend Architecture가 핵심 포지셔닝과 가장 직접 연결되기 때문이다.

## Tech Stack Layout

Mobile:

```txt
[Frontend]
[Architecture]
[State and Data]
[Backend Collaboration]
[Workflow]
```

각 group은 tag list로 표현한다. 너무 긴 tag list는 접을 수 있다.

Desktop:

```txt
[Frontend] [Architecture] [State/Data]
[Backend Collaboration] [Workflow]
```

기술 로고보다 사용 맥락을 설명하는 short description을 우선한다.

## Resume / Contact Layout

Resume:

```txt
[Short resume note]
[PDF download CTA]
[Email supporting CTA]
```

Contact:

```txt
[Offer message]
[Email CTA]
[LinkedIn] [Blog] [GitHub]
```

Resume과 Contact는 페이지 후반 conversion 영역이다. PDF와 Email을 반복하되 과장된 영업 카피는 사용하지 않는다.

## Footer Layout

Footer는 낮은 위계다.

포함 가능:

- Peppearl
- Frontend Engineer
- LinkedIn / Blog / GitHub secondary links
- 간단한 copyright

Dog photo는 Footer에 반복하지 않고 About의 작은 ProfileCard visual로만 사용한다.

## Mobile / Tablet / Desktop Differences

| Area | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Header | brand + menu | brand + compact nav | full anchor nav |
| Hero | single column | 2-column 가능 | text + evidence preview |
| Strengths | 1 column | 2 columns | 3 columns |
| Experience | vertical list | vertical timeline | meta/content timeline |
| Work | stacked cards | 2-column cards | 3-column or highlighted grid |
| Detail | collapsed/stacked | partial 2-column | text + diagram 2-column |
| CTA | top priority | grouped | bridge sections |
| Dog photo | About chip | About card | About card |
