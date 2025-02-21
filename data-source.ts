import 'reflect-metadata'
import { DataSource } from 'typeorm'
console.log('estou no datasource')
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: '',
  database: 'cartomantes',
  synchronize: false,
  logging: false,
  entities: ['./src/modules/*/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  subscribers: [],
})
