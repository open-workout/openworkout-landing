import type { FastifyInstance } from 'fastify'

export default async function exercisesRoutes(app: FastifyInstance) {
  app.get('/exercises', async () => {
    return []
  })
}
