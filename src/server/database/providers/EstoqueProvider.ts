import { IEstoque } from "../../models";
import { Environment } from "../../shared/environment";
import { ETableNames } from "../ETableNames";
import { dbKnex } from "../knex";

const provider = {
  tabela: ETableNames.estoque,
};

interface IBodyProps extends Omit<IEstoque, "id"> {}

const getAll = async (page: number, limit: number, filter: string, id = 0) => {
  try {
    const result = await dbKnex(provider.tabela)
      .select("*")
      .where("id", Number(id))
      .orWhere("descricao", "like", `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0 && result.every((item) => item.id !== id)) {
      const resultById = await dbKnex(provider.tabela)
        .select("*")
        .where("id", "=", id)
        .first();

      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    console.log(error);
    return new Error(Environment.ERRO_AO_TENTAR_CONSULTAR_REGISTROS);
  }
};

const getById = async (id: number) => {
  try {
    const result = await dbKnex(provider.tabela)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error(Environment.ERRO_AO_TENTAR_CONSULTAR_REGISTRO);
  } catch (error) {
    return new Error(Environment.ERRO_AO_TENTAR_CONSULTAR_REGISTRO);
  }
};

const create = async (obj: IBodyProps) => {
  console.log("obj", obj);
  try {
    const [result] = await dbKnex(provider.tabela).insert(obj).returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }
    return new Error(Environment.ERRO_AO_TENTAR_CADASTRAR);
  } catch (error) {
    console.log(error);
    return new Error(Environment.ERRO_AO_TENTAR_CADASTRAR);
  }
};

export const updateById = async (id: number, obj: IBodyProps) => {
  try {
    const result = await dbKnex(provider.tabela)
      .update(obj)
      .where("id", "=", id);

    if (result > 0) return;

    return new Error(Environment.ERRO_AO_TENTAR_ALTERAR);
  } catch (error) {
    return new Error(Environment.ERRO_AO_TENTAR_ALTERAR);
  }
};
export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await dbKnex(provider.tabela).where("id", "=", id).del();

    if (result > 0) return;

    return new Error(Environment.ERRO_AO_TENTAR_EXCLUIR);
  } catch (error) {
    return new Error(Environment.ERRO_AO_TENTAR_EXCLUIR);
  }
};

export const count = async (filter = ""): Promise<number | Error> => {
  try {
    const [{ count }] = await dbKnex(provider.tabela)
      .where("descricao", "like", `%${filter}%`)
      .count<[{ count: number }]>("* as count");

    if (Number.isInteger(Number(count))) return Number(count);

    return new Error(Environment.ERRO_AO_TENTAR_CONSULTAR_TOTAL_REGISTROS);
  } catch (error) {
    return new Error(Environment.ERRO_AO_TENTAR_CONSULTAR_TOTAL_REGISTROS);
  }
};

export const EstoqueProvider = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  count,
};
