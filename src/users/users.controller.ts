import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/auth/auth-user.decorator';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard())
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard())
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<Users> {
    return this.usersService.update(id, data);
  }

  @UseGuards(AuthGuard())
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @UseGuards(AuthGuard())
  @Patch('watchedAnimes/:id')
  watchedAnimes(@AuthUser() user: Users, @Param('id') id: string) {
    return this.usersService.watchedAnimes(user, id);
  }
}
