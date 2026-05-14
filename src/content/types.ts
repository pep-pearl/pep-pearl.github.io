export type LinkKind = 'email' | 'linkedin' | 'blog' | 'github' | 'resume'

export type LinkItem = {
  label: string
  href: string
  kind: LinkKind
  external?: boolean
}

export type CtaItem = {
  label: string
  href: string
  kind: 'primary' | 'secondary' | 'subtle'
  download?: boolean
  ariaLabel?: string
}

export type Strength = {
  title: string
  summary: string
  evidence: string[]
  visualHint: string[]
}

export type ExperienceItem = {
  title: string
  period: string
  summary: string
  tags: string[]
}

export type TechStackGroup = {
  title: string
  note: string
  items: string[]
}

export type WorkVisual =
  | {
      type: 'flow'
      title: string
      description: string
      steps: string[]
    }
  | {
      type: 'matrix'
      title: string
      description: string
      columns: string[]
      rows: Array<{
        label: string
        values: string[]
      }>
    }
  | {
      type: 'relationship'
      title: string
      description: string
      groups: Array<{
        label: string
        items: string[]
      }>
    }

export type WorkCase = {
  caseNumber: string
  title: string
  memoryLine: string
  summary: string
  problem: string
  role: string
  decisions: string[]
  implementation: string[]
  learned: string
  tags: string[]
  visuals: WorkVisual[]
  relatedWriting?: Array<{
    label: string
    href: string
  }>
}
