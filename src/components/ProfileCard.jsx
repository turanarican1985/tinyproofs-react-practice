export default function ProfileCard({ profile }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-black text-white">
          {profile.initials}
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-950">{profile.name}</h3>
          <p className="text-sm text-slate-500">@{profile.username}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">{profile.bio}</p>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Focus</p>
        <p className="mt-2 font-medium text-slate-800">{profile.focus}</p>
      </div>
    </article>
  )
}
