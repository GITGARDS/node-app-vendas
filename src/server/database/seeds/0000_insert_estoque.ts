import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames.estoque).count<
    [{ count: number }]
  >("* as count");
  if (!Number.isInteger(count) || Number(count) > 0) return;
  const dataInsert = datas;
  await knex(ETableNames.estoque).insert(dataInsert);
};

const datas = [
  {
    id: 1,
    descricao: "estoque 1",
    urlImagem: "",
  },
  {
    id: 2,
    descricao: "estoque 2",
    urlImagem: "",
  },
  {
    id: 3,
    descricao: "estoque 3",
    urlImagem: "",
  },
];
