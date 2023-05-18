import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model'

@Injectable()
export class UserService {
    private users: User[] = [];

    getAllUsers(): User[]{
        return this.users;
    }

    getUserById(id: number): User{
        const user = this.users.find(user => user.id == id);

        if(!user){
            throw new NotFoundException(`Usuário com o Id ${id} não encontrado.`)
        }

        return user;
    }

    createUser(user: User): User{
        const newId = this.users.length > 0 ? Math.max(...this.users.map(
            user => user.id)) + 1 : 1;
            
            const newUser: User = {id: newId, ...user};
            
            this.users.push(newUser);

            return newUser;
    }

    updateUser(id: number, user: User): User{
        const index = this.users.findIndex(u => u.id == id);

        if(index !== -1){
            const updateUser = {id, ...user};

            this.users[index] = updateUser;

            return updateUser;
        }
        
        return null;
    }
    
    deteleUser(id: number): void{
        const index = this.users.findIndex(u => u.id == id);
        
        if(index !== -1){
            this.users.splice(index, 1);

        }
    }
}
