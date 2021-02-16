import { Application } from 'express'

export interface PreLoaders {
  expressApp: Application | undefined
  mysqlConnection: any
}

export interface Loaders {
  expressApp: Application
  mysqlConnection: any
}
