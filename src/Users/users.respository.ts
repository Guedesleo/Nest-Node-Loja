import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private users = [];

  async salvar(users) {
    this.users.push(users);
  }

  async list() {
    return this.users;
  }
}
