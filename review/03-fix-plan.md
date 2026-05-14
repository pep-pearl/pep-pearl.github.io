# Fix Plan

## Fix Now

1. `ink-muted` contrast 조정
   - `tailwind.config.cjs`의 `ink-muted`를 더 어둡게 조정한다.
   - page, surface, page-soft 배경에서 normal text contrast 4.5:1 이상을 다시 측정한다.
   - 영향 범위가 사이트 전반이므로 가장 먼저 처리한다.

2. 닫힌 MobileNav focusability 제거
   - `src/widgets/header/Header.tsx`에서 `isOpen === false`일 때 모바일 nav link가 tab order에 들어오지 않도록 한다.
   - 권장안: menu panel은 애니메이션 유지, 내부 링크는 `tabIndex={isOpen ? 0 : -1}`와 `aria-hidden={!isOpen}` 조합 또는 조건부 렌더링.
   - 수정 후 keyboard tab order를 확인한다.

## Fix Before Deploy

1. 360 / 768 / 1024 / 1440 viewport visual QA
   - Hero headline wrapping
   - Hero CTA visibility and wrapping
   - Experience timeline line/dot alignment
   - Selected Work card and diagram overflow
   - Contact dark panel CTA alignment

2. `scratch/replace.mjs` 처리
   - 공개 커밋 전 제거하거나 `.gitignore` 처리한다.
   - Antigravity 리뉴얼 기록은 `reports/antigravity-design-report.md`만 유지한다.

3. Local `dist` stale asset 정리 방식 결정
   - GitHub Actions fresh build에는 영향이 작다.
   - 로컬 preview/deploy 전에는 stale assets가 섞이지 않도록 정리 절차를 둔다.

## Fix Later

1. Lint script 추가 검토
   - 현재 TypeScript/build 검증은 통과한다.
   - 이후 수정이 늘어나면 ESLint 또는 formatting check를 추가한다.

2. External link live check 자동화 검토
   - Blog와 GitHub는 접근 확인됨.
   - LinkedIn은 비로그인 접근 제약이 있으므로 수동 확인을 권장한다.

## Optional Polish

1. Contact section visual intensity 점검
   - Antigravity 리뉴얼로 Contact가 페이지의 강한 마침표 역할을 한다.
   - 실제 화면에서 너무 강하면 gradient opacity나 radius를 조금 낮춘다.

2. Selected Work diagram density 점검
   - 실제 viewport에서 matrix가 좁게 보이면 mobile에서 더 간단한 stacked list로 바꾸는 것을 검토한다.

3. Tech Stack compact matrix spacing 점검
   - 모바일에서 카테고리가 길어 보이면 group 간 spacing을 약간 조정한다.

## Do Not Change Without Approval

- 새 섹션 추가
- multi-page routing 추가
- Framer Motion, 3D, particle, parallax 추가
- 업무 화면 이미지 또는 Figma 캡처 추가
- 구체적인 성과 수치 추가
- GitHub를 main CTA로 격상
