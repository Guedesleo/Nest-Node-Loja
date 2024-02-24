import { Module } from '@nestjs/common';
import { UsersController } from './users.controler';
import { UsersRepository } from './users.respository';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository],
})
export class UsersModule {}
