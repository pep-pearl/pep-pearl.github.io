# 07. Responsive Design Plan

## Source Basis

이 문서는 `specs/responsive-plan.md`의 상세 버전이다. 모바일부터 정보 우선순위를 확정하고, tablet/desktop에서 레이아웃을 확장한다.

## Mobile

### Information Priority

1. Peppearl
2. Frontend Engineer
3. 제품의 완성도를 높이는 프론트엔드 개발자
4. 짧은 hero description
5. PDF 이력서 다운로드
6. 이메일로 연락하기
7. Core Strengths 3개
8. Selected Work 핵심 카드
9. Resume / Contact 반복 CTA

### Folded / Compressed Information

- About 두 번째 문단은 짧게 유지하거나 다음 줄로 밀어도 된다.
- Experience 세부 설명은 one-line summary와 tags 중심.
- Selected Work implementation은 기본 접힘 또는 detail 진입.
- Token refresh race condition은 Case 02 내부 technical note로 접는다.
- Tech Stack은 group별 compact list.
- Related Writing은 작은 link list 또는 접힘.

### CTA Placement

- Hero 안에 PDF와 Email CTA를 모두 둔다.
- Selected Work anchor는 primary보다 낮은 시각 위계로 둔다.
- Contact section에서 Email CTA를 반복한다.

### Card Grid

- 모든 주요 카드는 1열.
- 카드 내부는 title, summary, evidence 2-3개, action 순서.
- Card height를 억지로 맞추지 않는다.

### Long Text Handling

- 긴 문단보다 짧은 문장과 bullets.
- Context, Problem, Decision 중 핵심만 먼저.
- What I Learned는 한 문장.

### Selected Work Detail

- 각 Case card 아래에서 expand하거나, card action으로 같은 페이지 detail region에 이동한다.
- Diagram은 세로 flow 또는 list fallback으로 표현한다.
- 실제 화면처럼 보이는 thumbnail은 사용하지 않는다.

### Dog Photo

- About의 small profile chip으로 배치한다.
- Hero 사용 금지.

## Tablet

### Information Priority

1. Hero와 CTA
2. About summary와 ProfileCard
3. Core Strengths
4. Selected Work overview
5. Experience timeline
6. Tech Stack
7. Resume / Contact

### Folded / Compressed Information

- Tech Stack 전체 목록은 group별 compact card.
- Work detail은 기본 요약 + optional expanded.
- Related Writing은 Case 01 하단에만 노출.

### CTA Placement

- Hero CTA는 가로 배치 가능.
- Resume CTA는 page 후반에서 반복.
- Contact CTA는 full-width 또는 2열 block으로 표시.

### Card Grid

- Core Strengths는 2열 가능.
- Selected Work는 Case 01 wide + Case 02/03 2열 또는 balanced 2열.
- Tech Stack은 2열.

### Long Text Handling

- About과 case summary는 desktop보다 짧게 유지.
- Implementation detail은 1-2문장 + diagram.

### Selected Work Detail

- Diagram과 text를 부분적으로 나란히 놓을 수 있다.
- 화면 폭이 애매하면 mobile처럼 stack.

### Dog Photo

- About text 옆 ProfileCard에서 작은 이미지로 사용.

## Desktop

### Information Priority

1. Hero headline, description, CTA
2. About and small profile visual
3. Core Strengths 3개
4. Selected Work 3개와 detail
5. Experience와 Tech Stack 교차 확인
6. Resume / Contact

### Expanded Information

- 각 case의 Context, Problem, My Role, Decisions, Implementation, What I Learned를 더 온전히 표시.
- DiagramCard를 text 옆에 배치.
- Tech Stack group에 사용 맥락을 짧게 추가.

### CTA Placement

- Hero primary CTA group
- Selected Work 이후 Resume/Contact bridge
- Resume section의 PDF 반복
- Contact section의 Email primary

### Card Grid

- Core Strengths 3열.
- Selected Work 3열 또는 Case 01 강조 layout.
- Tech Stack 2-3열.
- Resume/Contact 2열 bridge 가능.

### Long Text Handling

- 본문 line length를 제한한다.
- case detail은 전체 width를 쓰되 text column은 너무 넓게 하지 않는다.
- diagram caption을 함께 제공한다.

### Selected Work Detail

- Case 01: Monorepo + FSD + Public API map, component state matrix, data boundary diagram.
- Case 02: map/list/detail/filter state flow, GIS popup render boundary, token refresh pseudo flow.
- Case 03: workflow timeline, phase gate diagram, AGENTS/rules/prompts map.

### Dog Photo

- About ProfileCard에서 small image.
- 어떤 경우에도 hero보다 시각 비중이 커지지 않는다.

## Cross-Viewport Rules

- 360px부터 텍스트가 넘치지 않아야 한다.
- CTA label은 줄바꿈되어도 의미가 유지되어야 한다.
- Header/MobileNav는 CTA를 가리지 않아야 한다.
- GitHub는 secondary link로만 유지한다.
- 업무 화면, Figma 캡처, 얼굴 사진은 어떤 viewport에서도 사용하지 않는다.
- PDF와 Email CTA는 모바일에서도 쉽게 접근 가능해야 한다.
