import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableTounaments1736285705773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
          }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remover tabela "tournaments"
    await queryRunner.dropTable("tournaments");
    }

}
