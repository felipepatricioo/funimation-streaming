import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from './auth-user.decorator';
import { Users } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() data: CredentialsDto) {
    return this.authService.login(data);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  profile(@AuthUser() user: Users): Users {
    return user;
  }
}
