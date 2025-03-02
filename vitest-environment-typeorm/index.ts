import 'dotenv/config'
import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import { DataSource } from 'typeorm'
import { Environment } from 'vitest'

// Função para gerar a URL do banco de dados com o esquema dinâmico
function generateDatabaseURL(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable.')
  }

  const url = new URL(process.env.DATABASE_URL)
  url.searchParams.set('schema', schema)

  return url.toString()
}

// Definição do ambiente de teste do Vitest
export default <Environment>{
  name: 'typeorm',
  transformMode: 'ssr',
  async setup() {
    const schema = randomUUID()
    const databaseURL = generateDatabaseURL(schema)
    process.env.DATABASE_URL = databaseURL

    // Criar conexão com TypeORM
    const dataSource = new DataSource({
      type: 'mysql',
      url: databaseURL,
      entities: ['src/entities/*.ts'], // Ajuste para onde estão suas entidades
      migrations: ['src/migrations/*.ts'],
      synchronize: false,
    })

    await dataSource.initialize()
    await dataSource.runMigrations()

    return {
      async teardown() {
        await dataSource.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`)
        await dataSource.destroy()
      },
    }
  },
}
