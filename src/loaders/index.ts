import colors from 'colors'

import pool from 'loaders/mysqlPool'
import expressLoader from 'loaders/express'
import Logger from 'helpers/logger'
import { Loaders, PreLoaders } from 'interfaces/server.interfaces'

const loaders = async (): Promise<Loaders> => {
  Logger.info(colors.bold.italic.blue('Loading configuration... 💻'))

  const loaders: PreLoaders = {
    expressApp: undefined,
    mysqlConnection: undefined
  }

  try {
    await pool.testConnection
    loaders.mysqlConnection = pool
    Logger.info(colors.green('MySQL loaded and connected! ✌️'))
  } catch (error) {
    Logger.error(colors.red('error loading or connecting MySQL'), error)
    throw error
  }

  try {
    loaders.expressApp = expressLoader()
    Logger.info(colors.bold.green('Express loaded ✌️'))
  } catch (error) {
    Logger.error(colors.red('error loading Express'), error)
    throw error
  }

  return loaders as Loaders
}

export default loaders
