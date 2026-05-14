# Review Result

## Scope

이 문서는 `prompts/04-review.prompt.md`, `rules/review.rules.md`, planning/design 산출물, 그리고 `reports/antigravity-design-report.md`를 기준으로 현재 구현된 Peppearl 커리어 사이트를 검수한 결과다.

이번 리뷰는 새 기능 확장이 아니라 Review / QA Phase이며, 필요한 수정은 `review/03-fix-plan.md`에 우선순위로 정리한다.

## Overall Status

Verdict: `NEEDS_REVISION`

기술적으로는 `pnpm install`, `pnpm typecheck`, `pnpm build`가 통과했고 GitHub Pages user site 기준의 `base: '/'`, `dist` output, Pages workflow도 확인됐다. 커리어 랜딩페이지 목적, Peppearl 중심 public identity, Hero headline, 3개 핵심 역량, Selected Work 3개, PDF/Email CTA는 구현 기준을 대체로 충족한다.

다만 배포 전 수정이 필요한 접근성 이슈가 있다.

- `ink-muted` 텍스트 대비가 normal text 기준 WCAG AA 4.5:1에 못 미친다.
- 닫힌 모바일 내비게이션의 링크가 `max-height: 0`/`opacity: 0` 상태에서도 키보드 포커스 대상에 남을 가능성이 있다.
- Antigravity 보고서의 남은 리스크였던 360/768/1024/1440 실제 렌더링 확인은 현재 브라우저 자동화 제한으로 완료하지 못했다.

## Core Strengths

- Hero에서 `Peppearl`, `Frontend Engineer`, `제품의 완성도를 높이는 프론트엔드 개발자`가 명확하다.
- GitHub가 메인 CTA가 아니라 LinkedIn/Blog와 같은 secondary link로만 배치되어 있다.
- Design System / Frontend Architecture / AI Agent Workflow 세 축이 Hero, Core Strengths, Selected Work에서 반복된다.
- 업무 화면/Figma 캡처 없이 public-safe diagram, matrix, flow 중심으로 근거를 보여준다.
- `dog_photo.png`는 About의 작은 profile visual로만 사용된다.
- Vite + React + TypeScript + TailwindCSS + GitHub Actions 구조가 단순하게 유지되어 있다.

## Biggest Risks

1. Accessibility: 색상 대비와 모바일 메뉴 포커스 이슈는 배포 전 수정이 필요하다.
2. Responsive QA: Antigravity 리뉴얼 이후 실제 viewport별 visual QA가 아직 완료되지 않았다.
3. Repository hygiene: `scratch/replace.mjs`는 임시 스크립트이며 절대 로컬 경로를 포함한다. 공개 저장소 커밋 전 제거하거나 ignore 처리하는 편이 안전하다.

## Audit Health Score

| Dimension | Score | Key Finding |
| --- | ---: | --- |
| Accessibility | 2 / 4 | `ink-muted` contrast와 닫힌 mobile nav focus 문제가 있음 |
| Performance | 3 / 4 | 번들은 가볍고 heavy library 없음. dog image는 lazy-load됨 |
| Theming | 3 / 4 | token 체계는 좋지만 muted text token 대비 조정 필요 |
| Responsive Design | 3 / 4 | 코드 구조는 mobile-first이나 실제 viewport visual QA 미완료 |
| Anti-Patterns | 3 / 4 | 과한 3D/particle/GitHub 중심은 없음. Contact gradient는 허용 범위 |
| Total | 14 / 20 | Good, but accessibility fixes needed before deploy |

## Final Verdict

`NEEDS_REVISION`

배포 전 Major 접근성 이슈 2개와 viewport visual QA를 처리한 뒤 재검토하는 것이 안전하다.
