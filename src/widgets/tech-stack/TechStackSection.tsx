import { techStackGroups } from '../../content/techStack'
import { Section, SectionHeading } from '../../shared/ui/Section'
import { TagList } from '../../shared/ui/Tag'

export function TechStackSection() {
  return (
    <Section id="tech-stack">
      <SectionHeading
        id="tech-stack-title"
        title="Tech Stack"
        description="기술을 단순 나열하지 않고, 어떤 문제와 맥락에서 다뤘는지 기준별로 묶었습니다."
      />

      <div className="mt-8 rounded-lg border border-line bg-surface p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 divide-y divide-line/60 lg:grid-cols-2 lg:gap-x-12 lg:divide-y-0 lg:gap-y-8">
          {techStackGroups.map((group) => (
            <article key={group.title} className="pt-6 lg:pt-0 lg:border-t lg:border-line/60">
              <div className="lg:pt-6">
                <h3 className="text-[15px] font-semibold text-ink">{group.title}</h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-ink-muted">{group.note}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[4px] border border-line bg-page-soft/30 px-2 py-0.5 text-[12px] font-medium text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
