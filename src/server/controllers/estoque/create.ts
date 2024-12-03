import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IEstoque } from "../../database/knex/@types/knex";
import { EstoqueProvider } from "../../database/providers";

const create = async (req: Request<{}, {}, IEstoque>, res: Response) => {
  const result = await EstoqueProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};

export { create };

