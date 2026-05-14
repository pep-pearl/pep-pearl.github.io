# Issue List

## Critical

현재 Critical issue는 발견되지 않았다.

- 전화번호, 얼굴 사진, 업무 화면 이미지, Figma 캡처, 내부 서버/API endpoint, 토큰/계정 정보, 구체적인 성과 수치, `lh_dmp` 실제 경로/파일명은 사이트 구현 영역에서 발견되지 않았다.
- `pnpm build`와 `pnpm typecheck`는 통과했다.

## Muted Text Contrast Is Below WCAG AA

- Severity: Major
- Area: Accessibility / Theming
- Location: `tailwind.config.cjs:12`
- Problem: `ink-muted`가 `#6F7B73`으로 설정되어 있으며 normal text 대비가 부족하다. 측정 결과 `#F7FAF6` 배경에서 4.20:1, `#FFFFFF` 배경에서 4.41:1, `#EEF4EF` 배경에서 3.96:1로 WCAG AA normal text 기준 4.5:1에 미달한다.
- Why it matters: 본문 설명, 카드 설명, 보조 링크 등 사이트의 많은 문장이 `text-ink-muted`를 사용한다. 채용 담당자와 기술 리드가 빠르게 읽어야 하는 커리어 사이트에서 보조 텍스트의 낮은 대비는 실제 가독성과 접근성을 떨어뜨린다.
- Suggested fix: `ink-muted` token을 더 어둡게 조정한다. 예: `#5E6A62` 또는 그보다 높은 contrast를 가진 green-tinted neutral. 변경 후 page, surface, page-soft 배경에서 4.5:1 이상인지 다시 측정한다.

## Closed Mobile Navigation Remains Keyboard Reachable

- Severity: Major
- Area: Accessibility / Keyboard Navigation
- Location: `src/widgets/header/Header.tsx:58-62`
- Problem: 모바일 메뉴가 닫혔을 때 `max-h-0 overflow-hidden py-0 opacity-0`만 적용된다. DOM에는 링크가 남아 있으므로, 작은 화면에서 닫힌 메뉴의 링크들이 보이지 않는 상태로 tab order에 포함될 수 있다.
- Why it matters: 키보드 사용자는 화면에 보이지 않는 링크로 포커스가 이동하는 경험을 하게 된다. 이는 navigation 예측 가능성을 떨어뜨리고 WCAG keyboard/focus 기준에 맞지 않는다.
- Suggested fix: 메뉴가 닫힌 상태에서는 링크를 focus 대상에서 제거한다. 선택지는 조건부 렌더링, `hidden`/`aria-hidden`, `inert`, 또는 각 링크의 `tabIndex={isOpen ? 0 : -1}` 처리다. 애니메이션을 유지하려면 visibility와 focusability를 함께 제어한다.

## Antigravity Visual QA Is Still Incomplete

- Severity: Major
- Area: Responsive / QA Coverage
- Location: `reports/antigravity-design-report.md:107-112`
- Problem: Antigravity 리뉴얼 이후 360px mobile, 768px tablet, 1024px desktop, 1440px wide desktop을 실제 브라우저로 확인하지 못한 상태다. 이번 세션에서도 `pnpm preview`는 URL을 띄우는 것까지 확인했으나, 브라우저 자동화는 보안 정책 제한으로 재실행하지 않았다.
- Why it matters: 이번 리뉴얼은 Hero clamp typography, Experience timeline, Contact panel, thin border 중심 visual system을 변경했다. 실제 viewport 확인 없이 배포하면 모바일 줄바꿈, timeline dot/line 정렬, CTA wrapping 문제가 남을 수 있다.
- Suggested fix: 로컬 브라우저 또는 CI preview 환경에서 360, 768, 1024, 1440px viewport를 수동/자동으로 확인한다. 특히 Hero headline 3줄 이하 유지 여부, PDF/Email CTA visibility, Experience line alignment, Selected Work diagram overflow를 확인한다.

## `dist` Can Accumulate Stale Assets Locally

- Severity: Minor
- Area: GitHub Pages Deployability / Build Hygiene
- Location: `vite.config.ts:6`, `dist/assets/*`
- Problem: `build.emptyOutDir`가 `false`라 repeated local build 후 `dist/assets`에 이전 hash asset이 남을 수 있다. 현재 `dist`에도 이전 빌드 asset이 함께 존재한다.
- Why it matters: GitHub Actions는 fresh checkout에서 실행되므로 Pages artifact에는 보통 영향이 없지만, 로컬 `dist`를 수동 배포하거나 검수할 때 불필요한 stale artifact가 섞인다.
- Suggested fix: CI 기준은 유지하되, 로컬 검수 전 `dist`를 안전하게 정리하는 스크립트나 안내를 둔다. 또는 Windows/Korean filename crash 원인을 우회할 수 있으면 `emptyOutDir`를 기본값으로 되돌린다.

## Temporary Scratch Script Should Not Be Committed

- Severity: Minor
- Area: Repository Hygiene / Privacy Boundary
- Location: `scratch/replace.mjs:4`
- Problem: Antigravity 리뉴얼용 임시 스크립트가 untracked 상태로 남아 있고, 로컬 절대 경로 `d:/01_Projects/workspace/pep-pearl.github.io/src`를 포함한다.
- Why it matters: 사이트 런타임에는 영향이 없지만 공개 저장소에 커밋되면 불필요한 작업 흔적과 로컬 경로가 공개된다.
- Suggested fix: 커밋 전 `scratch/`를 제거하거나 `.gitignore`에 추가한다. 디자인 변경 근거는 `reports/antigravity-design-report.md`만 남기면 충분하다.

## Lint And Test Scripts Are Not Configured

- Severity: Minor
- Area: QA Automation
- Location: `package.json:scripts`
- Problem: `typecheck`, `build`, `preview`, `dev`만 있고 `lint`와 `test` script가 없다.
- Why it matters: 현재 규모에서는 큰 리스크는 아니지만, 리뷰 단계의 자동 품질 검수 범위가 TypeScript와 build로 제한된다.
- Suggested fix: 배포 전 필수는 아니지만, 이후 반복 수정이 늘어나면 ESLint 또는 최소 lint script를 추가하는 것을 검토한다.

## LinkedIn Runtime Availability Was Not Fully Verified

- Severity: Minor
- Area: External Links
- Location: `src/content/profile.ts:49-62`
- Problem: Blog와 GitHub repository URL은 웹에서 접근 확인이 가능했지만, LinkedIn 프로필은 비로그인/크롤러 제한으로 실제 페이지 내용을 완전히 확인하지 못했다.
- Why it matters: Contact의 professional proof link가 깨져 있으면 채용 담당자 확인 흐름이 약해질 수 있다.
- Suggested fix: 사용자가 실제 브라우저에서 LinkedIn link를 한 번 확인한다. 링크 자체는 planning/source-of-truth 기준과 일치한다.
