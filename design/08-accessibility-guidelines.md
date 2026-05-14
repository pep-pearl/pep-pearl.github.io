# 08. Accessibility Guidelines

## Source Basis

이 문서는 development 단계에서 접근성 기준을 놓치지 않기 위한 설계 명세다. 최종 구현 후에는 `docs/07-final-review-checklist.md`와 함께 검수한다.

## Semantic HTML

권장 구조:

- `header`: site identity and navigation
- `nav`: primary anchor navigation
- `main`: all primary sections
- `section`: Hero, About, Strengths, Experience, Selected Work, Tech Stack, Resume, Contact
- `footer`: secondary links and closing identity

Section은 heading으로 label되어야 한다.

## Heading Hierarchy

- H1: Hero headline "제품의 완성도를 높이는 프론트엔드 개발자"
- H2: About, Core Strengths, Experience, Selected Work, Tech Stack, Resume, Contact
- H3: Strength cards, timeline groups, Work case titles, Tech Stack groups

Heading은 시각 크기를 위해 건너뛰지 않는다.

## Landmarks

- Header, main, footer landmarks가 명확해야 한다.
- nav에는 accessible label이 필요하다.
- mobile nav가 별도 panel이면 panel label과 close control이 명확해야 한다.
- skip link를 제공한다.

## Color Contrast

- Body text는 충분한 contrast를 가져야 한다.
- Caption/meta도 너무 옅으면 안 된다.
- Accent tint 위의 text는 반드시 읽기 가능한 색을 사용한다.
- 색만으로 active/current/important 상태를 전달하지 않는다.

## Focus Visible

모든 interactive element에는 visible focus가 필요하다.

대상:

- Header nav items
- Mobile menu button
- CTA buttons
- WorkCard action
- Expand/collapse controls
- External links
- Resume download link
- Contact email link

Focus style은 hover style과 구분되어야 한다.

## Keyboard Navigation

- Header nav는 tab 순서가 자연스러워야 한다.
- Mobile nav open 후 item 탐색과 close가 가능해야 한다.
- Work detail expand/collapse는 keyboard로 조작 가능해야 한다.
- Anchor 이동 후 target section을 이해할 수 있어야 한다.
- Clickable card를 구현할 경우 nested interactive 문제가 생기지 않게 한다.

## External Link Guidance

External links:

- LinkedIn
- Blog
- GitHub
- Related Writing

새 창을 사용할 경우 accessible label 또는 visually hidden text로 안내한다. Icon-only external link는 사용하지 않는다.

## Resume Download Accessibility

- Link label은 PDF 다운로드임을 명확히 한다.
- Hero와 Resume section 모두 같은 PDF를 가리킨다.
- 파일명: `이혜주_FrontendEngineer.pdf`
- PDF 파일명에 실명이 포함되어도 사이트 main identity는 Peppearl로 유지한다.

## Dog Photo Alt Text

권장 alt text:

> Peppearl의 보조 프로필 이미지로 사용하는 강아지 사진

dog photo가 purely decorative로 처리될 경우에도 주변 텍스트가 profile identity를 제공해야 한다. 하지만 사용자 지침상 small profile visual로 의미가 있으므로 간단한 alt text를 권장한다.

## Reduced Motion

- `prefers-reduced-motion`을 존중한다.
- section reveal, smooth scroll, expand/collapse animation은 reduced motion에서 제거 또는 최소화한다.
- motion 없이도 상태와 정보가 이해되어야 한다.

## ARIA Usage Criteria

ARIA는 semantic HTML로 해결되지 않는 부분에만 사용한다.

사용 가능:

- mobile menu expanded state
- accordion/detail expanded state
- active nav state
- diagram alternative description 연결

주의:

- 불필요한 role 남용 금지
- native button/link를 다른 role로 대체하지 않기
- card 전체 클릭 구현 시 interactive nesting 주의
