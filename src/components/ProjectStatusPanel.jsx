export default function ProjectStatusPanel({ project }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
            {project.status}
          </p>
          <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
            {project.title}
          </h3>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-800">
          {project.proofScore}/100
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
        {project.status === "Featured" ? (
          <p>Featured project is ready to highlight.</p>
        ) : project.status === "Draft" ? (
          <p>Draft project still needs polish.</p>
        ) : (
          <p>Practice project is here for learning.</p>
        )}
      </div>

      <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
        {project.proofScore >= 75 && <p>Strong proof score.</p>}
      </div>
    </article>
  );
}
