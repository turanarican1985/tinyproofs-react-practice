export default function CompactProjectCard({
  title = "Pass a title prop",
  category = "Pass a category prop",
  proofScore = 0,
  ctaLabel = "Pass a CTA label prop",
  onDelete,
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 transition hover:-translate-y-0.5 hover:border-emerald-300">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
          {category}
        </span>
        <span className="text-sm font-bold text-slate-950">{proofScore}/100</span>
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
        {title}
      </h3>

      <button className="mt-6 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700">
        {ctaLabel}
      </button>
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="mt-3 w-full rounded-2xl border border-red-200 px-4 py-3 text-sm font-bold text-red-700 transition hover:bg-red-50"
        >
          Delete project
        </button>
      )}
    </article>
  );
}
