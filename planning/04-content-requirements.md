# Content Requirements

디자인과 개발 전에 필요한 콘텐츠, 에셋, 공개 경계를 정리한다.

## 확정된 에셋

| Asset             | File / Value                           | 용도                                   | 상태           |
| ----------------- | -------------------------------------- | -------------------------------------- | -------------- |
| Public resume PDF | `이혜주_FrontendEngineer.pdf`          | Hero와 Resume section에서 다운로드     | 확정           |
| Profile image     | `dog_photo.png`                        | About 또는 footer의 작은 프로필 이미지 | 공개 사용 가능 |
| Email             | `jinjoo648@naver.com`                  | primary contact CTA                    | 공개 가능      |
| GitHub            | `https://github.com/pep-pearl`         | secondary proof link                   | 공개 가능      |
| Blog              | `https://jinjoo648.tistory.com/`       | secondary link                         | 공개 가능      |
| LinkedIn          | `https://www.linkedin.com/in/nojam2ya` | secondary professional link            | 공개 가능      |
| Wanted            | 없음                                   | 사용하지 않음                          | 확정           |

## 필요한 콘텐츠

### Profile

- Public name: Peppearl
- Role: Frontend Engineer
- Career: 3 years
- Headline: 제품의 완성도를 높이는 프론트엔드 개발자
- Summary: `content/resume/resume.site.md` 기준 사용

### Experience

- 기본 경력 흐름은 `content/resume/resume.codex.md`와 PDF 기준으로 반영한다.
- 회사명, 직책, 교육, 자격증은 공개 가능하다.
- `content/resume` 또는 PDF에 없는 정보가 필요하면 사용자에게 인터뷰한다.

### Selected Work

대표 케이스 3개:

1. Design System & Frontend Architecture
2. GIS / Disaster Management Platform
3. AI Agent Workflow for Frontend Development

각 케이스는 아래 구조를 따른다.

```txt
Context -> Problem -> My Role -> Key Decisions -> Implementation -> What I Learned
```

## 코드 스니펫 정책

- 코드 스니펫이 필요하면 사용자에게 먼저 요청한다.
- 사용자가 제공하기 어렵다고 답하면 다이어그램과 pseudo code로 대체한다.
- 내부 구현, 고객사 정보, 계정, 토큰, 비공개 URL이 포함된 코드는 사용하지 않는다.

## 이미지 정책

사용 금지:

- 업무 화면 이미지
- Figma 캡처
- 얼굴 사진
- 실제 화면처럼 보이는 fake screenshot

사용 가능:

- `dog_photo.png`
- 추상화된 아키텍처 다이어그램
- component state matrix
- map/list/detail interaction diagram
- workflow timeline
- pseudo UI block

## 공개 금지 콘텐츠

- 전화번호
- 얼굴 사진
- 업무 화면 이미지
- Figma 캡처
- 구체적인 성과 수치
- 내부 문서
- 기밀 코드
- 프로젝트 내부 URL, 계정, 토큰, 서버 정보

## 디자인/개발 전에 남은 확인 항목

- GitHub Pages 배포 형태: user site인지 project site인지 확인 필요
- `dog_photo.png` 최종 배치: About 카드, footer, profile chip 중 결정 필요
- 대표 케이스별 실제 코드 스니펫 필요 여부는 디자인/콘텐츠 구체화 단계에서 판단
- React Router 없이 원페이지 anchor navigation으로 충분한지 최종 확인 필요
