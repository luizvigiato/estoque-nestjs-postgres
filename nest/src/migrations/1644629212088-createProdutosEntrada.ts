import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createProdutosEntrada1644629212088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'produtoentrada',
            columns: [
                { name: 'id', type:'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment'},
                { name: 'codigo', type: 'bigint'},
                { name: 'descricao',type:'text' },
                { name: 'fabricante', type: 'text'},
                { name: 'quantidade', type: 'int'},
                { name: 'valoruni', type: 'int'},
                { name: 'codbarras', type: 'bigint'},
                { name: 'codnota', type: 'text'}
            ]
        }));

        await queryRunner.createForeignKey("produtoentrada", new TableForeignKey({
            columnNames: ['codnota'],
            referencedColumnNames: ['codigo'],
            referencedTableName: 'notaentrada',
            onDelete: "CASCADE"
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtoentrada');
    }

}
