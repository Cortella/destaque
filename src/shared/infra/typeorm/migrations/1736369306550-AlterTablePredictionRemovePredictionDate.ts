import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTablePredictionRemovePredictionDate1736369306550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remover a coluna "predictionsDate"
    await queryRunner.dropColumn('predictions', 'predictionDate');

    // Adicionar a coluna "created_at"
    await queryRunner.addColumn(
      'predictions',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remover a coluna "created_at"
    await queryRunner.dropColumn('predictions', 'created_at');

    // Adicionar a coluna "predictionsDate" novamente
    await queryRunner.addColumn(
      'predictions',
      new TableColumn({
        name: 'predictionDate',
        type: 'timestamp',
        isNullable: true,
      })
    );
  }
}