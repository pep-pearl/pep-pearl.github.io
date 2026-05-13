# Knowledge Base Manifest

이 문서는 Peppearl 커리어 사이트 작업을 위한 지식 베이스 전체 목록과 각 파일의 목적을 설명한다.

## docs

| File | Purpose |
| --- | --- |
| `docs/00-project-purpose.md` | 사이트의 목적, 대상, 성공 기준을 정의한다. |
| `docs/01-codex-context-map.md` | Codex가 단계별로 어떤 파일을 읽어야 하는지 안내한다. |
| `docs/02-source-of-truth.md` | 현재 확정된 의사결정과 핵심 포지셔닝을 관리한다. |
| `docs/03-privacy-and-publication-boundaries.md` | 공개 가능/불가능 정보와 개인정보 정책을 정리한다. |
| `docs/04-content-strategy.md` | 사이트 카피, 톤, 대표 케이스 서술 방식을 정의한다. |
| `docs/05-visual-direction.md` | 디자인 방향, 반응형 원칙, 시각적 금지 사항을 정리한다. |
| `docs/06-open-questions.md` | 아직 확정되지 않은 질문과 확인 필요 항목을 모은다. |
| `docs/07-final-review-checklist.md` | 배포 전 콘텐츠, 디자인, 접근성, 개인정보, 기술 검수 항목을 제공한다. |
| `docs/knowledge-base-manifest.md` | 지식 베이스 파일 목록과 목적을 설명한다. |
| `docs/codex-reference/README.md` | 이후 Codex 작업자가 가장 먼저 읽을 요약 참고 문서다. |

## content

| File | Purpose |
| --- | --- |
| `content/resume/resume.codex.md` | Codex가 이해하기 쉬운 구조화된 내부 이력서 원천 자료다. |
| `content/resume/resume.site.md` | 실제 사이트에 넣을 수 있는 공개용 이력서 카피다. |
| `content/work/selected-work-source.md` | 대표 포트폴리오 케이스 3개의 원천 자료다. |

## data

| File | Purpose |
| --- | --- |
| `data/profile.ts.example` | 추후 React 구현에서 사용할 수 있는 타입 안전한 데이터 구조 예시다. |

## 사용 원칙

- 새 단계에 들어가기 전 `docs/01-codex-context-map.md`를 확인한다.
- 공개 웹사이트 카피는 `resume.site.md`를 우선한다.
- 내부 이해나 구조화가 필요할 때는 `resume.codex.md`를 참고한다.
- 확인되지 않은 사실은 `docs/06-open-questions.md`에 남긴다.
- 전화번호, 얼굴 사진, 업무 화면, Figma 캡처, 검증되지 않은 수치는 공개하지 않는다.
