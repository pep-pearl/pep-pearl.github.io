# Hyejoo Lee Portfolio

이혜주의 프론트엔드 포트폴리오 GitHub Pages 저장소입니다.

## 실행

```bash
npm install
npm run dev
```

- 포트폴리오: `http://localhost:5179/`
- 이력서 미리보기: `http://localhost:5179/resume.html`

## 콘텐츠 수정

포트폴리오 콘텐츠는 `src/content/portfolio.ts`에서 관리합니다.

이력서 콘텐츠는 `src/content/resume.json`에서 관리합니다. `sections` 배열의 순서를 바꾸거나 각 항목의 `visible` 값을 변경해 섹션을 추가, 제거, 재정렬할 수 있습니다.

지원하는 이력서 섹션 레이아웃은 다음과 같습니다.

- `bullets`: 제목과 설명 목록
- `skills`: 기술 그룹
- `experience`: 회사 경력과 주요 성과
- `projects`: 프로젝트별 역할, 문제, 결과
- `education`: 학력 표
- `certifications`: 자격 표
- `paragraphs`: 자기소개형 문단

이력서 미리보기 페이지의 **JSON 편집** 패널에서도 내용을 임시 수정할 수 있습니다. 브라우저에서 수정한 내용은 로컬 저장소에만 보관되며, JSON 파일로 내보내거나 다시 불러올 수 있습니다.

PDF는 이력서 미리보기 화면의 **PDF 다운로드** 버튼에서 현재 JSON 내용을 기준으로 생성합니다.

## 빌드

```bash
npm run build
```

`main` 브랜치에 푸시하면 GitHub Actions가 `dist`를 GitHub Pages에 배포합니다.
