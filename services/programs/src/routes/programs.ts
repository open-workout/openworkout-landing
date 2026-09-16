import type { FastifyInstance } from 'fastify'
import { pool } from '../db.js'
import { requireAdminKey } from '../auth.js'

const EXCERPT_LINES = 7

function excerptOf(markdown: string): string {
  return markdown.split('\n').slice(0, EXCERPT_LINES).join('\n')
}

interface CreateProgramBody {
  title: string
  markdown: string
  owl: string
}

export default async function programsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const result = await pool.query('SELECT id, title, markdown FROM programs ORDER BY created_at DESC')
    return result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      excerpt: excerptOf(row.markdown),
    }))
  })

  app.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const result = await pool.query(
      'SELECT id, title, markdown, owl, created_at FROM programs WHERE id = $1',
      [req.params.id],
    )
    if (result.rowCount === 0) {
      reply.code(404).send({ error: 'not found' })
      return
    }
    const row = result.rows[0]
    return {
      id: row.id,
      title: row.title,
      markdown: row.markdown,
      owl: row.owl,
      createdAt: row.created_at,
    }
  })

  app.post<{ Body: CreateProgramBody }>(
    '/',
    {
      preHandler: requireAdminKey,
      schema: {
        body: {
          type: 'object',
          required: ['title', 'markdown', 'owl'],
          properties: {
            title: { type: 'string', minLength: 1 },
            markdown: { type: 'string', minLength: 1 },
            owl: { type: 'string', minLength: 1 },
          },
        },
      },
    },
    async (req, reply) => {
      const { title, markdown, owl } = req.body
      const result = await pool.query(
        'INSERT INTO programs (title, markdown, owl) VALUES ($1, $2, $3) RETURNING id, title, created_at',
        [title, markdown, owl],
      )
      reply.code(201)
      return result.rows[0]
    },
  )
}
