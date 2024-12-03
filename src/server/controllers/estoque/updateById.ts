import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IEstoque } from "../../database/knex/@types/knex";
import { EstoqueProvider } from "../../database/providers";

interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<IEstoque, "id"> {}

const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.',
      },
    });
  }
  const result = await EstoqueProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }
  return res.status(StatusCodes.NO_CONTENT).json(result);
};

export { updateById };

