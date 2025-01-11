import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserBrith1736626332644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona a coluna birthDate na tabela users
    await queryRunner.query(`ALTER TABLE users ADD COLUMN birthDate DATE NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a coluna birthDate da tabela users
    await queryRunner.query(`ALTER TABLE users DROP COLUMN birthDate`);
  }
}
