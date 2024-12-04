import "dotenv/config";
import knex from "knex";
import { development, production, test } from "./Environment";

enum EEnvironment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case EEnvironment.PRODUCTION:
      return production;             
    case EEnvironment.DEVELOPMENT:
      return development;             
    default:
      return test;
  }
};

export const dbKnex = knex(getEnvironment());
