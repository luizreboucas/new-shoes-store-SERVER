import { Injectable } from '@nestjs/common';
import { ProductDto } from './ProductDto';
import { ProductRepository } from './ProductRepository';

@Injectable()
export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(data: ProductDto) {
    return await this.productRepository.create(data);
  }

  async getAll() {
    return await this.productRepository.getAll();
  }

  async getOneById(id: number) {
    return await this.productRepository.getOneById(id);
  }

  async delete(id: number) {
    return await this.productRepository.delete(id);
  }

  async update(id: number, newData: Partial<ProductDto>) {
    return await this.productRepository.update(id, newData);
  }
}
