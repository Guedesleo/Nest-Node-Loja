class FeatureProducts {
    nome: string;
    descricao: string;
  }
  
  class ImageProducts {
    url: string;
    descricao: string;
  }
  
  export class ProductsEntity {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    caracteristicas: FeatureProducts[];
    imagens: ImageProducts[];
  }
  