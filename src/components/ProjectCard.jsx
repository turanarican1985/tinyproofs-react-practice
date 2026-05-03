export default function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 transition hover:-translate-y-0.5 hover:border-violet-300 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {project.status}
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{project.tags[0]}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{project.tags[1]}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{project.tags[2]}</span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
        <span className="text-slate-500">Proof score</span>
        <span className="font-bold text-violet-700">{project.proofScore}/100</span>
      </div>
    </article>
  )
}
