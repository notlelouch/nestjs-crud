import { IsEmail, IsString, isString, Length } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @Length(2, 20)
  name: String;
  @IsString()
  @Length(2, 20)
  password: String;
  @IsEmail()
  email: String;
}
