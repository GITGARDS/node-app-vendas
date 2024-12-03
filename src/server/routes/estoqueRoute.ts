import { Router } from "express";
import { EstoqueController } from "../controllers";

const estoqueRoute = Router();

estoqueRoute.get("/estoque", EstoqueController.getAll);
estoqueRoute.get("/estoque/:id", EstoqueController.getById);
estoqueRoute.post("/estoque", EstoqueController.create);
estoqueRoute.put("/estoque/:id", EstoqueController.updateById);
estoqueRoute.delete("/estoque/:id", EstoqueController.deleteById);

export { estoqueRoute };

