import "dotenv/config";

import { Server } from "./server/Server";
const port = process.env.PORT || 3333;

const startServer = () => {
  Server.listen(port, () => {
    console.log("App rodando na porta: ", port);
  });
};

startServer();
