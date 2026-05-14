# 09. Asset Usage Guide

## Source Basis

이 문서는 `docs/03-privacy-and-publication-boundaries.md`, `docs/06-open-questions.md`, `planning/04-content-requirements.md`, `content/work/approved-case-evidence.md`를 기준으로 한 asset 사용 정책이다.

## Public Resume PDF

사용 파일:

- `이혜주_FrontendEngineer.pdf`

사용 위치:

- Hero CTA
- Resume section CTA

정책:

- PDF는 사용자가 공개 가능한 자료로 제공했다.
- 사이트 본문의 main public identity는 Peppearl로 유지한다.
- PDF 파일명에 실명이 포함되더라도 사이트 정체성을 실명 중심으로 바꾸지 않는다.

## Profile Image

사용 파일:

- `dog_photo.png`

사용 위치:

- About ProfileCard의 작은 보조 이미지 권장

금지:

- Hero main visual
- 큰 배경 이미지
- 귀여운 브랜딩의 중심 요소
- 얼굴 사진 대체 이상의 과한 강조
- Footer 반복 사용

Alt text:

- "Peppearl의 보조 프로필 이미지로 사용하는 강아지 사진"

## Face Photo

얼굴 사진은 사용하지 않는다. 사용자 명시 승인 전까지 placeholder도 만들지 않는다.

## Work Screenshots

업무 화면 이미지는 사용하지 않는다.

금지:

- 실제 업무 화면 캡처
- 실제 화면을 재현한 fake screenshot
- 내부 데이터가 들어간 이미지
- 지도 데이터 원본이 보이는 이미지

대체:

- architecture diagram
- wireframe block
- state flow
- component matrix
- decision card

## Figma Screenshots

Figma 캡처는 사용하지 않는다. 디자인 시스템을 설명해야 할 경우 token/component/layout rule preview를 추상 diagram으로 표현한다.

## Metrics / Numbers

구체적인 성과 수치를 이미지화하지 않는다.

금지:

- 성능 개선 퍼센트
- 시간 단축 수치
- 만족도/효율 그래프
- 검증되지 않은 ranking

대체:

- 변경 범위 제어
- 유지보수 기준 정리
- 상태 흐름 안정화
- 검토 가능한 workflow

## Code Snippets

코드 스니펫은 필요 시 사용자에게 요청한다.

원칙:

- 사용자가 제공한 public-safe 조각만 사용한다.
- 내부 URL, token, endpoint, 고객사 정보, 서버 정보 제거.
- 코드 제공이 어렵다면 diagram과 pseudo code로 대체한다.

현재 기준:

- Case 01 FSD/monorepo 관련 전체 코드는 제공 어려움.
- Case 02 GIS popup/createPortal 코드는 제공 불가.
- token refresh race condition은 전체 코드 대신 pseudo flow로 표현.

## lh_dmp Folder Structure

정책:

- `D:\01_Projects\workspace\lh_dmp`의 폴더 구조 자체는 공개 가능하다.
- v1에서는 실제 사이트에 특정 경로/파일명/구조를 인용하지 않는다.
- Case 01의 구조 설명은 public-safe 추상 구조 다이어그램으로만 구현한다.

디자인 반영:

- Case 01에서는 실제 경로명 대신 "feature / entity / shared / public API"처럼 일반화한 구조 diagram만 사용한다.
- 실제 구조 일부 인용은 이번 v1 범위에서 제외한다.

## Selected Work Visual Replacements

### Case 01. Design System & Frontend Architecture

사용 가능:

- FSD folder diagram
- Monorepo + FSD + Public API relationship map
- component state matrix
- token / component / layout rule preview
- data transformation boundary diagram

주의:

- 실제 경로/파일명 인용 금지. public-safe 추상화만 사용.

### Case 02. GIS / Disaster Management Platform

사용 가능:

- map/list/detail interaction diagram
- GIS popup render flow
- filter and map state flow
- token refresh single-flight pseudo sequence
- public-safe pseudo code

주의:

- 실제 지도 데이터, 업무 화면, token/API/client 전체 코드 금지.
- token refresh는 독립 케이스가 아니라 Case 02 내부 note로만 표현.

### Case 03. AI Agent Workflow for Frontend Development

사용 가능:

- workflow timeline
- phase gate diagram
- AGENTS.md / rules / prompts relationship map
- prompt card examples as summarized cards
- review checklist preview
- human approval gate 강조

주의:

- AI가 사람 판단을 대체한다는 인상 금지.
- "AI로 다 했다" 느낌 금지.
- 비공개 업무 프롬프트 사용 금지.
