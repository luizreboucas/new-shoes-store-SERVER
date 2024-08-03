import { User, PrismaClient } from '@prisma/client';
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
  async create(data: Omit<User, 'id'>) {
    const newData = { ...data, id: undefined };
    return this.prisma.user.create({ data: newData });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, newData: Partial<User>) {
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
