import { PrismaClient } from '@prisma/client';
import { UserDto } from './userDto';
export class UserRepository {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async getAll() {
    return this.prisma.user.findMany();
  }

  async getOneById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async create(data: UserDto) {
    if (data.name && data.email && data.password) {
      try {
        // Verificar se o profileId existe
        if (data.profileId) {
          await this.prisma.profile.findUniqueOrThrow({
            where: { id: data.profileId },
          });
        } else {
          throw new Error('profileId is required');
        }
        console.log('data => ', data);
        const user = await this.prisma.user.create({
          data: {
            email: data.email,
            password: data.password,
            name: data.name,
            adress: data.adress,
            profileId: data.profileId,
          },
        });
        return user;
      } catch (error) {
        throw new Error('erro ao criar usuário');
      }
    }
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, newData: Partial<UserDto>) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...newData,
      },
    });
  }
}

export default UserRepository;
