# 10. Design Review Checklist

## Goal Fit

- [ ] 3분 안에 Peppearl의 강점이 이해되는가?
- [ ] Hero에서 정체성이 바로 보이는가?
- [ ] Public identity가 Peppearl로 유지되는가?
- [ ] Main role이 Frontend Engineer로 명확한가?
- [ ] Main headline이 "제품의 완성도를 높이는 프론트엔드 개발자"로 유지되는가?
- [ ] 사이트가 GitHub 중심 포트폴리오가 아니라 포지션/면접 제안용 커리어 랜딩페이지로 보이는가?

## Content / Positioning

- [ ] 업무 경험과 구조적 사고가 GitHub보다 먼저 보이는가?
- [ ] Design System, Frontend Architecture, AI Agent Workflow 세 축이 반복해서 강화되는가?
- [ ] 디자인만 하는 사람처럼 보이지 않고 프론트엔드 구현/아키텍처 판단이 드러나는가?
- [ ] 공공/SI 프로젝트 목록처럼 보이지 않는가?
- [ ] 과장된 자기 PR이나 unsupported metrics가 없는가?

## Visual Direction

- [ ] 디자인이 과장되지 않았는가?
- [ ] 포트폴리오 학원 느낌이 없는가?
- [ ] 과한 3D, gradient, glassmorphism이 없는가?
- [ ] 너무 Notion 같은 밋밋한 문서가 아닌가?
- [ ] 카드가 정보를 묶는 데만 쓰이고 과다하지 않은가?
- [ ] 카드 안에 카드가 중첩되지 않는가?

## Selected Work

- [ ] Selected Work 3개가 설득력 있게 보이는가?
- [ ] Case 01이 Design System & Frontend Architecture 역량을 충분히 보여주는가?
- [ ] Case 02가 GIS/Disaster UI의 상태 흐름과 구조화 판단을 보여주는가?
- [ ] Case 03이 AI Agent Workflow와 human review gate를 강조하는가?
- [ ] 업무 화면, Figma 캡처 없이 diagram/state matrix/flow로 충분히 이해되는가?
- [ ] token refresh race condition이 Case 02 내부 note로만 다뤄지는가?

## Responsive

- [ ] 모바일에서 Hero -> Strengths -> Work -> Resume/Contact 흐름이 자연스러운가?
- [ ] 모바일 첫 화면에서 Peppearl, Frontend Engineer, headline, description, PDF CTA가 보이는가?
- [ ] PDF/Email CTA가 모바일에서도 잘 보이는가?
- [ ] Core Strengths가 모바일에서 1열로 읽기 쉬운가?
- [ ] Selected Work 카드가 모바일에서 1열로 자연스럽게 쌓이는가?
- [ ] 긴 텍스트가 모바일에서 접히거나 축약되는가?

## Accessibility

- [ ] semantic landmarks가 계획되어 있는가?
- [ ] heading hierarchy가 유지되는가?
- [ ] 모든 interactive element에 focus-visible이 있는가?
- [ ] 색상 대비가 충분한가?
- [ ] 색상만으로 정보를 전달하지 않는가?
- [ ] external link 안내가 가능한 구조인가?
- [ ] resume download가 PDF임을 명확히 전달하는가?
- [ ] reduced motion 대응이 계획되어 있는가?

## Privacy / Confidentiality

- [ ] 전화번호가 사용되지 않았는가?
- [ ] 얼굴 사진이 사용되지 않았는가?
- [ ] 업무 화면 이미지가 사용되지 않았는가?
- [ ] Figma 캡처가 사용되지 않았는가?
- [ ] 구체적인 성과 수치가 사용되지 않았는가?
- [ ] 내부 URL, token, endpoint, 서버 정보가 노출되지 않는가?
- [ ] `lh_dmp`의 실제 경로/파일명/구조를 인용하지 않고 public-safe 추상 구조 다이어그램만 사용하는가?
- [ ] dog photo가 너무 큰 비중을 차지하지 않는가?

## Development Readiness

- [ ] 다음 development 단계에서 구현 가능한 정도로 layout, token, component, responsive, motion 기준이 명확한가?
- [ ] `specs/` 요약과 `design/` 상세 문서가 충돌하지 않는가?
- [ ] React/Vite/Tailwind 구현 파일을 아직 만들지 않았는가?
- [ ] CSS 또는 Tailwind class를 아직 작성하지 않았는가?
- [ ] Development 시작 전 사용자 승인이 필요하다는 Hold 상태가 명확한가?

## Design Review Gate

- Design direction summary: 구조적 사고가 먼저 보이는 조용한 인터랙티브 커리어 랜딩페이지.
- Key layout decisions: v1 원페이지, Hero -> About -> Core Strengths -> Experience -> Selected Work -> Tech Stack -> Resume -> Contact.
- Risks: 너무 문서형으로 밋밋해질 위험, 반대로 diagram/card가 과해져 포트폴리오 템플릿처럼 보일 위험, 공개 경계가 모호한 자료를 쓰는 위험.
- What the user should review: 전체 디자인 톤, Case 01 강조 정도, Selected Work detail 공개 범위.
- Whether development may begin: 사용자 승인 전에는 development로 넘어가지 않는다.
