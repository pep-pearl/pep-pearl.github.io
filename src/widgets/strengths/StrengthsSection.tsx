import { strengths } from '../../content/profile'
import { Section, SectionHeading } from '../../shared/ui/Section'

export function StrengthsSection() {
  return (
    <Section id="strengths" className="bg-white/45">
      <SectionHeading
        id="strengths-title"
        title="Core Strengths"
        description="Design System, Frontend Architecture, AI Agent Workflow를 제품의 완성도를 높이는 세 가지 축으로 다룹니다."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {strengths.map((strength, index) => (
          <article
            key={strength.title}
            className="group relative rounded-lg border border-line bg-surface p-6 transition duration-300 hover:border-line-strong hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          >
            {/* Top Connector line & Index */}
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-5 items-center rounded-sm bg-brand/5 px-2 text-[11px] font-mono font-semibold text-brand transition-colors group-hover:bg-brand/10">
                0{index + 1}
              </span>
              <div className="h-px w-10 bg-line transition-colors group-hover:bg-brand/30"></div>
            </div>

            <h3 className="text-[17px] font-semibold text-ink">{strength.title}</h3>
            <p className="mt-3 text-sm leading-[1.6] text-ink-muted">{strength.summary}</p>
            
            <ul className="mt-6 space-y-2.5 text-[13px] text-ink-muted">
              {strength.evidence.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                  <span className="leading-[1.5]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Token chips */}
            <div className="mt-8 border-t border-line/50 pt-5 flex flex-wrap gap-2" aria-label={`${strength.title} 구조 단서`}>
              {strength.visualHint.map((hint) => (
                <span key={hint} className="rounded-[4px] border border-line bg-page-soft/50 px-2 py-1 text-[11px] font-mono text-ink-muted">
                  {hint}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
