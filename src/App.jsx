import { useState } from "react";

import CompactProjectCard from "./components/CompactProjectCard.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectStatusPanel from "./components/ProjectStatusPanel.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import { projects } from "./data/projects.js";
import { profiles } from "./data/profiles.js";

export default function App() {
  const featuredProject = projects[0];
  const secondProject = projects[1];
  const featuredProfile = profiles[0];

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [projectItems, setProjectItems] = useState(projects);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");

  function handleAddProject(event) {
    event.preventDefault();

    const trimmedTitle = newProjectTitle.trim();
    const trimmedDescription = newProjectDescription.trim();

    if (trimmedTitle === "" || trimmedDescription === "") {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: trimmedTitle,
      description: trimmedDescription,
      category: "User Added",
      status: "Practice",
      proofScore: 50,
      tags: ["Form", "State", "Practice"],
    };

    setProjectItems((currentProjects) => [...currentProjects, newProject]);
    setNewProjectTitle("");
    setNewProjectDescription("");
    setSelectedStatus("All");
  }

  function handleDeleteProject(projectId) {
    setProjectItems((currentProjects) =>
      currentProjects.filter((project) => project.id !== projectId),
    );
  }

  const normalizedSearch = searchQuery.trim().toLowerCase();
  function projectMatchesSearch(project) {
    if (normalizedSearch === "") {
      return true;
    }

    return (
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch)
    );
  }
  const filteredProjects = projectItems.filter((project) => {
    const matchesStatus =
      selectedStatus === "All" || project.status === selectedStatus;

    return matchesStatus && projectMatchesSearch(project);
  });

  const statuses = ["All", "Featured", "Draft", "Practice"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-8 sm:px-8 lg:px-10">
        <Hero />

        <section className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6">
            <SectionTitle
              eyebrow="Lesson 01"
              title="Featured project"
              description="This card receives one full project object as a prop."
            />

            <div className="mt-5">
              <ProjectCard project={featuredProject} />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6">
            <SectionTitle
              eyebrow="Profile"
              title="Featured builder"
              description="Same idea, different component. Props let us reuse UI with different data."
            />

            <div className="mt-5">
              <ProfileCard profile={featuredProfile} />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Lesson 02"
            title="Props practice"
            description="This time the component does not receive one project object. It receives separate props like title, category, proofScore, and ctaLabel."
          />

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CompactProjectCard
              title={featuredProject.title}
              category={featuredProject.category}
              proofScore={featuredProject.proofScore}
              ctaLabel="View featured project"
            />

            <CompactProjectCard
              title={secondProject.title}
              category={secondProject.category}
              proofScore={secondProject.proofScore}
              ctaLabel="View profile card project"
            />
          </div>
        </section>
        <ProjectSection
          statuses={statuses}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          newProjectTitle={newProjectTitle}
          setNewProjectTitle={setNewProjectTitle}
          newProjectDescription={newProjectDescription}
          setNewProjectDescription={setNewProjectDescription}
          handleAddProject={handleAddProject}
          filteredProjects={filteredProjects}
          handleDeleteProject={handleDeleteProject}
        />
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Lesson 04"
            title="Conditional rendering"
            description="ProjectStatusPanel has placeholder messages. Your task is to show different UI depending on project.status and project.proofScore."
          />

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {projectItems.map((project) => (
              <ProjectStatusPanel key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-violet-200 bg-violet-50 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Your turn"
            title="Fourth React exercise"
            description="Your task is to replace placeholder text with conditional rendering inside ProjectStatusPanel.jsx."
          />

          <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-950">
                1. Status condition
              </p>
              <p className="mt-2 text-slate-600">
                Show one message for Featured, one for Draft, and one fallback
                message for everything else.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-950">2. Score condition</p>
              <p className="mt-2 text-slate-600">
                Show the strong-score message only when proofScore is at least
                75.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-950">
                3. Keep scope small
              </p>
              <p className="mt-2 text-slate-600">
                Only edit src/components/ProjectStatusPanel.jsx for this
                exercise.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
