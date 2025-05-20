import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from './user.type';

@Injectable()
export class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User): string {
    this.users.push(user);
    return 'user added successfully !';
  }

  getUser(id: number, age: number): User {
    const user = this.users[id - 1];
    if (user.age === age) {
      return user;
    }

    // throw new NotFoundException('User not found');
    throw new HttpException('user not found !', HttpStatus.NOT_FOUND);
  }

  deleteUser(id: number): string {
    if (id < 0 || id > this.users.length) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(id - 1, 1);
    return 'user deleted !';
  }
}

// const userService = new UserService();

// const userController = new UserController(userService);
