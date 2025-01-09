import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddRounds1736351026245 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Criação da tabela "rounds"
    await queryRunner.createTable(
      new Table({
        name: "rounds",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "tournamentId",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "roundNumber",
            type: "int",
            isNullable: false,
          },
          {
            name: "initialDate",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "finalDate",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            isNullable: false,
          },
        ],
      })
    );

    // Adiciona chave estrangeira entre "rounds" e "tournaments"
    await queryRunner.createForeignKey(
      "rounds",
      new TableForeignKey({
        columnNames: ["tournamentId"],
        referencedColumnNames: ["id"],
        referencedTableName: "tournaments",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );

    // Adiciona a coluna "roundId" na tabela "games"
    await queryRunner.addColumn(
      "games",
      new TableColumn({
        name: "roundId",
        type: "varchar",
        isNullable: true, // Permitir null inicialmente para compatibilidade
      })
    );

    // Adiciona chave estrangeira entre "games" e "rounds"
    await queryRunner.createForeignKey(
      "games",
      new TableForeignKey({
        columnNames: ["roundId"],
        referencedColumnNames: ["id"],
        referencedTableName: "rounds",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a chave estrangeira entre "games" e "rounds"
    const gamesTable = await queryRunner.getTable("games");
    const roundForeignKey = gamesTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("roundId") !== -1
    );
    if (roundForeignKey) {
      await queryRunner.dropForeignKey("games", roundForeignKey);
    }

    // Remove a coluna "roundId" da tabela "games"
    await queryRunner.dropColumn("games", "roundId");

    // Remove a chave estrangeira entre "rounds" e "tournaments"
    const roundsTable = await queryRunner.getTable("rounds");
    const tournamentForeignKey = roundsTable.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("tournamentId") !== -1
    );
    if (tournamentForeignKey) {
      await queryRunner.dropForeignKey("rounds", tournamentForeignKey);
    }

    // Remove a tabela "rounds"
    await queryRunner.dropTable("rounds");
  }
}
