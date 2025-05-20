import { Injectable } from '@nestjs/common';
import { UserController } from './user.controller';

@Injectable()
export class UserService {
  private users: any[];

  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(user: any): string {
    this.users.push(user);
    return 'user added successfully !';
  }

  getUser(id: number, age: number): any {
    const user = this.users[id - 1];
    if (user.age === age) {
      return user;
    }

    return 'not found';
  }

  deleteUser(id: number): string {
    if (id < 0 || id > this.users.length) {
      return 'user not found';
    }
    this.users.splice(id - 1, 1);
    return 'user deleted !';
  }
}

// const userService = new UserService();

// const userController = new UserController(userService);
