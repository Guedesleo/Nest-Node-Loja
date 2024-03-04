import { Injectable } from '@nestjs/common';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsRepository {
  private products: ProductsEntity[]= [];

  async salvar(products) {
    this.products.push(products);
  }

  async list() {
    return this.products;
  }

  async update(id:string, update: Partial<ProductsEntity>){
    const products = this.findId(id);

    Object.entries(update).forEach(([key, value])=>{
      if(key == 'id') return

      products[key] = value
    })

    return products;
  }

  async delete(id: string) {
    const products = this.findId(id);

    this.products = this.products.filter(users => users.id !== id)

    return products
  }

  private findId(id: string){
    const possibleProducts = this.products.find( usersCreate => usersCreate.id === id)

    if(!possibleProducts){
      throw new Error("Produto não existe");
    }
    return possibleProducts
  }
}
