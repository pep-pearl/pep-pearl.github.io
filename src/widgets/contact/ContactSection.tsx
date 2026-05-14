import { links, profile } from '../../content/profile'
import { ButtonLink } from '../../shared/ui/Button'
import { ExternalLink } from '../../shared/ui/ExternalLink'
import { Section, SectionHeading } from '../../shared/ui/Section'

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="rounded-md border border-line bg-ink p-6 text-white md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
        <div>
          <SectionHeading
            id="contact-title"
            title="Contact"
            description="포지션 제안이나 면접 제안은 이메일로 편하게 연락해 주세요."
            className="mb-0 [&_h2]:text-white [&_p]:text-white/75"
          />
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <ExternalLink key={link.kind} link={link} className="text-white/75 hover:text-white focus-visible:outline-white" />
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <ButtonLink href={`mailto:${profile.email}`} variant="primary" className="border-white bg-white text-ink hover:border-accentSoft hover:bg-accentSoft">
            이메일로 연락하기
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
