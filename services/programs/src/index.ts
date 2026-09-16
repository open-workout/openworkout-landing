import 'dotenv/config'
import Fastify from 'fastify'
import { checkDbConnection } from './db.js'
import programsRoutes from './routes/programs.js'

const app = Fastify({ logger: true })

app.get('/health', async () => {
  const dbOk = await checkDbConnection().catch(() => false)
  return { status: dbOk ? 'ok' : 'degraded', db: dbOk }
})

app.register(programsRoutes)

const port = Number(process.env.PORT) || 3001
app.listen({ port, host: '0.0.0.0' })
