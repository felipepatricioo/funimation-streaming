import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { Users } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async create(data: CreateUserDto) {
    const userExists = await this.db.users.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new ConflictException({
        message: 'E-mail already registered!',
      });
    }

    const saltRounds = 10;
    const passHash = await bcrypt.hash(data.password, saltRounds);

    const user = await this.db.users.create({
      data: {
        ...data,
        password: passHash,
      },
    });

    delete user.password;
    return user;
  }

  async findAll(): Promise<any[]> {
    const user = await this.db.users.findMany();
    const userNoPassword = user.map(({ password, ...rest }) => rest);
    return userNoPassword;
  }

  async findOne(id: string): Promise<Users> {
    const user = await this.db.users.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException({
        message: 'User not found!',
      });
    }

    delete user.password;
    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<Users> {
    const user = await this.db.users.update({
      data: data,
      where: {
        id: id,
      },
    });

    delete user.password;
    return user;
  }

  async remove(id: string): Promise<{ message: string }> {
    const user = await this.db.users.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException({ message: 'User not found!' });
    } else {
      await this.db.users.delete({
        where: { id },
      });
    }
    return { message: 'User Successfully removed!' };
  }
}
