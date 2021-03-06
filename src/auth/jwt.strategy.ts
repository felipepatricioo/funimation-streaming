import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from './jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private db: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: { email: string }) {
    const user = await this.db.users.findUnique({
      where: { email: payload.email },
    });
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    return user;
  }
}
