import type { AnchorHTMLAttributes, ReactNode } from 'react'

import type { CtaItem } from '../../content/types'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: CtaItem['kind']
}

const variantClasses: Record<CtaItem['kind'], string> = {
  primary:
    'border-brand bg-brand text-white shadow-sm hover:border-brand-dark hover:bg-brand-dark focus-visible:outline-brand',
  secondary:
    'border-line bg-surface text-ink hover:border-brand hover:text-brand-dark focus-visible:outline-brand',
  subtle:
    'border-transparent bg-transparent text-ink-muted underline-offset-4 hover:text-brand-dark hover:underline focus-visible:outline-brand',
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
