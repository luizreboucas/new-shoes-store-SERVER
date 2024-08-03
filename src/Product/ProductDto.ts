export class ProductDto {
  id?: number;
  name?: string;
  price?: number;
  photo?: string;

  constructor(data: Partial<ProductDto>) {
    Object.assign(this, data);
  }
}
