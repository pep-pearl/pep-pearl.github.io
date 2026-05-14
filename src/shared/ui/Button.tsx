import type { AnchorHTMLAttributes, ReactNode } from 'react'

import type { CtaItem } from '../../content/types'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: CtaItem['kind']
}

const variantClasses: Record<CtaItem['kind'], string> = {
  primary:
    'border-accent bg-accent text-white shadow-soft hover:border-accentStrong hover:bg-accentStrong focus-visible:outline-accent',
  secondary:
    'border-line bg-surface text-ink hover:border-accent hover:text-accentStrong focus-visible:outline-accent',
  subtle:
    'border-transparent bg-transparent text-soft underline-offset-4 hover:text-accentStrong hover:underline focus-visible:outline-accent',
}

export function ButtonLink({ children, variant = 'secondary', className = '', ...props }: ButtonLinkProps) {
  return (
    <a
      className={[
        'inline-flex min-h-11 items-center justify-center rounded-sm border px-4 py-2.5 text-sm font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </a>
  )
}

export function CtaButton({ cta, className = '' }: { cta: CtaItem; className?: string }) {
  const isExternal = cta.href.startsWith('http')

  return (
    <ButtonLink
      href={cta.href}
      variant={cta.kind}
      download={cta.download}
      aria-label={cta.ariaLabel}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={className}
    >
      {cta.label}
    </ButtonLink>
  )
}
