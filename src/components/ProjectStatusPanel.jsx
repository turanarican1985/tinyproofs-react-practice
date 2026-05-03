export default function ProjectStatusPanel({ project }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-black/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
            {project.status}
          </p>
          <h3 className="mt-3 text-xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
        </div>

        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white">
          {project.proofScore}/100
        </span>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
        {/*
          TODO 01:
          Replace this placeholder with conditional rendering.

          Requirements:
          - If project.status === "Featured", show:
            "Featured project is ready to highlight."
          - If project.status === "Draft", show:
            "Draft project still needs polish."
          - If project.status is anything else, show:
            "Practice project is here for learning."

          You can use && blocks or a ternary expression.
        */}
        {project.status === "Featured" ? (
          <p>Featured project is ready to highlight.</p>
        ) : project.status === "Draft" ? (
          <p>Draft project still needs polish.</p>
        ) : (
          <p>Practice project is here for learning.</p>
        )}
        <p>Replace this placeholder with a status-specific message.</p>
      </div>

      <div className="mt-4 rounded-2xl bg-white/[0.04] p-4 text-sm text-slate-300">
        {/*
          TODO 02:
          Add one more conditional message:
          If project.proofScore >= 75, show:
          "Strong proof score."

          If the score is below 75, show nothing here.
        */}
        {project.proofScore >= 75 && <p>Strong proof score.</p>}
        <p>Only show a strong-score message when proofScore is high enough.</p>
      </div>
    </article>
  );
}
