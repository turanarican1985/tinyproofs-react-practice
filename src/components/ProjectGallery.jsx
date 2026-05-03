import CompactProjectCard from "./CompactProjectCard.jsx";

export default function ProjectGallery({ projects }) {
  return (
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
      <CompactProjectCard
        title={projects[0].title}
        category={projects[0].category}
        proofScore={projects[0].proofScore}
        ctaLabel={`Open ${projects[0].title}`}
      />
      <CompactProjectCard
        title={projects[1].title}
        category={projects[1].category}
        proofScore={projects[1].proofScore}
        ctaLabel={`Open ${projects[1].title}`}
      />
      <CompactProjectCard
        title={projects[2].title}
        category={projects[2].category}
        proofScore={projects[2].proofScore}
        ctaLabel={`Open ${projects[2].title}`}
      />
    </div>
  );
}
