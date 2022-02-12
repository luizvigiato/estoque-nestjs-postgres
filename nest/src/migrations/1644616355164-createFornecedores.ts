import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createFornecedores1644626355864 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fornecedores',
        columns: [
          {
            name: 'cnpj',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'nomefantasia',
            type: 'text',
          },
          {
            name: 'telefone',
            type: 'text',
          },
          {
            name: 'endereco',
            type: 'text',
          },
          {
            name: 'cep',
            type: 'bigint',
          },
          {
            name: 'estado',
            type: 'text',
          },
          {
            name: 'cidade',
            type: 'text',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fornecedores');
  }
}
