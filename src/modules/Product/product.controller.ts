import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './DTO/CreateProductDto';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getAll() {
    return await this.productService.getAll();
  }

  @Get('/:id')
  async getOneById(@Param('id') id: string) {
    return await this.productService.getOneById(+id);
  }

  @Post()
  async create(@Body() data: Partial<ProductDto>) {
    return await this.productService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() newData: Partial<ProductDto>) {
    return await this.productService.update(+id, newData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.productService.delete(+id);
  }
}
