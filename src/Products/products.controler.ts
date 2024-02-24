import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsRepository } from './products.respository';

@Controller('/products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}

  @Post()
  async create(@Body() bodyusers) {
    this.productsRepository.salvar(bodyusers);
    return bodyusers;
  }

  @Get()
  async LisUsers() {
    return this.productsRepository.list();
  }
}
