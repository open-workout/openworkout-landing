import { Pool } from 'pg'

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function checkDbConnection(): Promise<boolean> {
  const result = await pool.query('SELECT 1')
  return result.rowCount === 1
}
