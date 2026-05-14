import { links, profile } from '../../content/profile'
import { ExternalLink } from '../../shared/ui/ExternalLink'

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.publicName}</p>
          <p className="text-sm text-soft">{profile.role}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer links">
          {links.map((link) => (
            <ExternalLink key={link.kind} link={link} />
          ))}
        </div>
      </div>
    </footer>
  )
}
