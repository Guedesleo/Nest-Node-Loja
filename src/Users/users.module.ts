import { Module } from '@nestjs/common';
import { UsersController } from './users.controler';
import { UsersRepository } from './users.respository';
import { SingleEmailValidator } from './validations/single-email.validator';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository, SingleEmailValidator],
})
export class UsersModule {}
