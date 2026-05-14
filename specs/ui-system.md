# UI System

## Source Basis

이 문서는 development 단계에서 TailwindCSS theme와 컴포넌트 스타일 기준으로 옮기기 쉬운 방향을 정리한다. 실제 CSS, Tailwind class, React 코드는 작성하지 않는다.

## Color Direction

색상은 "차분한 neutral + restrained accent"로 구성한다.

권장 방향:

- Base surface: 차가운 흰색이 아닌 부드러운 mineral off-white
- Text primary: 거의 검정에 가까운 neutral ink
- Text secondary: 낮은 대비가 아닌 읽기 가능한 muted neutral
- Accent: 과하지 않은 deep teal 또는 muted green 계열 1개
- Support tint: 아주 옅은 cool green/blue-gray 계열 surface
- Border: neutral에 accent가 아주 약하게 섞인 hairline

사용 원칙:

- Accent는 CTA, active nav, key label, diagram highlight에만 사용한다.
- Gradient는 핵심 배경이나 텍스트에 사용하지 않는다.
- GitHub 링크에는 primary accent를 주지 않는다.
- Selected Work의 세 케이스는 색으로 과하게 구분하지 않고, label과 diagram pattern으로 구분한다.

## Typography Direction

기본은 한국어 가독성이 좋은 sans-serif stack이다.

권장 방향:

- Headline: 차분하지만 힘 있는 Korean-friendly sans-serif
- Body: 긴 문장을 읽기 쉬운 regular weight
- Meta / eyebrow: 작지만 대비가 충분한 label text
- Technical labels: monospace를 남용하지 않고, 필요한 code term에만 제한적으로 사용

타입 위계:

- Hero headline: 페이지에서 유일하게 가장 큰 headline
- Section heading: 문서형 구조가 보이도록 명확하되 과하지 않게
- Card title: 스캔 가능한 크기와 weight
- Body: 모바일에서도 16px 상당 이상을 기본으로 고려
- Caption/meta: 최소 가독성을 보장하고 low contrast 금지

## Spacing Scale

rem 기반 scale을 권장한다.

| Token | Suggested Size | Use |
| --- | --- | --- |
| space-1 | 0.25rem | 작은 icon/text 간격 |
| space-2 | 0.5rem | badge 내부, compact row |
| space-3 | 0.75rem | tag group, small stack |
| space-4 | 1rem | card 내부 기본 간격 |
| space-5 | 1.25rem | CTA group, short section stack |
| space-6 | 1.5rem | card padding mobile |
| space-8 | 2rem | section 내부 block 간격 |
| space-10 | 2.5rem | section heading과 content 간격 |
| space-12 | 3rem | mobile section gap |
| space-16 | 4rem | tablet section gap |
| space-20 | 5rem | desktop section gap |
| space-24 | 6rem | hero/large transition gap |

## Radius Scale

카드는 8px 이하 radius를 기본으로 한다.

| Token | Suggested Size | Use |
| --- | --- | --- |
| radius-xs | 0.25rem | badge, tag |
| radius-sm | 0.375rem | button, link surface |
| radius-md | 0.5rem | cards, diagram panels |
| radius-full | full | dog photo, small avatar only |

## Border / Shadow Direction

- Border는 subtle hairline 중심으로 사용한다.
- Shadow는 floating card 느낌보다 얕은 depth만 사용한다.
- Hover shadow는 선택 가능한 surface에만 제한한다.
- Section 구분은 강한 background block보다 spacing, divider, small label로 해결한다.

## Section Rhythm

- Hero는 넉넉한 상하 여백과 강한 문장 위계를 갖는다.
- About과 Core Strengths는 빠르게 이어져 "이 사람이 무엇을 잘하는가"를 만든다.
- Experience는 문서형 안정감을 준다.
- Selected Work는 페이지의 가장 깊은 증거 영역이므로 가장 긴 rhythm을 허용한다.
- Resume과 Contact는 action bridge처럼 간결하게 정리한다.

## Card Style

카드는 정보를 묶는 데만 사용한다.

권장:

- 얇은 border
- 밝은 surface
- 8px 이하 radius
- title, short summary, evidence bullets
- hover 시 약한 border/accent 변화

금지:

- card 안에 card 중첩
- 모든 섹션을 floating card로 감싸기
- 과한 그림자
- image placeholder를 실제 업무 화면처럼 보이게 만들기

## CTA Style

CTA 위계:

1. PDF 이력서 다운로드
2. 이메일로 연락하기
3. 대표 프로젝트 보기
4. LinkedIn / Blog / GitHub

Primary CTA는 단단하고 조용한 버튼이어야 한다. Secondary CTA는 outline 또는 text-link 계열로 낮은 위계를 둔다. GitHub는 primary CTA처럼 보이면 안 된다.

## Link Style

- 본문 링크는 underline 또는 명확한 text affordance를 제공한다.
- 외부 링크는 새 창 여부와 external indicator를 accessible label로 전달한다.
- Related Writing은 Case 01 하단의 보조 흐름으로 제한한다.

## Badge / Tag Style

- Badge는 section/category label에 사용한다.
- Tag는 기술 스택과 evidence keywords에 사용한다.
- Tag는 너무 많은 색을 갖지 않는다.
- Tag만으로 정보를 전달하지 않고 제목/본문이 항상 의미를 설명한다.

## Diagram Style

업무 화면 대체 표현으로 diagram을 사용한다.

권장:

- line-based architecture map
- component state matrix
- map/list/detail flow
- workflow timeline
- decision card
- public-safe pseudo flow

금지:

- 실제 제품 스크린샷처럼 보이는 fake screenshot
- 지도 데이터 원본처럼 보이는 이미지
- Figma 캡처 느낌의 화면 재현
- 구체적 성과 수치를 차트로 시각화

## Dog Photo Style

`dog_photo.png`는 작은 보조 profile visual로만 사용한다.

권장:

- About의 ProfileCard 안 작은 원형 또는 작은 square-crop image
- Alt text는 "Peppearl의 보조 프로필 이미지로 사용하는 강아지 사진" 수준으로 구체적이고 차분하게 작성

금지:

- Hero main visual
- 큰 배경 이미지
- 귀여운 브랜딩의 중심 요소
- Footer 반복 사용

## Work Screenshot Replacement Strategy

업무 화면, Figma 캡처, 얼굴 사진은 사용하지 않는다. Selected Work는 아래 시각화로 대체한다.

| Case | Replacement |
| --- | --- |
| Case 01 | FSD folder diagram, Monorepo/FSD/Public API map, component state matrix, data boundary diagram |
| Case 02 | map/list/detail interaction diagram, GIS popup render boundary, filter/map state flow, token refresh pseudo flow |
| Case 03 | workflow timeline, phase gate diagram, AGENTS/rules/prompts relationship map, review checklist preview |

코드 스니펫은 사용자가 제공한 조각만 제한적으로 사용한다. 제공이 어렵다면 pseudo diagram과 public-safe pseudo code로 대체한다.
