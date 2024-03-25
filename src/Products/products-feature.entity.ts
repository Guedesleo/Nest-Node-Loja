import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
  } from 'typeorm';
import { ProductsEntity } from './products.entity';


@Entity({ name: 'produto_caracteristicas'})
export class FeatureProductsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "nome", length: 100, nullable: false })
    name: string;
    @Column({ name: "descricao", length: 100, nullable: false })
    description: string;

    @ManyToOne(()=> ProductsEntity, (products) => products.characteristics,
    {orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    products: ProductsEntity
}
  