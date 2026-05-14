export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-xs border border-line bg-surface px-2.5 py-1 text-xs font-medium text-soft">
      {children}
    </span>
  )
}

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="관련 키워드">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
