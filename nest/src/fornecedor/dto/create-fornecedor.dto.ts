import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateFornecedorDto {
  @IsInt()
  @IsNotEmpty()
  cnpj: number;

  @IsString()
  @IsNotEmpty()
  nomefantasia: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsInt()
  @IsNotEmpty()
  cep: number;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;
}
