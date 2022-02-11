import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fornecedor' })
export class Fornecedor {
    @PrimaryColumn()
    cnpj: number;

    @Column()
    nomefantasia: string;

    @Column()
    telefone: string;

    @Column()
    endereco: string;

    @Column()
    cep: number;

    @Column()
    estado: string;

    @Column()
    cidade: string;
}
