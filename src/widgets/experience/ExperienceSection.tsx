import { experienceIntro, experiences } from '../../content/experience'
import { Section, SectionHeading } from '../../shared/ui/Section'
import { TagList } from '../../shared/ui/Tag'

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading id="experience-title" title="Experience" description={experienceIntro} />

      <ol className="space-y-5">
        {experiences.map((item) => (
          <li key={`${item.period}-${item.title}`} className="grid gap-3 rounded-md border border-line bg-surface p-5 md:grid-cols-[180px_minmax(0,1fr)]">
            <p className="text-sm font-semibold text-accentStrong">{item.period}</p>
            <div>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-soft">{item.summary}</p>
              <div className="mt-4">
                <TagList items={item.tags} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
