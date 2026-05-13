import { Link } from 'react-router-dom'
import { MODULES, totalLessons, builtLessons } from '../data/curriculum'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-5 lg:px-8 py-12">
      {/* Hero */}
      <section className="mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-praxis-2)] mb-4">
          ✦ Praxis · Practical AI, learned by doing
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] mb-5 leading-[1.05]">
          AI for the way you<br />
          <span className="bg-gradient-to-r from-[var(--color-praxis)] via-[var(--color-praxis-2)] to-[var(--color-praxis-3)] bg-clip-text text-transparent italic">actually work.</span>
        </h1>
        <p className="text-lg text-[var(--color-text-dim)] max-w-2xl leading-relaxed">
          A hands-on AI literacy program for working professionals. Demystifies the technology,
          teaches you to prompt properly, deep-dives Microsoft Copilot, and rebuilds your daily
          workflow around AI. Every lesson has experiments you run yourself — because nothing
          beats personal experience.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-xs">
          <div className="px-3 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
            <span className="text-[var(--color-text-mute)]">Modules:</span>{' '}
            <span className="text-[var(--color-text)] font-semibold">{MODULES.length}</span>
          </div>
          <div className="px-3 py-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]">
            <span className="text-[var(--color-text-mute)]">Lessons:</span>{' '}
            <span className="text-[var(--color-text)] font-semibold">{totalLessons()}</span>
          </div>
          <div className="px-3 py-2 rounded-lg bg-[var(--color-praxis)]/10 border border-[var(--color-praxis)]/30">
            <span className="text-[var(--color-text-mute)]">Built so far:</span>{' '}
            <span className="text-[var(--color-praxis-2)] font-semibold">{builtLessons()}</span>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-5 text-sm text-[var(--color-text-dim)] leading-relaxed">
          <p className="text-[var(--color-text)] font-semibold mb-2">How to use Praxis</p>
          <p className="mb-2">
            Each lesson has three tiers — <span className="text-[var(--color-beginner)] font-semibold">Beginner</span>,{' '}
            <span className="text-[var(--color-intermediate)] font-semibold">Intermediate</span>,{' '}
            <span className="text-[var(--color-advanced)] font-semibold">Advanced</span>. Pick your level
            in the top nav. The intermediate and advanced sections appear as collapsible "Level up"
            cards so you can choose to dig deeper at any point.
          </p>
          <p>
            Every lesson includes <span className="text-[var(--color-tryit)] font-semibold">🧪 Try it</span>{' '}
            prompts you can paste into Copilot M365, Claude.ai, or ChatGPT free tier. The point is to{' '}
            <em className="text-[var(--color-text)] not-italic font-semibold">feel the difference yourself</em>{' '}— not just read about it.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-dim)] mb-6">The curriculum</h2>
        <div className="space-y-3">
          {MODULES.map(m => {
            const isBuilt = m.status === 'built'
            const lessonsBuilt = m.lessons.filter(l => l.status === 'built').length
            const card = (
              <div
                className={`group rounded-xl border p-5 transition-all ${
                  isBuilt
                    ? 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-praxis)]/50 hover:bg-[var(--color-surface-2)] cursor-pointer'
                    : 'bg-[var(--color-surface)]/40 border-dashed border-[var(--color-border)]'
                }`}
                style={{ borderLeftWidth: 4, borderLeftColor: m.accent }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold mt-0.5"
                    style={{ background: `${m.accent}22`, color: m.accent }}
                  >
                    {m.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap mb-1">
                      <h3 className={`text-lg font-semibold tracking-tight ${isBuilt ? 'text-[var(--color-text)]' : 'text-[var(--color-text-dim)]'}`}>
                        {m.title}
                      </h3>
                      {isBuilt ? (
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded text-[var(--color-beginner)] bg-[var(--color-beginner)]/15">
                          Live
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded text-[var(--color-text-mute)] bg-[var(--color-surface-2)]">
                          Coming soon
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--color-text-dim)] mb-2 italic">{m.tagline}</p>
                    <p className="text-sm text-[var(--color-text-dim)] leading-relaxed">{m.summary}</p>
                    <p className="text-xs text-[var(--color-text-mute)] mt-3 font-mono">
                      {m.lessons.length} lessons{isBuilt ? ` · ${lessonsBuilt} ready` : ''}
                    </p>
                  </div>
                </div>
              </div>
            )
            return isBuilt ? <Link key={m.id} to={`/${m.id}`}>{card}</Link> : <div key={m.id}>{card}</div>
          })}
        </div>
      </section>
    </div>
  )
}
