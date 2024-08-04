import { Injectable } from '@nestjs/common';
import { PurchaseRepository } from './PurchaseRepository';
import { PurchaseDto } from './PurchaseDto';

@Injectable()
export class PurchaseService {
  private purchaseRepository: PurchaseRepository;
  constructor() {
    this.purchaseRepository = new PurchaseRepository();
  }

  async create(data: Partial<PurchaseDto>) {
    return await this.purchaseRepository.create(data);
  }

  async getAll() {
    return await this.purchaseRepository.getAll();
  }

  async getOneById(id: number) {
    return await this.purchaseRepository.getOneById(id);
  }

  async delete(id: number) {
    return await this.purchaseRepository.delete(id);
  }

  async update(id: number, newData: Partial<PurchaseDto>) {
    return await this.purchaseRepository.update(id, newData);
  }
}
