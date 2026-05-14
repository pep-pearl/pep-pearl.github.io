import { heroCtas, links, profile } from '../../content/profile'
import { CtaButton } from '../../shared/ui/Button'
import { ExternalLink } from '../../shared/ui/ExternalLink'

export function HeroSection() {
  return (
    <section id="top" className="px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
        <div className="max-w-3xl section-reveal">
          <p className="text-sm font-semibold text-accent">{profile.publicName} · {profile.role}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-soft">{profile.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {heroCtas.map((cta) => (
              <CtaButton key={cta.label} cta={cta} className="w-full sm:w-auto" />
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2" aria-label="보조 링크">
            {links.map((link) => (
              <ExternalLink key={link.kind} link={link} />
            ))}
          </div>
        </div>

        <div className="section-reveal rounded-md border border-line bg-surface p-5 shadow-soft" aria-label="핵심 역량 구조 미리보기">
          <div className="grid gap-3">
            {['Design System', 'Frontend Architecture', 'AI Agent Workflow'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-sm border border-line bg-muted/50 p-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accentSoft text-sm font-semibold text-accentStrong">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{item}</p>
                  <p className="text-xs text-soft">
                    {index === 0 ? 'tokens · states · accessibility' : index === 1 ? 'FSD · public API · data boundary' : 'rules · prompts · review gate'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-soft">
            업무 화면 대신 구조와 판단이 보이는 다이어그램으로 대표 경험을 설명합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
