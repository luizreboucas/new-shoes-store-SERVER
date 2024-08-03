import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import UserService from './user.service';
import { UserDto } from './userDto';
import { User } from '@prisma/client';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body() data: User) {
    return await this.userService.create(data);
  }
  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: string) {
    return await this.userService.getOneById(Number(id));
  }

  @Put('/:id')
  async create(@Param('id') id: number, @Body() data: UserDto) {
    return await this.userService.update(id, data.makeFromInput());
  }
}
