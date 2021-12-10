import { IsEmail, IsString, IsNotEmpty, Length } from 'class-validator';

export class CredentialsDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 16)
  password: string;
}
