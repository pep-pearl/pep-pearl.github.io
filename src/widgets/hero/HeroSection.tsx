import { heroCtas, links, profile } from '../../content/profile'
import { CtaButton } from '../../shared/ui/Button'
import { ExternalLink } from '../../shared/ui/ExternalLink'

export function HeroSection() {
  return (
    <section id="top" className="px-4 pb-14 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
        <div className="max-w-3xl section-reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
            {profile.publicName} <span className="mx-2 text-line-strong">|</span> {profile.role}
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-ink">
            {profile.headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-ink-muted sm:text-xl">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
            {heroCtas.map((cta) => (
              <CtaButton key={cta.label} cta={cta} className="w-full sm:w-auto group" />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3" aria-label="보조 링크">
            {links.map((link) => (
              <ExternalLink key={link.kind} link={link} />
            ))}
          </div>
        </div>

        <div className="section-reveal rounded-[22px] border border-line bg-surface/50 p-6 shadow-sm backdrop-blur-sm lg:p-8" aria-label="핵심 역량 구조 미리보기">
          <div className="relative flex flex-col gap-8">
            {/* Connector Line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-line-strong/50" aria-hidden="true" />
            
            {[
              { title: 'Design System', desc: 'tokens · states · a11y' },
              { title: 'Component Architecture', desc: 'FSD · public API · boundaries' },
              { title: 'Frontend Workflow', desc: 'AI agents · review gates' },
              { title: 'Product Quality', desc: 'stable · scalable · refined' }
            ].map((item, index) => (
              <div key={item.title} className="relative flex items-start gap-5">
                <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-line bg-surface text-[11px] font-mono font-medium text-brand">
                  0{index + 1}
                </div>
                <div className="pt-1">
                  <p className="text-[15px] font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-[13px] text-ink-muted font-mono">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
