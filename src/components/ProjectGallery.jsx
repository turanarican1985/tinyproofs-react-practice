import CompactProjectCard from "./CompactProjectCard.jsx";

export default function ProjectGallery({ projects, onDeleteProject }) {
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
