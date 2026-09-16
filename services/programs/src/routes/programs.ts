import type { FastifyInstance } from 'fastify'

export default async function programsRoutes(app: FastifyInstance) {
  app.get('/programs', async () => {
    return []
  })
}
