import { User, PrismaClient } from '@prisma/client';

class UserRepository implements User {
  prisma: PrismaClient;
  id: number;
  email: string;
  password: string;
  name: string;
  adress: string;

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
  async create(data: Omit<User, 'id'>) {
    return this.prisma.user.create({ data });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(newData: User) {
    return await this.prisma.user.update({
      where: {
        id: newData.id,
      },
      data: {
        ...newData,
      },
    });
  }
}

export default UserRepository;
