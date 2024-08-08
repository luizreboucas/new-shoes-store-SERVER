import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import UserService from './user.service';
import { UserDto } from './userDto';
import { ZodValidationPipe } from 'src/utils/zod-validation-pipe';
import { CreateUserDTO, createUserSchema } from './DTO/CreateUserDTO';
import { UpdateUserDTO, updateUserSchema } from './DTO/UpdateUserDTO';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async createUser(@Body() data: CreateUserDTO) {
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
  @UsePipes(new ZodValidationPipe(updateUserSchema))
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    return await this.userService.update(+id, data);
  }
}
