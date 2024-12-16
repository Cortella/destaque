import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTounamentTable1734335922637 implements MigrationInterface {
  name = "CreateTounamentTable1734335922637";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`teams\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`shield\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`stadium\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`isAdmin\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`users_tokens\` (\`id\` varchar(255) NOT NULL, \`refresh_token\` varchar(255) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`expires_date\` datetime NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`tounaments\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`initialDate\` datetime NOT NULL, \`finalDate\` datetime NOT NULL, \`type\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`users_tokens\` ADD CONSTRAINT \`FK_32f96022cc5076fe565a5cba20b\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users_tokens\` DROP FOREIGN KEY \`FK_32f96022cc5076fe565a5cba20b\``
    );
    await queryRunner.query(`DROP TABLE \`tounaments\``);
    await queryRunner.query(`DROP TABLE \`users_tokens\``);
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(`DROP TABLE \`teams\``);
  }
}
