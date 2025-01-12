import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreatePredictionsTable1736356385150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Criar a tabela de palpites
    await queryRunner.createTable(
      new Table({
        name: "predictions",
        columns: [
          {
            name: "id",
            type: "varchar",
            length: "36",
            isPrimary: true,
          },
          {
            name: "playerId",
            type: "varchar",
            length: "36", // UUID armazenado como varchar
          },
          {
            name: "gameId",
            type: "varchar",
            length: "36", // UUID armazenado como varchar
          },
          {
            name: "leagueId",
            type: "varchar",
            length: "36", // UUID armazenado como varchar
          },
          {
            name: "homeTeamScore",
            type: "int", // Número de gols previstos para o time da casa
            comment: "Número de gols previstos para o time da casa",
          },
          {
            name: "awayTeamScore",
            type: "int", // Número de gols previstos para o time visitante
            comment: "Número de gols previstos para o time visitante",
          },
          {
            name: "points",
            type: "int",
            default: null,
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            isNullable: false,
          },

          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
            comment: "Data e hora da última atualização",
          },
        ],
      })
    );

    // Adicionar as chaves estrangeiras
    await queryRunner.createForeignKey(
      "predictions",
      new TableForeignKey({
        columnNames: ["playerId"],
        referencedColumnNames: ["id"],
        referencedTableName: "players",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "predictions",
      new TableForeignKey({
        columnNames: ["gameId"],
        referencedColumnNames: ["id"],
        referencedTableName: "games",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "predictions",
      new TableForeignKey({
        columnNames: ["leagueId"],
        referencedColumnNames: ["id"],
        referencedTableName: "leagues", // Relacionamento com a tabela leagues
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remover a tabela de palpites
    await queryRunner.dropTable("predictions");
  }
}
