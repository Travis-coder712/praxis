import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-24 text-center">
      <p className="text-6xl mb-4">🤖</p>
      <h1 className="text-2xl font-bold text-[var(--color-text)] mb-2">Not found</h1>
      <p className="text-[var(--color-text-dim)] mb-6">That lesson isn't here — or doesn't exist yet.</p>
      <Link to="/" className="text-sm text-[var(--color-praxis)] hover:underline">← Back to all modules</Link>
    </div>
  )
}
