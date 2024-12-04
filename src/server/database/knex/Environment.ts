import { Knex } from "knex";
import path from "path";

const environment: Knex.Config = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "database.sqlite"
    ),
  },
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
};

export const development: Knex.Config = {
  ...environment,
};
export const production: Knex.Config = {
  ...environment,
};
export const test: Knex.Config = {};
