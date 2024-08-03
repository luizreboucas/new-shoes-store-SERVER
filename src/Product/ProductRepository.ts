import { PrismaClient, Product } from '@prisma/client';

export class ProductRepository {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }
  async getAll() {
    return this.prismaClient.product.findMany();
  }

  async getOneById(id: number) {
    return await this.prismaClient.product.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: Product) {
    if (data.name && data.price) {
      try {
        const product = await Product.create({
          data: {
            name: data.name,
            price: data.price,
          },
        });
        return product;
      } catch (error) {
        throw new Error('erro ao criar produto');
      }
    }
  }

  async delete(id: number) {
    return await Product.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, newData: Partial<Product>) {
    return await Product.update({
      where: {
        id,
      },
      data: {
        name: newData.name,
        price: newData.price,
      },
    });
  }
}
