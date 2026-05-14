import type { TechStackGroup } from './types'

export const techStackGroups: TechStackGroup[] = [
  {
    title: 'Frontend',
    note: '제품 UI 구현과 개발 환경의 기본 축입니다.',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'TailwindCSS', 'styled-components', 'Headless UI'],
  },
  {
    title: 'Architecture',
    note: '화면, 상태, 도메인 로직, 공용 UI의 경계를 정리할 때 사용한 기준입니다.',
    items: ['Feature-Sliced Design', 'pnpm workspace', 'Monorepo', 'Design System'],
  },
  {
    title: 'State and Data',
    note: '상태와 데이터 변경 범위를 좁히기 위한 도구 경험입니다.',
    items: ['Zustand', 'Jotai', 'React Query'],
  },
  {
    title: 'Backend Collaboration',
    note: '업무 데이터와 운영 맥락을 이해하기 위해 함께 다뤄본 영역입니다.',
    items: ['Spring Boot', 'PostgreSQL', 'MyBatis', 'Linux / CentOS'],
  },
  {
    title: 'Workflow',
    note: '기획, 구현, 리뷰를 구조화하기 위한 작업 흐름과 도구입니다.',
    items: ['AI Agent Workflow', 'Cursor', 'Antigravity', 'Codex'],
  },
]
