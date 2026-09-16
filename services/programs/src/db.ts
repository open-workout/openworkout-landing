import { Pool } from 'pg'

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function checkDbConnection(): Promise<boolean> {
  const result = await pool.query('SELECT 1')
  return result.rowCount === 1
}

export async function ensureSchema(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS programs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      markdown TEXT NOT NULL,
      owl TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `)
}
