# Open Questions

확정되지 않은 내용은 이 문서에 모은다. Codex는 아래 항목을 임의로 채우지 않는다.

## Confirmed Decisions

- 공개용 PDF 이력서 파일명: `이혜주_FrontendEngineer.pdf`
- PDF 내부 내용은 사용자가 공개 가능하다고 확인했으므로 별도 내용 검사는 하지 않는다.
- `dog_photo.png`는 프로필 이미지처럼 공개 사용 가능하다.
- 회사명, 프로젝트명, 교육, 자격증은 공개 가능하다.
- 프로젝트명 공개 가능: LH 재난관리 플랫폼, 스마트 하천 안전차단 시스템, 도시침수 및 재난 상황관리 시스템, 자사 솔루션 고도화 및 R&D.
- 구체적인 성과 수치는 공개하지 않는다.
- LinkedIn: `https://www.linkedin.com/in/nojam2ya`
- Wanted는 사용하지 않는다.
- 필요한 코드 스니펫은 사용자에게 요청하고, 제공이 어렵다면 다이어그램과 pseudo code로 대체한다.
- 사이트 제작 중 이력서 내용이 `content/resume`에 없거나 추가 정보가 필요하다고 판단되면 사용자에게 인터뷰로 확인한다.
- `D:\01_Projects\workspace\lh_dmp`의 폴더 구조 자체는 공개 가능하다. 단, 실제 사이트나 문서에 특정 경로/파일명/구조를 인용할 때는 민감한 회사 정보가 노출되지 않도록 사용자에게 한 번 확인받는다.
- token refresh race condition 대응은 별도 대표 케이스나 독립 페이지로 분리하지 않고, Case 02의 하위 구현 근거로 사용한다. 상세 표현이 필요하면 Case 02 내부의 짧은 implementation note 또는 접을 수 있는 pseudo flow로 다룬다.

## Resume / Contact

- [x] 실제 공개용 PDF 이력서 파일명은 무엇인가?
- [x] 공개용 PDF 이력서에서 전화번호가 제거되었는가?
- [x] PDF 안에 실명이 포함되어도 되는가?
- [x] PDF 안의 프로젝트명, 회사명, 수치가 모두 공개 가능한가?
- [ ] 이메일 표시 방식은 `jinjoo648@naver.com` 그대로 사용할 것인가?

## Links

- [x] LinkedIn 링크를 공개할 것인가?
- [x] Wanted 프로필 링크를 공개할 것인가?
- [ ] 블로그 링크 `https://jinjoo648.tistory.com/` 공개 여부를 최종 확인했는가?
- [ ] GitHub 링크 `https://github.com/pep-pearl` 외에 추가할 공개 링크가 있는가?

## Images / Assets

- [x] 현재 저장소 루트에 `dog_photo.png`가 있으나, 실제 공개 사용 가능 여부와 최종 위치를 확인해야 한다.
- [ ] 강아지 사진을 About 카드와 footer 중 어디에 둘 것인가?
- [ ] 업무 화면 이미지는 사용하지 않는다는 기본 정책을 유지할 것인가?
- [ ] Figma 캡처는 사용하지 않는다는 기본 정책을 유지할 것인가?
- [ ] 대표 케이스를 설명할 다이어그램은 직접 제작할 것인가, 코드 기반으로 생성할 것인가?

## Public Names / Privacy

- [x] 회사명을 공개해도 되는가?
- [x] 각 업무 프로젝트명을 공개해도 되는가?
- [ ] 실명을 사이트 본문 어디에도 쓰지 않는 정책을 유지할 것인가?
- [x] 자격증과 교육 정보의 공개 범위를 어디까지 허용할 것인가?

## Selected Work

- [ ] Case 01의 최종 제목은 `Design System & Frontend Architecture`로 확정인가?
- [ ] Case 02의 최종 제목은 `GIS / Disaster Management Platform`으로 확정인가?
- [ ] Case 03의 최종 제목은 `AI Agent Workflow for Frontend Development`로 확정인가?
- [ ] 자사 솔루션 고도화 및 R&D를 대표 케이스로 둘지, 경력 타임라인 항목으로만 둘지 결정이 필요한가?
- [ ] 프로젝트별 공개 가능한 코드 스니펫이 있는가? 필요한 시점에 사용자에게 요청한다.
- [x] 성과 수치를 공개할 수 있는 검증 자료가 있는가?

## Development / Deployment

- [ ] GitHub Pages는 user site `https://pep-pearl.github.io/`로 배포하는가?
- [ ] repository 이름 기준 project site로 배포한다면 Vite `base`는 무엇이어야 하는가?
- [ ] React Router 없이 원페이지 anchor navigation으로 v1을 진행할 것인가?
- [ ] Framer Motion을 사용할 만큼의 모션 요구가 있는가, CSS transition만으로 충분한가?
- [ ] TailwindCSS 외 별도 UI 라이브러리를 사용할 필요가 있는가?

## Source Data

- [ ] 교육 이력의 정확한 학교명, 전공명, 졸업/예정일은 `content/resume` 또는 PDF 기준으로 반영하고, 없으면 인터뷰한다.
- [ ] 자격증명, 발급기관, 취득일은 `content/resume` 또는 PDF 기준으로 반영하고, 없으면 인터뷰한다.
- [x] 현재 경력 회사명과 직책의 공개 가능 여부를 확인해야 한다.
- [x] 블로그 글 `FE 아키텍처를 고민하며`는 개별 접근 가능하다고 확인되었다.
- [x] Case 01 구현 단계의 `lh_dmp` 폴더 구조 공개 정책은 확정되었다. 구조 자체는 공개 가능하지만, 실제 인용 전 사용자 확인을 거친다.
- [x] token refresh race condition의 배치는 확정되었다. Case 02의 하위 구현 근거로 사용하고, 필요 시 짧은 implementation note 또는 접을 수 있는 pseudo flow로 표현한다.
