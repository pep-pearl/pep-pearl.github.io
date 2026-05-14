# Planning Update Suggestions

이 문서는 기존 planning 문서에 대한 수정 제안을 정리한 결과다. 사용자 `[comment]`를 검토한 뒤 반영 상태를 갱신했다.

## 반영 완료: FSD 경험을 Case 01 핵심 소재로 보강

- 대상 파일: `planning/03-section-outline.md`, `planning/05-selected-work-plan.md`, `content/work/selected-work-source.md`
- 대상 섹션: Selected Work Case 01
- 반영할 원천: `interview-practice.md` > FSD 도입을 통한 코드 구조 개선
- 제안 내용: FSD를 단순 사용 기술이 아니라 순환 참조, 의존성 얽힘, public API 기준을 정리한 경험으로 서술한다.
- 이유: Case 01의 Frontend Architecture 설득력이 크게 올라간다.
- 위험 요소: 생산성/만족도 개선을 수치처럼 말하면 과장될 수 있다.
- 사용자 확인 결과: 실제 적용 프로젝트 경험 기반이므로 승인. 코드는 제공 어려움.
- 반영 상태: 반영 완료

## 반영 완료: 데이터 변경 방어 계층을 Frontend Architecture 근거로 추가

- 대상 파일: `planning/03-section-outline.md`, `planning/05-selected-work-plan.md`, `content/work/selected-work-source.md`
- 대상 섹션: Case 01 중심, Case 02 보조
- 반영할 원천: `interview-practice.md` > INP 지표 개선 전략
- 제안 내용: React Query `select`와 mapper를 활용해 API 응답 변화가 UI 전체로 전파되지 않게 한 판단을 추가한다.
- 이유: 유지보수성과 변경 범위 제어라는 핵심 포지셔닝과 잘 맞는다.
- 위험 요소: INP 수치 개선처럼 보이지 않게 해야 한다.
- 사용자 확인 결과: 실제 적용 프로젝트 경험 기반이므로 승인.
- 반영 상태: Case 01의 Monorepo + FSD + Public API 목적에 포함

## 반영 완료: AI 협업 원칙을 Case 03의 중심 구조로 보강

- 대상 파일: `planning/03-section-outline.md`, `planning/05-selected-work-plan.md`, `content/work/selected-work-source.md`
- 대상 섹션: Case 03. AI Agent Workflow for Frontend Development
- 반영할 원천: `interview-practice.md` > AI 협업 원칙과 활용 방식, 사용자 추가 vibe coding workflow
- 제안 내용: cross-checking, planning-first, human-in-the-loop, model tiering을 case detail로 넣는다.
- 이유: AI Agent Workflow가 추상적 주장에 머물지 않고 실제 작업 원칙으로 보인다.
- 위험 요소: AI가 개발을 대체한다는 인상을 주지 않아야 한다.
- 사용자 확인 결과: 자사 R&D 공개 예시는 없고, 현재 `pep-pearl.github.io` 제작 과정을 근거로 작성.
- 반영 상태: 반영 완료

## 반영 완료: 블로그 Related Writing을 Selected Work 하단에 제한적으로 추가

- 대상 파일: `planning/03-section-outline.md`, `planning/07-cta-strategy.md`, `content/work/selected-work-source.md`
- 대상 섹션: Selected Work 하단
- 반영할 원천: Blog `FE 아키텍처를 고민하며`, React Router meta 글
- 제안 내용: Case 01 하단에 관련 글 1-2개를 Related Writing으로 연결한다.
- 이유: 블로그를 메인 근거가 아니라 사고방식 보조 근거로 사용할 수 있다.
- 위험 요소: 블로그가 GitHub처럼 메인 CTA가 되거나, 학습 글이 현재 실무 성과처럼 보일 수 있다.
- 사용자 확인 결과: 승인. `FE 아키텍처를 고민하며`는 개별 접근 가능.
- 반영 상태: 반영 완료. 정확한 permalink는 구현 전 최종 확인.

## 반영 완료: About 문장에 "구조와 기준부터 정리하는 방식" 추가

- 대상 파일: `planning/03-section-outline.md`, `content/resume/resume.site.md`
- 대상 섹션: About
- 반영할 원천: `interview-practice.md` > FSD, AI 협업 원칙, MFE 회고
- 제안 내용: "바로 구현하기보다 구조와 기준을 먼저 정리한다"는 방식의 문장을 한 줄 추가한다.
- 이유: 겸손함을 직접 말하지 않고 작업 방식으로 드러낼 수 있다.
- 위험 요소: 자기소개가 길어지면 3분 스캔 흐름을 해친다.
- 사용자 확인 결과: 승인
- 반영 상태: 반영 완료

## 반영 완료: GIS 케이스에 상태 변경 범위 관리 관점 추가

- 대상 파일: `planning/05-selected-work-plan.md`, `content/work/selected-work-source.md`
- 대상 섹션: Case 02. GIS / Disaster Management Platform
- 반영할 원천: `interview-practice.md` > INP/데이터 변경 대응 전략, 사용자 추가 코멘트
- 제안 내용: 지도 UI 자체보다 데이터와 화면 상태가 맞물릴 때 변경 범위를 좁히는 구조를 강조한다.
- 이유: GIS 케이스가 공공/SI 화면 목록처럼 보이지 않고 제품 복잡도 중심으로 읽힌다.
- 위험 요소: 실제 코드 공개 범위를 넘기지 않아야 한다.
- 사용자 확인 결과: 승인. 실제 적용했으나 코드 제공 불가. `zustand`, `useRef`, `useEffect` 기반 Escape Hatch 관점을 포함.
- 반영 상태: 반영 완료

## 반영 완료: `lh_dmp` 폴더 구조 공개 정책 확정

- 대상 파일: `docs/06-open-questions.md`, `planning/05-selected-work-plan.md`, `content/work/selected-work-source.md`, `content/work/approved-case-evidence.md`
- 대상 섹션: Source Data, Selected Work Case 01
- 반영할 원천: 사용자 추가 확인
- 제안 내용: `lh_dmp` 폴더 구조 자체는 공개 가능한 자료로 보되, 실제 사이트에 특정 경로/파일명/구조를 인용할 때는 민감한 회사 정보가 없는지 사용자에게 한 번 확인받는다.
- 이유: Case 01의 구조적 근거를 강화하면서도 회사 내부 정보 노출 위험을 줄일 수 있다.
- 위험 요소: 폴더 구조 안에 고객사명, 내부 모듈명, 업무 상세가 포함될 수 있다.
- 사용자 확인 결과: 구조 자체는 공개 가능. 민감한 회사 정보만 너무 노출되지 않게 인용 시 확인 필요.
- 반영 상태: 반영 완료

## 반영 완료: token refresh race condition 배치 결정

- 대상 파일: `docs/06-open-questions.md`, `planning/05-selected-work-plan.md`, `content/work/selected-work-source.md`, `content/work/approved-case-evidence.md`, `content/mining/portfolio-usage-plan.md`
- 대상 섹션: Selected Work Case 02
- 반영할 원천: 사용자 추가 확인, Codex 판단
- 제안 내용: token refresh race condition은 별도 대표 케이스나 독립 페이지로 분리하지 않고 Case 02 내부 implementation evidence로 사용한다. 상세 설명이 필요하면 Case 02 상세 영역의 짧은 implementation note, expandable block, 또는 sequence diagram으로 표현한다.
- 이유: 대표 케이스의 초점을 GIS/Disaster Management Platform의 복잡한 상태 흐름에 유지하면서, 브라우저 환경과 인증 상태 경합을 다룬 실무 판단을 보조 근거로 보여줄 수 있다.
- 위험 요소: 인증/보안 구현 세부가 과하게 노출되거나, 케이스의 중심이 GIS 업무 흐름에서 인증 로직으로 이동할 수 있다.
- 사용자 확인 결과: Codex가 최적의 방법을 판단하기로 함.
- 반영 상태: 반영 완료

## 반영 완료: Blog 링크는 Footer 또는 secondary link로 제한

- 대상 파일: `planning/06-page-flow.md`, `planning/07-cta-strategy.md`, `planning/08-responsive-content-priority.md`
- 대상 섹션: CTA, Footer, Responsive
- 반영할 원천: Blog audit
- 제안 내용: Blog는 Hero primary CTA에 넣지 않고, Footer 또는 secondary links에 둔다.
- 이유: 실무 프로젝트가 메인이라는 전략과 맞다.
- 위험 요소: Blog를 너무 앞세우면 학습 글 중심 포트폴리오처럼 보일 수 있다.
- 사용자 확인 결과: 승인
- 반영 상태: 기존 정책 유지 및 related writing 제한 원칙으로 반영

## 반영 완료: interview-practice.md 파일명 정정

- 대상 파일: `docs/06-open-questions.md`, mining 문서 전체
- 대상 섹션: Source Data
- 반영할 원천: 로컬 파일 탐색
- 제안 내용: 루트의 면접 준비 파일명을 `interview-practice.md`로 통일한다.
- 이유: 사용자 요청 파일명과 실제 파일명이 다르면 이후 Codex 작업자가 놓칠 수 있다.
- 사용자 확인 결과: 승인
- 반영 상태: 반영 완료
