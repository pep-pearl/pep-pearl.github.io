import { workCases } from '../../content/projects'
import { profile } from '../../content/profile'
import type { WorkCase } from '../../content/types'
import { ButtonLink } from '../../shared/ui/Button'
import { DiagramPanel } from '../../shared/ui/Diagram'
import { Section, SectionHeading } from '../../shared/ui/Section'
import { TagList } from '../../shared/ui/Tag'

export function SelectedWorkSection() {
  return (
    <Section id="selected-work" width="wide" className="bg-muted/55">
      <SectionHeading
        id="selected-work-title"
        title="Selected Work"
        description="업무 화면이나 Figma 캡처 없이, 공개 가능한 다이어그램과 판단 기록으로 대표 케이스를 설명합니다."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {workCases.map((workCase, index) => (
          <article
            key={workCase.title}
            className={[
              'rounded-md border border-line bg-surface p-5 transition duration-200 hover:border-accent/70 hover:shadow-soft',
              index === 0 ? 'lg:col-span-1' : '',
            ].join(' ')}
          >
            <p className="text-xs font-semibold uppercase text-accent tracking-[0.08em]">{workCase.caseNumber}</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-ink">{workCase.title}</h3>
            <p className="mt-3 text-sm leading-6 text-soft">{workCase.memoryLine}</p>
            <div className="mt-5">
              <TagList items={workCase.tags.slice(0, 4)} />
            </div>
            <a
              href={`#${caseId(workCase)}`}
              className="mt-5 inline-flex rounded-xs text-sm font-semibold text-accentStrong underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              자세히 보기
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {workCases.map((workCase) => (
          <WorkCaseDetail key={workCase.title} workCase={workCase} />
        ))}
      </div>

      <WorkBridge />
    </Section>
  )
}

function WorkCaseDetail({ workCase }: { workCase: WorkCase }) {
  return (
    <article id={caseId(workCase)} aria-labelledby={`${caseId(workCase)}-title`} className="scroll-mt-24">
      <div className="grid gap-6 rounded-md border border-line bg-surface p-5 shadow-soft lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-7">
        <div>
          <p className="text-sm font-semibold text-accentStrong">{workCase.caseNumber}</p>
          <h3 id={`${caseId(workCase)}-title`} className="mt-2 text-2xl font-semibold leading-tight text-ink">
            {workCase.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-soft">{workCase.summary}</p>

          <div className="mt-6 space-y-5">
            <TextBlock title="핵심 문제" body={workCase.problem} />
            <TextBlock title="나의 역할" body={workCase.role} />
            <ListBlock title="주요 판단" items={workCase.decisions} />
            <ListBlock title="구현 / 표현 방식" items={workCase.implementation} />
            <TextBlock title="What I Learned" body={workCase.learned} />
          </div>

          {workCase.relatedWriting?.length ? (
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-sm font-semibold text-ink">Related Writing</p>
              <ul className="mt-2 space-y-2">
                {workCase.relatedWriting.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.label} 외부 링크 열기`}
                      className="text-sm font-medium text-accentStrong underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {item.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="space-y-4" aria-label={`${workCase.title} 공개 가능한 시각화 영역`}>
          {workCase.visuals.map((visual) => (
            <DiagramPanel key={visual.title} visual={visual} />
          ))}
        </div>
      </div>
    </article>
  )
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <section aria-label={title}>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-soft">{body}</p>
    </section>
  )
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section aria-label={title}>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-soft">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function caseId(workCase: WorkCase) {
  return workCase.caseNumber.toLowerCase().replace(' ', '-')
}

export function WorkBridge() {
  return (
    <div className="mt-10 rounded-md border border-line bg-surface p-5 md:flex md:items-center md:justify-between md:gap-6">
      <p className="text-sm leading-6 text-soft">더 자세한 경력은 PDF에서 확인하고, 프로젝트 관련 제안은 이메일로 연결할 수 있습니다.</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0">
        <ButtonLink href={profile.resumeHref} variant="secondary" download>
          PDF 이력서 다운로드
        </ButtonLink>
        <ButtonLink href={`mailto:${profile.email}`} variant="subtle">
          이메일로 연락하기
        </ButtonLink>
      </div>
    </div>
  )
}
