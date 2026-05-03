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
    <section className="rounded-3xl border border-sky-200 bg-sky-50 p-5 sm:p-6">
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
          className="mt-5 w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-sky-400"
        />
        <form
          onSubmit={handleAddProject}
          className="mt-5 grid gap-3 rounded-3xl border border-sky-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_1fr_auto]"
        >
          <input
            value={newProjectTitle}
            onChange={(event) => setNewProjectTitle(event.target.value)}
            placeholder="New project title"
            className="rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-sky-400"
          />

          <input
            value={newProjectDescription}
            onChange={(event) => setNewProjectDescription(event.target.value)}
            placeholder="New project description"
            className="rounded-2xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-sky-400"
          />

          <button
            type="submit"
            className="rounded-2xl bg-sky-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
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
                ? "rounded-full border border-sky-600 bg-sky-600 px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-400"
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
