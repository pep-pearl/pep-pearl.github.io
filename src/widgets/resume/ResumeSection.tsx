import { profile } from '../../content/profile'
import { ButtonLink } from '../../shared/ui/Button'
import { Section, SectionHeading } from '../../shared/ui/Section'

export function ResumeSection() {
  return (
    <Section id="resume" className="bg-white/45">
      <div className="rounded-md border border-line bg-surface p-6 shadow-soft md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
        <SectionHeading
          id="resume-title"
          title="Resume"
          description="더 자세한 경력은 PDF 이력서에서 확인할 수 있습니다. 사이트 본문의 public identity는 Peppearl로 유지합니다."
          className="mb-0"
        />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
          <ButtonLink href={profile.resumeHref} variant="primary" download aria-label="PDF 이력서 다운로드">
            PDF 이력서 다운로드
          </ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary" aria-label="Peppearl에게 이메일로 연락하기">
            이메일로 연락하기
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
