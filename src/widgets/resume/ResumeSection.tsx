import { profile } from '../../content/profile'
import { ButtonLink } from '../../shared/ui/Button'
import { Section, SectionHeading } from '../../shared/ui/Section'

export function ResumeSection() {
  return (
    <Section id="resume" className="bg-page">
      <div className="rounded-[16px] border border-line bg-surface p-6 shadow-sm md:flex md:items-center md:justify-between md:p-8">
        <div>
          <h2 id="resume-title" className="text-xl font-semibold leading-tight text-ink sm:text-2xl">
            Resume
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-[1.6] text-ink-muted">
            더 자세한 경력은 PDF 이력서에서 확인할 수 있습니다. 사이트 본문의 public identity는 Peppearl로 유지합니다.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
          <ButtonLink href={profile.resumeHref} variant="primary" download aria-label="PDF 이력서 다운로드" className="w-full sm:w-auto">
            PDF 이력서 다운로드
          </ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary" aria-label="Peppearl에게 이메일로 연락하기" className="w-full sm:w-auto">
            이메일로 연락하기
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
