import "dotenv/config";

import { Server } from "./server/Server";
import { dbKnex } from "./server/database/knex";
const port = process.env.PORT || 3333;

const startServer = () => {
  Server.listen(port, () => {
    console.log("App rodando na porta: ", port);
  });
};

if (process.env.IS_LOCALHOST === "true") {
  startServer();
} else {
  console.log("Rodando migrations");
  dbKnex.migrate
    .latest()
    .then(() => {
      dbKnex.seed
        .run()
        .then(() => startServer())
        .catch(console.log);
    })
    .catch(console.log);
}
