import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateAnimeDto {
  @IsString({ message: 'Please inform a valid title!' })
  @IsNotEmpty({ message: '"Title" is required!' })
  title: string;

  @IsString({ message: 'Please inform a valid synopsis!' })
  @IsNotEmpty({ message: '"Synopsis" is required!' })
  synopsis: string;

  @IsString({ message: 'Please inform a valid cover!' })
  @IsNotEmpty({ message: '"Cover" is required!' })
  cover: string;

  @IsString({ message: 'Please inform a valid release date!' })
  @IsNotEmpty({ message: '"Release Date" is required!' })
  releaseDate: string;

  @IsInt({ message: 'Please inform a valid Parental Guidance Sugestion!' })
  @IsNotEmpty({ message: '"Parental Guidance Sugestion" is required!' })
  pg: number;

  @IsString({ message: 'Please inform a valid release genre!' })
  @IsNotEmpty({ message: '"Genre" is required!' })
  genre: string;

  @IsInt({ message: 'Please inform a valid episode number!' })
  @IsNotEmpty({ message: '"Episodes" is required!' })
  episodes: number;

  @IsString({ message: 'Please inform a valid Studio!' })
  @IsNotEmpty({ message: '"Studio" is required!' })
  studio: string;

  @IsString({ message: 'Please inform a valid Director!' })
  @IsNotEmpty({ message: '"Director" is required!' })
  director: string;
}
