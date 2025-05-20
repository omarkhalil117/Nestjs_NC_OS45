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

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  // composition !!
  // private userService:UserService;
  // constructor() {
  //   this.userService = new UserService()
  // }

  @Get()
  getAll(): any[] {
    return this.userService.getUsers();
  }

  @Post()
  addUser(@Body() user: any) {
    return this.userService.addUser(user);
  }

  @Get(':id')
  getById(@Param('id') id: number, @Query('age') age: number): any {
    return this.userService.getUser(+id, +age);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(+id);
  }
}
