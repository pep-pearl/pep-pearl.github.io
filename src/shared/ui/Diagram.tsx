import type { WorkVisual } from '../../content/types'

export function DiagramPanel({ visual }: { visual: WorkVisual }) {
  return (
    <figure className="rounded-md border border-line bg-muted/70 p-4">
      <figcaption>
        <h4 className="text-sm font-semibold text-ink">{visual.title}</h4>
        <p className="mt-1 text-sm leading-6 text-soft">{visual.description}</p>
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
    <ol className="grid gap-2 sm:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3 rounded-sm border border-line bg-surface px-3 py-2 text-sm text-ink">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accentSoft text-xs font-semibold text-accentStrong">
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
      <table className="min-w-full border-separate border-spacing-1 text-left text-xs">
        <thead>
          <tr>
            <th className="rounded-xs bg-surface px-3 py-2 font-semibold text-soft">Component</th>
            {columns.map((column) => (
              <th key={column} className="rounded-xs bg-surface px-3 py-2 font-semibold text-soft">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th className="rounded-xs bg-surface px-3 py-2 font-semibold text-ink">{row.label}</th>
              {row.values.map((value) => (
                <td key={`${row.label}-${value}`} className="rounded-xs border border-line bg-white/70 px-3 py-2 text-soft">
                  {value}
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
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.label} className="rounded-sm border border-line bg-surface p-3">
          <p className="text-xs font-semibold uppercase text-accent tracking-[0.08em]">{group.label}</p>
          <ul className="mt-2 space-y-1 text-sm text-soft">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
