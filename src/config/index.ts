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

export const db = {
  host: process.env.DB_HOST ?? '',
  user: process.env.DB_USER ?? '',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_DATABASE ?? ''
}

export const corsUrl = process.env.CORS_URL ?? ''

export const api = {
  prefix: '/api/v1.0'
}
