import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import UserService from './user.service';
import { UserDto } from './userDto';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body() data: UserDto) {
    console.log('passou aqui controller');
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
  async updateUser(@Param('id') id: string, @Body() data: Partial<UserDto>) {
    return await this.userService.update(+id, data);
  }
}
