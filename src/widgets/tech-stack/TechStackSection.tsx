import { useState } from 'react'

import { techStackGroups } from '../../content/techStack'
import { Section, SectionHeading } from '../../shared/ui/Section'

const techLogos: Record<string, { src: string; label: string; fallback?: string }> = {
  React: { src: 'https://cdn.simpleicons.org/react/149ECA', label: 'React logo' },
  TypeScript: { src: 'https://cdn.simpleicons.org/typescript/3178C6', label: 'TypeScript logo' },
  JavaScript: { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', label: 'JavaScript logo' },
  Vite: { src: 'https://cdn.simpleicons.org/vite/646CFF', label: 'Vite logo' },
  TailwindCSS: { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', label: 'Tailwind CSS logo' },
  'styled-components': { src: 'https://cdn.simpleicons.org/styledcomponents/DB7093', label: 'styled-components logo' },
  'Headless UI': { src: 'https://cdn.simpleicons.org/headlessui/66E3FF', label: 'Headless UI logo' },
  Figma: { src: 'https://cdn.simpleicons.org/figma/F24E1E', label: 'Figma logo' },
  'Feature-Sliced Design': {
    src: 'https://feature-sliced.design/img/brand/logo-primary.svg',
    label: 'Feature-Sliced Design logo',
    fallback: 'FSD',
  },
  'pnpm workspace': { src: 'https://cdn.simpleicons.org/pnpm/F69220', label: 'pnpm logo' },
  Monorepo: { src: 'https://cdn.simpleicons.org/turborepo/EF4444', label: 'Monorepo logo', fallback: 'MR' },
  'Design System': { src: 'https://cdn.simpleicons.org/figma/F24E1E', label: 'Design System logo', fallback: 'DS' },
  Zustand: { src: 'https://cdn.simpleicons.org/react/245C46', label: 'Zustand logo', fallback: 'Z' },
  Jotai: { src: 'https://cdn.simpleicons.org/react/111A15', label: 'Jotai logo', fallback: 'J' },
  'React Query': { src: 'https://cdn.simpleicons.org/reactquery/FF4154', label: 'React Query logo' },
  'Spring Boot': { src: 'https://cdn.simpleicons.org/springboot/6DB33F', label: 'Spring Boot logo' },
  PostgreSQL: { src: 'https://cdn.simpleicons.org/postgresql/4169E1', label: 'PostgreSQL logo' },
  MyBatis: { src: 'https://cdn.simpleicons.org/apache/CB2138', label: 'MyBatis logo', fallback: 'MB' },
  'Linux / CentOS': { src: 'https://cdn.simpleicons.org/linux/FCC624', label: 'Linux logo' },
  'AI Agent Workflow': { src: 'https://cdn.simpleicons.org/openai/111A15', label: 'AI Agent Workflow logo', fallback: 'AI' },
  Cursor: { src: 'https://cdn.simpleicons.org/cursor/111A15', label: 'Cursor logo' },
  Antigravity: { src: 'https://cdn.simpleicons.org/google/4285F4', label: 'Antigravity logo', fallback: 'AG' },
  Codex: { src: 'https://cdn.simpleicons.org/openai/111A15', label: 'Codex logo' },
}

function TechLogo({ item }: { item: string }) {
  const [isBroken, setIsBroken] = useState(false)
  const logo = techLogos[item]
  const fallback = logo?.fallback ?? item.slice(0, 2).toUpperCase()

  if (!logo || isBroken) {
    return (
      <span aria-hidden="true" className="grid size-4 place-items-center rounded-[3px] bg-page-soft text-[8px] font-bold text-ink-muted">
        {fallback}
      </span>
    )
  }

  return (
    <span className="grid size-4 shrink-0 place-items-center" aria-hidden="true">
      <img
        src={logo.src}
        alt=""
        className="max-h-4 max-w-4 object-contain"
        loading="lazy"
        decoding="async"
        onError={() => setIsBroken(true)}
      />
      <span className="sr-only">{logo.label}</span>
    </span>
  )
}

export function TechStackSection() {
  return (
    <Section id="tech-stack">
      <SectionHeading
        id="tech-stack-title"
        title="Tech Stack"
        description="기술을 단순 나열하지 않고, 어떤 문제와 맥락에서 다뤘는지 기준별로 묶었습니다."
      />

      <div className="mt-8 rounded-lg border border-line bg-surface p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 divide-y divide-line/60 lg:grid-cols-2 lg:gap-x-12 lg:divide-y-0 lg:gap-y-8">
          {techStackGroups.map((group) => (
            <article key={group.title} className="pt-6 lg:border-t lg:border-line/60 lg:pt-0">
              <div className="lg:pt-6">
                <h3 className="text-[15px] font-semibold text-ink">{group.title}</h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-ink-muted">{group.note}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-[4px] border border-line bg-page-soft/30 px-2 py-0.5 text-[12px] font-medium text-ink-muted"
                    >
                      <TechLogo item={item} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
