import { Router } from "express";

const appRouter = Router();

appRouter.get("/", (_, res) => {
  res.send("Ola dev!");
});

export { appRouter };

