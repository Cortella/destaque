import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddResultInGame1736479649788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "games",
            new TableColumn({
              name: "result",
              type: "enum",
              enum: ["home", "away", "draw"],
              isNullable: true,
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('games', 'result');
    }

}
