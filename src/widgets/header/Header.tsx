import { useEffect, useState } from 'react'

import { navItems, profile } from '../../content/profile'
import { ButtonLink } from '../../shared/ui/Button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : prefersDark ? 'dark' : 'light'

    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
  }, [])

  const closeMenu = () => setIsOpen(false)
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'

    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="Peppearl site top"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] text-white">
            <span className="sr-only">Logo</span>P
          </span>
          <div>
            <span className="block text-sm font-semibold text-ink transition-colors group-hover:text-brand">{profile.publicName}</span>
            <span className="block text-xs text-ink-muted">{profile.role}</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 섹션">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-[13px] font-medium text-ink-muted transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all hover:text-ink hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <ButtonLink href={profile.resumeHref} variant="secondary" download aria-label="PDF 이력서 다운로드" className="min-h-9 px-3 py-1.5 text-[13px] hover:border-brand hover:bg-surface">
            이력서 다운로드
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            type="button"
            className="inline-flex min-h-10 items-center rounded-sm border border-line bg-surface px-3 text-sm font-semibold text-ink transition hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((value) => !value)}
          >
            메뉴
          </button>
        </div>
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
              className="rounded-sm px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-page-soft hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      aria-pressed={isDark}
      onClick={onToggle}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-surface text-ink transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.99 12.43A8.5 8.5 0 1 1 11.57 3.01 6.5 6.5 0 0 0 20.99 12.43Z" />
        </svg>
      )}
    </button>
  )
}
