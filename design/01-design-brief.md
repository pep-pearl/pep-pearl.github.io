# 01. Design Brief

## Source Basis

이 문서는 `specs/design-brief.md`의 상세 버전이다. 디자인 결정은 planning 문서와 공개 콘텐츠 원천을 근거로 하며, 새 기획이나 구현을 포함하지 않는다.

## Design Concept Sentence

> Peppearl의 커리어 사이트는 구조적 사고와 실무 프론트엔드 판단이 먼저 읽히는, 조용하고 정교한 인터랙티브 커리어 랜딩페이지다.

사이트는 작품 전시장이 아니라 채용/면접 제안으로 이어지는 검토 문서다. 다만 단순 문서처럼 밋밋하게 읽히면 안 되므로, 핵심 강점과 Selected Work는 다이어그램, 상태표, decision card로 시각적 리듬을 만든다.

## Overall Screen Impression

첫 인상:

- 정돈된 문장
- 넓은 여백
- 과하지 않은 accent
- 작은 상호작용
- 업무와 구조 판단 중심의 증거

방문자가 "개인 포트폴리오 템플릿"보다 "검토하기 좋은 커리어 제품 페이지"로 느껴야 한다. Hero에서 바로 Peppearl, Frontend Engineer, headline, CTA가 읽히고, 아래로 내려가면 세 강점과 케이스가 자연스럽게 증거를 제공한다.

## Recruiter Perspective

Recruiter는 1분 안에 다음을 확인해야 한다.

- Peppearl은 Frontend Engineer다.
- 주요 포지셔닝은 "제품의 완성도를 높이는 프론트엔드 개발자"다.
- 3년 경력의 React/TypeScript 기반 실무 경험이 있다.
- PDF 이력서를 다운로드할 수 있다.
- 이메일로 바로 제안할 수 있다.

Recruiter를 위해서는 Hero와 Resume/Contact CTA가 복잡하면 안 된다. Selected Work는 깊게 읽지 않아도 title과 memory line만으로 강점이 전달되어야 한다.

## Frontend Lead Perspective

Frontend Lead는 다음을 확인해야 한다.

- Design System을 컴포넌트 모음이 아니라 token, state, layout, accessibility 기준으로 본다.
- Frontend Architecture에서 FSD, monorepo, Public API, data boundary를 실무 문제와 연결한다.
- GIS UI에서 지도, 목록, 상세, 필터, 팝업 상태를 구조화한 경험이 있다.
- AI Agent Workflow는 사람 검토와 review gate를 포함한 작업 방식이다.

Frontend Lead에게는 시각적 장식보다 구조적 증거가 더 중요하다. 따라서 Selected Work는 업무 화면 대신 diagram, state matrix, flow, checklist preview를 사용한다.

## CTO / Founder Perspective

CTO나 Founder는 "복잡한 제품을 맡겨도 구조와 리스크를 다룰 수 있는가"를 본다.

이 관점에서 디자인은 다음 신뢰를 줘야 한다.

- 공개 경계를 지킨다.
- 과장 수치 없이 판단 과정으로 설득한다.
- GitHub 활동량보다 제품 완성도와 유지보수성을 이야기한다.
- AI를 무분별하게 쓰지 않고 사람이 검토 가능한 단계로 나눈다.

Resume과 Contact는 제안 행동으로 자연스럽게 이어지되, 영업 랜딩페이지처럼 과장되어서는 안 된다.

## Avoided Reference Moods

피해야 할 레퍼런스성 무드:

- 포트폴리오 학원 수료작: 비슷한 card grid, 과한 자기소개, 기술 로고 나열
- 공공/SI 산출물 페이지: 프로젝트명 목록, 딱딱한 표, 파란색 관공서 느낌
- designer-only portfolio: 시각물 중심, 개발 구조 근거 부족
- GitHub showcase: repo grid, contribution graph, toy project archive
- dark cyberpunk: 어두운 배경, neon, glow, 3D object
- generic Notion resume: 밋밋한 문서형 카드 나열
- creative agency landing: 과한 hero animation과 slogan 중심

## Final Design Judgment Criteria

최종 디자인은 아래 질문을 통과해야 한다.

- 3분 안에 세 강점이 이해되는가?
- Hero에서 Peppearl과 Frontend Engineer 정체성이 즉시 보이는가?
- 업무 경험과 구조적 사고가 GitHub보다 먼저 보이는가?
- 디자인이 미니멀하지만 밋밋하지 않은가?
- 인터랙션이 조용하고 읽기를 돕는가?
- 업무 화면, Figma 캡처, 얼굴 사진 없이도 Selected Work가 설득력 있는가?
- dog photo가 보조적 개인 요소로만 보이는가?
- 모바일에서 PDF와 Email CTA가 분명한가?
- Frontend Lead가 구조적 판단을 검토할 근거가 있는가?

## Design Hold

이 문서는 development 전 Hold를 전제로 한다. 사용자가 design direction, layout, token, component, responsive, motion 기준을 승인하기 전에는 `03-development.prompt.md`로 넘어가지 않는다.
