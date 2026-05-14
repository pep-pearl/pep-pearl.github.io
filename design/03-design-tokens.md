# 03. Design Tokens

## Token Principles

이 문서는 Tailwind theme로 옮기기 쉬운 token 명세다. 실제 CSS 코드는 작성하지 않는다.

토큰은 다음 원칙을 따른다.

- Semantic token 우선
- rem 기반 spacing/typography
- restrained accent
- 카드 radius는 8px 이하
- motion은 짧고 조용하게

## Color Tokens

### Surface

| Token | Direction | Use |
| --- | --- | --- |
| color-surface-page | mineral off-white, pure white 아님 | page background |
| color-surface-raised | page보다 아주 약간 밝거나 깊은 surface | cards, CTA secondary |
| color-surface-muted | cool neutral tint | diagram background, subtle bands |
| color-surface-inverse | deep neutral ink | rare inverse CTA or footer accent |

### Text

| Token | Direction | Use |
| --- | --- | --- |
| color-text-primary | strong neutral ink | headline, body important |
| color-text-secondary | readable muted neutral | descriptions |
| color-text-tertiary | meta but accessible | eyebrow, period, caption |
| color-text-inverse | light text on inverse surface | inverse CTA only |

### Accent

| Token | Direction | Use |
| --- | --- | --- |
| color-accent | deep teal / muted green | primary CTA, active indicator |
| color-accent-soft | very pale accent tint | diagram node, badge tint |
| color-accent-strong | darker accent state | hover/active |
| color-focus | high-contrast focus color | focus-visible |

### Border

| Token | Direction | Use |
| --- | --- | --- |
| color-border-subtle | neutral hairline | cards, dividers |
| color-border-strong | visible but calm | focus-adjacent outlines |
| color-border-accent | accent-tinted line | active card, diagram highlight |

## Typography Tokens

Font direction:

- font-sans: Pretendard, Inter, Korean-friendly system sans-serif stack
- font-mono: code term only, not layout identity

Scale direction:

| Token | Suggested Range | Use |
| --- | --- | --- |
| text-xs | 0.75rem-0.8125rem | badge/meta |
| text-sm | 0.875rem | secondary links, tags |
| text-base | 1rem | body mobile |
| text-md | 1.0625rem-1.125rem | body desktop lead |
| text-lg | 1.25rem | card title |
| text-xl | 1.5rem | section title mobile |
| text-2xl | 1.875rem | section title desktop |
| text-hero | 2.5rem-4.5rem responsive range | hero headline only |

Line-height:

- heading-tight: compact but readable
- body-relaxed: Korean body readability
- label-snug: badges and tags

Letter spacing:

- 기본 0
- meta uppercase를 사용하더라도 과한 spacing 금지

## Spacing Tokens

| Token | Size | Use |
| --- | --- | --- |
| space-1 | 0.25rem | tiny gaps |
| space-2 | 0.5rem | icon/text, tag inner |
| space-3 | 0.75rem | compact stack |
| space-4 | 1rem | base gap |
| space-5 | 1.25rem | CTA gap |
| space-6 | 1.5rem | mobile card padding |
| space-8 | 2rem | block gap |
| space-10 | 2.5rem | heading/content gap |
| space-12 | 3rem | mobile section |
| space-16 | 4rem | tablet section |
| space-20 | 5rem | desktop section |
| space-24 | 6rem | hero large gap |

## Radius Tokens

| Token | Size | Use |
| --- | --- | --- |
| radius-xs | 0.25rem | badge/tag |
| radius-sm | 0.375rem | button |
| radius-md | 0.5rem | card/diagram |
| radius-full | full | dog photo/avatar only |

Cards should not exceed radius-md unless the component is an image/avatar.

## Shadow Tokens

| Token | Direction | Use |
| --- | --- | --- |
| shadow-none | no elevation | default |
| shadow-soft | very shallow depth | raised cards |
| shadow-hover | subtle interactive lift | clickable cards only |

No heavy floating shadow. Shadow should never be the main visual style.

## Border Tokens

| Token | Direction | Use |
| --- | --- | --- |
| border-hairline | 1px subtle | card, divider |
| border-focus | visible focus outline | interactive elements |
| border-active | accent-tinted | active nav/card |

## Motion Tokens

| Token | Direction | Use |
| --- | --- | --- |
| motion-duration-fast | 120-160ms | hover, active |
| motion-duration-base | 180-220ms | nav, card |
| motion-duration-slow | 260-320ms | section reveal only |
| motion-ease-out | smooth deceleration | reveal, hover |
| motion-ease-standard | simple state changes | nav, detail |

Avoid bounce, elastic, long delays, and layout-changing animation.

## Z-Index 기준

| Token | Use |
| --- | --- |
| z-base | normal content |
| z-sticky | header |
| z-nav | mobile nav surface |
| z-overlay | only if mobile nav needs overlay |
| z-focus | visible focus ring where needed |

Modal usage is not planned for v1. If used later, it must be justified by UX need.
