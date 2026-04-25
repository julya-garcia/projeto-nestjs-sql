import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './client.model';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) {}

  create(data: any) {
    return this.clientModel.create(data);
  }

  findAll() {
    return this.clientModel.findAll();
  }

  findOne(id: number) {
    return this.clientModel.findByPk(id);
  }

  update(id: number, data: any) {
    return this.clientModel.update(data, { where: { id } });
  }

  remove(id: number) {
    return this.clientModel.destroy({ where: { id } });
  }
}