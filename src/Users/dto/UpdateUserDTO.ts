import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { SingleEmail } from '../validations/single-email.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @SingleEmail({ message: 'Já existe um usuario com este e-mail.' })
  @IsOptional()
  email: string;
  
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  password: string;
}
