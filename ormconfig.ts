const isPrd = process.env.NODE_ENV === "production";

export default {
  "type": "mysql",
  "port": !isPrd ? process.env.DATABASE_PORT : process.env.DATABASE_PORT_PRD,
  "host": !isPrd ? process.env.DATABASE_HOST : process.env.DATABASE_HOST_PRD,
  "username": !isPrd ? process.env.DATABASE_USER : process.env.DATABASE_USER_PRD,
  "password": !isPrd ? process.env.DATABASE_PASS : process.env.DATABASE_PASS_PRD,
  "database":  !isPrd ? process.env.DATABASE_NAME : process.env.DATABASE_NAME_PRD,
  "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
  "entities": ["./src/modules/*/infra/typeorm/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}