# 05. Section Wireframes

## Source Basis

이 문서는 development 단계에서 레이아웃을 구현하기 전 참고할 텍스트 기반 와이어프레임이다. 이미지 생성, Figma 생성, React/CSS 구현은 포함하지 않는다.

## Desktop Wireframe

### Header

```txt
┌──────────────────────────────────────────────────────────────┐
│ Peppearl        About  Strengths  Work  Resume  Contact       │
│ Frontend Engineer                         [이력서 다운로드]    │
└──────────────────────────────────────────────────────────────┘
```

Notes:

- GitHub는 header primary nav에 두지 않는다.
- Resume CTA는 과하게 크지 않게 둔다.

### Hero

```txt
┌──────────────────────────────────────────────────────────────┐
│ Peppearl · Frontend Engineer                                  │
│                                                              │
│ 제품의 완성도를 높이는 프론트엔드 개발자                     │
│                                                              │
│ 디자인 시스템, 확장 가능한 아키텍처, AI Agent 활용 워크플로우를 │
│ 바탕으로 복잡한 서비스를 안정적이고 세련되게 구현합니다.      │
│                                                              │
│ [PDF 이력서 다운로드] [이메일로 연락하기] [대표 프로젝트 보기] │
│                                                              │
│ LinkedIn · Blog · GitHub                                      │
│                                                              │
│                         ┌──────────────────────────────┐     │
│                         │ Design System                │     │
│                         │ Architecture                 │     │
│                         │ AI Agent Workflow            │     │
│                         │ small abstract relationship   │     │
│                         └──────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

Notes:

- 우측 preview는 실제 업무 화면이 아니라 구조 preview다.
- dog photo는 hero에 넣지 않는다.

### About

```txt
┌──────────────────────────────────────────────────────────────┐
│ About                                                        │
│ UI 기준과 프론트엔드 구조를 함께 다룹니다.                  │
│                                                              │
│ ┌──────────────────────────────┐ ┌─────────────────────────┐ │
│ │ React와 TypeScript를 중심으로 │ │  small dog_photo.png    │ │
│ │ 제품 UI의 기준과 구조를 함께 │ │  Peppearl               │ │
│ │ 다루는 프론트엔드 개발자...  │ │  Frontend Engineer      │ │
│ │                              │ │  구조와 기준을 먼저...  │ │
│ └──────────────────────────────┘ └─────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### Core Strengths

```txt
┌──────────────────────────────────────────────────────────────┐
│ Core Strengths                                               │
│ 세 가지 축으로 제품 UI의 완성도를 다룹니다.                  │
│                                                              │
│ ┌───────────────┐ ┌──────────────────┐ ┌──────────────────┐ │
│ │ Design System │ │ Frontend Arch.   │ │ AI Agent Workflow│ │
│ │ tokens        │ │ FSD / monorepo   │ │ rules / prompts  │ │
│ │ states        │ │ public API       │ │ review gates     │ │
│ │ accessibility │ │ data boundary    │ │ human approval   │ │
│ └───────────────┘ └──────────────────┘ └──────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### Experience

```txt
┌──────────────────────────────────────────────────────────────┐
│ Experience                                                   │
│ 3년간 재난, GIS, 도로/하천 안전 관련 업무 시스템을...       │
│                                                              │
│ 2026.02 - 진행중 │ 자사 솔루션 고도화 및 R&D                 │
│                  │ React, TypeScript, Vite, pnpm             │
│                  │ AI 기반 개발 프로세스 실험                │
│                                                              │
│ 2025.06 - 2026.02 │ LH 재난관리 플랫폼 구축                  │
│                   │ UI/UX 디자인 및 프론트엔드 아키텍처      │
│                                                              │
│ 2024.06 - 2025.03 │ 스마트 하천 안전차단 시스템 Web/Mobile   │
│                   │ Vite migration, TypeScript, GIS popup    │
│                                                              │
│ 2023.06 - 2024.06 │ 도시침수 및 재난 상황관리 시스템         │
│                   │ React, JavaScript, Spring Boot, CentOS    │
└──────────────────────────────────────────────────────────────┘
```

### Selected Work

```txt
┌──────────────────────────────────────────────────────────────┐
│ Selected Work                                                │
│ 스크린샷 없이 구조와 판단으로 보여주는 대표 케이스입니다.   │
│                                                              │
│ ┌────────────────────────┐ ┌───────────────┐ ┌─────────────┐ │
│ │ Case 01                │ │ Case 02       │ │ Case 03     │ │
│ │ Design System &        │ │ GIS / Disaster│ │ AI Agent    │ │
│ │ Frontend Architecture  │ │ Platform      │ │ Workflow    │ │
│ │ key decisions...       │ │ state flow... │ │ hold gate...│ │
│ └────────────────────────┘ └───────────────┘ └─────────────┘ │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Case detail region                                      │ │
│ │ Left: Context / Problem / Role / Decisions              │ │
│ │ Right: DiagramCard                                      │ │
│ │ - FSD map                                               │ │
│ │ - state matrix                                          │ │
│ │ - data boundary                                         │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### Tech Stack

```txt
┌──────────────────────────────────────────────────────────────┐
│ Tech Stack                                                   │
│ 기술을 사용 맥락별로 묶어 보여줍니다.                       │
│                                                              │
│ ┌──────────┐ ┌──────────────┐ ┌─────────────┐               │
│ │ Frontend │ │ Architecture │ │ State/Data  │               │
│ └──────────┘ └──────────────┘ └─────────────┘               │
│ ┌──────────────────────┐ ┌──────────────┐                   │
│ │ Backend Collaboration│ │ Workflow     │                   │
│ └──────────────────────┘ └──────────────┘                   │
└──────────────────────────────────────────────────────────────┘
```

### Resume

```txt
┌──────────────────────────────────────────────────────────────┐
│ Resume                                                       │
│ 더 자세한 경력은 PDF 이력서에서 확인할 수 있습니다.          │
│                                                              │
│ [PDF 이력서 다운로드] [이메일로 연락하기]                    │
└──────────────────────────────────────────────────────────────┘
```

### Contact

```txt
┌──────────────────────────────────────────────────────────────┐
│ Contact                                                      │
│ 포지션 제안이나 면접 제안은 이메일로 편하게 연락해 주세요.  │
│                                                              │
│ [이메일로 연락하기]                                          │
│ LinkedIn · Blog · GitHub                                     │
└──────────────────────────────────────────────────────────────┘
```

### Footer

```txt
┌──────────────────────────────────────────────────────────────┐
│ Peppearl · Frontend Engineer        LinkedIn · Blog · GitHub │
└──────────────────────────────────────────────────────────────┘
```

## Mobile Wireframe

### Header

```txt
┌────────────────────────────┐
│ Peppearl              menu │
└────────────────────────────┘
```

Open menu:

```txt
┌────────────────────────────┐
│ About                      │
│ Strengths                  │
│ Work                       │
│ Resume                     │
│ Contact                    │
└────────────────────────────┘
```

### Hero

```txt
┌────────────────────────────┐
│ Peppearl                   │
│ Frontend Engineer          │
│                            │
│ 제품의 완성도를 높이는     │
│ 프론트엔드 개발자          │
│                            │
│ 디자인 시스템, 확장 가능한 │
│ 아키텍처, AI Agent 활용... │
│                            │
│ [PDF 이력서 다운로드]      │
│ [이메일로 연락하기]        │
│ [대표 프로젝트 보기]       │
│                            │
│ LinkedIn · Blog · GitHub   │
└────────────────────────────┘
```

### About

```txt
┌────────────────────────────┐
│ About                      │
│ UI 기준과 구조를 함께...   │
│                            │
│ React와 TypeScript를...    │
│ 바로 구현하기보다 구조와...│
│                            │
│ [small dog photo] Peppearl │
│ Design System · FSD · AI   │
└────────────────────────────┘
```

### Core Strengths

```txt
┌────────────────────────────┐
│ Core Strengths             │
│ ┌────────────────────────┐ │
│ │ Design System          │ │
│ │ token / state / a11y   │ │
│ └────────────────────────┘ │
│ ┌────────────────────────┐ │
│ │ Frontend Architecture  │ │
│ │ FSD / monorepo / data  │ │
│ └────────────────────────┘ │
│ ┌────────────────────────┐ │
│ │ AI Agent Workflow      │ │
│ │ rules / prompts / gate │ │
│ └────────────────────────┘ │
└────────────────────────────┘
```

### Experience

```txt
┌────────────────────────────┐
│ Experience                 │
│ 3년간 재난, GIS...         │
│                            │
│ 2026.02 - 진행중           │
│ 자사 솔루션 고도화 및 R&D  │
│                            │
│ 2025.06 - 2026.02          │
│ LH 재난관리 플랫폼 구축    │
│                            │
│ 2024.06 - 2025.03          │
│ 스마트 하천 안전차단...    │
│                            │
│ 2023.06 - 2024.06          │
│ 도시침수 및 재난...        │
└────────────────────────────┘
```

### Selected Work

```txt
┌────────────────────────────┐
│ Selected Work              │
│                            │
│ Case 01                    │
│ Design System & Frontend...│
│ - FSD boundary             │
│ - component state          │
│ - data boundary            │
│ [자세히 보기]              │
│                            │
│ Case 02                    │
│ GIS / Disaster Platform    │
│ - map/list/detail flow     │
│ - popup render boundary    │
│ - token note collapsed     │
│ [자세히 보기]              │
│                            │
│ Case 03                    │
│ AI Agent Workflow          │
│ - Research -> Plan -> Hold │
│ - human review gate        │
│ [자세히 보기]              │
└────────────────────────────┘
```

### Tech Stack

```txt
┌────────────────────────────┐
│ Tech Stack                 │
│ Frontend                   │
│ React · TypeScript · Vite  │
│                            │
│ Architecture               │
│ FSD · pnpm workspace       │
│                            │
│ State/Data                 │
│ Zustand · Jotai · Query    │
│                            │
│ Backend Collaboration      │
│ Spring Boot · PostgreSQL   │
│                            │
│ Workflow                   │
│ Cursor · Antigravity · Codex│
└────────────────────────────┘
```

### Resume / Contact / Footer

```txt
┌────────────────────────────┐
│ Resume                     │
│ 더 자세한 경력은 PDF에서...│
│ [PDF 이력서 다운로드]      │
└────────────────────────────┘

┌────────────────────────────┐
│ Contact                    │
│ 포지션/면접 제안은 이메일로│
│ [이메일로 연락하기]        │
│ LinkedIn · Blog · GitHub   │
└────────────────────────────┘

┌────────────────────────────┐
│ Peppearl · Frontend Engineer│
│ LinkedIn · Blog · GitHub    │
└────────────────────────────┘
```
