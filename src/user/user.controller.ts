import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.type';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  // composition !!
  // private userService:UserService;
  // constructor() {
  //   this.userService = new UserService()
  // }

  @Get()
  getAll(): User[] {
    return this.userService.getUsers();
  }

  @Post()
  addUser(@Body() user: User) {
    return this.userService.addUser(user);
  }

  @Get(':id')
  getById(@Param('id') id: number, @Query('age') age: number): User {
    return this.userService.getUser(+id, +age);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): string {
    return this.userService.deleteUser(+id);
  }
}
