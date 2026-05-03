import { useState } from "react";

import CompactProjectCard from "./components/CompactProjectCard.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectGallery from "./components/ProjectGallery.jsx";
import ProjectStatusPanel from "./components/ProjectStatusPanel.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import { projects } from "./data/projects.js";
import { profiles } from "./data/profiles.js";

export default function App() {
  const featuredProject = projects[0];
  const secondProject = projects[1];
  const featuredProfile = profiles[0];

  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredProjects =
    selectedStatus === "All"
      ? projects
      : projects.filter((project) => project.status === selectedStatus);

  const statuses = ["All", "Featured", "Draft", "Practice"];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-8 sm:px-8 lg:px-10">
        <Hero />

        <section className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20 sm:p-6">
            <SectionTitle
              eyebrow="Lesson 01"
              title="Featured project"
              description="This card receives one full project object as a prop."
            />

            <div className="mt-5">
              <ProjectCard project={featuredProject} />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20 sm:p-6">
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

        <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5 sm:p-6">
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

        <section className="rounded-3xl border border-sky-300/20 bg-sky-300/10 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Lesson 03"
            title="List rendering with map"
            description="ProjectGallery uses projects.map(...) to render every project from the array."
          />
          <div className="mt-5 flex flex-wrap gap-2">
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
            <ProjectGallery projects={filteredProjects} />
          </div>
        </section>

        <section className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Lesson 04"
            title="Conditional rendering"
            description="ProjectStatusPanel has placeholder messages. Your task is to show different UI depending on project.status and project.proofScore."
          />

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectStatusPanel key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-violet-400/40 bg-violet-400/10 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Your turn"
            title="Fourth React exercise"
            description="Your task is to replace placeholder text with conditional rendering inside ProjectStatusPanel.jsx."
          />

          <div className="mt-5 grid gap-3 text-sm text-violet-50 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">1. Status condition</p>
              <p className="mt-2 text-violet-100/75">
                Show one message for Featured, one for Draft, and one fallback
                message for everything else.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">2. Score condition</p>
              <p className="mt-2 text-violet-100/75">
                Show the strong-score message only when proofScore is at least
                75.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">3. Keep scope small</p>
              <p className="mt-2 text-violet-100/75">
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
