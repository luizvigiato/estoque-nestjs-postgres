import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createNotaRecebidaTable1644624131596
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notaentrada',
        columns: [
          {
            name: 'codigo',
            type: 'text',
            isPrimary: true,
          },
          {
            name: 'cnpj',
            type: 'bigint',
          },
          {
            name: 'datacompra',
            type: 'timestamp',
          },
          {
            name: 'valort',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey("notaentrada", new TableForeignKey({
      columnNames: ['cnpj'],
      referencedColumnNames: ['cnpj'],
      referencedTableName: 'fornecedores',
      onDelete: "CASCADE"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notaentrada'); 
  }
}
