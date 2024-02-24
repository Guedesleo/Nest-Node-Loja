import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersRepository } from './users.respository';

@Controller('/users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Post()
  async create(@Body() bodyusers) {
    this.usersRepository.salvar(bodyusers);
    return bodyusers;
  }

  @Get()
  async LisUsers() {
    return this.usersRepository.list();
  }
}
