export default function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-violet-400 font-black text-slate-950">tp</span>
          <span className="text-sm font-semibold tracking-wide text-white">tinyproofs practice</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a className="transition hover:text-white" href="#projects">Projects</a>
          <a className="transition hover:text-white" href="#profiles">Profiles</a>
          <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-violet-300 hover:text-white" href="#exercise">
            Lesson 01
          </a>
        </nav>
      </div>
    </header>
  )
}
