import mysql from 'mysql'
import { promisify } from 'util'

import { db } from 'config'
import Logger from 'helpers/logger'

interface NewPool extends mysql.Pool {
  testConnection?: Promise<true | mysql.MysqlError>
}

const pool: NewPool = mysql.createPool({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database
})

pool.testConnection = new Promise((resolve, reject) => {
  pool.getConnection((err: mysql.MysqlError, connection: mysql.PoolConnection) => {
    if (err !== null) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        Logger.error('DATABASE CONNECTION WAS CLOSED')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        Logger.error('DATABASE HAS TO MANY CONNECTIONS')
      }
      if (err.code === 'ECONNREFUSED') {
        Logger.error('DATABASE CONNECTION WAS REFUSED')
      }
      reject(err)
    }
    if (connection !== undefined) connection.release()
    resolve(true)
  })
})

// Conviertiendo a promesas
pool.query = promisify(pool.query as any)

export default pool
