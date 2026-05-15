# portfolio01 Case Design

## Purpose

Add `temp/portfolio01` to the portfolio as an independent selected-work case that proves UI/UX design ownership and frontend system thinking.

The case should not read as a motion demo or an AI-designed page. It should read as a product trial landing redesign where the visual language was made maintainable through BEM class structure and design tokens.

## Recommended Placement

Add this work as a new full selected-work case.

- Case label: `Case 04`
- Main title: `Trial Landing UI System Redesign`
- Supporting phrase: `Product trial page redesign with BEM & design tokens`
- Evidence model: live demo + code excerpts + UX decision cards

This should be a full case rather than a sub-item under the existing design-system case because the future portfolio direction is evidence-heavy. This artifact can independently show design, implementation structure, and public-safe publishing judgment.

## Audience Strategy

For HR and headhunters, the case needs an immediate finished artifact:

- A live demo link.
- A strong visual preview.
- A concise case title that sounds product-facing, not internal-tool-only.

For practical leaders, the case needs implementation proof:

- Design token excerpts from `:root`.
- BEM-style class examples.
- A short explanation of how section structure, tokens, and naming keep the page maintainable.

For personal branding, the case should leave one impression:

> I can design a product landing experience and encode the design language into a consistent frontend system.

## Content Structure

### Case Card

The selected-work card should lead with system-oriented design rather than animation.

Suggested memory line:

> A sanitized product trial landing page redesigned into a consistent UI system with BEM classes, design tokens, responsive sections, and a live public-safe demo.

Suggested tags:

- `UI/UX Redesign`
- `Design Tokens`
- `BEM`
- `Responsive UI`
- `Public-safe Demo`

### Case Detail

The detailed case should include:

1. Problem
   - A trial page has to explain product value quickly, build trust, and guide the user toward the next action.
   - A visual redesign alone is not enough if the CSS structure cannot stay consistent across sections.

2. Role
   - UI/UX redesign was fully designed by the user.
   - Frontend implementation structure was organized by the user.
   - AI did not influence design direction.
   - AI was used only as limited implementation assistance for animation and one-page scroll behavior.

3. Key Decisions
   - Created tokenized foundations for typography, spacing, radius, color, shadow, motion, layout, and controls.
   - Used BEM-style class naming to keep section-level UI readable and maintainable.
   - Kept motion supportive to navigation and emphasis, not the main value of the page.
   - Used already sanitized product content and did not over-transform the artifact.

4. Implementation Evidence
   - Live demo link.
   - `:root` token excerpt.
   - BEM class structure excerpt.
   - Short note on motion and full-page scroll as implementation support.

5. What I Learned
   - A landing redesign becomes stronger when visual decisions are encoded into reusable tokens, naming rules, and section structure.

## UX Decision Cards

Use three concise cards.

### 1. Trial-page hierarchy

Explain how the first screen, product value, feature evidence, and final contact action are sequenced so the page can support a trial decision.

### 2. Tokenized consistency

Explain how type, spacing, radius, color, shadow, and motion tokens prevent one-off styling and keep the page coherent across sections.

### 3. Motion as support

Explain that one-page scroll and animation were used to support section transitions and attention, not to replace information architecture.

## Code Evidence

Show selected excerpts only. Do not paste the full CSS or JavaScript.

Recommended CSS token excerpt:

```css
:root {
  --space-4: 1rem;
  --radius-lg: var(--space-4);
  --color-brand: #5d57ff;
  --motion-duration-section: 900ms;
  --layout-hero-width: 72rem;
}
```

Recommended BEM-style excerpt:

```html
<section class="landing-section landing-section--feature fullpage__section">
  <div class="landing-section__body fullpage__body feature-section">
    <div class="landing-section__content feature-section__copy">
      ...
    </div>
  </div>
</section>
```

Recommended implementation note:

> The page uses one-page section navigation and motion to support the trial-page flow. These interaction details were implemented with AI assistance, while the UI/UX design direction, layout decisions, class structure, and design-token system were user-authored.

## Privacy And AI Boundaries

The current `temp/portfolio01` artifact is treated as public-safe because company logo and company content have already been removed.

Do:

- Say the demo is sanitized.
- Say the UI/UX design was user-authored.
- Say AI was used only for limited animation and one-page scroll implementation assistance.

Do not:

- Suggest this is a real company/product page.
- Make the original business context traceable.
- Overemphasize AI.
- Present motion as the main value.
- Add extra anonymization that makes the artifact feel artificial unless a later review finds a real exposure risk.

## Acceptance Criteria

- `portfolio01` is represented as an independent selected-work case.
- The case uses `Trial Landing UI System Redesign` or a close variant as the title.
- The case includes a live demo link or equivalent direct access point.
- The case includes one token excerpt and one BEM-style structure excerpt.
- The case includes three UX decision cards.
- The case explicitly states that AI did not influence design.
- The case states AI was only used for limited animation and one-page scroll implementation assistance.
- The case does not expose company logo, company content, or traceable original business context.
- The case does not frame the work as a motion-first or AI-first artifact.

## Open Follow-up For Implementation Planning

- Decide whether the live demo should be copied into `public/portfolio01/`, routed through the app, or linked as a static asset bundle.
- Decide how the current selected-work data model should represent live demo links and code excerpts.
- Decide whether code excerpts should be plain content fields, a new visual type, or a dedicated case-detail component.
