# Component Inventory

## Source Basis

이 문서는 development 단계에서 컴포넌트를 나눌 때 참고할 핵심 요약 명세다. props는 구현 방향을 위한 초안이며 실제 TypeScript 코드는 작성하지 않는다.

## Components

### AppShell

- 역할: 전체 페이지의 header, main, footer, skip link, anchor 흐름을 잡는다.
- 사용 위치: 최상위 layout.
- props 초안: sections, primaryCta, secondaryLinks.
- 콘텐츠 출처: planning IA, resume.site, links data.
- 반응형 고려사항: mobile single column, desktop max-width content rhythm.
- 접근성 고려사항: skip link, header/main/footer landmarks, anchor target focus.
- motion 여부: page load reveal은 하위 section에서 처리.
- 구현 시 주의점: route를 늘리지 않고 v1 원페이지 anchor navigation을 우선한다.

### Header

- 역할: 현재 사이트 정체성과 주요 anchor를 제공한다.
- 사용 위치: page top, sticky 또는 near-sticky header.
- props 초안: brandName, navItems, resumeLink, contactLink.
- 콘텐츠 출처: Public identity, IA anchors, CTA strategy.
- 반응형 고려사항: mobile에서는 nav items를 줄이고 MobileNav로 위임한다.
- 접근성 고려사항: nav landmark, 현재 section indicator는 색만으로 전달하지 않는다.
- motion 여부: scroll 시 subtle border/background transition 가능.
- 구현 시 주의점: GitHub를 header primary CTA로 두지 않는다.

### MobileNav

- 역할: 작은 화면에서 anchor navigation을 접어 제공한다.
- 사용 위치: Header 내부.
- props 초안: navItems, isOpen, activeId, onOpenChange.
- 콘텐츠 출처: IA anchors.
- 반응형 고려사항: 360px에서 CTA와 메뉴가 겹치지 않아야 한다.
- 접근성 고려사항: button label, expanded state, focus trap 또는 focus return.
- motion 여부: opacity/transform 기반의 짧은 open/close.
- 구현 시 주의점: Resume과 Contact 접근성을 유지하고 메뉴가 본문을 가리지 않게 한다.

### Section

- 역할: 각 page section의 semantic wrapper와 spacing rhythm을 제공한다.
- 사용 위치: 모든 주요 섹션.
- props 초안: id, labelledBy, tone, children.
- 콘텐츠 출처: IA.
- 반응형 고려사항: section gap은 mobile/tablet/desktop에서 단계적으로 확장.
- 접근성 고려사항: section마다 heading 연결.
- motion 여부: subtle section reveal 가능.
- 구현 시 주의점: 모든 section을 카드처럼 감싸지 않는다.

### SectionHeading

- 역할: section의 목적, 짧은 설명, optional eyebrow를 제공한다.
- 사용 위치: About 이후 모든 주요 섹션.
- props 초안: eyebrow, title, description, align.
- 콘텐츠 출처: planning/03-section-outline.md, resume.site.
- 반응형 고려사항: mobile에서는 설명을 1-2문장으로 유지.
- 접근성 고려사항: heading hierarchy 순서 유지.
- motion 여부: section reveal에 포함.
- 구현 시 주의점: heading이 hero headline처럼 과하게 커지지 않게 한다.

### HeroSection

- 역할: 정체성, headline, 설명, CTA, secondary links를 첫 화면에 제공한다.
- 사용 위치: page top main section.
- props 초안: eyebrow, headline, description, primaryCtas, secondaryLinks.
- 콘텐츠 출처: resume.site Hero, CTA strategy.
- 반응형 고려사항: mobile priority 순서: Peppearl -> Frontend Engineer -> headline -> description -> PDF -> Email.
- 접근성 고려사항: h1은 하나만 사용, CTA text 명확히 작성.
- motion 여부: load 시 짧은 stagger reveal 가능.
- 구현 시 주의점: dog photo, GitHub, decorative visual이 hero를 지배하지 않게 한다.

### CTAButton

- 역할: PDF 다운로드, email contact, selected work anchor 같은 주요 행동을 제공한다.
- 사용 위치: Hero, Resume, Contact bridge.
- props 초안: label, href, intent, iconName, download, external.
- 콘텐츠 출처: CTA strategy, resume PDF policy.
- 반응형 고려사항: mobile에서 줄바꿈되어도 label이 잘리지 않게 한다.
- 접근성 고려사항: download target과 external behavior를 accessible text로 보완.
- motion 여부: hover/focus/active feedback.
- 구현 시 주의점: GitHub에는 primary intent를 사용하지 않는다.

### LinkButton

- 역할: secondary CTA나 anchor 이동을 버튼처럼 보이게 제공한다.
- 사용 위치: Hero secondary action, section bridge.
- props 초안: label, href, variant, external.
- 콘텐츠 출처: CTA strategy.
- 반응형 고려사항: mobile에서는 compact text link로 축약 가능.
- 접근성 고려사항: focus-visible, external label.
- motion 여부: underline/border transition.
- 구현 시 주의점: primary CTA와 시각 위계가 혼동되지 않게 한다.

### ProfileCard

- 역할: About 요약과 dog_photo를 작은 개인적 신호로 묶는다.
- 사용 위치: About section.
- props 초안: summary, keywords, imageSrc, imageAlt.
- 콘텐츠 출처: resume.site Summary, dog photo policy.
- 반응형 고려사항: mobile에서는 text first, dog photo는 작은 chip 또는 top-right visual.
- 접근성 고려사항: alt text 구체화, 이미지가 정보 핵심이 아니면 보조 설명 유지.
- motion 여부: optional subtle hover 없음 또는 매우 약하게.
- 구현 시 주의점: dog photo가 hero visual이나 귀여운 브랜딩 중심이 되지 않게 한다.

### StrengthCard

- 역할: 세 핵심 강점과 evidence bullets를 스캔 가능하게 보여준다.
- 사용 위치: Core Strengths.
- props 초안: title, summary, evidence, diagramHint.
- 콘텐츠 출처: resume.site Core Strengths, planning.
- 반응형 고려사항: mobile 1열, tablet 2열 가능, desktop 3열.
- 접근성 고려사항: list semantics, icon이 의미를 독점하지 않음.
- motion 여부: hover border/accent transition.
- 구현 시 주의점: 세 카드가 동일한 템플릿 반복처럼 지루해지지 않게 diagram hint를 다르게 둔다.

### ExperienceTimeline

- 역할: 3년 경력 흐름과 주요 프로젝트를 PDF 없이 이해시킨다.
- 사용 위치: Experience section.
- props 초안: items, summary, currentLabel.
- 콘텐츠 출처: resume.codex, section outline.
- 반응형 고려사항: mobile simple vertical list, desktop timeline with side metadata.
- 접근성 고려사항: ordered list 또는 list 구조 사용, 기간을 텍스트로 제공.
- motion 여부: section reveal 외 timeline item reveal은 제한.
- 구현 시 주의점: 정확한 회사명/직책/교육/자격증은 source 또는 PDF 기준만 사용한다.

### WorkCard

- 역할: Selected Work 3개를 빠르게 비교하고 상세로 이끈다.
- 사용 위치: Selected Work overview.
- props 초안: caseNumber, title, memoryLine, summary, tags, detailId.
- 콘텐츠 출처: selected-work-source, approved-case-evidence.
- 반응형 고려사항: mobile 1열, tablet 2열, desktop Case 01 강조 또는 3열.
- 접근성 고려사항: card 전체 클릭 시 keyboard 접근 가능, heading 구조 유지.
- motion 여부: hover/focus lift는 매우 작게.
- 구현 시 주의점: 실제 화면 이미지처럼 보이는 thumbnail을 만들지 않는다.

### WorkCaseDetail

- 역할: 각 케이스의 Context -> Problem -> Role -> Decisions -> Implementation -> Learning을 깊게 보여준다.
- 사용 위치: WorkCard 아래 detail block 또는 accordion/detail region.
- props 초안: caseData, visualType, relatedWriting, isExpanded.
- 콘텐츠 출처: selected-work-source, approved-case-evidence, ai-agent-workflow-source.
- 반응형 고려사항: mobile에서 긴 내용은 접기/요약 우선, desktop은 diagram과 text 2열 가능.
- 접근성 고려사항: expand state, region label, keyboard operation.
- motion 여부: expand/collapse는 reduced motion 대응.
- 구현 시 주의점: token/API/client 세부나 내부 경로를 노출하지 않는다.

### DiagramCard

- 역할: 스크린샷을 대체하는 안전한 시각 근거를 제공한다.
- 사용 위치: Selected Work detail.
- props 초안: title, type, nodes, caption, privacyNote.
- 콘텐츠 출처: selected-work-source Possible UI Representation.
- 반응형 고려사항: mobile에서 diagram은 세로 stack 또는 간소화된 단계형 리스트.
- 접근성 고려사항: diagram caption과 text alternative 제공.
- motion 여부: hover highlight 또는 step focus 정도만 허용.
- 구현 시 주의점: fake screenshot, 실제 지도 데이터, Figma 캡처처럼 보이지 않게 한다.

### TechStackGroup

- 역할: 기술을 맥락별 그룹으로 정리한다.
- 사용 위치: Tech Stack section.
- props 초안: title, description, items.
- 콘텐츠 출처: resume.site Tech Stack, data/profile.ts.example.
- 반응형 고려사항: mobile accordion 또는 compact groups, desktop grid.
- 접근성 고려사항: list semantics, accordion 사용 시 expanded state.
- motion 여부: tag hover는 최소화.
- 구현 시 주의점: 기술 로고 과사용 금지, GitHub 중심으로 보이지 않게 한다.

### ResumeDownload

- 역할: 공개 PDF 이력서 다운로드와 짧은 안내를 제공한다.
- 사용 위치: Hero CTA, Resume section.
- props 초안: fileName, href, label, description.
- 콘텐츠 출처: PDF policy, CTA strategy.
- 반응형 고려사항: mobile에서 큰 tap target 유지.
- 접근성 고려사항: download 파일명과 PDF임을 명시.
- motion 여부: active/download feedback 가능.
- 구현 시 주의점: 사이트 main identity는 Peppearl로 유지하고, PDF 파일명의 실명은 파일명 맥락으로만 다룬다.

### ContactSection

- 역할: 이메일 제안을 primary action으로 정리한다.
- 사용 위치: page near bottom.
- props 초안: email, message, links.
- 콘텐츠 출처: resume.site Contact, privacy docs.
- 반응형 고려사항: mobile에서 email CTA가 명확하게 보이도록 상단 배치.
- 접근성 고려사항: mailto label, external link 안내.
- motion 여부: CTA hover/focus만.
- 구현 시 주의점: 전화번호 추가 금지, Wanted 사용 금지.

### Footer

- 역할: secondary links와 작은 personal signature를 제공한다.
- 사용 위치: page bottom.
- props 초안: links, copyright.
- 콘텐츠 출처: links.
- 반응형 고려사항: mobile compact stack.
- 접근성 고려사항: footer landmark, external labels.
- motion 여부: 없음 또는 link transition.
- 구현 시 주의점: Blog/GitHub를 footer에서 보조 링크로만 둔다. dog photo는 About에만 사용한다.

### Badge

- 역할: section label, case number, status 같은 작은 분류 정보를 표시한다.
- 사용 위치: SectionHeading, WorkCard, Hero eyebrow.
- props 초안: label, tone.
- 콘텐츠 출처: IA, case data.
- 반응형 고려사항: 긴 label 줄바꿈 허용.
- 접근성 고려사항: 색만으로 의미를 전달하지 않는다.
- motion 여부: 없음.
- 구현 시 주의점: badge가 너무 많아져 UI가 산만해지지 않게 한다.

### Tag

- 역할: 기술/근거 키워드를 짧게 표시한다.
- 사용 위치: StrengthCard, WorkCard, TechStackGroup.
- props 초안: label, group.
- 콘텐츠 출처: resume.site, selected work source.
- 반응형 고려사항: mobile wrap과 overflow 방지.
- 접근성 고려사항: list semantics.
- motion 여부: optional subtle hover.
- 구현 시 주의점: tag만 나열해 GitHub/기술목록 포트폴리오처럼 보이지 않게 한다.

### ExternalLink

- 역할: LinkedIn, Blog, GitHub, Related Writing을 안전하게 연결한다.
- 사용 위치: Hero secondary links, Contact, Footer, Related Writing.
- props 초안: label, href, kind, description.
- 콘텐츠 출처: privacy docs, CTA strategy.
- 반응형 고려사항: mobile에서는 label 우선, icon-only 금지.
- 접근성 고려사항: 외부 링크 안내, 새 창 정책이 있으면 label에 반영.
- motion 여부: underline/focus transition.
- 구현 시 주의점: Blog와 GitHub가 primary conversion을 방해하지 않게 한다.

### Divider

- 역할: 섹션 전환과 내부 그룹 분리를 조용하게 만든다.
- 사용 위치: Section 내부, footer top, timeline group.
- props 초안: orientation, tone, labelOptional.
- 콘텐츠 출처: layout 필요에 따라.
- 반응형 고려사항: mobile에서 과도한 선 사용 금지.
- 접근성 고려사항: decorative divider는 보조로 처리.
- motion 여부: 없음.
- 구현 시 주의점: 강한 구획선으로 공공/SI 문서 느낌이 나지 않게 한다.
