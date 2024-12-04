import * as yup from "yup";
import { IEstoque } from "../../models";
import { validation } from "../../shared/middleware";

interface IBodyProps extends Omit<IEstoque, "id"> {}
interface IParamProps {
  id?: number;
}

interface IQueryProps {
  id?: number;
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAll = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      id: yup.number().integer().optional().default(0),
      filter: yup.string().optional(),
    })
  ),
}));

export const getById = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const create = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3).max(150),
      urlImagem: yup.string().nonNullable(),
    })
  ),
}));

export const updateById = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      descricao: yup.string().required().min(3).max(150),
      urlImagem: yup.string().nonNullable(),
    })
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const deleteById = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));
export const EstoqueValidation = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
