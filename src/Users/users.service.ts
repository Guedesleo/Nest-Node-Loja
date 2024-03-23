import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsersEntity } from "./usuers.entity";
import { ListUserDTO } from "./dto/ListUsersDTO";
import { UpdateUserDTO } from "./dto/UpdateUserDTO";


@Injectable()
export class UsersServices {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) {}

    async createUsers(usersEntity: UsersEntity){
        await this.usersRepository.save(usersEntity)
    }

    async listUsers(){
        const salveUsers = await this.usersRepository.find();

        const listUsers = salveUsers.map(usuers => new ListUserDTO(usuers.id, usuers.name))

        return listUsers;
    }

    async updateUsers(id:string, usersEntity: UpdateUserDTO){
        await this.usersRepository.update(id, usersEntity);
    }

    async deteleUsers(id:string){
        await this.usersRepository.delete(id);
    }
}