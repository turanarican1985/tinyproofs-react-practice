import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import { projects } from './data/projects.js'
import { profiles } from './data/profiles.js'

export default function App() {
  const featuredProject = projects[0]
  const featuredProfile = profiles[0]

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
              description="This card is ready visually. Your task is to understand how the data moves into it with props."
            />

            <div className="mt-5">
              {/*
                TODO 01:
                ProjectCard currently receives one project object from data/projects.js.
                Open ProjectCard.jsx and trace where each value is rendered.
              */}
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
              {/*
                TODO 02:
                ProfileCard receives one profile object from data/profiles.js.
                Later you will render multiple ProfileCard components with .map().
              */}
              <ProfileCard profile={featuredProfile} />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-violet-400/40 bg-violet-400/10 p-5 sm:p-6">
          <SectionTitle
            eyebrow="Your turn"
            title="First React exercise"
            description="Do not touch Tailwind yet. Focus on JSX, components, imports, exports, props, and reading data from objects."
          />

          <div className="mt-5 grid gap-3 text-sm text-violet-50 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">1. Trace imports</p>
              <p className="mt-2 text-violet-100/75">Find where Header, Hero, ProjectCard, ProfileCard, and SectionTitle come from.</p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">2. Read props</p>
              <p className="mt-2 text-violet-100/75">Open ProjectCard.jsx and ProfileCard.jsx. Match every rendered field to the data files.</p>
            </div>
            <div className="rounded-2xl bg-slate-950/60 p-4">
              <p className="font-semibold">3. Make one safe edit</p>
              <p className="mt-2 text-violet-100/75">Change one value in data/projects.js, run the app, then commit and push.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
