import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Please inform a valid name!' })
  @IsNotEmpty({ message: "'Name' cannot be empty!" })
  name: string;
  @IsString({ message: 'Please inform a valid e-mail!' })
  @IsEmail({ message: 'Please inform a valid e-mail!' })
  @IsNotEmpty({ message: "'E-mail' cannot be empty!" })
  email: string;
  @IsString({ message: 'Please inform a valid password!' })
  @IsNotEmpty({ message: "'Password' cannot be empty!" })
  @Length(8, 16, {
    message: 'Your password needs to have between 8 and 16 characters!',
  })
  password: string;
}
