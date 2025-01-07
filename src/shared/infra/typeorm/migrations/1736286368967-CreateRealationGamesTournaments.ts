import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateRealationGamesTournaments1736286368967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.dropForeignKey("games", "FK_games_tournamentId");
    }

}
