# Planning Review Checklist

기획 단계가 디자인으로 넘어가기 전에 아래 항목을 확인한다.

## Goal Fit

- [ ] 3분 안에 Peppearl의 강점이 이해되는가?
- [ ] 이력서 PDF 없이도 경력이 파악되는가?
- [ ] 포지션 제안과 면접 제안 목적이 분명한가?
- [ ] Hero에서 핵심 포지셔닝이 바로 보이는가?
- [ ] 업무 경험, 구조적 사고, Design System, Frontend Architecture, AI Agent Workflow가 모두 드러나는가?

## Information Architecture

- [ ] 원페이지 구조가 v1 목표에 맞는가?
- [ ] Hero, About, Core Strengths, Experience, Selected Work, Tech Stack, Resume, Contact가 모두 포함되는가?
- [ ] 각 섹션의 목적과 핵심 메시지가 분명한가?
- [ ] 향후 상세 페이지 확장이 가능하도록 Selected Work 구조가 보존되는가?

## Content

- [ ] 한국어가 메인이고 기술 키워드는 필요한 곳에만 영어로 병기되는가?
- [ ] 과장된 자기 PR이 없는가?
- [ ] 겸손함을 직접 말하지 않고 작업 방식과 문장 톤으로 보여주는가?
- [ ] 구체적인 성과 수치를 공개하지 않는가?
- [ ] 대표 프로젝트 3개가 설득력 있는가?
- [ ] GitHub 유도가 과하지 않은가?

## Privacy

- [ ] 전화번호가 제외되어 있는가?
- [ ] 얼굴 사진이 제외되어 있는가?
- [ ] 업무 화면 이미지가 제외되어 있는가?
- [ ] Figma 캡처가 제외되어 있는가?
- [ ] 실명은 사이트 main public identity가 아니라 PDF 파일명 맥락으로만 다루는가?
- [ ] 내부 문서, 토큰, 계정, 서버 정보가 포함되지 않는가?

## Positioning Risks

- [ ] 공공/SI 느낌이 과하게 드러나지 않는가?
- [ ] 디자인만 하는 사람처럼 보이지 않는가?
- [ ] 개발 구조, 기술 판단, 유지보수 기준이 충분히 보이는가?
- [ ] AI가 모든 것을 대신한다는 인상을 주지 않는가?
- [ ] GitHub 중심 개인 프로젝트 자랑처럼 보이지 않는가?

## Responsive Content

- [ ] 모바일에서도 정보 우선순위가 유지되는가?
- [ ] 모바일 첫 화면에 핵심 포지셔닝과 CTA가 보이는가?
- [ ] Selected Work 카드가 모바일에서 1열로 자연스럽게 쌓이는가?
- [ ] 긴 경력/프로젝트 설명은 축약 가능한가?
- [ ] Contact 또는 Resume CTA까지 자연스럽게 이동할 수 있는가?

## Open Questions Before Design

- [x] GitHub Pages 배포 형태를 확인해야 한다: user site `https://pep-pearl.github.io/`, Vite `base`는 `/`.
- [x] `dog_photo.png` 최종 배치를 정해야 한다: About의 작은 profile visual.
- [ ] 대표 케이스별 코드 스니펫 필요 여부를 디자인/콘텐츠 구체화 단계에서 판단해야 한다.
- [ ] Case 03을 포트폴리오 제작 과정 자체로 보여주는 방향을 사용자에게 한 번 더 확인하면 좋다.

## Ambiguity Estimate

```txt
Goal clarity: high
Constraint clarity: high
Success criteria clarity: high
Content/context clarity: medium-high
Estimated ambiguity: 0.16
```

기획 기준으로는 디자인 단계에 들어갈 수 있을 만큼 선명하다. 다만 프로젝트 규칙상 Hold가 필요하므로, 사용자가 이 기획 산출물을 검토하고 승인한 뒤 디자인 단계로 넘어간다.

## Planning Review Gate

### What is decided

- v1은 원페이지 커리어 랜딩페이지로 진행한다.
- 핵심 포지셔닝과 Hero 문장은 확정 기준으로 사용한다.
- 대표 케이스는 3개로 유지한다.
- PDF 이력서, Email, LinkedIn, Blog, GitHub를 사용한다.
- Wanted는 사용하지 않는다.
- `dog_photo.png`는 작은 프로필 이미지로 사용 가능하다.
- 업무 화면, Figma 캡처, 구체적인 성과 수치는 사용하지 않는다.

### What remains uncertain

- GitHub Pages 배포 형태
- dog photo 최종 위치
- 코드 스니펫 제공 여부
- Case 03의 최종 표현 범위

### Recommended next step

사용자가 기획 산출물을 검토한 뒤, 디자인 단계에서 layout plan, component inventory, token proposal, responsive behavior, motion rules를 작성한다.

### Whether design may begin

사용자 승인 후 디자인 단계로 이동한다.
