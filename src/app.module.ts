import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AnimesModule } from './animes/animes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AnimesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
