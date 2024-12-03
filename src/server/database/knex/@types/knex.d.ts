export interface IEstoque {
  id: number;
  descricao: string;
  urlImagem: string;
}
declare module "knex/types/tables" {
  interface Tables {
    estoque: IEstoque;
  }
}
