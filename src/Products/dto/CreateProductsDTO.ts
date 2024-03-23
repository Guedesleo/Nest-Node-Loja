import { IsArray, IsUUID, ValidateNested } from 'class-validator';
import { FeatureProductsDTO } from './FeatureProductsDTO';
import { Type } from 'class-transformer';
import { ImageProductsDTO } from './ImageProductsDTO';

export class CriaProdutoDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usersId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => FeatureProductsDTO)
  characteristics: FeatureProductsDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImageProductsDTO)
  imagens: ImageProductsDTO[];

  category: string;
}
