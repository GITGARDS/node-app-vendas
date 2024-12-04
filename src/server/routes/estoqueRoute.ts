import { Router } from "express";
import { EstoqueValidation } from "../controllers";
import { EstoqueController } from "../controllers/Estoque/EstoqueController";

const estoqueRoute = Router();

estoqueRoute.get(
  "/estoque",
  EstoqueValidation.getAll,
  EstoqueController.getAll
);
estoqueRoute.get(
  "/estoque/:id",
  EstoqueValidation.getById,
  EstoqueController.getById
);
estoqueRoute.post(
  "/estoque",
  EstoqueValidation.create,
  EstoqueController.create
);
estoqueRoute.put(
  "/estoque/:id",
  EstoqueValidation.updateById,
  EstoqueController.updateById
);
estoqueRoute.delete(
  "/estoque/:id",
  EstoqueValidation.deleteById,
  EstoqueController.deleteById
);

export { estoqueRoute };

