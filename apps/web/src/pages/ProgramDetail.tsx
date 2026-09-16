import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

interface ProgramDetail {
  id: number
  title: string
  markdown: string
  owl: string
  createdAt: string
}

export default function ProgramDetail() {
  const { id } = useParams()
  const [program, setProgram] = useState<ProgramDetail | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`/api/programs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('request failed')
        return res.json() as Promise<ProgramDetail>
      })
      .then(setProgram)
      .catch(() => setError(true))
  }, [id])

  return (
    <>
      <Nav />
      <main className="program-detail">
        {error && <p className="programs-status">Couldn't load this program.</p>}
        {!error && !program && <p className="programs-status">Loading…</p>}

        {program && (
          <>
            <div className="program-detail-actions">
              <button type="button" className="btn btn-ghost" disabled title="Coming soon">
                Open in editor
              </button>
              <button type="button" className="btn btn-ghost" disabled title="Coming soon">
                Send to phone
              </button>
            </div>
            <article className="program-detail-markdown">
              <ReactMarkdown>{program.markdown}</ReactMarkdown>
            </article>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
