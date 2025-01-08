import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTournamentLeagueRelation1736345724833 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'league_tournaments',
        columns: [
          {
            name: 'leagueId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'tournamentId',
            type: 'varchar',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['leagueId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'leagues',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['tournamentId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tournaments',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
        uniques: [
          {
            columnNames: ['leagueId', 'tournamentId'], // Evitar duplicação
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('league_tournaments');
  }
}
