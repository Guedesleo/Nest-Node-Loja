import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { SingleEmail } from '../validations/single-email.validator';

export class CreateUsersDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;
  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @SingleEmail({ message: 'Já existe um usuario com este e-mail.' })
  email: string;
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  password: string;
}
