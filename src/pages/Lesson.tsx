import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { getModule, getLesson } from '../data/curriculum'
import { LESSON_RENDERERS } from '../modules'
import { useProgress } from '../hooks/useProgress'

export default function LessonPage() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>()
  const navigate = useNavigate()
  const { isComplete, toggle, mark } = useProgress()
  const m = moduleId ? getModule(moduleId) : undefined
  const l = moduleId && lessonId ? getLesson(moduleId, lessonId) : undefined

  if (!m || !l) return <Navigate to="/" replace />

  const renderer = LESSON_RENDERERS[`${moduleId}/${lessonId}`]
  const idx = m.lessons.findIndex(x => x.id === l.id)
  const prev = idx > 0 ? m.lessons[idx - 1] : null
  const next = idx < m.lessons.length - 1 ? m.lessons[idx + 1] : null
  const lessonKey = `${moduleId}/${lessonId}`
  const done = isComplete(lessonKey)

  return (
    <div className="max-w-3xl mx-auto px-5 lg:px-8 py-10">
      <Link to={`/${m.id}`} className="text-xs text-[var(--color-text-mute)] hover:text-[var(--color-praxis)] inline-flex items-center gap-1 mb-4">
        ← {m.title}
      </Link>

      <div className="flex items-center gap-2 mb-2 text-xs text-[var(--color-text-mute)]">
        <span style={{ color: m.accent }} className="font-bold uppercase tracking-[0.14em]">Lesson {l.number}</span>
        <span>·</span>
        <span className="font-mono">{l.readingTime}</span>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-3 leading-tight">{l.title}</h1>
      <p className="text-[16px] text-[var(--color-text-dim)] italic mb-8">{l.summary}</p>

      <article className="text-[15px] text-[var(--color-text-dim)]">
        {renderer ? renderer() : <p className="italic">Lesson content is being prepared.</p>}
      </article>

      {/* Mark-as-read */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => toggle(lessonKey)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${
            done
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20'
              : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-dim)] hover:border-[var(--color-praxis)] hover:text-[var(--color-text)]'
          }`}
          aria-pressed={done}
        >
          <span>{done ? '✓' : '○'}</span>
          <span>{done ? 'Marked as read' : 'Mark as read'}</span>
        </button>
      </div>

      {/* Nav */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[var(--color-border)]">
        {prev ? (
          <button
            onClick={() => navigate(`/${m.id}/${prev.id}`)}
            className="text-xs text-[var(--color-text-mute)] hover:text-[var(--color-praxis)] text-left max-w-[45%]"
          >
            <div className="uppercase tracking-[0.14em] font-bold mb-0.5">← Previous</div>
            <div className="text-[var(--color-text-dim)] text-sm">{prev.title}</div>
          </button>
        ) : <span />}
        {next ? (
          <button
            onClick={() => {
              // Auto-mark current lesson on Next, since you've reached the end of it
              mark(lessonKey)
              navigate(`/${m.id}/${next.id}`)
            }}
            className="text-xs text-[var(--color-text)] hover:text-[var(--color-praxis)] text-right ml-auto max-w-[45%]"
          >
            <div className="uppercase tracking-[0.14em] font-bold mb-0.5" style={{ color: m.accent }}>Next →</div>
            <div className="text-[var(--color-text-dim)] text-sm">{next.title}</div>
          </button>
        ) : (
          <button
            onClick={() => {
              mark(lessonKey)
              navigate(`/${m.id}`)
            }}
            className="text-xs uppercase tracking-[0.14em] font-bold text-[var(--color-praxis)] hover:underline ml-auto"
          >
            Module complete ↻
          </button>
        )}
      </div>
    </div>
  )
}
