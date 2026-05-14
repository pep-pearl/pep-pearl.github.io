# Content Mining Summary

## 확인한 자료

### Local

- `AGENTS.md`
- `docs/*` knowledge base
- `content/resume/resume.codex.md`
- `content/resume/resume.site.md`
- `content/work/selected-work-source.md`
- `data/profile.ts.example`
- `planning/*.md`
- `interview-practice.md`

### Blog

- Blog root: `https://jinjoo648.tistory.com/`
- 확인한 주요 글:
  - `FE 아키텍처를 고민하며`
  - `[React 19] React 19 주요 변경점 리뷰`
  - `[React Router] 라우트에 페이지 제목(meta) 넣고 useMatches로 꺼내 쓰는 방법`
  - 일부 Linux/CentOS 취약점 점검 글

## 전체 판단

포트폴리오에 바로 쓸 수 있는 소재는 면접 준비 자료 쪽이 더 많다. 특히 FSD 도입, API 응답 변경 대응, AI 협업 원칙, MFE 판단 기준, token race condition 대응은 기술 설명 자체보다 "문제를 어떻게 구조화하고 판단했는가"를 보여주기 좋다.

블로그는 메인 근거보다는 보조 근거로 쓰는 것이 적합하다. `FE 아키텍처를 고민하며`와 React Router meta 글은 Frontend Architecture와 연결될 수 있고, React 19 글은 최신 흐름을 따라가며 장단점을 검토하는 학습 태도 근거로 쓸 수 있다. Linux/CentOS 글은 직접적인 프론트엔드 포지셔닝과는 거리가 있어 Footer 또는 Blog 링크 수준이 적절하다.

## 확정된 코멘트 반영

- FSD / monorepo 경험은 실제 적용 프로젝트 경험으로 사용 가능하다.
- FSD 관련 코드는 제공이 어렵지만, `D:\01_Projects\workspace\lh_dmp`의 폴더 구조는 공개 가능하다.
- `lh_dmp` 폴더 구조를 실제 사이트에 인용할 때는 민감한 회사 정보가 없는지 사용자에게 한 번 확인받는다.
- 데이터 변경 방어 계층은 실제 적용 프로젝트 경험으로 사용 가능하다.
- token race condition 대응은 실제 업무 경험이며 공개 가능한 수준에서 사용할 수 있다.
- token race condition은 별도 대표 케이스나 독립 페이지로 분리하지 않고 Case 02 내부 implementation evidence로 사용한다.
- MFE는 실제 도입 경험이 아니라 구조 검토 및 학습 회고로만 다룬다.
- `FE 아키텍처를 고민하며`는 개별 접근 가능하다고 확인되었다.
- GIS/OpenLayers/Cesium 관련 블로그 글은 현재 없음.
- AI Agent 관련 블로그 글은 현재 없음.
- Case 03은 현재 포트폴리오 제작 과정 자체를 근거로 사용한다.

## 사이트 반영 우선순위

1. 면접 자료의 FSD / 구조 개선 경험을 Case 01에 보강
2. 데이터 변경 방어 계층을 Case 01의 Monorepo + FSD + Public API 목적에 포함
3. token race condition 대응을 Case 02의 implementation note 또는 짧은 pseudo flow로 추가
4. 면접 자료의 AI 협업 원칙과 vibe coding workflow를 Case 03에 보강
5. `FE 아키텍처를 고민하며`를 Case 01 또는 About 하단 Related Writing으로 연결
6. React Router meta 글을 Frontend Architecture 보조 글로 연결
7. Linux/CentOS 글은 Resume/Experience의 "운영 맥락 이해"를 보조하는 정도로만 사용

## Include / Maybe / Exclude 기준

### Include

- 실무 프로젝트의 문제, 판단, 역할, 협업 방식이 드러난다.
- Design System, Frontend Architecture, AI Agent Workflow 중 하나와 직접 연결된다.
- 구체적인 수치 없이도 판단 과정이 설득력 있다.
- 업무 화면이나 기밀 정보 없이 설명 가능하다.
- 사용자가 실제 경험 또는 공개 가능 자료로 확인했다.

### Maybe

- 기술적으로 흥미롭지만 실제 프로젝트 연결이 약하다.
- 오래된 글이거나 학습 글이라 현재 역량처럼 보이면 위험하다.
- 보조 링크로는 좋지만 메인 카피로는 과하다.
- 공개 가능한 코드 없이 diagram/pseudo code 중심으로 표현해야 한다.

### Exclude

- 기술 설명만 있고 경험, 판단, 역할이 드러나지 않는다.
- 포지셔닝과 직접 연결되지 않는다.
- 사적인 글, 템플릿 배포 글, Linux 명령어 기록처럼 커리어 랜딩페이지의 흐름을 흐릴 수 있다.
- 구체적 성과 수치, 기밀 정보, 업무 화면이 필요하다.

## 다음 단계에서 주의할 내용

- `lh_dmp` 폴더 구조 자체는 공개 가능하다. 다만 특정 경로/파일명/구조를 실제로 인용할 때는 사용자 확인을 거친다.
- token race condition 코드는 전체 공개하지 않고, single-flight 흐름과 공개 안전한 pseudo code로 설명한다.
- MFE는 "실제 도입"이 아니라 "구조 검토/학습 회고"로 명확히 표기한다.
- Case 03은 인간 검수, 검토, 승인 gate를 강조한다.
