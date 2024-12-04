import { Router } from "express";
import { UsuarioController, UsuarioValidation } from "../controllers";

const usuarioRoute = Router();

usuarioRoute.post(
  "/cadastrar",
  UsuarioValidation.signUp,
  UsuarioController.signUp
);

usuarioRoute.post(
  "/entrar",
  UsuarioValidation.signIn,
  UsuarioController.signIn
);

export { usuarioRoute };

