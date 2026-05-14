import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  width?: 'default' | 'wide'
}

export function Section({ id, children, className = '', width = 'default' }: SectionProps) {
  const maxWidth = width === 'wide' ? 'max-w-7xl' : 'max-w-6xl'

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 ${className}`}>
      <div className={`mx-auto ${maxWidth}`}>{children}</div>
    </section>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  id: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, id, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-8 max-w-3xl ${className}`}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase text-brand tracking-[0.08em]">{eyebrow}</p> : null}
      <h2 id={id} className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-ink-muted sm:text-lg">{description}</p> : null}
    </div>
  )
}
