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
        {strengths.map((strength) => (
          <article
            key={strength.title}
            className="rounded-md border border-line bg-surface p-5 transition duration-200 hover:border-accent/60 hover:shadow-soft"
          >
            <h3 className="text-lg font-semibold text-ink">{strength.title}</h3>
            <p className="mt-3 text-sm leading-6 text-soft">{strength.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-soft">
              {strength.evidence.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-2" aria-label={`${strength.title} 구조 단서`}>
              {strength.visualHint.map((hint) => (
                <span key={hint} className="rounded-xs bg-muted px-2 py-1.5 text-xs font-medium text-soft">
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
