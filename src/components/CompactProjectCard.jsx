export default function CompactProjectCard({
  title = 'Pass a title prop',
  category = 'Pass a category prop',
  proofScore = 0,
  ctaLabel = 'Pass a CTA label prop',
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:border-emerald-300/40">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-200">
          {category}
        </span>
        <span className="text-sm font-bold text-white">{proofScore}/100</span>
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-white">{title}</h3>

      <button className="mt-6 w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-200">
        {ctaLabel}
      </button>
    </article>
  )
}
