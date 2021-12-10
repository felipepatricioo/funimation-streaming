import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService, private jwt: JwtService) {}

  async login(data: CredentialsDto) {
    const userExists = await this.db.users.findUnique({
      where: { email: data.email },
    });

    if (!userExists) {
      throw new NotFoundException('User not found!');
    }

    const passwordCheck = await bcrypt.compare(
      data.password,
      userExists.password,
    );

    if (passwordCheck) {
      const payload = {
        email: userExists.email,
      };

      const token = await this.jwt.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException({
        message: 'Password or E-mail incorrect!',
      });
    }
  }
}
