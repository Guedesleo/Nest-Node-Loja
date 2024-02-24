import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private products = [];

  async salvar(products) {
    this.products.push(products);
  }

  async list() {
    return this.products;
  }
}
