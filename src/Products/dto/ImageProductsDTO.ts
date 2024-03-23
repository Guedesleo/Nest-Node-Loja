import { ProductsEntity } from "../products.entity";

export class ImageProductsDTO {
  id:string;
  url: string;
  description: string;
  products: ProductsEntity
}
