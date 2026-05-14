# Responsive & Accessibility Check

## Verification Method

- 코드 기반 responsive 구조 검수
- Tailwind breakpoint/class 확인
- WCAG contrast 계산
- build output asset path 확인
- `pnpm preview` 실행 가능 여부 확인

제한 사항:

- `pnpm preview`는 `http://127.0.0.1:4173/` URL을 띄우는 것까지 확인했으나, 서버 유지형 명령이라 10초 제한에서 종료됐다.
- 브라우저 자동화는 이전 보안 정책 제한이 있어 강제 우회하지 않았다.
- 따라서 360/768/1024/1440 viewport는 실제 screenshot 기반 확인이 아니라 코드 기반 QA로 기록한다.

## 360px Mobile

Status: Needs visual confirmation

Pass:

- Hero content order is correct: Peppearl / Frontend Engineer -> headline -> description -> CTAs.
- CTA buttons use `w-full` on mobile and `min-h-11`.
- Core Strengths, Selected Work, Experience, Tech Stack all stack to single-column or vertical layouts.
- Matrix diagram uses `overflow-x-auto`.

Risks:

- Hero headline uses `clamp(2.5rem,5vw,3.75rem)`. At 360px, 2.5rem Korean headline may wrap into several lines. It is likely readable but should be visually checked.
- Closed MobileNav may keep hidden links keyboard-focusable until fixed.
- Contact CTA should be checked for full-width alignment inside dark panel.

## 768px Tablet

Status: Needs visual confirmation

Pass:

- Header switches to desktop nav from `md`.
- Strengths use 2 columns at `md`.
- Experience timeline switches from mobile line to grid timeline at `md`.
- Resume panel switches to horizontal layout at `md`.

Risks:

- Strengths 3-card layout leaves one card on a second row at tablet. This is acceptable but should be checked for balance.
- Timeline dot/line alignment after Antigravity change should be checked visually.

## 1024px Desktop

Status: Code structure pass, visual confirmation recommended

Pass:

- Hero uses two-column layout with text and system diagram.
- Selected Work overview uses 3 columns.
- WorkCaseDetail uses text + diagram two-column layout.
- Tech Stack uses 2-column matrix-like layout.

Risks:

- Selected Work detail uses wide rounded panels and diagrams; check that this does not feel like nested cards or visual over-decoration.

## 1440px Wide Desktop

Status: Code structure pass, visual confirmation recommended

Pass:

- `max-w-7xl` and `max-w-6xl` constrain line length.
- Hero and section layouts should not stretch indefinitely.

Risks:

- Contact section dark panel may visually dominate the page ending. It is acceptable if CTA hierarchy remains calm.

## Keyboard Navigation

Status: Needs revision

Pass:

- Header, links, CTAs, summary links have focus-visible outline styles.
- Skip link exists and points to `#main`.
- Buttons are implemented as links for link destinations, which is semantically appropriate.

Issue:

- MobileNav closed state uses visual hiding only. Hidden links may remain keyboard reachable.

## Focus Visible

Status: Mostly pass with MobileNav exception

- `ButtonLink`, `ExternalLink`, header logo, nav links, mobile menu button, Selected Work detail links have visible focus classes.
- MobileNav focusability while closed must be corrected.

## Reduced Motion

Status: Pass

- `prefers-reduced-motion: reduce` disables animation duration, smooth scrolling, and section reveal animation.
- No Framer Motion, 3D, particle, parallax, or heavy motion library is used.

## Heading Hierarchy

Status: Pass

- Single `h1` in Hero.
- Major sections use `h2`.
- Cards/details use `h3`.
- Detail blocks use `h4`.
- `section` wrappers use `aria-labelledby` and matching heading IDs for main sections.

## Color Contrast

Status: Needs revision

Measured contrast:

- `ink` on `page`: 16.88:1
- `brand` on `page`: 7.41:1
- white on `brand`: 7.79:1
- approximate white/80 on `brand-dark`: 9.32:1
- `ink-muted` on `page`: 4.20:1
- `ink-muted` on `surface`: 4.41:1
- `ink-muted` on `page-soft`: 3.96:1

`ink-muted` is below WCAG AA 4.5:1 for normal text and should be darkened.

## Alt Text

Status: Pass

- dog photo uses alt text: `Peppearl의 보조 프로필 이미지로 사용하는 강아지 사진`.
- dog photo is lazy-loaded and appears only in About.

## External Link Accessibility

Status: Pass with one live-check limitation

- External links have accessible labels ending with `외부 링크 열기`.
- Visual external indicator is `aria-hidden`.
- LinkedIn live availability was not fully verified due external access limitations.

## PDF Download Accessibility

Status: Pass

- Hero and Resume include PDF download CTA.
- Labels explicitly say PDF.
- Build output includes `/이혜주_FrontendEngineer.pdf`.
