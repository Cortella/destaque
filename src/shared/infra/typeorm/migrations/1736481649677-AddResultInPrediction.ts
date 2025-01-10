import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddResultInPrediction1736481649677 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "predictions",
      new TableColumn({
        name: "predictionResult",
        type: "enum",
        enum: ["home", "away", "draw"],
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("predictions", "predictionResult");
  }
}
