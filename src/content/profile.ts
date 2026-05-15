import type { CtaItem, LinkItem, Strength } from './types'

export const profile = {
  publicName: 'Peppearl',
  role: 'Frontend Engineer',
  career: '3 years',
  headline: '제품의 완성도를 높이는 프론트엔드 개발자',
  description:
    '디자인 시스템, 확장 가능한 아키텍처, AI Agent 활용 워크플로우를 바탕으로 복잡한 서비스를 안정적이고 세련되게 구현합니다.',
  positioning: '지속 가능한 디자인 시스템과 확장성 있는 아키텍처로 제품의 완성도를 높이는 프론트엔드 개발자',
  email: 'jinjoo648@naver.com',
  resumeHref: '/이혜주_FrontendEngineer.pdf',
  dogPhotoSrc: '/images/dog_photo.png',
  dogPhotoAlt: 'Peppearl의 보조 프로필 이미지로 사용하는 강아지 사진',
} as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Work', href: '#selected-work' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroCtas: CtaItem[] = [
  {
    label: 'PDF 이력서 다운로드',
    href: profile.resumeHref,
    kind: 'primary',
    download: true,
    ariaLabel: 'PDF 이력서 다운로드',
  },
  {
    label: '이메일로 연락하기',
    href: `mailto:${profile.email}`,
    kind: 'secondary',
    ariaLabel: 'Peppearl에게 이메일로 연락하기',
  },
  {
    label: '대표 프로젝트 보기',
    href: '#selected-work',
    kind: 'subtle',
  },
]

export const links: LinkItem[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nojam2ya',
    kind: 'linkedin',
    external: true,
  },
  {
    label: 'Blog',
    href: 'https://jinjoo648.tistory.com/',
    kind: 'blog',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pep-pearl',
    kind: 'github',
    external: true,
  },
]

export const aboutParagraphs = [
  'React와 TypeScript를 중심으로 제품 UI의 기준과 구조를 함께 다루는 프론트엔드 개발자입니다. 디자인 시스템과 프론트엔드 아키텍처를 연결해 복잡한 서비스를 일관되고 유지보수하기 쉬운 형태로 만드는 데 관심이 있습니다.',
  '바로 구현하기보다 구조와 기준을 먼저 정리하고, 팀이 이해할 수 있는 경계와 검토 가능한 작업 흐름을 남기는 방식을 중요하게 봅니다.',
  '재난/GIS 기반 업무 시스템을 개발하며 복잡한 도메인 데이터를 사용자가 이해하고 판단할 수 있는 인터페이스로 정리해 왔습니다. 최근에는 AI Agent를 기획, 디자인, 개발, 리뷰 과정에 구조적으로 활용하는 작업 흐름을 실험하고 있습니다.',
] as const

export const profileKeywords = ['React', 'TypeScript', 'Design System', 'FSD', 'AI Agent Workflow'] as const

export const strengths: Strength[] = [
  {
    title: 'Design System',
    summary:
      '디자인 의도를 구현 단위의 기준으로 바꾸는 데 관심이 있습니다. token, component state, layout rule, accessibility를 함께 고려합니다.',
    evidence: ['component states', 'design tokens', 'Headless UI + TailwindCSS', 'accessibility-aware UI'],
    visualHint: ['token', 'state', 'layout', 'a11y'],
  },
  {
    title: 'Frontend Architecture',
    summary:
      'React와 TypeScript 기반에서 화면, 상태, 도메인 로직, 공용 UI의 경계를 정리합니다. 복잡한 서비스도 유지보수하기 쉬운 구조로 다듬는 방향을 중요하게 봅니다.',
    evidence: ['React + TypeScript', 'Vite', 'Feature-Sliced Design', 'pnpm workspace / monorepo'],
    visualHint: ['feature', 'entity', 'shared', 'public API'],
  },
  {
    title: 'AI Agent Workflow',
    summary:
      'AI Agent를 단순 코드 생성기가 아니라 작업 기준을 명확히 하고 검토 가능한 결과물을 만들기 위한 협업 도구로 사용합니다.',
    evidence: ['AGENTS.md', 'phase rules', 'reusable skills', 'human approval gates'],
    visualHint: ['Research', 'Plan', 'Hold', 'Review'],
  },
]
