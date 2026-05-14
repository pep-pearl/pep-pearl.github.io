# 06. Interaction Guidelines

## Source Basis

이 문서는 `specs/motion-guidelines.md`와 `planning/07-cta-strategy.md`를 상세화한다. Interaction은 조용하고 기능적이어야 하며, 텍스트 가독성을 방해하지 않는다.

## Header Interaction

- Desktop에서는 anchor nav hover/focus 시 underline 또는 subtle accent를 제공한다.
- Scroll 이후 header에 아주 약한 border 또는 surface 변화가 생길 수 있다.
- Active section indicator는 가능하나 색만으로 전달하지 않는다.
- Header 안에서 GitHub를 primary action처럼 보이게 하지 않는다.

## Mobile Nav Interaction

- Menu button은 명확한 accessible label을 갖는다.
- Open/close는 짧은 opacity/transform transition으로 충분하다.
- 메뉴가 열리면 About, Strengths, Work, Resume, Contact를 제공한다.
- 메뉴 안에서 Resume 또는 Contact를 빠르게 찾을 수 있어야 한다.
- Escape key 또는 바깥 클릭 닫기는 개발 단계에서 접근성을 고려해 결정한다.
- 메뉴 닫힘 후 focus는 menu button 또는 선택한 anchor에 자연스럽게 돌아가야 한다.

## CTA Interaction

Primary CTA:

- PDF 이력서 다운로드
- 이메일로 연락하기

상태:

- Default: 명확하고 단단한 버튼
- Hover: accent contrast 또는 border 변화
- Focus: keyboard 사용자가 분명히 보는 focus-visible
- Active: 짧은 press feedback

주의:

- GitHub, Blog, LinkedIn은 secondary link다.
- PDF download는 hero와 resume section에 반복한다.
- Email CTA는 hero와 contact section에 반복한다.

## WorkCard Interaction

WorkCard는 "읽을 수 있는 케이스"라는 affordance를 제공한다.

Desktop:

- Hover 시 border/accent 변화 또는 아주 작은 lift
- Focus 시 전체 card outline
- Click 또는 anchor로 detail region 이동

Mobile:

- Hover가 없으므로 "자세히 보기" 또는 expand label이 필요하다.
- Card title과 action이 분명히 구분되어야 한다.

주의:

- hover로 카드 높이가 변하지 않는다.
- card thumbnail은 fake screenshot처럼 보이지 않는다.

## Diagram / Detail Expand Interaction

WorkCaseDetail은 progressive disclosure를 사용할 수 있다.

권장:

- 모바일: accordion/detail block
- desktop: 선택된 card 아래 detail region 또는 case별 open section
- token refresh note는 Case 02 내부의 접을 수 있는 technical note로 제한

접힘/펼침 상태:

- label은 "자세히 보기", "구현 메모 보기"처럼 명확해야 한다.
- expanded/collapsed 상태를 assistive technology에 전달한다.
- reduced motion에서는 즉시 열고 닫는다.

## Related Writing Interaction

Related Writing은 Case 01 하단에 제한적으로 둔다.

사용 가능:

- `FE 아키텍처를 고민하며`
- React Router meta/useMatches 글

원칙:

- Blog가 메인 CTA처럼 보이면 안 된다.
- 외부 링크 안내를 제공한다.
- 정확한 permalink는 development 전 또는 구현 중 최종 확인한다.

## Resume Download Interaction

- Hero와 Resume section에서 같은 PDF로 연결한다.
- Label은 "PDF 이력서 다운로드" 또는 "이력서 다운로드"로 명확히 한다.
- 파일이 PDF임을 보조 설명에 포함한다.
- 다운로드 click feedback은 짧고 조용하게 처리한다.
- PDF 파일명에 실명이 포함되어도 사이트 본문 identity는 Peppearl로 유지한다.

## Contact Link Interaction

- Email은 primary contact action이다.
- `mailto:jinjoo648@naver.com`로 연결한다.
- 외부 링크 그룹은 LinkedIn, Blog, GitHub 순으로 두는 것이 GitHub 과노출을 줄인다.
- Wanted는 사용하지 않는다.
- 전화번호를 추가하지 않는다.

## Reduced Motion

reduced motion 사용자는 다음 경험을 받아야 한다.

- section reveal 없음
- nav open/close 즉시 또는 매우 짧은 전환
- expand/collapse 즉시
- smooth scroll 강제 없음
- hover/focus는 motion보다 outline/색 대비로 전달
