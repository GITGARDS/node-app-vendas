import { Router } from "express";
import { EstoqueValidation } from "../controllers";
import { EstoqueController } from "../controllers/Estoque/EstoqueController";
import { ensureAuthenticated } from "../shared/middleware";

const estoqueRoute = Router();

estoqueRoute.get(
  "/estoque",
  ensureAuthenticated, 
  EstoqueValidation.getAll,
  EstoqueController.getAll
);
estoqueRoute.get(
  "/estoque/:id",
  ensureAuthenticated, 
  EstoqueValidation.getById,
  EstoqueController.getById
);
estoqueRoute.post(
  "/estoque",
  ensureAuthenticated, 
  EstoqueValidation.create,
  EstoqueController.create
);
estoqueRoute.put(
  "/estoque/:id",
  ensureAuthenticated, 
  EstoqueValidation.updateById,
  EstoqueController.updateById
);
estoqueRoute.delete(
  "/estoque/:id",
  ensureAuthenticated, 
  EstoqueValidation.deleteById,
  EstoqueController.deleteById
);

export { estoqueRoute };

