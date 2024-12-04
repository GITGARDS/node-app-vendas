import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

const provider = {
  tabela: ETableNames.usuario,
};

export async function up(knex: Knex) {
  return knex.schema
    .createTable(provider.tabela, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("nome").notNullable().checkLength(">=", 3);
      table.string("senha").notNullable().checkLength(">=", 6);
      table.string("email").index().unique().notNullable().checkLength(">=", 5);
      table.comment(
        `Tabela usada para armazenar ${provider.tabela} do sistema!`
      );
    })

    .then(() => {
      console.log(`Create Table ${provider.tabela}.`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(provider.tabela).then(() => {
    console.log(`# Dropped table ${provider.tabela}`);
  });
}
