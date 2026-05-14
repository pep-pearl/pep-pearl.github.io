# Design Brief

## Source Basis

이 문서는 `prompts/02-design.prompt.md`, `AGENTS.md`, `rules/design.rules.md`, `rules/content.rules.md`, `docs/05-visual-direction.md`, `planning/*`, `content/resume/resume.site.md`, `content/work/*`를 기준으로 작성한 development 단계용 디자인 요약 명세다.

이번 단계의 범위는 디자인 산출물 문서화이며 React, CSS, Tailwind class, 실제 UI 구현은 포함하지 않는다.

## Design Concept

Peppearl의 사이트는 GitHub 중심 포트폴리오가 아니라 포지션 제안과 면접 제안을 유도하는 커리어 랜딩페이지다. 전체 인상은 "정리된 커리어 문서 위에 작은 인터랙션을 얹은 미니멀 포트폴리오"여야 한다.

핵심 컨셉:

> 구조적 사고가 먼저 보이는 조용한 인터랙티브 커리어 랜딩페이지

비율:

- Minimal interactive portfolio: 60%
- Structured career document: 40%

## First Impression

첫 화면에서 방문자는 다음을 즉시 읽어야 한다.

1. Peppearl
2. Frontend Engineer
3. 제품의 완성도를 높이는 프론트엔드 개발자
4. Design System, Frontend Architecture, AI Agent Workflow를 다루는 사람
5. PDF 이력서 다운로드와 이메일 연락 경로

Hero는 큰 이미지나 화려한 그래픽보다 명확한 문장, 정돈된 CTA, 세 가지 역량으로 이어지는 구조적 단서가 먼저 보여야 한다. GitHub는 보조 링크로만 보이고, 사이트의 주인공이 되면 안 된다.

## Section Design Roles

| Section | Design Role | Reading Goal |
| --- | --- | --- |
| Hero | 정체성과 CTA를 5초 안에 전달하는 첫 인상 | Recruiter가 역할, 강점, 연락 행동을 바로 파악 |
| About | 일하는 관점과 작은 개인적 요소를 정리 | 팀이 이해할 수 있는 구조와 기준을 중시한다는 인상 |
| Core Strengths | 세 가지 강점을 빠르게 스캔 가능한 축으로 제시 | Design System, Frontend Architecture, AI Agent Workflow 기억 |
| Experience | PDF 없이 경력 흐름을 이해시키는 타임라인 | 업무/GIS 시스템 경험과 성장 흐름 파악 |
| Selected Work | 스크린샷 없이 판단과 구현 근거를 보여주는 핵심 증거 | Frontend Lead가 구조화 역량 확인 |
| Tech Stack | 기술 목록을 사용 맥락별로 정리 | 기술을 나열하지 않고 어떤 문제에 썼는지 이해 |
| Resume | 공식 이력서 다운로드와 요약 확인 | PDF로 더 자세한 경력 검토 |
| Contact | 포지션/면접 제안을 쉽게 실행 | Email primary, LinkedIn/Blog/GitHub secondary |

## Visual Tone

원하는 인상:

- Minimal
- Structured
- Professional
- Quietly interactive
- Balanced
- Calm confidence
- Text-first but visually polished

시각적으로는 차분한 neutral 기반에 restrained accent를 사용한다. 완전한 흑백/회색 단조로움은 피하되, 색이 콘텐츠보다 앞서면 안 된다. 카드와 선, 다이어그램은 제품 UI를 가짜로 재현하는 것이 아니라 구조적 사고를 설명하는 도구로 사용한다.

## Avoided Design

반드시 피할 것:

- 포트폴리오 학원 느낌
- 과한 3D, particle, parallax
- 과한 gradient, glassmorphism
- 공공/SI 시스템 목록처럼 보이는 무드
- designer-only portfolio처럼 보이는 구성
- GitHub stats, repository grid, contribution graph 중심 구성
- 업무 화면 또는 Figma 캡처 사용
- 얼굴 사진 또는 hero 대형 dog photo
- 성과 수치, 그래프, ranking처럼 보이는 근거 없는 표현
- 카드 안에 카드가 중첩되는 장식적 구성

## Audience Reading

### Recruiter

Recruiter에게는 빠른 스캔이 중요하다. Hero, Core Strengths, Experience, Resume CTA가 짧고 명확하게 이어져야 한다. 1분 안에 "Frontend Engineer, 3년, React/TypeScript, 복잡한 업무 UI, PDF/Email 가능"이 읽혀야 한다.

### Frontend Lead

Frontend Lead에게는 주장보다 근거가 중요하다. Selected Work에서 FSD, monorepo, Public API, data boundary, GIS state flow, AI review gate 같은 판단 구조가 보이도록 한다. 업무 화면이 없어도 diagram, state matrix, decision card로 충분히 검토 가능한 인상을 준다.

### CTO / Founder

CTO나 Founder에게는 복잡한 제품을 안정적으로 정리할 수 있다는 신뢰가 중요하다. 기술 과시보다 유지보수 가능한 구조, 공개 경계 준수, 사람 검토가 포함된 AI workflow를 통해 리스크를 낮추는 태도를 보여준다.

## Design Review Gate

Development 단계로 넘어가기 전에 아래 항목을 사용자가 확인해야 한다.

- Design direction summary: "구조적 사고가 먼저 보이는 조용한 인터랙티브 커리어 랜딩페이지" 방향을 승인하는가?
- Key layout decisions: v1 원페이지, Hero -> About -> Strengths -> Experience -> Selected Work -> Tech Stack -> Resume -> Contact 순서를 유지하는가?
- Visual risk: 너무 문서처럼 밋밋하거나, 반대로 포트폴리오 템플릿처럼 장식적으로 보이지 않는 균형이 적절한가?
- Privacy risk: dog photo는 About의 작은 profile visual로 두고, 업무 화면/figma/얼굴 사진/전화번호/성과 수치를 사용하지 않는 정책을 유지하는가?
- Development may begin: 사용자 승인 전에는 `03-development.prompt.md`를 실행하지 않는다.
