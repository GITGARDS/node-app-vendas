
import express from "express";
import { appRouter } from "./router";

const Server = express();

Server.use(appRouter);

export { Server };

