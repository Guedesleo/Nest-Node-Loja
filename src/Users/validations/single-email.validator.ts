import { Injectable } from '@nestjs/common';
import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsersRepository } from 'src/Users/users.respository';

@Injectable()
@ValidatorConstraint({ async: true })
export class SingleEmailValidator implements ValidatorConstraintInterface {
  constructor(private usersRepository: UsersRepository) {}

  async validate(value: any) {
    const userEmailExist = await this.usersRepository.existEmail(value);

    return !userEmailExist;
  }
}

export const SingleEmail = (optionsValidator: ValidationOptions) => {
  return (obj: any, props: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: props,
      options: optionsValidator,
      constraints: [],
      validator: SingleEmailValidator,
    });
  };
};
