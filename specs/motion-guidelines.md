# Motion Guidelines

## Source Basis

이 문서는 development 단계에서 motion을 최소한으로 구현하기 위한 기준이다. 모션은 구조 이해를 돕는 보조 수단이며, 텍스트 가독성보다 앞서면 안 된다.

## Motion Principles

- Motion은 정보 구조를 설명하거나 상태 변화를 피드백할 때만 사용한다.
- 모든 motion은 짧고 조용해야 한다.
- 읽기 흐름을 방해하지 않는다.
- 성능 부담이 큰 3D, particle, background animation은 사용하지 않는다.
- `prefers-reduced-motion`을 반드시 존중한다.

## Allowed Motion

- Hero load 시 opacity/short vertical reveal
- Section reveal: viewport 진입 시 1회만 매우 약하게
- CTA hover/focus/active feedback
- Card hover 시 border/accent/shadow의 미세한 변화
- Mobile nav open/close
- Work detail expand/collapse
- Diagram step hover/focus highlight
- Resume download click feedback

## Disallowed Motion

- Scroll hijacking
- Heavy parallax
- Constant moving background
- Large animated 3D object
- Particle field
- Text가 흔들리거나 흐려지는 animation
- 과한 stagger로 본문 읽기를 지연시키는 방식
- 카드가 크게 들썩이거나 bounce/elastic 느낌의 motion

## Hover / Focus / Active States

CTA:

- Hover: background 또는 border contrast를 조금 높인다.
- Focus: keyboard 사용자가 분명히 볼 수 있는 focus-visible ring 또는 outline.
- Active: 짧은 press feedback.

Links:

- Hover: underline 또는 subtle color change.
- Focus: underline과 focus outline을 함께 제공.

Cards:

- Hover: clickable card에만 미세한 lift 또는 border accent.
- Focus: card 전체가 link/button이면 outline 제공.
- Active: content가 움직여 layout shift가 생기지 않게 한다.

## Section Reveal

- Section reveal은 선택 사항이다.
- Hero와 첫 Core Strengths까지만 살짝 사용해도 충분하다.
- 긴 문단이 순차적으로 늦게 나타나 읽기를 방해하면 안 된다.
- reduced motion 환경에서는 즉시 표시한다.

## Card Interaction

- WorkCard는 hover로 "더 읽을 수 있음"을 알려도 좋다.
- 카드 높이가 hover로 변하면 안 된다.
- 모바일에서는 hover가 없으므로 expand affordance를 text/icon으로 명확히 둔다.

## Diagram Interaction

- DiagramCard는 hover/focus 시 관련 node나 step을 은은하게 강조할 수 있다.
- diagram의 모든 정보는 텍스트 caption 또는 리스트로도 이해 가능해야 한다.
- diagram interaction은 필수가 아니며, 정적인 diagram으로도 충분해야 한다.

## Prefers Reduced Motion

reduced motion 환경:

- section reveal 제거
- hover transition duration 최소화
- expand/collapse는 즉시 전환 또는 아주 짧게 처리
- scroll-behavior는 smooth를 강제하지 않는다

## Framer Motion Decision

v1에서는 Framer Motion을 사용하지 않는다. CSS transition과 필요한 경우 IntersectionObserver 기반 reveal만으로 구현한다.

Framer Motion은 v1 이후 별도 redesign 또는 motion 강화 요청이 있을 때만 재검토한다.

- Work detail expand/collapse가 CSS만으로 접근성과 품질을 맞추기 어렵다.
- 번들 비용과 구현 복잡도를 감수할 이유가 있다.
- 사용자가 디자인 review gate에서 motion 강화를 승인한다.
