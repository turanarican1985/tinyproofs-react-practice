export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{description}</p>
    </div>
  )
}
