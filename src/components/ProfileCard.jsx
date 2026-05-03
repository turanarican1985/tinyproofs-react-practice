export default function ProfileCard({ profile }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 sm:p-6">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-300 to-fuchsia-300 text-xl font-black text-slate-950">
          {profile.initials}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">{profile.name}</h3>
          <p className="text-sm text-slate-400">@{profile.username}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{profile.bio}</p>

      <div className="mt-5 rounded-2xl bg-white/[0.04] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Focus</p>
        <p className="mt-2 font-medium text-slate-100">{profile.focus}</p>
      </div>
    </article>
  )
}
