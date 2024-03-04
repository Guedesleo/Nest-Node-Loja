import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsRepository } from './products.respository';
import { randomUUID } from 'crypto';
import { ProductsEntity } from './products.entity';
import { UpdateProductsDTO } from './dto/UpdateProductsDTO';

@Controller('/products')
export class ProductsController {
  constructor(private productsRepository: ProductsRepository) {}

  @Post()
  async create(@Body() bodyusers) {
    const produto = new ProductsEntity();


    produto.id = randomUUID();
    produto.nome = bodyusers.nome;
    produto.usuarioId = bodyusers.usuarioId;
    produto.valor = bodyusers.valor;
    produto.quantidade = bodyusers.quantidade;
    produto.descricao = bodyusers.descricao;
    produto.categoria = bodyusers.categoria;
    produto.caracteristicas = bodyusers.caracteristicas;
    produto.imagens = bodyusers.imagens;

    const produtoCadastrado = this.productsRepository.salvar(produto);
    return produtoCadastrado;
  }

  @Get()
  async LisUsers() {
    return this.productsRepository.list();
  }

  @Put('/:id')
  async updateBody(@Param('id') id: string, @Body() updateUser: UpdateProductsDTO){
    const userUpdate =  await this.productsRepository.update(id, updateUser)

    return{
      user: userUpdate,
      message: 'Produto atualizado com sucesso.'
    }
  };

  @Delete('/:id')
  async deleteUsers(@Param('id') id: string) {
    const userDelete = await this.productsRepository.delete(id);

    return {
      user: userDelete,
      message: 'Produto deletado com sucesso.'
    }
  }
}
