import { Injectable } from '@nestjs/common';
import { UsersEntity } from './usuers.entity';

@Injectable()
export class UsersRepository {
  private users: UsersEntity[] = [];

  async salvar(users:UsersEntity) {
    this.users.push(users);
  }

  async list() {
    return this.users;
  }

  async existEmail(email: string) {
    const possibleUser = this.users.find((users) => users.email === email);

    return possibleUser !== undefined;
  }

  async update(id:string, update: Partial<UsersEntity>){
    const users = this.findId(id);

    Object.entries(update).forEach(([key, value])=>{
      if(key == 'id') return

      users[key] = value
    })

    return users;
  }

  async delete(id: string) {
    const users = this.findId(id);

    this.users = this.users.filter(users => users.id !== id)

    return users
  }

  private findId(id: string){
    const possibleUsers = this.users.find( usersCreate => usersCreate.id === id)

    if(!possibleUsers){
      throw new Error("Usuário não existe");
    }
    return possibleUsers
  }

}
