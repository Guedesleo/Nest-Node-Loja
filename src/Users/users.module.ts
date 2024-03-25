import { Module } from '@nestjs/common';
import { UsersController } from './users.controler';
import { UsersRepository } from './users.respository';
import { SingleEmailValidator } from './validations/single-email.validator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './usuers.entity';
import { UsersServices } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [UsersServices ,UsersRepository, SingleEmailValidator],
})
export class UsersModule {}
