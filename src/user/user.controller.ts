import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getAllUsers(): User[]{
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id:number): User{
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: User): User{
        return this.userService.createUser(user);
    }

    @Put()
    updateUser(@Body('id') id:number, @Body() user:User): User{
        return this.userService.updateUser(id,user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id:number): void{
        this.userService.deteleUser(id);
    }
}
