# Agent Workflow

이 문서는 이 저장소에서 AI 에이전트 또는 자동화 도구가 작업할 때 따라야 할 프로젝트 구조, 수정 원칙, 검증 절차를 정리합니다.

## 1. 작업 전 확인

작업을 시작하기 전에 변경 목적과 영향을 받는 진입점을 확인합니다.

- 포트폴리오 페이지: `index.html` → `src/main.tsx` → `src/App.tsx`
- 이력서 페이지: `resume.html` → `src/resume-main.tsx` → `src/ResumeApp.tsx`
- 공통 포트폴리오 콘텐츠: `src/content/portfolio.ts`
- 이력서 콘텐츠: `src/content/resume.json`
- 포트폴리오 스타일: `src/styles.css`
- 이력서 스타일: `src/resume.css`

기존 구조를 먼저 읽고, 요청 범위 밖의 리팩터링이나 스타일 변경은 최소화합니다.

## 2. Source of Truth

### 포트폴리오

포트폴리오의 링크, 프로젝트, 기술 스택, 경력, 소개 문구는 `src/content/portfolio.ts`에서 관리합니다.

주요 데이터는 다음 export를 기준으로 합니다.

- `links`: 외부 링크와 이력서 링크
- `workItems`: 대표 프로젝트
- `archiveItems`: 추가 작업
- `skillGroups`: 기술 스택
- `experienceTasks`: 담당 업무
- `aboutParagraphs`: 소개 문단

표시 문구만 변경하는 작업이라면 컴포넌트에 문자열을 직접 추가하지 말고 우선 콘텐츠 파일을 수정합니다.

### 이력서

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

## 3. 수정 원칙

1. 콘텐츠 변경과 UI 구조 변경을 구분합니다.
2. 기존 타입과 데이터 구조를 우선 재사용합니다.
3. 같은 정보의 원본을 여러 파일에 중복해서 만들지 않습니다.
4. 링크를 추가할 때는 외부 링크의 `target`, `rel`, 접근성 레이블을 기존 패턴에 맞춥니다.
5. 반응형 레이아웃과 포트폴리오·이력서 양쪽 진입점에 미치는 영향을 확인합니다.
6. 요청과 직접 관련 없는 포맷 변경이나 대규모 재정렬은 피합니다.
7. 실제 코드와 문서가 다를 경우 코드를 기준으로 확인한 뒤 문서를 함께 갱신합니다.

## 4. 로컬 실행

```bash
pnpm install
pnpm dev
```

기본 개발 서버 주소는 다음과 같습니다.

- 포트폴리오: `http://localhost:5179/`
- 이력서 미리보기: `http://localhost:5179/resume.html`

`npm`을 사용해야 하는 환경에서는 아래 명령도 사용할 수 있습니다.

```bash
npm install
npm run dev
```

## 5. 검증

변경 후 최소한 다음 검증을 수행합니다.

```bash
pnpm typecheck
pnpm build
```

또는:

```bash
npm run typecheck
npm run build
```

UI 변경이 있다면 다음 항목도 직접 확인합니다.

- 포트폴리오와 이력서 페이지가 모두 정상적으로 열리는지
- 데스크톱과 좁은 화면에서 레이아웃이 깨지지 않는지
- 내부 앵커와 외부 링크가 올바르게 동작하는지
- 프로젝트 상세 `<details>`의 열기·닫기가 동작하는지
- 이력서 JSON 편집, 가져오기·내보내기, PDF 생성 흐름이 유지되는지

## 6. 빌드 결과

```bash
pnpm build
```

빌드 결과는 `dist`에 생성됩니다. 배포 방식을 변경하거나 확인할 때는 저장소의 GitHub Pages 설정과 배포 워크플로우 유무를 함께 확인합니다.

## 7. 작업 완료 보고

완료 메시지에는 다음 내용을 간단히 남깁니다.

- 변경한 파일
- 사용자에게 보이는 핵심 변화
- 실행한 검증 명령과 결과
- 확인하지 못한 항목이나 남아 있는 위험
