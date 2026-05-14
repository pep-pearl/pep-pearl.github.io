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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techStackGroups.map((group) => (
          <article key={group.title} className="rounded-md border border-line bg-surface p-5">
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-soft">{group.note}</p>
            <div className="mt-4">
              <TagList items={group.items} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
