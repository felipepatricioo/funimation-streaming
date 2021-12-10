import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { PrismaService } from 'src/prisma.service';
import { Animes } from '@prisma/client';

@Injectable()
export class AnimesService {
  constructor(private db: PrismaService) {}

  async create(data: CreateAnimeDto) {
    const animeExists = await this.db.animes.findUnique({
      where: { title: data.title },
    });

    if (animeExists) {
      throw new ConflictException({ message: 'Anime already exists!' });
    }

    return await this.db.animes.create({ data });
  }

  async findAll() {
    return await this.db.animes.findMany();
  }

  async findOne(id: string) {
    const anime = await this.db.animes.findUnique({
      where: { id },
    });

    if (!anime) {
      throw new NotFoundException({ message: 'Anime not found!' });
    }

    delete anime.createdAt && anime.updatedAt;

    return anime;
  }

  async update(id: string, data: UpdateAnimeDto) {
    const anime = await this.db.animes.update({
      data,
      where: { id },
    });

    delete anime.createdAt && anime.updatedAt;
    return anime;
  }

  async remove(id: string) {
    return await this.db.animes.delete({
      where: { id },
    });
  }
}
