type ProductIds = {
  id: number;
};

export class PurchaseDto {
  id?: number;
  date?: Date;
  total?: number;
  userId?: number;
  products?: ProductIds[];

  constructor(data: Partial<PurchaseDto>) {
    Object.assign(this, data);
  }
}
