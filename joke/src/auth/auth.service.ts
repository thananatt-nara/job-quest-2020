import { DatabaseService } from '@/database/database.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoginDto } from './dto/loginDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.databaseService.user.findFirst({
      where: { userName: loginDto.userName, password: loginDto.password },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({
      id: user.id,
      userName: user.userName,
    });

    return {
      message: 'Login successful',
      token,
      status: 'success',
    };
  }
}
