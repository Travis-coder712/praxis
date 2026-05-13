import { Outlet, Link, NavLink } from 'react-router-dom'
import { useTier } from '../hooks/useTier'

export default function Layout() {
  const { showAll, setShowAll, currentTier, setCurrentTier } = useTier()

  return (
    <div className="min-h-dvh">
      {/* Sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--color-bg)]/75 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 py-3 flex items-center justify-between gap-4 flex-wrap">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-[var(--color-praxis)] text-xl group-hover:rotate-180 transition-transform duration-700">✦</span>
            <span className="font-bold tracking-tight text-[var(--color-text)] text-lg">Praxis</span>
            <span className="text-[10px] text-[var(--color-text-mute)] uppercase tracking-wider ml-1 hidden sm:inline">Practical AI</span>
          </Link>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[var(--color-text-mute)] hidden sm:inline mr-1">Level:</span>
            <button
              onClick={() => { setCurrentTier('beginner'); setShowAll(false) }}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                currentTier === 'beginner' && !showAll
                  ? 'bg-[var(--color-beginner)]/20 text-[var(--color-beginner)] ring-1 ring-[var(--color-beginner)]/40'
                  : 'text-[var(--color-text-mute)] hover:text-[var(--color-text)]'
              }`}
            >Beginner</button>
            <button
              onClick={() => { setCurrentTier('intermediate'); setShowAll(false) }}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                currentTier === 'intermediate' && !showAll
                  ? 'bg-[var(--color-intermediate)]/20 text-[var(--color-intermediate)] ring-1 ring-[var(--color-intermediate)]/40'
                  : 'text-[var(--color-text-mute)] hover:text-[var(--color-text)]'
              }`}
            >Intermediate</button>
            <button
              onClick={() => { setCurrentTier('advanced'); setShowAll(false) }}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                currentTier === 'advanced' && !showAll
                  ? 'bg-[var(--color-advanced)]/20 text-[var(--color-advanced)] ring-1 ring-[var(--color-advanced)]/40'
                  : 'text-[var(--color-text-mute)] hover:text-[var(--color-text)]'
              }`}
            >Advanced</button>
            <span className="w-px h-4 bg-[var(--color-border)] mx-1" />
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                showAll
                  ? 'bg-[var(--color-praxis)]/20 text-[var(--color-praxis)] ring-1 ring-[var(--color-praxis)]/40'
                  : 'text-[var(--color-text-mute)] hover:text-[var(--color-text)]'
              }`}
            >Show all</button>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-xs text-[var(--color-text-dim)]">
            <NavLink to="/" className={({isActive}) => isActive ? 'text-[var(--color-text)]' : 'hover:text-[var(--color-text)]'} end>Modules</NavLink>
            <a href="https://travis-coder712.github.io/studio/" target="_blank" rel="noopener" className="hover:text-[var(--color-text)]">Studio ↗</a>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="max-w-5xl mx-auto px-5 lg:px-8 py-12 mt-16 border-t border-[var(--color-border)] text-xs text-[var(--color-text-mute)] flex items-center justify-between flex-wrap gap-2">
        <div>Praxis · part of <a href="https://travis-coder712.github.io/studio/" className="text-[var(--color-praxis)] hover:underline" target="_blank" rel="noopener">Studio</a></div>
        <div className="font-mono">v0.1</div>
      </footer>
    </div>
  )
}
