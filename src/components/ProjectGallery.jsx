import CompactProjectCard from "./CompactProjectCard.jsx";

export default function ProjectGallery({ projects, onDeleteProject }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-sky-200 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-bold text-slate-950">No projects found.</p>
        <p className="mt-2 text-sm text-slate-500">
          Try another search or status filter.
        </p>
      </div>
    );
  }
  return (
    <div className="grid gap-4 md:grid-cols-3">
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
  );
}
