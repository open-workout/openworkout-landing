import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

interface ProgramSummary {
  id: number
  title: string
  excerpt: string
}

export default function Programs() {
  const [programs, setPrograms] = useState<ProgramSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/programs/')
      .then((res) => {
        if (!res.ok) throw new Error('request failed')
        return res.json() as Promise<ProgramSummary[]>
      })
      .then(setPrograms)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Nav />
      <main className="programs-page">
        <div className="section-header">
          <span className="section-tag">Programs</span>
          <h1>Workout programs.</h1>
        </div>

        {loading && <p className="programs-status">Loading programs…</p>}
        {!loading && error && <p className="programs-status">Couldn't load programs. Try again later.</p>}
        {!loading && !error && programs.length === 0 && (
          <p className="programs-status">No programs yet.</p>
        )}

        <div className="programs-grid">
          {programs.map((program) => (
            <a
              key={program.id}
              href={`/programs/${program.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="program-card"
            >
              <h3>{program.title}</h3>
              <pre className="program-card-excerpt">{program.excerpt}</pre>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
