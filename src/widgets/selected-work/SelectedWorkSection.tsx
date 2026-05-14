import { workCases } from '../../content/projects'
import { profile } from '../../content/profile'
import type { WorkCase } from '../../content/types'
import { ButtonLink } from '../../shared/ui/Button'
import { DiagramPanel } from '../../shared/ui/Diagram'
import { Section, SectionHeading } from '../../shared/ui/Section'
import { TagList } from '../../shared/ui/Tag'

export function SelectedWorkSection() {
  return (
    <Section id="selected-work" width="wide" className="bg-page-soft/55">
      <SectionHeading
        id="selected-work-title"
        title="Selected Work"
        description="업무 화면이나 Figma 캡처 없이, 공개 가능한 다이어그램과 판단 기록으로 대표 케이스를 설명합니다."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {workCases.map((workCase, index) => (
          <article
            key={workCase.title}
            className={[
              'rounded-xl border border-line bg-surface p-6 transition duration-200 hover:border-brand/50 group',
              index === 0 ? 'lg:col-span-1' : '',
            ].join(' ')}
          >
            <p className="text-[11px] font-mono font-medium uppercase text-brand tracking-[0.1em]">{workCase.caseNumber}</p>
            <h3 className="mt-4 text-lg font-semibold leading-tight text-ink group-hover:text-brand transition-colors">{workCase.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-muted">{workCase.memoryLine}</p>
            <div className="mt-6">
              <TagList items={workCase.tags.slice(0, 4)} />
            </div>
            <a
              href={`#${caseId(workCase)}`}
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand after:content-['→'] after:transition-transform hover:after:translate-x-1"
            >
              자세히 보기
            </a>
          </article>
        ))}
      </div>

      <div className="mt-16 space-y-16">
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
    <article id={caseId(workCase)} aria-labelledby={`${caseId(workCase)}-title`} className="scroll-mt-32">
      <div className="grid gap-8 rounded-[24px] border border-line bg-surface/40 backdrop-blur-md p-6 shadow-sm lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-mono font-medium text-brand">
            <span className="h-px w-4 bg-brand"></span> {workCase.caseNumber}
          </p>
          <h3 id={`${caseId(workCase)}-title`} className="mt-4 text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            {workCase.title}
          </h3>
          <p className="mt-5 text-base leading-[1.7] text-ink-muted">{workCase.summary}</p>

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
                      className="text-sm font-medium text-brand-dark underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
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
      <p className="mt-2 text-sm leading-6 text-ink-muted">{body}</p>
    </section>
  )
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section aria-label={title}>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-ink-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
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
      <p className="text-sm leading-6 text-ink-muted">더 자세한 경력은 PDF에서 확인하고, 프로젝트 관련 제안은 이메일로 연결할 수 있습니다.</p>
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
