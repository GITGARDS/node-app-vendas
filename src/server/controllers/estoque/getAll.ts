import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EstoqueProvider } from "../../database/providers";

interface IQueryProps {
  id?: number;
  page?: number;
  limit?: number;
  filter?: string;
}

const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  const result = await EstoqueProvider.getAll(
    req.query.page || 1,
    req.query.limit || 7,
    req.query.filter || "",
    Number(req.query.id || 0)
  );
  const count = await EstoqueProvider.count(req.query.filter);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message },
    });
  } else if (count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: count.message },
    });
  }

  res.setHeader("access-control-expose-headers", "x-total-count");
  res.setHeader("x-total-count", count);

  return res.status(StatusCodes.OK).json(result);
};

export { getAll };

