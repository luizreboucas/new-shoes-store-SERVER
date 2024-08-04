import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseDto } from './PurchaseDto';

@Controller('/purchases')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Get()
  async getAll() {
    return await this.purchaseService.getAll();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: string) {
    return await this.purchaseService.getOneById(+id);
  }

  @Post()
  async create(@Body() data: Partial<PurchaseDto>) {
    return await this.purchaseService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() newData: Partial<PurchaseDto>) {
    return await this.purchaseService.update(+id, newData);
  }
}
