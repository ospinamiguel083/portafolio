export default function SectionHeading({ index, title, id }) {
  return (
    <div id={id} className="flex items-baseline gap-4 mb-10 scroll-mt-24">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-display text-3xl sm:text-4xl text-paper">{title}</h2>
      <div className="flex-1 h-px bg-inkline ml-2 hidden sm:block" />
    </div>
  )
}
