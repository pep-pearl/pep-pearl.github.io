import { useState } from 'react'

import { navItems, profile } from '../../content/profile'
import { ButtonLink } from '../../shared/ui/Button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-page/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="rounded-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Peppearl site top"
        >
          <span className="block text-sm font-semibold text-ink">{profile.publicName}</span>
          <span className="block text-xs text-soft">{profile.role}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="주요 섹션">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xs text-sm font-medium text-soft transition hover:text-accentStrong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={profile.resumeHref} variant="secondary" download aria-label="PDF 이력서 다운로드">
            이력서 다운로드
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex min-h-10 items-center rounded-sm border border-line bg-surface px-3 text-sm font-semibold text-ink transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((value) => !value)}
        >
          메뉴
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="모바일 주요 섹션"
        className={[
          'border-t border-line bg-page px-4 transition duration-200 md:hidden',
          isOpen ? 'max-h-80 py-3 opacity-100' : 'max-h-0 overflow-hidden py-0 opacity-0',
        ].join(' ')}
      >
        <div className="mx-auto grid max-w-7xl gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-sm px-3 py-2 text-sm font-medium text-soft transition hover:bg-muted hover:text-accentStrong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
