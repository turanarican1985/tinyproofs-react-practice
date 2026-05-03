import CompactProjectCard from "./CompactProjectCard.jsx";

export default function ProjectGallery({ projects, onDeleteProject }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-sky-300/30 bg-slate-950/40 p-8 text-center">
        <p className="text-lg font-bold text-white">No projects found.</p>
        <p className="mt-2 text-sm text-sky-100/70">
          Try another search or status filter.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {/*
        TODO 01:
        This works, but it is not scalable.
        Replace these three repeated CompactProjectCard calls with projects.map(...).
        
        Requirements:
        - Use projects.map((project) => (...))
        - Add key={project.id}
        - Pass title, category, proofScore, and ctaLabel props
        - Keep ctaLabel as: `Open ${project.title}`
        */}
        {projects.map((project) => (
          <CompactProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            proofScore={project.proofScore}
            ctaLabel={`Open ${project.title}`}
            onDelete={() => onDeleteProject(project.id)}
          />
        ))}
      </div>
    </>
  );
}
