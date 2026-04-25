import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Client extends Model {
  @Column
  nome: string;

  @Column
  email: string;

  @Column
  telefone: string;
}