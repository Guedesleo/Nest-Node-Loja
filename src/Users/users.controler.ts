import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersRepository } from './users.respository';
import { CreateUsersDTO } from './dto/CreateUsersDto';

@Controller('/users')
export class UsersController {
  constructor(private usersRepository: UsersRepository) {}

  @Post()
  async create(@Body() bodyusers: CreateUsersDTO) {
    this.usersRepository.salvar(bodyusers);
    return bodyusers;
  }

  @Get()
  async LisUsers() {
    return this.usersRepository.list();
  }
}
