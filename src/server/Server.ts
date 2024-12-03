
import express from "express";
import { appRoute, estoqueRoute } from "./routes";

const Server = express();

Server.use(appRoute, estoqueRoute);

export { Server };

