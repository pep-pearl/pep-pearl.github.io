# Hyejoo Lee — Frontend Developer Portfolio

데이터가 많고 여러 상태가 연결되는 화면을 구조적으로 풀어내는 프론트엔드 개발자 **이혜주**의 포트폴리오입니다.

React와 TypeScript를 기반으로 GIS 대시보드, 모니터링·통계 화면, 데스크톱 애플리케이션과 사내 UI 체계를 개발해 왔습니다. 화면이 동작하는 데서 그치지 않고, 데이터 갱신 범위와 렌더링 경계, 공통 코드의 책임, 팀이 유지보수할 수 있는 구조를 함께 고민합니다.

## Links

- [✈️ Portfolio](https://pep-pearl.github.io/)
- [Resume](https://pep-pearl.github.io/resume.html)
- [GitHub](https://github.com/pep-pearl)
- [Blog](https://jinjoo648.tistory.com/)
- [LinkedIn](https://www.linkedin.com/in/nojam2ya)

## Selected Work

### 01. 주기적으로 갱신되는 GIS 데이터의 렌더링 범위 축소

응답 전체를 교체하던 구조를 객체 단위 비교와 갱신 방식으로 바꿔, 주기적인 데이터 수신 시 발생하던 화면 정지 문제를 해결했습니다. 지도·목록·상세·필터가 같은 데이터를 사용하더라도 필요한 범위만 다시 그리도록 상태 흐름을 분리했습니다.

### 02. 공통 코드를 관리하기 위한 구조 적용과 조정

반복되는 UI와 비즈니스 로직을 관리하기 위해 모노레포와 기능 단위 구조를 도입했습니다. 운영 과정에서 의존성과 디버깅 범위가 커지는 문제를 확인한 뒤, 팀 피드백을 반영해 프로젝트 저장소와 공통 패키지를 분리하는 구조로 조정했습니다.

### 03. 디자인 토큰과 사내 UI 컴포넌트 체계 구축

디자인 기준이 없는 화면과 AI 코드 도구로 만든 프로토타입에서도 일관된 UI를 만들 수 있도록 디자인 토큰, Headless 컴포넌트, Preset 컴포넌트 체계를 구성했습니다.

### 04. 레거시 React 프로젝트의 개발 환경 정비

CRA·JavaScript 기반 프로젝트를 Vite·TypeScript 환경으로 점진적으로 전환하고, Vitest와 Storybook을 도입해 타입 안정성, 회귀 검증, UI 확인 흐름을 개선했습니다.

## Focus

- React와 OpenLayers를 함께 사용하는 GIS 화면 설계
- 실시간·주기 갱신 데이터의 상태 및 렌더링 범위 최적화
- 지도·목록·팝업·상세·필터 사이의 상태 연결
- 공통 UI 컴포넌트와 디자인 토큰 구축
- 프론트엔드 아키텍처 구성과 운영 과정에서의 구조 조정
- API 클라이언트, 인증 만료 처리, 토큰 갱신 싱글 플라이트

## Tech Stack

**Main** · React · TypeScript · JavaScript · HTML · CSS · Vite · OpenLayers  
**UI** · Tailwind CSS · styled-components · Headless UI · CVA · Storybook · Figma  
**State & Data** · TanStack Query · Jotai · Zustand · Fetch API  
**Test & Tooling** · Vitest · pnpm · ESLint · Git · GitLab · Electron

## Repository

포트폴리오와 이력서는 콘텐츠 파일을 기준으로 렌더링됩니다.

- 포트폴리오 콘텐츠: `src/content/portfolio.ts`
- 이력서 콘텐츠: `src/content/resume.json`
- 포트폴리오 진입점: `index.html`
- 이력서 진입점: `resume.html`

프로젝트 실행, 콘텐츠 수정, 검증 방식과 AI 에이전트 작업 규칙은 [`meta/agent-workflow`](./meta/agent-workflow/)에서 확인할 수 있습니다.
