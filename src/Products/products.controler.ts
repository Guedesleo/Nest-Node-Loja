import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsRepository } from './products.respository';
import { randomUUID } from 'crypto';
import { ProductsEntity } from './products.entity';
import { UpdateProductsDTO } from './dto/UpdateProductsDTO';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(
    private productsRepository: ProductsRepository,
    private readonly productsSerivce:  ProductsService
    ) {}

  @Post()
  async create(@Body() bodyusers) {
    const produto = new ProductsEntity();


    produto.id = randomUUID();
    produto.name = bodyusers.name;
    produto.usuarioId = bodyusers.usuarioId;
    produto.value = bodyusers.value;
    produto.quantity = bodyusers.quantity;
    produto.description = bodyusers.description;
    produto.category = bodyusers.category;
    // produto.characteristics = bodyusers.characteristics;
    // produto.imagens = bodyusers.imagens;

    const produtoCadastrado = this.productsSerivce.createProducts(produto);
    return produtoCadastrado;
  }

  @Get()
  async LisUsers() {
    return this.productsSerivce.listProducts();
  }

  @Put('/:id')
  async updateBody(@Param('id') id: string, @Body() updateUser: UpdateProductsDTO){
    const userUpdate =  await this.productsSerivce.updateProducts(id, updateUser)

    return{
      user: userUpdate,
      message: 'Produto atualizado com sucesso.'
    }
  };

  @Delete('/:id')
  async deleteUsers(@Param('id') id: string) {
    const userDelete = await this.productsSerivce.deleteProducts(id);

    return {
      user: userDelete,
      message: 'Produto deletado com sucesso.'
    }
  }
}
