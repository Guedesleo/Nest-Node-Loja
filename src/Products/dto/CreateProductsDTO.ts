import { IsArray, IsUUID, ValidateNested } from 'class-validator';
import { FeatureProductsDTO } from './FeatureProductsDTO';
import { Type } from 'class-transformer';
import { ImageProductsDTO } from './ImageProductsDTO';

export class CriaProdutoDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;
  nome: string;
  valor: number;
  quantidade: number;
  descricao: string;
  @ValidateNested()
  @IsArray()
  @Type(() => FeatureProductsDTO)
  caracteristicas: FeatureProductsDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImageProductsDTO)
  imagens: ImageProductsDTO[];
  categoria: string;
}
