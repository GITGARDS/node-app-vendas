import { IUsuario } from "../../models/Usuario";
import { PasswordCrypto } from "../../shared/services";
import { ETableNames } from "../ETableNames";
import { dbKnex } from "../knex";

const create = async (usuario: Omit<IUsuario, 'id'>) => {
  try {
    const hashedPassword = await PasswordCrypto.hashPassword(usuario.senha);

    const [result] = await dbKnex(ETableNames.usuario)
      .insert({ ...usuario, senha: hashedPassword })
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Erro ao cadastrar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar o registro");
  }
};

const getByEmail = async (email: string) => {
  try {
    const result = await dbKnex(ETableNames.usuario)
      .select("*")
      .where("email", "=", email)
      .first();

    if (result) return result;

    return new Error("Registro não encontrado");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar o registro");
  }
};

export const UsuarioProvider = {
  create,
  getByEmail,
};
