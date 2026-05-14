# Information Architecture

v1은 원페이지 구조를 우선한다. 각 섹션은 짧게 훑는 방문자와 깊게 보는 기술 리더를 동시에 지원해야 한다.

## 전체 구조

```txt
Hero
About
Core Strengths
Experience
Selected Work
Tech Stack
Resume
Contact
```

## 섹션별 설계

| Section | 목적 | 핵심 메시지 | 포함 콘텐츠 | 우선순위 |
| --- | --- | --- | --- | --- |
| Hero | 5초 안에 정체성과 CTA를 전달한다. | 제품의 완성도를 높이는 프론트엔드 개발자 | headline, short description, PDF download, email/contact, selected work anchor, secondary links | P0 |
| About | 어떤 관점으로 일하는 개발자인지 설명한다. | UI 기준과 프론트엔드 구조를 함께 다룬다. | 짧은 소개, 프로필 이미지 `dog_photo.png`, 핵심 키워드 | P0 |
| Core Strengths | 강점 3축을 빠르게 이해시킨다. | Design System, Frontend Architecture, AI Agent Workflow | 3개 strength card, 각 카드의 evidence bullets | P0 |
| Experience | PDF 없이도 경력 흐름을 파악하게 한다. | 복잡한 업무/GIS 시스템을 다룬 3년차 프론트엔드 개발자 | career summary, timeline, role, domain, 주요 프로젝트 연결 | P0 |
| Selected Work | 기술 판단과 문제 해결 방식을 보여준다. | 실무 복잡성을 구조화한 대표 케이스 3개 | 3 case cards, Context/Problem/Role/Decisions/Implementation/Learning 요약 | P0 |
| Tech Stack | 기술 목록을 사용 맥락별로 정리한다. | 기술을 나열하는 대신 어떤 문제에 썼는지 보여준다. | frontend, architecture, state/data, backend collaboration, workflow groups | P1 |
| Resume | 공식 문서와 다운로드 경로를 제공한다. | 더 자세한 경력은 PDF로 확인할 수 있다. | `이혜주_FrontendEngineer.pdf`, public-safe note, short resume summary | P0 |
| Contact | 제안 행동을 명확히 만든다. | 포지션/면접 제안은 이메일로 연결한다. | email CTA, LinkedIn, Blog, GitHub secondary links | P0 |

## 향후 확장 가능 구조

현재 v1에서는 route를 만들지 않는다. 이후 콘텐츠가 충분히 깊어지면 아래 상세 페이지를 추가할 수 있다.

```txt
/work/design-system-architecture
/work/gis-disaster-platform
/work/ai-agent-workflow
/resume
```

## 내비게이션 원칙

- 주요 anchor: About, Strengths, Work, Resume, Contact
- GitHub는 내비게이션의 핵심 항목으로 두지 않는다.
- 모바일에서는 anchor를 줄이거나 메뉴로 접어도 되지만, Resume과 Contact CTA는 항상 접근 가능해야 한다.

## 콘텐츠 위계

1. 포지셔닝과 CTA
2. 세 가지 핵심 강점
3. 경력과 대표 프로젝트
4. 기술 스택
5. PDF와 연락 링크

이 위계는 모바일에서도 유지되어야 한다.
