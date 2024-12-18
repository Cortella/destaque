import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UpdateGameTeamRelations1687123456789 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona as chaves estrangeiras para a relação entre games e teams
    await queryRunner.createForeignKey(
      'games',
      new TableForeignKey({
        columnNames: ['homeTeamId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teams',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'games',
      new TableForeignKey({
        columnNames: ['awayTeamId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teams',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove as chaves estrangeiras
    const table = await queryRunner.getTable('games');

    const homeTeamForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('homeTeamId') !== -1,
    );

    if (homeTeamForeignKey) {
      await queryRunner.dropForeignKey('games', homeTeamForeignKey);
    }

    const awayTeamForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('awayTeamId') !== -1,
    );

    if (awayTeamForeignKey) {
      await queryRunner.dropForeignKey('games', awayTeamForeignKey);
    }
  }
}