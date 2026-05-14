# Codex Context Map

이 문서는 Codex가 이후 기획, 디자인, 개발, 리뷰 단계에서 어떤 파일을 먼저 읽어야 하는지 정리한다. 작업자는 단계에 맞는 문서를 읽은 뒤 진행하며, 불확실한 사실은 추정하지 않고 `docs/06-open-questions.md`에 남긴다.

## 모든 작업 전 공통으로 읽기

1. `AGENTS.md`
2. `README.md`
3. `docs/00-project-purpose.md`
4. `docs/01-codex-context-map.md`
5. `docs/02-source-of-truth.md`
6. `docs/03-privacy-and-publication-boundaries.md`
7. `docs/04-content-strategy.md`
8. `content/resume/resume.codex.md`
9. `content/work/selected-work-source.md`
10. `content/work/approved-case-evidence.md`

공개 웹사이트 카피를 작성할 때는 `content/resume/resume.site.md`를 우선 참고한다.

## 기획 전

읽을 파일:

- `AGENTS.md`
- `README.md`
- `specs/planning-seed.md`
- `rules/planning.rules.md`
- `rules/content.rules.md`
- `prompts/00-interview.prompt.md`
- `prompts/01-planning.prompt.md`
- `docs/00-project-purpose.md`
- `docs/02-source-of-truth.md`
- `docs/06-open-questions.md`

산출물:

- Planning Seed
- IA
- Content Inventory
- Acceptance Criteria
- Open Questions

Hold: 기획에서 디자인으로 넘어가기 전, 결정된 내용과 남은 불확실성을 요약하고 사용자 확인을 받는다.

## 콘텐츠 작성 전

읽을 파일:

- `rules/content.rules.md`
- `docs/03-privacy-and-publication-boundaries.md`
- `docs/04-content-strategy.md`
- `content/resume/resume.codex.md`
- `content/resume/resume.site.md`
- `content/work/selected-work-source.md`
- `content/work/approved-case-evidence.md`
- `content/work/ai-agent-workflow-source.md`

주의:

- 공개용 문구에는 전화번호를 넣지 않는다.
- 실명, 얼굴 사진, 업무 화면, Figma 캡처는 명시 승인 전까지 사용하지 않는다.
- 성과 수치와 프로젝트 세부 정보는 출처가 확인된 경우에만 공개한다.

## 디자인 전

읽을 파일:

- `rules/design.rules.md`
- `rules/content.rules.md`
- `docs/05-visual-direction.md`
- `docs/02-source-of-truth.md`
- `content/resume/resume.site.md`
- `content/work/selected-work-source.md`
- `content/work/approved-case-evidence.md`
- `content/work/ai-agent-workflow-source.md`

산출물:

- Design Direction
- Layout Plan
- Component Inventory
- Token Proposal
- Responsive Behavior
- Motion Rules

Hold: 디자인에서 개발로 넘어가기 전, 사용자에게 디자인 방향과 주요 레이아웃 결정을 검토받는다.

## 개발 전

읽을 파일:

- `rules/development.rules.md`
- `rules/design.rules.md`
- `rules/content.rules.md`
- `docs/03-privacy-and-publication-boundaries.md`
- `docs/07-final-review-checklist.md`
- `data/profile.ts.example`
- `content/resume/resume.site.md`
- `content/work/selected-work-source.md`
- `content/work/approved-case-evidence.md`

주의:

- Vite + React + TypeScript + TailwindCSS + GitHub Pages를 기본 스택으로 유지한다.
- v1은 원페이지를 우선한다.
- 전역 상태, 라우팅, 데이터 페칭 라이브러리는 실제 필요가 있을 때만 추가한다.
- 개인정보나 미승인 이미지를 넣기 전에 반드시 사용자 확인을 받는다.

Hold: 개발 완료 후 배포 전, 구현 결과와 검수 항목을 요약하고 사용자 확인을 받는다.

## 리뷰 전

읽을 파일:

- `rules/review.rules.md`
- `docs/07-final-review-checklist.md`
- `docs/03-privacy-and-publication-boundaries.md`
- `docs/04-content-strategy.md`
- `docs/05-visual-direction.md`

리뷰 기준:

- Mechanical: 빌드, 타입, 링크, 접근성, 반응형, 콘솔 오류
- Semantic: 포지셔닝, 문장 톤, 공개 경계, 과장 여부
- Strategic: 포지션/면접 제안 목적에 맞는지

## 단계 진행 원칙

이 프로젝트는 `Interview -> Seed -> Execute -> Evaluate -> Evolve` 흐름을 따른다. 각 주요 단계에서는 `Research -> Plan -> Hold -> Implement -> Review`를 적용한다. 사용자가 명시적으로 계속 진행하라고 하지 않은 경우, 단계 전환 전에는 짧은 검토 요약을 만들고 승인을 기다린다.
