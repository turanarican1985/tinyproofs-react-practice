import CompactProjectCard from "./components/CompactProjectCard.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectGallery from "./components/ProjectGallery.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import { projects } from "./data/projects.js";
import { profiles } from "./data/profiles.js";

export default function App() {
  const featuredProject = projects[0];
  const secondProject = projects[1];
  const featuredProfile = profiles[0];

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
            description="ProjectGallery currently repeats the same component three times. Your task is to replace the repetition with projects.map(...)."
          />

          <div className="mt-5">
            <ProjectGallery projects={projects} />
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-violet-400/40 bg-violet-400/10 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Your turn"
            title="Third React exercise"
            description="Your task is to replace repeated JSX with array rendering using .map() and a key prop."
          />

          <div className="mt-5 grid gap-3 text-sm text-violet-50 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">1. Find repetition</p>
              <p className="mt-2 text-violet-100/75">
                Open ProjectGallery.jsx and notice the three repeated
                CompactProjectCard calls.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">2. Use map</p>
              <p className="mt-2 text-violet-100/75">
                Replace repetition with projects.map((project) =&gt; ...).
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">3. Add key</p>
              <p className="mt-2 text-violet-100/75">
                Each rendered card needs key=&#123;project.id&#125; so React can track
                list items.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
