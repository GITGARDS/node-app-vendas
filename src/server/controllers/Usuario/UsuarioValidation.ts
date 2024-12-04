import * as yup from "yup";
import { IUsuario } from "../../models/Usuario";
import { validation } from "../../shared/middleware";

const signIn = validation((getSchema) => ({
  body: getSchema<Omit<IUsuario, "id" | "nome">>(
    yup.object().shape({
      senha: yup.string().required().min(6),
      email: yup.string().required().email().min(5),
    })
  ),
}));

const signUp = validation((getSchema) => ({
  body: getSchema<Omit<IUsuario, "id">>(
    yup.object().shape({
      nome: yup.string().required().min(3),
      senha: yup.string().required().min(6),
      email: yup.string().required().email().min(5),
    })
  ),
}));

export const UsuarioValidation = {
  signIn,
  signUp,
};
