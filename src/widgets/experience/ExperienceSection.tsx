import { experienceIntro, experiences } from '../../content/experience'
import { Section, SectionHeading } from '../../shared/ui/Section'
import { TagList } from '../../shared/ui/Tag'

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading id="experience-title" title="Experience" description={experienceIntro} />

      <div className="relative mt-12 pl-4 md:pl-0">
        {/* Timeline Line for Mobile (hidden on desktop) */}
        <div className="absolute left-[23px] top-2 bottom-2 w-px bg-line md:hidden" aria-hidden="true" />
        
        <ol className="space-y-8 md:space-y-12">
          {experiences.map((item) => (
            <li key={`${item.period}-${item.title}`} className="group relative flex flex-col gap-2 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
              
              <div className="relative flex items-center md:items-start">
                {/* Timeline Dot (Mobile) */}
                <div className="absolute -left-4 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-surface md:hidden">
                  <div className="h-2 w-2 rounded-full bg-line-strong group-hover:bg-brand transition-colors" />
                </div>
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:absolute md:-right-4 md:top-2 md:flex md:h-[15px] md:w-[15px] md:items-center md:justify-center md:rounded-full md:bg-page">
                  <div className="h-2 w-2 rounded-full bg-line-strong group-hover:bg-brand transition-colors" />
                </div>
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:absolute md:-right-[9px] md:top-6 md:bottom-[-48px] md:w-px md:bg-line md:block" aria-hidden="true" />

                <p className="pl-6 text-[13px] font-mono font-medium text-brand md:pl-0 md:text-right md:w-full md:pr-10">{item.period}</p>
              </div>

              <div className="pl-6 md:pl-0">
                <div className="rounded-lg border border-line bg-surface p-6 transition duration-200 group-hover:border-line-strong group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h3 className="text-lg font-semibold text-ink group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-ink-muted">{item.summary}</p>
                  <div className="mt-6 border-t border-line/50 pt-4">
                    <TagList items={item.tags} />
                  </div>
                </div>
              </div>

            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
