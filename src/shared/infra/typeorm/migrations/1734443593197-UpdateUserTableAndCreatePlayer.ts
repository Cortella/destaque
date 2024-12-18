import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class UpdateUserTableAndCreatePlayer1634075673485
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remover o campo "username" da tabela "users"
    await queryRunner.dropColumn("users", "username");

    // Criar a tabela "players" com chave primária compartilhada
    await queryRunner.createTable(
      new Table({
        name: "players",
        columns: [
          {
            name: "id",
            type: "varchar", // Use UUID para consistência com a tabela "users"
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
        ],
      })
    );

    // Criar a chave estrangeira entre "players" e "users"
    await queryRunner.createForeignKey(
      "players",
      new TableForeignKey({
        columnNames: ["id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remover a tabela "players"
    await queryRunner.dropTable("players");

    // Adicionar o campo "username" de volta à tabela "users"
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "varchar",
        isNullable: false,
      })
    );
  }
}
