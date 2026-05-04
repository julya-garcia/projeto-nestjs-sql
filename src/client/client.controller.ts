import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() data: CreateClientDto) {
    return this.clientService.create(data);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get('search')
  findByName(@Query('nome') nome: string) {
    return this.clientService.findByName(nome);
  }

  @Get('search/:nome')
  findByNameParam(@Param('nome') nome: string) {
    return this.clientService.findByName(nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateClientDto) {
    return this.clientService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(Number(id));
  }
}