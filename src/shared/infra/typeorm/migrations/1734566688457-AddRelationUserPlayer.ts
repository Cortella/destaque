import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUserIdToPlayers1687123456789 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona a coluna userId à tabela players
    await queryRunner.addColumn(
      "players",
      new TableColumn({
        name: "userId",
        type: "varchar",
        isNullable: true, // Permitir null caso nem todos os jogadores tenham um usuário
      })
    );

    // Cria a chave estrangeira userId -> users.id
    await queryRunner.createForeignKey(
      "players",
      new TableForeignKey({
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL", // Define comportamento ao deletar usuário
        onUpdate: "CASCADE", // Atualiza automaticamente caso o id do usuário seja alterado
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Obtém a tabela players para encontrar a ForeignKey
    const table = await queryRunner.getTable("players");

    // Encontra a ForeignKey relacionada a userId
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("userId") !== -1
    );

    // Remove a chave estrangeira userId -> users.id
    if (foreignKey) {
      await queryRunner.dropForeignKey("players", foreignKey);
    }

    // Remove a coluna userId da tabela players
    await queryRunner.dropColumn("players", "userId");
  }
}
