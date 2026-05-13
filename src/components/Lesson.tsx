/**
 * Lesson primitives — used inside every lesson's body content.
 *
 * Three "tier" sections (Beginner / Intermediate / Advanced) appear
 * progressively. The Beginner tier is always open and unlabelled.
 * Intermediate and Advanced sit underneath as "Level up" cards that
 * auto-expand when (a) the user has set their level to ≥ that tier,
 * or (b) the global "Show all" toggle is on.
 */
import { useTier } from '../hooks/useTier'
import type { Tier } from '../hooks/useTier'

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-relaxed text-[var(--color-text-dim)] my-3">{children}</p>
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-[var(--color-text)] mt-10 mb-3 tracking-tight">{children}</h2>
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-[var(--color-text)] mt-6 mb-2">{children}</h3>
}

export function Em({ children }: { children: React.ReactNode }) {
  return <span className="text-[var(--color-text)] font-semibold">{children}</span>
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-outside ml-5 space-y-1.5 my-3 text-[15px] text-[var(--color-text-dim)] leading-relaxed">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  )
}

export function OL({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="list-decimal list-outside ml-5 space-y-1.5 my-3 text-[15px] text-[var(--color-text-dim)] leading-relaxed">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ol>
  )
}

const TIER_META: Record<Tier, { label: string; color: string; emoji: string; cssVar: string }> = {
  beginner:     { label: 'Beginner',     color: 'beginner',     emoji: '🌱', cssVar: '--color-beginner' },
  intermediate: { label: 'Intermediate', color: 'intermediate', emoji: '⚡', cssVar: '--color-intermediate' },
  advanced:     { label: 'Advanced',     color: 'advanced',     emoji: '🚀', cssVar: '--color-advanced' },
}

export function BeginnerSection({ children }: { children: React.ReactNode }) {
  const { isOpen } = useTier()
  if (!isOpen('beginner')) return null
  return <div className="prose-block">{children}</div>
}

export function LevelUp({ tier, children }: { tier: 'intermediate' | 'advanced'; children: React.ReactNode }) {
  const { isOpen } = useTier()
  const meta = TIER_META[tier]
  const open = isOpen(tier)
  return (
    <details
      open={open}
      className="group my-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 overflow-hidden"
      style={{ borderLeftWidth: 4, borderLeftColor: `var(${meta.cssVar})` }}
    >
      <summary className="flex items-center justify-between gap-3 p-4 hover:bg-[var(--color-surface-2)] transition-colors">
        <span className="flex items-center gap-2">
          <span className="text-base">{meta.emoji}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: `var(${meta.cssVar})` }}>
            Level up · {meta.label}
          </span>
        </span>
        <span className="text-[var(--color-text-mute)] text-xs group-open:rotate-180 transition-transform">▾</span>
      </summary>
      <div className="px-5 pb-5 pt-1">{children}</div>
    </details>
  )
}

export function TryIt({ title = 'Try it', children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-[var(--color-tryit)]/30 bg-gradient-to-br from-[var(--color-tryit)]/8 via-[var(--color-tryit)]/4 to-transparent p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--color-tryit)] mb-2 flex items-center gap-1.5">
        🧪 {title}
      </p>
      <div className="text-[15px] text-[var(--color-text)] leading-relaxed">{children}</div>
    </div>
  )
}

export function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border-2)] p-3.5 text-[14px] font-mono text-[var(--color-text)] leading-relaxed whitespace-pre-wrap">
      {children}
    </div>
  )
}

export function CostNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-[var(--color-intermediate)]/30 bg-[var(--color-intermediate)]/5 p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-intermediate)] mb-2 flex items-center gap-1.5">
        💰 Cost &amp; tokens
      </p>
      <div className="text-[14px] text-[var(--color-text-dim)] leading-relaxed">{children}</div>
    </div>
  )
}

export interface DeeperItem {
  kind: 'book' | 'video' | 'podcast' | 'article' | 'paper'
  title: string
  by?: string
  url?: string
  note?: string
}

const KIND_META = {
  book:    { emoji: '📚', label: 'Book' },
  video:   { emoji: '🎥', label: 'Video' },
  podcast: { emoji: '🎧', label: 'Podcast' },
  article: { emoji: '📰', label: 'Article' },
  paper:   { emoji: '📄', label: 'Paper' },
}

export function DeeperDive({ items }: { items: DeeperItem[] }) {
  return (
    <div className="my-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-praxis-2)] mb-3 flex items-center gap-1.5">
        🌊 Deeper dive
      </p>
      <ul className="space-y-2">
        {items.map((it, i) => {
          const meta = KIND_META[it.kind]
          const body = (
            <>
              <span className="text-base mt-0.5 leading-none">{meta.emoji}</span>
              <span className="flex-1 min-w-0">
                <span className="text-[14px] text-[var(--color-text)] font-medium">{it.title}</span>
                {it.by && <span className="text-[13px] text-[var(--color-text-mute)] ml-1.5">· {it.by}</span>}
                {it.note && <span className="block text-[13px] text-[var(--color-text-dim)] mt-0.5">{it.note}</span>}
              </span>
            </>
          )
          return (
            <li key={i}>
              {it.url ? (
                <a href={it.url} target="_blank" rel="noopener" className="flex items-start gap-2.5 -mx-2 px-2 py-1.5 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors">
                  {body}
                </a>
              ) : (
                <div className="flex items-start gap-2.5 px-2 py-1.5">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function KeyCallout({ title = 'Key takeaway', children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-[var(--color-praxis)]/35 bg-[var(--color-praxis)]/8 p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-praxis-2)] mb-2">
        ⭐ {title}
      </p>
      <div className="text-[15px] text-[var(--color-text)] leading-relaxed font-medium">{children}</div>
    </div>
  )
}

export function Aside({ title = 'Aside', children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-dim)] mb-2">
        {title}
      </p>
      <div className="text-[14px] text-[var(--color-text-dim)] leading-relaxed">{children}</div>
    </div>
  )
}

/**
 * PrintButton — triggers the browser's print dialog, which on every
 * modern browser includes a "Save as PDF" destination. Paired with the
 * @media print rules in index.css to produce a clean printable guide.
 * Marked .no-print so it does not appear on the printed page itself.
 */
export function PrintButton({ label = 'Print / Save as PDF' }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print my-4 inline-flex items-center gap-2 rounded-lg border border-[var(--color-praxis)]/50 bg-[var(--color-praxis)]/10 px-4 py-2 text-[13px] font-semibold text-[color:var(--color-praxis)] hover:bg-[var(--color-praxis)]/20 transition-colors"
    >
      <span>🖨️</span>
      <span>{label}</span>
    </button>
  )
}
