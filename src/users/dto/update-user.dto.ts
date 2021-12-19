import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
