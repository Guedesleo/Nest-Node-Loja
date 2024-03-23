import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: "produto_imagens" })
export  class ImageProducts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "url", length: 100, nullable: false})
    url: string;
    @Column({ name: "descricao", length: 100, nullable: false})
    description: string;
  }
  