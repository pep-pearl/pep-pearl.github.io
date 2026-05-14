import type { LinkItem } from '../../content/types'

export function ExternalLink({ link, className = '' }: { link: LinkItem; className?: string }) {
  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noreferrer' : undefined}
      aria-label={link.external ? `${link.label} 외부 링크 열기` : link.label}
      className={[
        'inline-flex items-center rounded-xs text-sm font-medium text-ink-muted underline-offset-4 transition duration-200 hover:text-brand-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
        className,
      ].join(' ')}
    >
      {link.label}
      {link.external ? <span aria-hidden="true" className="ml-1 text-xs">↗</span> : null}
    </a>
  )
}
