import ProjectGallery from "./ProjectGallery.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function ProjectSection({
  statuses,
  selectedStatus,
  setSelectedStatus,
  searchQuery,
  setSearchQuery,
  newProjectTitle,
  setNewProjectTitle,
  newProjectDescription,
  setNewProjectDescription,
  handleAddProject,
  filteredProjects,
  handleDeleteProject,
}) {
  return (
    <section className="rounded-3xl border border-sky-300/20 bg-sky-300/10 p-5 sm:p-6">
      <SectionTitle
        eyebrow="Lesson 03"
        title="List rendering with map"
        description="ProjectGallery uses projects.map(...) to render every project from the array."
      />
      <div className="mt-5 flex flex-wrap gap-2">
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search projects..."
          className="mt-5 w-full rounded-2xl border border-sky-300/30 bg-slate-950/60 px-4 py-3 text-sm text-sky-50 outline-none placeholder:text-sky-100/40"
        />
        <form
          onSubmit={handleAddProject}
          className="mt-5 grid gap-3 rounded-3xl border border-sky-300/20 bg-slate-950/40 p-4 md:grid-cols-[1fr_1fr_auto]"
        >
          <input
            value={newProjectTitle}
            onChange={(event) => setNewProjectTitle(event.target.value)}
            placeholder="New project title"
            className="rounded-2xl border border-sky-300/30 bg-slate-950/60 px-4 py-3 text-sm text-sky-50 outline-none placeholder:text-sky-100/40"
          />

          <input
            value={newProjectDescription}
            onChange={(event) => setNewProjectDescription(event.target.value)}
            placeholder="New project description"
            className="rounded-2xl border border-sky-300/30 bg-slate-950/60 px-4 py-3 text-sm text-sky-50 outline-none placeholder:text-sky-100/40"
          />

          <button
            type="submit"
            className="rounded-2xl bg-sky-200 px-5 py-3 text-sm font-bold text-slate-950"
          >
            Add project
          </button>
        </form>
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={
              selectedStatus === status
                ? "rounded-full border border-sky-200 bg-sky-200 px-4 py-2 text-sm font-semibold text-slate-950"
                : "rounded-full border border-sky-300/30 px-4 py-2 text-sm font-semibold text-sky-100"
            }
          >
            {status}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <ProjectGallery
          projects={filteredProjects}
          onDeleteProject={handleDeleteProject}
        />
      </div>
    </section>
  );
}
