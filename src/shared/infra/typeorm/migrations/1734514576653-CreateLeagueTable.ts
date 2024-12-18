import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateLeaguesTable1674605340292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Criando a tabela 'leagues'
    await queryRunner.createTable(
      new Table({
        name: 'leagues',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'isPublic',
            type: 'tinyint',
            isNullable: false,
          },
          {
            name: 'adminId',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'isOfficial',
            type: 'tinyint',
            isNullable: false,
          },
          {
            name: 'moderators',
            type: 'text',
            isNullable: true, // Usando TEXT para armazenar o JSON como string
          },
          {
            name: 'lastActivityDate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'pointsPerFullHit',
            type: 'int'
          },
          {
            name: 'pointsPerResult',
            type: 'int'
          },
          {
            name: 'pointsPerTeamGoals',
            type: 'int'
          },
          {
            name: 'boostPerRound',
            type: 'int'
          },
          {
            name: 'year',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP', // Ajustando o padrão de timestamp para MariaDB
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP', // Ajustando o padrão de timestamp para MariaDB
            onUpdate: 'CURRENT_TIMESTAMP', // Atualização automática no MariaDB
          },
        ],
      })
    );

    // Adicionando a chave estrangeira 'adminId' referenciando 'players(id)'
    await queryRunner.createForeignKey(
      'leagues',
      new TableForeignKey({
        columnNames: ['adminId'],
        referencedTableName: 'players',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL', // Se o administrador for excluído, a liga continuará mas sem administrador
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remover a chave estrangeira
    const table = await queryRunner.getTable('leagues');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('adminId') !== -1
    );
    await queryRunner.dropForeignKey('leagues', foreignKey);

    // Remover a tabela 'leagues'
    await queryRunner.dropTable('leagues');
  }
}
