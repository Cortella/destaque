import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { env } from './src/env'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: env.DATABASE_HOST || 'localhost',
  port: env.DATABASE_PORT || 3308,
  username: env.DATABASE_USER || 'root',
  password: '',
  database: env.DATABASE_NAME || 'cartomantes',
  synchronize: false,
  logging: false,
  entities: ['./src/modules/*/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  subscribers: [],
})
