import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';
import { FeatureProducts } from './products-feature.entity';
import { ImageProducts } from './products-image.entity';

  
@Entity({ name: 'produtos'})
export class ProductsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'usuario_id', length: 100, nullable: false })
  usuarioId: string;
  @Column({ name: 'nome', length: 100, nullable: false })
  name: string;
  @Column({ name: 'valor', nullable: false })
  value: number;
  @Column({ name: 'quantidade', nullable: false })
  quantity: number;
  @Column({ name: 'descricao', length: 255, nullable: false })
  description: string;
  @Column({ name: 'categoria', length: 100, nullable: false })
  category: string;


  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  characteristics: FeatureProducts[];
  imagens: ImageProducts[];
}
  