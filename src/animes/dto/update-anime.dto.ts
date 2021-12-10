import { IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateAnimeDto {
  @IsString({ message: 'Please inform a valid title!' })
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsString({ message: 'Please inform a valid synopsis!' })
  @IsOptional()
  @IsNotEmpty()
  synopsis: string;

  @IsString({ message: 'Please inform a valid cover!' })
  @IsOptional()
  @IsNotEmpty()
  cover: string;

  @IsString({ message: 'Please inform a valid release date!' })
  @IsOptional()
  @IsNotEmpty()
  releaseDate: string;

  @IsInt({ message: 'Please inform a valid Parental Guidance Sugestion!' })
  @IsOptional()
  @IsNotEmpty()
  pg: number;

  @IsString({ message: 'Please inform a valid release genre!' })
  @IsOptional()
  @IsNotEmpty()
  genre: string;

  @IsInt({ message: 'Please inform a valid episode number!' })
  @IsOptional()
  @IsNotEmpty()
  episodes: number;

  @IsString({ message: 'Please inform a valid Studio!' })
  @IsOptional()
  @IsNotEmpty()
  studio: string;

  @IsString({ message: 'Please inform a valid Director!' })
  @IsOptional()
  @IsNotEmpty()
  director: string;
}
