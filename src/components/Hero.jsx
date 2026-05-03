export default function Hero() {
  return (
    <section id="top" className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
          React learning repo
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Build tiny product pieces with components.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          This page is intentionally small. The goal is to learn how React splits UI into components and how data enters those components through props.
        </p>
      </div>

      <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="font-semibold text-slate-950">Component</p>
          <p className="mt-1">A reusable UI function.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="font-semibold text-slate-950">Props</p>
          <p className="mt-1">Data passed into a component.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="font-semibold text-slate-950">JSX</p>
          <p className="mt-1">Markup inside JavaScript.</p>
        </div>
      </div>
    </section>
  )
}
