declare module "knex/types/tables" {
  interface IEstoque {
    id: number;
    descricao: string;
    urlImagem: string;
  }
  interface Tables {
    estoque: IEstoque;
  }
}
