import dotenv from 'dotenv'

const envFound = dotenv.config()
if (envFound.error !== undefined) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

// Mapper for environment variables
export const environment = process.env.NODE_ENV
export const port = process.env.PORT ?? ''
export const name = process.env.NAME_API ?? ''

export const pg = {
  database: process.env.PGDATABASE ?? '',
  host: process.env.PGHOST ?? '',
  port: process.env.PGPORT ?? '',
  user: process.env.PGUSER ?? '',
  password: process.env.PGPASSWORD ?? '',
  ssl: process.env.SSL !== 'false'
}

export const corsUrl = process.env.CORS_URL ?? ''

export const api = {
  prefix: '/api/v1.0'
}
