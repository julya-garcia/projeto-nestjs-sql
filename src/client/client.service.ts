import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './client.model';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) {}

  create(data: CreateClientDto) {
    return this.clientModel.create(data);
  }

  findAll() {
    return this.clientModel.findAll();
  }

  findOne(id: number) {
    return this.clientModel.findByPk(id);
  }

  findByName(nome: string) {
    return this.clientModel.findAll({ where: { nome } });
  }

  async update(id: number, data: UpdateClientDto) {
    const [affectedRows] = await this.clientModel.update(data, { where: { id } });

    if (!affectedRows) {
      throw new NotFoundException(`Cliente com id ${id} não encontrado`);
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    const deleted = await this.clientModel.destroy({ where: { id } });

    if (!deleted) {
      throw new NotFoundException(`Cliente com id ${id} não encontrado`);
    }

    return { deleted: true };
  }
}