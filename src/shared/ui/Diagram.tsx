import type { WorkVisual } from '../../content/types'

export function DiagramPanel({ visual }: { visual: WorkVisual }) {
  return (
    <figure className="rounded-md border border-line bg-page-soft/70 p-4">
      <figcaption>
        <h4 className="text-sm font-semibold text-ink">{visual.title}</h4>
        <p className="mt-1 text-sm leading-6 text-ink-muted">{visual.description}</p>
      </figcaption>

      <div className="mt-4">
        {visual.type === 'flow' ? <FlowDiagram steps={visual.steps} /> : null}
        {visual.type === 'matrix' ? <MatrixDiagram columns={visual.columns} rows={visual.rows} /> : null}
        {visual.type === 'relationship' ? <RelationshipDiagram groups={visual.groups} /> : null}
      </div>
    </figure>
  )
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-2 sm:grid-cols-2 relative">
      {steps.map((step, index) => (
        <li key={step} className="relative flex items-center gap-3 rounded-md bg-surface p-3 text-[13px] text-ink font-medium shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand/10 text-[10px] font-mono font-bold text-brand">
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  )
}

function MatrixDiagram({ columns, rows }: { columns: string[]; rows: Array<{ label: string; values: string[] }> }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-[13px]">
        <thead>
          <tr className="border-b border-line-strong/50">
            <th className="py-3 pr-4 font-semibold text-ink-muted">Component</th>
            {columns.map((column) => (
              <th key={column} className="py-3 px-4 font-semibold text-ink-muted">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line/60">
          {rows.map((row) => (
            <tr key={row.label}>
              <th className="py-3 pr-4 font-semibold text-ink">{row.label}</th>
              {row.values.map((value) => (
                <td key={`${row.label}-${value}`} className="py-3 px-4 text-ink-muted">
                  <span className="inline-block rounded-[4px] bg-surface px-2 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)] border border-line/50">
                    {value}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RelationshipDiagram({ groups }: { groups: Array<{ label: string; items: string[] }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.label} className="relative rounded-lg bg-surface p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <p className="text-[11px] font-mono font-medium uppercase text-brand tracking-[0.08em]">{group.label}</p>
          <ul className="mt-3 space-y-2 text-[13px] text-ink-muted">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/50" />
                <span className="leading-[1.4]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
