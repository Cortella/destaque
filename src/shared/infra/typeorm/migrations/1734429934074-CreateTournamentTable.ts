import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTournamentsTable1683307498839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tounaments",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tounaments");
  }
}
