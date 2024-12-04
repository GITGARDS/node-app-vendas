import { IEstoque } from "../../../models";
import { IUsuario } from "../../../models/Usuario";

declare module "knex/types/tables" {
  interface Tables {
    estoque: IEstoque;
    usuario: IUsuario;
  }
}
