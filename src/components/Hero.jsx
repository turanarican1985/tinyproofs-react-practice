export default function Hero() {
  return (
    <section id="top" className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="mb-4 inline-flex rounded-full border border-violet-300/30 bg-violet-400/10 px-3 py-1 text-sm font-medium text-violet-200">
          React learning repo · Lesson 01
        </p>

        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build tiny product pieces with components.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          This page is intentionally small. The goal is to learn how React splits UI into components and how data enters those components through props.
        </p>
      </div>

      <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <p className="font-semibold text-white">Component</p>
          <p className="mt-1">A reusable UI function.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <p className="font-semibold text-white">Props</p>
          <p className="mt-1">Data passed into a component.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
          <p className="font-semibold text-white">JSX</p>
          <p className="mt-1">HTML-like syntax inside JS.</p>
        </div>
      </div>
    </section>
  )
}
