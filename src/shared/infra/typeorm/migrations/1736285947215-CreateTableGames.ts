import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableGames1736285947215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "games",
              columns: [
                {
                  name: "id",
                  type: "varchar",
                  isNullable: false,
                  isPrimary: true,
                },
                {
                  name: "tournamentId",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "homeTeamId",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "awayTeamId",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "date",
                  type: "timestamp",
                  isNullable: false,
                },
                {
                  name: "location",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "status",
                  type: "enum",
                  enum: ["scheduled", "in_progress", "finished", "canceled"],
                  isNullable: false,
                },
                {
                  name: "score",
                  type: "json",
                  isNullable: true,
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "CURRENT_TIMESTAMP",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remover tabela "games"
    await queryRunner.dropTable("games");
    }

}
