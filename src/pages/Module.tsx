import { useParams, Link, Navigate } from 'react-router-dom'
import { getModule } from '../data/curriculum'

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const m = moduleId ? getModule(moduleId) : undefined

  if (!m) return <Navigate to="/" replace />

  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-10">
      <Link to="/" className="text-xs text-[var(--color-text-mute)] hover:text-[var(--color-praxis)] inline-flex items-center gap-1 mb-4">
        ← All modules
      </Link>

      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
          style={{ background: `${m.accent}22`, color: m.accent }}
        >
          {m.number}
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: m.accent }}>
          Module {m.number}
        </p>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-2 leading-tight">{m.title}</h1>
      <p className="text-lg text-[var(--color-text-dim)] italic mb-5">{m.tagline}</p>
      <p className="text-[15px] text-[var(--color-text-dim)] leading-relaxed mb-10">{m.summary}</p>

      <div className="space-y-2">
        {m.lessons.map(l => {
          const isBuilt = l.status === 'built'
          const card = (
            <div className={`group rounded-xl border p-4 transition-all flex items-start gap-4 ${
              isBuilt
                ? 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-praxis)]/40 hover:bg-[var(--color-surface-2)]'
                : 'bg-[var(--color-surface)]/40 border-dashed border-[var(--color-border)]'
            }`}>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  isBuilt ? 'text-[var(--color-text)] bg-[var(--color-surface-3)]' : 'text-[var(--color-text-mute)] bg-[var(--color-surface-2)]'
                }`}
              >
                {l.number}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-base font-semibold leading-snug ${isBuilt ? 'text-[var(--color-text)]' : 'text-[var(--color-text-dim)]'}`}>
                  {l.title}
                </h3>
                <p className="text-sm text-[var(--color-text-dim)] leading-relaxed mt-1">{l.summary}</p>
                <p className="text-[11px] font-mono text-[var(--color-text-mute)] mt-2">{l.readingTime}{!isBuilt ? ' · coming soon' : ''}</p>
              </div>
            </div>
          )
          return isBuilt
            ? <Link key={l.id} to={`/${m.id}/${l.id}`}>{card}</Link>
            : <div key={l.id}>{card}</div>
        })}
      </div>
    </div>
  )
}
