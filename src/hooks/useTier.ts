import { useState, useEffect, useCallback } from 'react'

export type Tier = 'beginner' | 'intermediate' | 'advanced'

const STORAGE_KEY = 'praxis-tier-prefs'

interface Prefs {
  currentTier: Tier
  showAll: boolean
}

function load(): Prefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return { currentTier: 'beginner', showAll: false }
}

function save(p: Prefs) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)) } catch { /* ignore */ }
}

export function useTier() {
  const [prefs, setPrefs] = useState<Prefs>(load)

  useEffect(() => { save(prefs) }, [prefs])

  const setCurrentTier = useCallback((tier: Tier) => {
    setPrefs(p => ({ ...p, currentTier: tier }))
  }, [])
  const setShowAll = useCallback((show: boolean) => {
    setPrefs(p => ({ ...p, showAll: show }))
  }, [])

  return {
    currentTier: prefs.currentTier,
    showAll: prefs.showAll,
    setCurrentTier,
    setShowAll,
    /** Whether a given tier should be expanded by default */
    isOpen: (t: Tier) => prefs.showAll || prefs.currentTier === t,
  }
}
