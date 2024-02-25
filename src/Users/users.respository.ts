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

  async existEmail(email: string) {
    const possibleUser = this.users.find((users) => users.email === email);

    return possibleUser !== undefined;
  }
}
