import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTournamentsTable1683307498839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Criação da tabela "tournaments"
    await queryRunner.createTable(
      new Table({
        name: "tournaments",
        columns: [
          {
            name: "id",
            type: "varchar",
            isNullable: false,
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "initialDate",
            type: "date",
            isNullable: false,
          },
          {
            name: "finalDate",
            type: "date",
            isNullable: false,
          },
          {
            name: "type",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );

    // Criação da tabela "games"
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

    // Criação da chave estrangeira entre "games" e "tournaments"
    await queryRunner.createForeignKey(
      "games",
      new TableForeignKey({
        columnNames: ["tournamentId"],
        referencedColumnNames: ["id"],
        referencedTableName: "tournaments",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remover chave estrangeira da tabela "games"
    await queryRunner.dropForeignKey("games", "FK_games_tournamentId");

    // Remover tabela "games"
    await queryRunner.dropTable("games");

    // Remover tabela "tournaments"
    await queryRunner.dropTable("tournaments");
  }
}
