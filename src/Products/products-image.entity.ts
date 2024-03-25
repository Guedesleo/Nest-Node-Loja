import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
} from 'typeorm';
import { ProductsEntity } from './products.entity';

@Entity({ name: "produto_imagens" })
export  class ImageProductsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "url", length: 100, nullable: false})
    url: string;
    @Column({ name: "descricao", length: 100, nullable: false})
    description: string;
    
    @ManyToOne(()=> ProductsEntity, (products) => products.imagens,{orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    products: ProductsEntity
  }
  