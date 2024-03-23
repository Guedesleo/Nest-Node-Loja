import { ProductsEntity } from "../products.entity";

export class FeatureProductsDTO {
  id: string;
  name: string;
  description: string;
  products: ProductsEntity
}
