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
import { AnimesService } from './animes.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Animes } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('animes')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) {}

  @UseGuards(AuthGuard())
  @Post('/create')
  create(@Body() data: CreateAnimeDto): Promise<Animes> {
    return this.animesService.create(data);
  }

  @Get()
  findAll() {
    return this.animesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animesService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() data: UpdateAnimeDto) {
    return this.animesService.update(id, data);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.animesService.remove(id);
  }
}
