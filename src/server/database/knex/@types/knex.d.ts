import { IEstoque } from "../../../models";

declare module "knex/types/tables" {
  interface Tables {
    estoque: IEstoque;
  }
}
