import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';


@Entity({ name: 'produto_caracteristicas'})
export class FeatureProducts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "nome", length: 100, nullable: false })
    name: string;
    @Column({ name: "descricao", length: 100, nullable: false })
    description: string;
}
  