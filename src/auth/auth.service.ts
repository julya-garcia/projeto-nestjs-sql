import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(data: any) {
    const hash = await bcrypt.hash(data.password, 10);

    const user = await this.userService.create({
      ...data,
      password: hash,
    });

    return this.generateToken(user);
  }

  async login(data: any) {
    const user = await this.userService.findByEmail(data.email);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const valid = await bcrypt.compare(data.password, user.password);

    if (!valid) {
      throw new Error('Senha inválida');
    }

    return this.generateToken(user);
  }

  private generateToken(user: any) {
    const payload = { id: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}