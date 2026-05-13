# Final Review Checklist

최종 배포 전 이 체크리스트를 기준으로 검수한다.

## Goal Fit

- [ ] 방문자가 3분 안에 Peppearl의 강점을 이해할 수 있는가?
- [ ] 이력서 PDF 없이도 경력이 파악되는가?
- [ ] 포지션 제안, 면접 제안, 이메일 연락으로 이어지는 흐름이 분명한가?
- [ ] Hero에서 핵심 포지셔닝이 명확한가?
- [ ] Design System, Frontend Architecture, AI Agent Workflow가 모두 드러나는가?
- [ ] GitHub 유도가 과하지 않은가?

## Content

- [ ] Public name은 Peppearl로 유지되는가?
- [ ] 한국어 문장이 자연스럽고 직접적인가?
- [ ] 영어 기술 용어는 필요한 곳에만 쓰였는가?
- [ ] "최고", "완벽", "압도적" 같은 과장 표현이 없는가?
- [ ] 겸손함을 직접 주장하지 않고 작업 방식과 학습으로 보여주는가?
- [ ] 성과 수치를 검증 없이 공개하지 않았는가?
- [ ] 대표 프로젝트 3개가 설득력 있는가?

## Privacy

- [ ] 전화번호가 노출되지 않았는가?
- [ ] 얼굴 사진이 사용되지 않았는가?
- [ ] 업무 화면 이미지가 사용되지 않았는가?
- [ ] Figma 캡처가 사용되지 않았는가?
- [ ] 실명을 메인 공개 정체성으로 사용하지 않았는가?
- [ ] 기밀 문서, 내부 URL, 계정, 토큰이 포함되지 않았는가?
- [ ] PDF 이력서가 공개 안전성 검토를 통과했는가?

## Design

- [ ] 미니멀하지만 밋밋하지 않은가?
- [ ] 작은 인터랙션이 이해를 돕는가?
- [ ] 포트폴리오 학원 느낌이 나지 않는가?
- [ ] 공공/SI 느낌이 강하지 않은가?
- [ ] 너무 Notion 같거나 기업 홈페이지 같지 않은가?
- [ ] 강아지 사진은 작고 보조적인가?
- [ ] 카드와 장식이 과하지 않은가?

## Responsive

- [ ] 360px 모바일 폭에서 텍스트가 넘치지 않는가?
- [ ] 모바일에서 CTA 접근성이 유지되는가?
- [ ] 태블릿 레이아웃이 자연스러운가?
- [ ] 데스크톱에서 섹션 리듬과 여백이 적절한가?
- [ ] 카드 그리드가 1열, 2열, 3열로 자연스럽게 변하는가?
- [ ] 내비게이션이 작은 화면에서 과밀하지 않은가?

## Accessibility

- [ ] `header`, `main`, `section`, `nav`, `footer` landmark가 있는가?
- [ ] heading order가 논리적인가?
- [ ] 키보드 focus state가 보이는가?
- [ ] 링크와 버튼의 accessible name이 명확한가?
- [ ] 강아지/profile 이미지에 alt text가 있는가?
- [ ] reduced motion preference를 존중하는가?
- [ ] 색 대비가 충분한가?

## Technical / Deployment

- [ ] Vite + React + TypeScript + TailwindCSS 구조인가?
- [ ] build가 통과하는가?
- [ ] TypeScript 오류가 없는가?
- [ ] lint가 설정되어 있다면 통과하는가?
- [ ] console error가 없는가?
- [ ] resume download link가 동작하는가?
- [ ] contact mail link가 동작하는가?
- [ ] 외부 링크가 깨지지 않았는가?
- [ ] GitHub Pages 배포 설정이 되어 있는가?
- [ ] Vite `base`가 user site 또는 project site에 맞게 설정되었는가?
- [ ] Lighthouse Accessibility 90+를 목표로 고려했는가?
- [ ] Lighthouse Performance 90+를 합리적으로 고려했는가?
