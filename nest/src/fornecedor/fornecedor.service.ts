import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { Fornecedor } from './entities/fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectRepository(Fornecedor)
    private fornecedorRepo: Repository<Fornecedor>,
  ) {}

  create(createFornecedorDto: CreateFornecedorDto) {
    const fornecedor = this.fornecedorRepo.create(createFornecedorDto);
    return this.fornecedorRepo.save(fornecedor);
  }

  findAll() {
    return this.fornecedorRepo.find();
  }

  findOne(id: number) {
    return this.fornecedorRepo.findOne(id);
  }

  async update(id: number, updateFornecedorDto: UpdateFornecedorDto) {
    const updateResult = await this.fornecedorRepo.update(id, updateFornecedorDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Fornecedor, id);
    }
    return this.fornecedorRepo.findOne(id);
  }

  async remove(id: number) {
    const deleteResult = await this.fornecedorRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Fornecedor, id);
    }
  }
}
