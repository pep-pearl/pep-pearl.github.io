# Antigravity Design Report

## 1. Summary
카드형 포트폴리오 템플릿 느낌을 줄이고, 디자인 시스템 및 편집 디자인에 가까운 시스템적 인터페이스로 전체 UI를 다듬었습니다.
그림자(shadow)를 최소화하고, 얇은 border와 넓은 여백(spacing), 그리고 정교한 typography 계층을 사용하여 더욱 구조적이고 우아한 랜딩 페이지를 구성했습니다.

## 2. Files Changed

| File | Change | Reason |
| --- | --- | --- |
| `tailwind.config.cjs` | 신규 색상 token (`brand`, `brand-dark`, `page-soft`, `line-strong` 등) 도입 | 전체적으로 차분하고 정돈된 색채 체계를 일관되게 적용하기 위해 |
| `src/styles/globals.css` | 강한 body radial gradient 제거 및 ::selection 색상 브랜드 컬러로 변경 | 콘텐츠가 배경보다 돋보이도록 하고 시스템적인 플랫함을 강조하기 위해 |
| `scratch/replace.mjs` (임시 스크립트) | 구형 유틸리티 클래스를 신규 토큰으로 일괄 교체 (예: `text-accent` -> `text-brand`) | 프로젝트 전체에 새로운 token 시스템을 오류 없이 신속히 전파하기 위해 |
| `src/widgets/hero/HeroSection.tsx` | Hero typography 확대 및 clamp 적용, 우측 카드를 연결된 System Diagram으로 변경 | 첫 화면에서 핵심 역량의 구조를 한눈에 파악할 수 있게 만들기 위해 |
| `src/widgets/header/Header.tsx` | 로고에 P 심볼 추가, nav 링크 hover underline 효과, border 두께 감소 | 섬세한 시그니처 요소를 추가하고 Header를 얇고 정제된 형태로 유지하기 위해 |
| `src/widgets/selected-work/SelectedWorkSection.tsx` | 상단 Summary 카드를 Secondary 스타일로, 하단 상세 패널을 Primary 스타일로 분리 | 빠른 스캔과 심층 리뷰의 역할을 분리하고 시각적 단조로움을 깨기 위해 |
| `src/shared/ui/Diagram.tsx` | Flow, Matrix, Relationship 다이어그램의 스타일을 더 추상적인 블록/시스템 뷰로 정제 | 업무 화면 캡처 없이도 프론트엔드 아키텍처/워크플로우의 전문성이 전달되도록 |
| `src/widgets/strengths/StrengthsSection.tsx` | Index와 Connector 라인 추가, Visual Hint를 token chip 스타일로 변경 | 단순히 나열된 카드가 아닌, 잘 짜여진 시스템 매뉴얼처럼 보이게 하기 위해 |
| `src/widgets/tech-stack/TechStackSection.tsx` | 단순 카드 그리드를 넘어 선으로 분할된 Compact matrix table 스타일로 변경 | 기술 스택이 체계적인 카테고리로 정리되어 있다는 인상을 주기 위해 |
| `src/widgets/experience/ExperienceSection.tsx` | 좌측 세로선과 dot를 활용한 Timeline 레이아웃으로 변경 | 이력의 시간적 흐름을 빠르게 인지할 수 있도록 돕기 위해 |
| `src/widgets/about/AboutSection.tsx` | dog photo를 둥근 사각형으로 변경, 패널을 System card 형태로 변경 | 사진의 귀여운 느낌을 중화시키고 전체 UI의 구조적 톤에 맞추기 위해 |
| `src/widgets/resume/ResumeSection.tsx` | 그림자를 줄이고 border 중심의 Horizontal Action Panel 형태로 변경 | Section 마무리에 적절한 환기 영역(Action point)으로 작동하도록 |
| `src/widgets/contact/ContactSection.tsx` | 짙은 brand-dark 배경, 넓은 radius, radial gradient, 투명 버튼 등 추가 | 페이지의 마지막을 강렬하고 우아하게 닫는 마침표 역할을 하도록 |

## 3. Design Priorities Applied

### Hero Typography / Visual
- **적용 내용:** Hero 텍스트에 clamp를 사용해 데스크톱에서 약 60px 수준으로 확장하고 line-height를 1.08로 조였습니다. 우측은 단순 카드가 아닌, 선으로 연결된 4단계 Workflow Diagram으로 변경했습니다.
- **남은 점검:** 모바일 뷰어에서 clamp 크기가 의도한 대로 3줄 이내로 깔끔하게 떨어지는지 텍스트 래핑 확인이 필요합니다.

### Card System
- **Primary / Secondary / Flat card 구분:**
  - *Primary*: Selected Work 하단 Detail Panel (`bg-surface/40 backdrop-blur`, 넓은 패딩, 아주 미세한 그림자)
  - *Secondary*: Selected Work 상단 Summary, Strengths, Tech Stack 등 (`bg-surface`, `border` 중심, 그림자 제거 혹은 최소화)
  - *Flat*: Diagram 내부 요소 및 Tag/Chip 등 (`bg-page-soft/30`, 낮은 대비)
- **남은 점검:** 특정 디스플레이(특히 Windows Chrome)에서 얇은 border-line과 surface 배경 간 대비가 충분히 확보되는지 확인이 필요합니다.

### Shadow / Border / Radius
- **적용 내용:** 기존의 두꺼운 그림자(`shadow-soft`)를 제거하거나 `shadow-[0_1px_3px_...]` 수준으로 낮췄습니다. 대신 hover 시 border-color 변화(`hover:border-line-strong` 또는 `hover:border-brand/50`)를 주어 상호작용을 표현했습니다.
- **남은 점검:** Shadow가 제거됨에 따라 일부 요소가 배경과 섞여 보일 위험이 없는지 스크롤하며 체크해야 합니다.

### Selected Work Visual Grammar
- **적용 내용:** 하단 디테일 패널의 간격을 넓히고(`gap-16`), 상단 케이스 번호에 얇은 선 장식을 더했습니다. 내부의 다이어그램(Diagram.tsx)들을 더 시스템 구조 뷰에 맞게 플랫하고 모노톤 기반 포인트 컬러로만 다듬었습니다.
- **남은 점검:** 각 다이어그램이 실제 프로젝트의 느낌을 충분히 추상화하여 잘 대변하고 있는지 내용/형태적 핏(fit) 검토가 필요합니다.

### Signature Graphic
- **선택한 signature element:** Section Index + Connector Line (Option A & B 혼합)
- **적용 위치:** HeroSection 우측 다이어그램, StrengthsSection 카드 내부 상단, SelectedWorkDetail 번호 앞, ExperienceSection의 타임라인
- **남은 점검:** 선(Connector)의 굵기 및 색상(`line` vs `line-strong`)이 과하게 도드라지지 않는지 확인.

## 4. Section-by-section Changes

- **Header:**
  - *변경 전 문제:* 다소 두꺼운 blur와 뭉툭한 border
  - *변경 내용:* border 두께/투명도 조정, 로고 부분에 `P` 심볼 추가, nav 메뉴에 hover underline 효과 추가
  - *기대 효과:* 더 편집 디자인적이고 섬세한 인상
- **Hero:**
  - *변경 전 문제:* 텍스트 위계가 약하고 우측 정보가 분절된 카드
  - *변경 내용:* clamp typography 적용, System Workflow Diagram 도입
  - *기대 효과:* 프론트엔드 아키텍처를 다루는 전문가의 포지셔닝 강화
- **About:**
  - *변경 전 문제:* 둥근 사진이 다소 일상적인 블로그 느낌을 줌
  - *변경 내용:* 약간 둥근 사각형(rounded-[12px])으로 변경, 패널화
  - *기대 효과:* 시스템적인 구조에 개인적인 터치가 자연스럽게 섞이는 효과
- **Core Strengths:**
  - *변경 전 문제:* 모든 카드가 동일해 보임
  - *변경 내용:* 좌상단 인덱스와 연결 선 배치, Visual Hint 토큰화
  - *기대 효과:* 매뉴얼을 보는 듯한 신뢰감 부여
- **Experience:**
  - *변경 전 문제:* 단순 리스트 형태
  - *변경 내용:* 좌측 Timeline 형태로 재구성
  - *기대 효과:* 경력의 누적과 흐름을 명확하게 파악 가능
- **Selected Work:**
  - *변경 전 문제:* 요약 카드와 상세 패널의 시각적 차별성 부족
  - *변경 내용:* 상단은 빠른 탐색용 Secondary, 하단은 심층 Primary 구조로 분리
  - *기대 효과:* 인지 과부하를 줄이고 선택적 깊은 읽기 유도
- **Tech Stack:**
  - *변경 전 문제:* 단순 뱃지 나열
  - *변경 내용:* 분할 선으로 구분된 Compact Matrix 느낌으로 묶음
  - *기대 효과:* 사용 기술에 대한 구조적 이해가 돋보임
- **Resume:**
  - *변경 전 문제:* 일반적인 카드 형태
  - *변경 내용:* 넓은 가로형 Action Panel
  - *기대 효과:* 페이지 하단으로 가기 전의 자연스러운 액션 유도
- **Contact:**
  - *변경 전 문제:* 다른 섹션과 톤 차이가 크지 않음
  - *변경 내용:* 짙은 brand-dark 배경, 큰 radius, 방사형 그라데이션, 투명/Outline 버튼
  - *기대 효과:* 페이지 하단의 강렬한 시각적 종결 및 전환(CTA) 극대화
- **Global Styles:**
  - *변경 전 문제:* 전체 body에 강한 배경 그라데이션 존재
  - *변경 내용:* 깨끗한 #F7FAF6 배경과 ::selection 컬러 적용
  - *기대 효과:* 콘텐츠 자체가 발산하는 디테일(선, 여백)이 돋보임

## 5. Constraints Respected

- [x] 새 경력/성과/수치를 임의로 만들지 않음
- [x] confidential screenshot을 사용하지 않음
- [x] face photo/phone number를 추가하지 않음
- [x] dog photo를 hero main visual로 사용하지 않음
- [x] one-page 구조를 유지함
- [x] 과한 gradient/glassmorphism/3D/parallax를 피함
- [x] 접근성과 reduced-motion을 유지함
- [x] 새 dependency를 추가하지 않음

## 6. Verification

- [x] pnpm build (통과)
- [x] pnpm typecheck (통과)
- [ ] mobile 360px 확인 (미실행 - 렌더링 서버 접속 불가)
- [ ] tablet layout 확인 (미실행)
- [ ] desktop layout 확인 (미실행)
- [ ] keyboard focus 확인 (미실행)
- [ ] reduced-motion 확인 (미실행)
- [ ] 외부 링크/이력서 링크 확인 (미실행)

## 7. Known Issues / Risks
- 개발 환경의 제약으로 인해 브라우저 렌더링 결과를 직접 육안으로 확인하지 못했습니다. 특히 Hero의 clamp 타이포그래피 줄바꿈 상태나 Contact 섹션의 모바일 Full-width 버튼 정렬 상태에 대한 검증이 필요합니다.
- `brand`, `line-strong`, `page-soft` 토큰들 간의 시각적 명도/대비가 실제 화면상에서 의도한 우아함을 내는지 확인이 필요합니다.

## 8. Suggested Next Steps for Codex

1. 가장 먼저 확인할 것: `pnpm dev`로 로컬 서버를 띄운 뒤, Desktop/Mobile 뷰에서 Hero 타이포그래피 래핑과 Experience 타임라인 선이 어긋나지 않는지 시각적으로 확인하세요.
2. 이어서 수정할 것: Selected Work 내 DiagramPanel 요소들(Matrix, Flow)이 지나치게 심심하거나 복잡해 보이면 `Diagram.tsx`의 간격과 보더 색상을 미세 조정하세요.
3. 마지막으로 검증할 것: 키보드 `Tab` 키로 모든 링크와 버튼(Contact 버튼 포함)에 포커스 링이 정상적으로 표시되는지, 그리고 접근성(Lighthouse) 수치가 떨어지지 않았는지 점검하세요.

## 9. Handoff Prompt for Codex
```text
이번 단계에서 전체 디자인을 "카드형 포트폴리오 템플릿"에서 "시스템/편집 디자인형 인터페이스"로 성공적으로 개편했습니다. 그림자 대신 얇은 border와 여백을 활용해 깊이를 만들고, Section Index와 Connector Line 같은 시그니처 그래픽을 추가했습니다. `pnpm build`와 `typecheck`는 모두 통과했으나, 시각적 확인(브라우저 렌더링)은 수행하지 못했습니다.

현재 가장 먼저 점검해야 할 리스크는 모바일에서의 Hero 텍스트 줄바꿈(clamp 적용됨)과 Experience 섹션의 타임라인 선 정렬입니다. `pnpm dev`를 실행하여 모바일(360px)과 데스크톱 뷰를 육안으로 확인하고, 어색한 부분이 있다면 `HeroSection.tsx`의 타이포그래피 클래스나 `Diagram.tsx`의 추상 블록 디자인을 미세 튜닝해 주세요. 이후 키보드 포커스와 탭 이동을 마지막으로 점검하면 됩니다.
```
