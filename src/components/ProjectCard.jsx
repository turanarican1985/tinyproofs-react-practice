export default function ProjectCard({ project }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-0.5 hover:border-violet-300/40 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-violet-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
          {project.status}
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {/*
          TODO 03:
          In a later lesson, you will replace these repeated spans with project.tags.map(...).
          For now, notice that we can still read array values manually.
        */}
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{project.tags[0]}</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{project.tags[1]}</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{project.tags[2]}</span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
        <span className="text-slate-400">Proof score</span>
        <span className="font-bold text-violet-200">{project.proofScore}/100</span>
      </div>
    </article>
  )
}
