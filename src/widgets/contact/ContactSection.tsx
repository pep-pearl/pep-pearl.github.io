import { links, profile } from '../../content/profile'
import { ButtonLink } from '../../shared/ui/Button'
import { ExternalLink } from '../../shared/ui/ExternalLink'
import { Section, SectionHeading } from '../../shared/ui/Section'

export function ContactSection() {
  return (
    <Section id="contact" className="pb-24">
      <div className="relative overflow-hidden rounded-[24px] border border-brand-dark bg-brand-dark p-8 text-white sm:p-12 md:flex md:items-center md:justify-between md:gap-12 lg:rounded-[28px] lg:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,240,106,0.1),transparent_50%)]" aria-hidden="true" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 id="contact-title" className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-white/80">
            포지션 제안이나 면접 제안은 이메일로 편하게 연락해 주세요.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <ExternalLink key={link.kind} link={link} className="text-white/80 hover:text-white focus-visible:outline-white" />
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-10 w-full md:mt-0 md:w-auto md:shrink-0">
          <ButtonLink 
            href={`mailto:${profile.email}`} 
            variant="primary" 
            className="w-full justify-center border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-brand-dark sm:w-auto"
          >
            이메일로 연락하기
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
