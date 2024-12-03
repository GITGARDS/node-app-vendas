import { Router } from "express";

const appRoute = Router();

appRoute.get("/", (_, res) => {
  res.send("Ola dev!");
});

export { appRoute };

