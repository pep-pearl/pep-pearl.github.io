# Visual Direction

이 사이트는 화려한 포트폴리오 템플릿이 아니라, 차분하게 잘 정리된 커리어 문서에 작은 인터랙션을 더한 경험이어야 한다.

## 키워드

- minimal
- structured
- quietly interactive
- professional
- balanced
- refined
- calm confidence

## 디자인 비율

- Minimal interactive portfolio: 60%
- Structured career document: 40%

포트폴리오처럼 시각적으로 정리되어야 하지만, 목적은 작품 전시가 아니라 포지션/면접 제안이다. 문서처럼 빠르게 훑을 수 있어야 하고, 작은 인터랙션은 이해를 돕는 데만 사용한다.

## 피해야 할 방향

- 포트폴리오 학원 느낌
- 과한 3D
- 과한 애니메이션
- 과장된 자기 PR
- 공공/SI 느낌이 강한 디자인
- 너무 Notion 같은 디자인
- 너무 기업 홈페이지 같은 디자인
- 너무 감성적이거나 귀여운 무드
- dark cyberpunk mood
- 업무 화면을 그대로 흉내 낸 fake screenshot

## 레이아웃 원칙

- text-first 구성을 우선한다.
- 섹션 간 위계와 리듬이 분명해야 한다.
- 카드 수를 필요한 만큼만 사용한다.
- 카드 안에 또 다른 카드를 중첩하지 않는다.
- 스크린샷 대신 다이어그램, 코드 스니펫, decision card, state matrix를 사용한다.
- Hero에서 브랜드/정체성은 즉시 보여야 하지만, 과장된 그래픽이 본문을 밀어내면 안 된다.

## 색과 타이포그래피

권장:

- off-white 또는 아주 절제된 dark-neutral 기반
- neutral text
- 차분한 accent color 1개
- subtle border
- soft depth
- 한국어 가독성이 좋은 sans-serif

피하기:

- 네온 중심 팔레트
- 무작위 파스텔
- 과한 gradient
- 완전한 흑백/회색 단조로움
- 글자가 작은 low contrast UI

권장 font stack:

```css
font-family: Pretendard, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## 인터랙션과 모션

허용:

- subtle section reveal
- hover/focus transition
- CTA hover feedback
- active section indicator
- copy email interaction
- small resume download feedback

피하기:

- scroll hijacking
- heavy parallax
- constant moving background
- large animated 3D
- decorative motion that competes with reading

반드시 `prefers-reduced-motion`을 존중한다.

## 강아지 사진 사용

- About 카드나 footer에서 작은 personal signature로만 사용한다.
- Hero의 메인 이미지로 사용하지 않는다.
- 귀여운 브랜딩이 전문성을 덮지 않게 한다.
- alt text는 구체적이되 과하게 감성적으로 쓰지 않는다.

## 반응형 원칙

- 모바일, 태블릿, 데스크톱 모두 자연스럽게 작동해야 한다.
- 모바일에서 콘텐츠 우선순위가 유지되어야 한다.
- CTA는 모바일에서도 쉽게 접근 가능해야 한다.
- 카드 그리드는 화면 폭에 따라 1열, 2열, 3열로 자연스럽게 바뀐다.
- 긴 프로젝트 설명은 모바일에서 읽기 쉬운 단락과 리스트로 나눈다.
- 360px 폭부터 텍스트가 넘치지 않아야 한다.

권장 레이아웃:

- Mobile: single column, compact CTA, simple timeline
- Tablet: two-column cards where helpful
- Desktop: wider rhythm, three strength cards, selected work grid or alternating layout

## 접근성 원칙

- semantic landmarks를 사용한다.
- heading order를 유지한다.
- interactive element에는 visible focus state가 있어야 한다.
- 색상만으로 정보를 전달하지 않는다.
- 이미지와 다이어그램에는 alt text 또는 설명 텍스트를 제공한다.
- 키보드 탐색이 자연스러워야 한다.
