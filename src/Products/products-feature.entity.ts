import {
    Entity,
    Column,
  } from 'typeorm';


@Entity({ name: 'produto_caracteristicas'})
export class FeatureProducts {
    @Column({ name: "nome", length: 100, nullable: false })
    name: string;
    @Column({ name: "descricao", length: 100, nullable: false })
    description: string;
}
  