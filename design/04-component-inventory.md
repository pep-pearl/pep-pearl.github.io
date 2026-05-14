# 04. Component Inventory

## Source Basis

이 문서는 `specs/component-inventory.md`의 상세 버전이다. 실제 컴포넌트 구현 코드는 포함하지 않으며, development 단계에서 small components named by intent 원칙을 따르기 위한 설계 기준이다.

## AppShell

- 목적: 전체 페이지 구조와 semantic landmarks를 관리한다.
- 상태: default, skip-link focused.
- variants: one-page only.
- props 초안: sections, navItems, primaryLinks, secondaryLinks.
- 데이터 출처: planning IA, resume.site, link data.
- 접근성: skip link, header/main/footer, anchor focus management.
- 반응형: content max-width와 section spacing을 viewport별로 조정.
- 구현 난이도: Low.
- 개발 단계 주의점: v1에서 routing을 만들지 않고 anchor 기반을 우선한다.

## Header

- 목적: 사이트 정체성, section navigation, 핵심 행동 접근성을 제공한다.
- 상태: default, scrolled, active-section, mobile-menu-open.
- variants: desktop nav, mobile compact.
- props 초안: brandName, roleLabel, navItems, activeSectionId.
- 데이터 출처: public identity, IA anchors.
- 접근성: nav label, active state text/aria-current 검토.
- 반응형: desktop full nav, mobile menu button.
- 구현 난이도: Medium.
- 개발 단계 주의점: GitHub를 primary CTA처럼 넣지 않는다.

## MobileNav

- 목적: mobile anchor navigation을 명확하고 안전하게 제공한다.
- 상태: closed, open, item-focused.
- variants: dropdown or full-width panel.
- props 초안: items, isOpen, onClose, activeId.
- 데이터 출처: IA anchors.
- 접근성: menu button label, aria-expanded, focus return, Escape close.
- 반응형: 360px에서 메뉴 항목 줄바꿈 허용.
- 구현 난이도: Medium.
- 개발 단계 주의점: menu가 Resume/Contact CTA 접근성을 가리지 않게 한다.

## Section

- 목적: 섹션 rhythm과 semantic grouping.
- 상태: default, revealed.
- variants: default, muted, compact, wide.
- props 초안: id, titleId, tone, width, children.
- 데이터 출처: IA.
- 접근성: section labelled by heading.
- 반응형: vertical spacing token이 breakpoint별로 달라짐.
- 구현 난이도: Low.
- 개발 단계 주의점: 섹션 전체를 floating card로 만들지 않는다.

## SectionHeading

- 목적: 섹션의 역할과 읽기 방향을 짧게 제시한다.
- 상태: default.
- variants: default, centered only if needed, compact.
- props 초안: eyebrow, title, description.
- 데이터 출처: planning section outline.
- 접근성: h2/h3 hierarchy 관리.
- 반응형: mobile에서 description이 너무 길면 content 자체를 줄인다.
- 구현 난이도: Low.
- 개발 단계 주의점: heading 중복 문장을 피한다.

## HeroSection

- 목적: identity, headline, description, CTA를 첫 화면에 전달한다.
- 상태: loaded.
- variants: text-only with evidence preview.
- props 초안: identity, role, headline, description, ctas, links.
- 데이터 출처: resume.site Hero, CTA strategy.
- 접근성: h1 단일 사용, CTA labels clear.
- 반응형: mobile priority strict, desktop two-zone 가능.
- 구현 난이도: Medium.
- 개발 단계 주의점: hero visual은 업무 화면/dog/GitHub stats가 아니다.

## CTAButton

- 목적: conversion action을 명확히 표시한다.
- 상태: default, hover, focus, active, disabled only if needed.
- variants: primary, secondary, subtle.
- props 초안: label, href, intent, icon, download, external.
- 데이터 출처: CTA strategy.
- 접근성: focus-visible, download/external 설명.
- 반응형: label wrapping, minimum tap target.
- 구현 난이도: Low.
- 개발 단계 주의점: primary는 PDF와 Email에 집중한다.

## LinkButton

- 목적: 낮은 위계의 action을 제공한다.
- 상태: default, hover, focus, active.
- variants: text, outline, inline.
- props 초안: label, href, external, anchor.
- 데이터 출처: CTA strategy.
- 접근성: link purpose clear.
- 반응형: mobile inline group 또는 stacked.
- 구현 난이도: Low.
- 개발 단계 주의점: primary button처럼 보이지 않게 한다.

## ProfileCard

- 목적: About summary와 작은 dog photo를 묶는다.
- 상태: default.
- variants: compact, footer-signature optional.
- props 초안: imageSrc, imageAlt, summary, keywords.
- 데이터 출처: resume.site Summary, dog_photo.png policy.
- 접근성: alt text, image decorative 여부 판단.
- 반응형: mobile에서는 text first, image small.
- 구현 난이도: Low.
- 개발 단계 주의점: dog photo는 전문성을 덮지 않는다.

## StrengthCard

- 목적: 핵심 역량 3개를 증거와 함께 보여준다.
- 상태: default, hover/focus if clickable.
- variants: design-system, architecture, ai-workflow.
- props 초안: title, summary, evidence, visualHint.
- 데이터 출처: resume.site Core Strengths.
- 접근성: evidence는 list로 제공.
- 반응형: 1/2/3 column.
- 구현 난이도: Low-Medium.
- 개발 단계 주의점: icon-only card처럼 단순화하지 않는다.

## ExperienceTimeline

- 목적: 경력 흐름을 PDF 없이 이해시킨다.
- 상태: default.
- variants: vertical, desktop split timeline.
- props 초안: intro, items.
- 데이터 출처: resume.codex, planning outline.
- 접근성: chronological list semantics.
- 반응형: mobile simple list, desktop meta/content split.
- 구현 난이도: Medium.
- 개발 단계 주의점: 확인되지 않은 회사명/직책을 임의로 쓰지 않는다.

## WorkCard

- 목적: 대표 케이스 3개 overview.
- 상태: default, hover, focus, active/selected.
- variants: primary-case, standard-case.
- props 초안: caseNumber, title, summary, memoryLine, tags, detailTarget.
- 데이터 출처: selected-work-source, approved evidence.
- 접근성: clickable 영역과 heading 구조 명확히.
- 반응형: mobile 1열, desktop 강조 grid.
- 구현 난이도: Medium.
- 개발 단계 주의점: thumbnail을 fake screenshot처럼 만들지 않는다.

## WorkCaseDetail

- 목적: 케이스별 깊은 근거를 제공한다.
- 상태: collapsed, expanded, selected.
- variants: architecture-detail, gis-detail, workflow-detail.
- props 초안: title, context, problem, role, decisions, implementation, learned, visuals, relatedWriting.
- 데이터 출처: selected-work-source, approved-case-evidence, ai-agent-workflow-source.
- 접근성: accordion/detail 사용 시 aria-expanded와 labelled region.
- 반응형: mobile progressive disclosure, desktop 2-column detail.
- 구현 난이도: Medium-High.
- 개발 단계 주의점: 내부 경로, token key, endpoint, code 전체 노출 금지.

## DiagramCard

- 목적: 업무 화면을 대체하는 public-safe visual evidence.
- 상태: static, highlighted, focused.
- variants: relationship-map, state-matrix, flow, timeline, checklist.
- props 초안: title, description, type, items, caption, privacyNote.
- 데이터 출처: selected-work possible representations.
- 접근성: text alternative and caption required.
- 반응형: mobile list fallback, desktop diagram.
- 구현 난이도: Medium.
- 개발 단계 주의점: diagram이 실제 제품 UI나 Figma screenshot처럼 보이면 안 된다.

## TechStackGroup

- 목적: 기술을 사용 맥락별로 묶는다.
- 상태: default, expanded if accordion.
- variants: frontend, architecture, state-data, backend-collaboration, workflow.
- props 초안: title, items, note.
- 데이터 출처: resume.site Tech Stack.
- 접근성: list semantics, accordion state if used.
- 반응형: mobile stacked, desktop grid.
- 구현 난이도: Low.
- 개발 단계 주의점: 기술 로고/뱃지 과다로 GitHub showcase처럼 보이지 않게 한다.

## ResumeDownload

- 목적: 공개용 PDF 다운로드를 반복 제공한다.
- 상태: default, hover, focus, active.
- variants: hero-inline, section-card.
- props 초안: fileName, href, label, note.
- 데이터 출처: PDF policy, CTA strategy.
- 접근성: PDF와 download action 명시.
- 반응형: mobile full-width-ish touch target, desktop inline.
- 구현 난이도: Low.
- 개발 단계 주의점: PDF 파일명은 실명이 포함되지만 사이트 identity는 Peppearl이다.

## ContactSection

- 목적: 포지션/면접 제안 행동을 마무리한다.
- 상태: default.
- variants: simple contact block.
- props 초안: message, email, links.
- 데이터 출처: resume.site Contact, privacy docs.
- 접근성: mailto purpose clear, external links identified.
- 반응형: mobile CTA first, desktop message + links.
- 구현 난이도: Low.
- 개발 단계 주의점: 전화번호와 Wanted를 추가하지 않는다.

## Footer

- 목적: secondary links와 낮은 위계의 마무리.
- 상태: default.
- variants: with-small-dog optional.
- props 초안: brandName, role, links, dogPhotoOptional.
- 데이터 출처: links, dog photo policy.
- 접근성: footer landmark, external labels.
- 반응형: mobile stack, desktop row.
- 구현 난이도: Low.
- 개발 단계 주의점: footer가 주요 conversion보다 강해지면 안 된다.

## Badge

- 목적: category, case number, small meta label.
- 상태: default.
- variants: neutral, accent-soft.
- props 초안: label, tone.
- 데이터 출처: section/case labels.
- 접근성: color-only meaning 금지.
- 반응형: wrap allowed.
- 구현 난이도: Low.
- 개발 단계 주의점: 너무 많이 사용하지 않는다.

## Tag

- 목적: 기술, evidence keyword 표시.
- 상태: default, hover optional.
- variants: neutral, accent-soft, outline.
- props 초안: label, group.
- 데이터 출처: tech stack, selected work tags.
- 접근성: list item으로 묶기.
- 반응형: wrap and no overflow.
- 구현 난이도: Low.
- 개발 단계 주의점: tag pile이 콘텐츠를 대체하지 않게 한다.

## ExternalLink

- 목적: 외부 확인 링크를 제공한다.
- 상태: default, hover, focus.
- variants: inline, footer, related-writing.
- props 초안: label, href, kind, externalNote.
- 데이터 출처: links, related writing.
- 접근성: 새 창/외부 링크 안내.
- 반응형: mobile label visible; icon-only 금지.
- 구현 난이도: Low.
- 개발 단계 주의점: Related Writing permalink는 구현 전 최종 확인한다.

## Divider

- 목적: 조용한 구획 분리.
- 상태: default.
- variants: horizontal, vertical, labelled optional.
- props 초안: orientation, tone, label.
- 데이터 출처: layout needs.
- 접근성: decorative로 처리하거나 label이 있으면 의미 부여.
- 반응형: mobile에서 과다 사용 금지.
- 구현 난이도: Low.
- 개발 단계 주의점: 강한 표/관공서 문서 느낌을 만들지 않는다.
