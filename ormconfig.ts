export default{
  "type": "mysql",
  "port": process.env.DATABASE_PORT,
  "host": process.env.DATABASE_HOST,
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASS,
  "database": process.env.DATABASE_NAME,
  "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
  "entities": ["./src/modules/*/infra/typeorm/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}