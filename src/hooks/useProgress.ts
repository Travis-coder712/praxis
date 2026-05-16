/**
 * useProgress — tracks which Praxis lessons the user has marked as
 * read, persisted to localStorage. Robust to new lessons / new
 * versions: adding lessons just leaves them as "unread"; only
 * renaming or deleting a lesson ID would orphan progress.
 *
 * Lesson IDs are stored as `${moduleId}/${lessonId}` strings.
 *
 * Usage:
 *   const { completed, isComplete, mark, unmark, toggle, reset } = useProgress()
 *   const key = `${moduleId}/${lessonId}`
 *   isComplete(key) → boolean
 *   toggle(key)     → flips the bit
 *   reset()         → clears everything (with confirm)
 */
import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'praxis-progress'

function load(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return new Set(JSON.parse(raw) as string[])
  } catch { /* ignore */ }
  return new Set()
}

function save(ids: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
  } catch { /* ignore — quota / private mode etc. */ }
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(() => load())

  // Re-sync if storage is changed in another tab/window
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setCompleted(load())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const isComplete = useCallback(
    (key: string) => completed.has(key),
    [completed]
  )

  const mark = useCallback((key: string) => {
    setCompleted(prev => {
      if (prev.has(key)) return prev
      const next = new Set(prev)
      next.add(key)
      save(next)
      return next
    })
  }, [])

  const unmark = useCallback((key: string) => {
    setCompleted(prev => {
      if (!prev.has(key)) return prev
      const next = new Set(prev)
      next.delete(key)
      save(next)
      return next
    })
  }, [])

  const toggle = useCallback((key: string) => {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      save(next)
      return next
    })
  }, [])

  const reset = useCallback(() => {
    setCompleted(new Set())
    try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
  }, [])

  return {
    completed,
    isComplete,
    mark,
    unmark,
    toggle,
    reset,
    count: completed.size,
  }
}
