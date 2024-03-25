import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersRepository } from './users.respository';
import { CreateUsersDTO } from './dto/CreateUsersDto';
import { UsersEntity } from './usuers.entity';
import { v4  as uuid} from 'uuid';
import { ListUserDTO } from './dto/ListUsersDTO';
import { UpdateUserDTO } from './dto/UpdateUserDTO';
import { UsersServices } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(
    private usersRepository: UsersRepository,
    private usersService:  UsersServices
    ) {}

  @Post()
  async create(@Body() bodyUsers: CreateUsersDTO) {
    const userEntity = new UsersEntity();
    userEntity.email= bodyUsers.email;
    userEntity.name= bodyUsers.name;
    userEntity.password= bodyUsers.password;
    userEntity.id = uuid();

    this.usersService.createUsers(userEntity);
    return { user: new ListUserDTO(userEntity.id, userEntity.name) , message: 'Usuário cirado com sucesso.'}
  };

  @Get()
  async LisUsers() {
    const usersList = await this.usersService.listUsers();    
    return usersList
  };

  @Put('/:id')
  async updateBody(@Param('id') id: string, @Body() updateUser: UpdateUserDTO){
    const userUpdate =  await this.usersService.updateUsers(id, updateUser)

    return{
      user: userUpdate,
      message: 'Usuário atualizado com sucesso.'
    }
  };

  @Delete('/:id')
  async deleteUsers(@Param('id') id: string) {
    const userDelete = await this.usersService.deteleUsers(id);

    return {
      user: userDelete,
      message: 'Usuário deletado com sucesso.'
  }
  }
}
