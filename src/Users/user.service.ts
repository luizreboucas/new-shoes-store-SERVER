import { UserDto } from './userDto';
import UserRepository from './userRepository';
import { User } from '@prisma/client';

export default class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  public create = async (data: UserDto) => {
    console.log('passou aqui service');
    return await this.userRepository.create(data);
  };

  public getAll = async () => {
    return await this.userRepository.getAll();
  };

  public getOneById = async (id: number) => {
    return await this.userRepository.getOneById(id);
  };

  public delete = async (id: number) => {
    return await this.userRepository.delete(id);
  };

  public update = async (id: number, newData: Partial<User>) => {
    return await this.userRepository.update(id, newData);
  };
}
