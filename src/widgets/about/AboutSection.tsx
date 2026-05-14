import { aboutParagraphs, profile, profileKeywords } from '../../content/profile'
import { Section, SectionHeading } from '../../shared/ui/Section'
import { TagList } from '../../shared/ui/Tag'

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        id="about-title"
        title="UI 기준과 프론트엔드 구조를 함께 다룹니다."
        description="구현 결과뿐 아니라 팀이 이해하고 유지할 수 있는 구조와 기준을 남기는 방식을 중요하게 봅니다."
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-5 text-base leading-8 text-ink-muted">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="relative rounded-[16px] border border-line bg-surface/80 p-6 shadow-sm backdrop-blur-sm lg:p-8" aria-label="Peppearl 프로필 요약">
          <div className="flex items-center gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[12px] border border-line-strong/50">
              <img
                src={profile.dogPhotoSrc}
                alt={profile.dogPhotoAlt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-semibold text-ink">{profile.publicName}</p>
              <p className="text-[13px] text-ink-muted">{profile.role}</p>
            </div>
          </div>
          <div className="mt-6 border-t border-line/50 pt-6">
            <p className="text-[14px] leading-[1.6] text-ink-muted">
              구조와 기준을 먼저 정리하고, 검토 가능한 작업 흐름으로 제품 UI를 다듬습니다.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {profileKeywords.map((keyword) => (
              <span key={keyword} className="rounded-[4px] border border-line bg-page-soft/30 px-2 py-1 text-[11px] font-mono font-medium text-ink-muted">
                {keyword}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  )
}
