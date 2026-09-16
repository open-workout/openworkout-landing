import { timingSafeEqual } from 'node:crypto'
import type { FastifyReply, FastifyRequest } from 'fastify'

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

export async function requireAdminKey(req: FastifyRequest, reply: FastifyReply) {
  const adminKey = process.env.ADMIN_API_KEY
  const providedKey = req.headers['x-admin-key']

  if (!adminKey || typeof providedKey !== 'string' || !safeEqual(providedKey, adminKey)) {
    reply.code(401).send({ error: 'unauthorized' })
  }
}
