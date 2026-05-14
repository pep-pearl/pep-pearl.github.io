import type { ExperienceItem } from './types'

export const experienceIntro =
  '3년간 재난, GIS, 도로/하천 안전 관련 업무 시스템을 중심으로 프론트엔드 개발을 수행했습니다. React 기반 화면 구현뿐 아니라 UI/UX 설계, 프론트엔드 구조 설계, 개발 환경 개선, 일부 백엔드와 인프라 작업까지 경험했습니다.'

export const experiences: ExperienceItem[] = [
  {
    title: '자사 솔루션 고도화 및 R&D',
    period: '2026.02 - 진행중',
    summary: 'React, TypeScript, Vite, pnpm 기반의 프론트엔드 구조와 AI 기반 개발 프로세스 실험',
    tags: ['React', 'TypeScript', 'Vite', 'AI Workflow'],
  },
  {
    title: 'LH 재난관리 플랫폼 구축',
    period: '2025.06 - 2026.02',
    summary: 'UI/UX 디자인 및 프론트엔드 아키텍처 설계, FSD, monorepo, TailwindCSS, Headless UI',
    tags: ['FSD', 'Monorepo', 'TailwindCSS', 'Headless UI'],
  },
  {
    title: '스마트 하천 안전차단 시스템 Web/Mobile',
    period: '2024.06 - 2025.03',
    summary: 'Vite migration, TypeScript, API spec, GIS popup, createPortal 기반 지도 UI 흐름 정리',
    tags: ['Vite', 'TypeScript', 'GIS popup', 'createPortal'],
  },
  {
    title: '도시침수 및 재난 상황관리 시스템',
    period: '2023.06 - 2024.06',
    summary: 'React, JavaScript, styled-components, Spring Boot, PostgreSQL, CentOS 기반의 데이터 처리와 운영 맥락 경험',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'CentOS'],
  },
]
