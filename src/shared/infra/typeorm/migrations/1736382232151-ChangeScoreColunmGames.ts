import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class ChangeScoreColunmGames1736382232151 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
          "games",
          new TableColumn({
            name: "homeTeamResult",
            type: "int",
            isNullable: true,
          })
        );
      
        await queryRunner.addColumn(
          "games",
          new TableColumn({
            name: "awayTeamResult",
            type: "int",
            isNullable: true,
          })
        );
      
        await queryRunner.addColumn(
          "games",
          new TableColumn({
            name: "totalCards",
            type: "int",
            isNullable: true,
          })
        );

        await queryRunner.dropColumn('games', 'score');
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
        // Recriar a coluna "score"
        await queryRunner.addColumn(
          "games",
          new TableColumn({
            name: "score",
            type: "int",
            isNullable: true,  
          })
        );
    
        await queryRunner.dropColumn('games', 'homeTeamResult');
        await queryRunner.dropColumn('games', 'awayTeamResult');
        await queryRunner.dropColumn('games', 'totalCards');
      }
}
