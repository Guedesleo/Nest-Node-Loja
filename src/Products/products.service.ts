import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductsEntity } from "./products.entity";
import { Injectable } from "@nestjs/common";
import { UpdateProductsDTO } from "./dto/UpdateProductsDTO";
import { ListProductsDTO } from "./dto/ListProducts.dto";

@Injectable()
export class ProductsService {
        constructor(
                @InjectRepository(ProductsEntity)
                private readonly productsRepository: Repository<ProductsEntity>
        ) {}

        async createProducts(productsEntity: ProductsEntity) {
            await this.productsRepository.save(productsEntity);
        }

        async listProducts() {
            const saveProducts = await this.productsRepository.find();
            const listProducts = saveProducts.map(
              (produto) => new ListProductsDTO(produto.id, produto.name),
            );
            return listProducts;
          }
        
        async updateProducts(id:string, products: UpdateProductsDTO){
            const entityName = await this.productsRepository.findOneBy({ id });
            Object.assign(entityName, products);
            await this.productsRepository.save(entityName);
        }
        
        async deleteProducts(id:string){
            await this.productsRepository.delete(id);
        }
}