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
        <div className="space-y-5 text-base leading-8 text-soft">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="rounded-md border border-line bg-surface p-5 shadow-soft" aria-label="Peppearl 프로필 요약">
          <div className="flex items-center gap-4">
            <img
              src={profile.dogPhotoSrc}
              alt={profile.dogPhotoAlt}
              className="h-16 w-16 rounded-full border border-line object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-ink">{profile.publicName}</p>
              <p className="text-sm text-soft">{profile.role}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-soft">
            구조와 기준을 먼저 정리하고, 검토 가능한 작업 흐름으로 제품 UI를 다듬습니다.
          </p>
          <div className="mt-4">
            <TagList items={profileKeywords} />
          </div>
        </aside>
      </div>
    </Section>
  )
}
