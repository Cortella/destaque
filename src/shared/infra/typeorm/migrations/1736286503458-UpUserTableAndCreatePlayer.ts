import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class UpUserTableAndCreatePlayer1736286503458
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remove a coluna "username" da tabela "users"
    await queryRunner.dropColumn("users", "username");

    // Cria a tabela "players"
    await queryRunner.createTable(
      new Table({
        name: "players",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "username",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "player_avatar",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            isNullable: false,
          },
          {
            name: "userId", // Adiciona a coluna para a relação com "users"
            type: "varchar",
            isNullable: false,
          },
        ],
      }),
    );

    // Cria a chave estrangeira entre "players" e "users"
    await queryRunner.createForeignKey(
      "players",
      new TableForeignKey({
        columnNames: ["userId"], // Coluna em "players"
        referencedColumnNames: ["id"], // Coluna em "users"
        referencedTableName: "users", // Tabela referenciada
        onDelete: "CASCADE", // Exclusão em cascata
        onUpdate: "CASCADE", // Atualização em cascata
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a tabela "players"
    await queryRunner.dropTable("players");

    // Adiciona novamente a coluna "username" à tabela "users"
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "varchar",
        isNullable: false,
      }),
    );
  }
}
