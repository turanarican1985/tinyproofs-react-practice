export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-violet-600 font-black text-white">tp</span>
          <span className="text-sm font-semibold tracking-wide text-slate-950">tinyproofs practice</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
          <a className="transition hover:text-slate-950" href="#projects">Projects</a>
          <a className="transition hover:text-slate-950" href="#profiles">Profiles</a>
          <a className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-violet-300 hover:text-slate-950" href="#exercise">
            Lesson 01
          </a>
        </nav>
      </div>
    </header>
  )
}
