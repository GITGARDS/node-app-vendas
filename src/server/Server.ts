import express from "express";
import { appRoute, estoqueRoute, usuarioRoute } from "./routes";
import "./shared/services/TranslationsYup";

const Server = express();

Server.use(express.json());

// Server.use(JSONParseError);

Server.use(appRoute, usuarioRoute, estoqueRoute);

export { Server };

