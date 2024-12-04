import cors from "cors";
import express from "express";
import { appRoute, estoqueRoute, usuarioRoute } from "./routes";
import { JSONParseError } from "./shared/middleware";
import "./shared/services/TranslationsYup";

const Server = express();

Server.use(
  cors({
    origin: process.env.ENABLED_CORS?.split(";") || [],
  })
);

Server.use(express.json());

Server.use(JSONParseError);

Server.use(appRoute, usuarioRoute, estoqueRoute);

export { Server };

