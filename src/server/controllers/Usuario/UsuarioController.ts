import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsuarioProvider } from "../../database/providers";
import { IUsuario } from "../../models/Usuario";
import { JWTService, PasswordCrypto } from "../../shared/services";

const signIn = async (
  req: Request<{}, {}, Omit<IUsuario, "id" | "nome">>,
  res: Response
) => {
  const { email, senha } = req.body;

  const usuario = await UsuarioProvider.getByEmail(email);
  
  if (usuario instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email ou senha são inválidos",
      },
    });
  }

  const passwordMatch = await PasswordCrypto.verifyPassword(
    senha,
    usuario.senha
  );
  if (!passwordMatch) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: "Email ou senha são inválidos",
      },
    });
  } else {
    const accessToken = JWTService.sign({ uid: usuario.id });
    if (accessToken === "JWT_SECRET_NOT_FOUND") {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: "Erro ao gerar o token de acesso",
        },
      });
    }

    return res.status(StatusCodes.OK).json({ accessToken });
  }
};

const signUp = async (
  req: Request<{}, {}, Omit<IUsuario, "id">>,
  res: Response
) => {
  const result = await UsuarioProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};

export const UsuarioController = {
  signIn,
  signUp,
};
