import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

const provider = {
  tabela: ETableNames.estoque,
};

export async function up(knex: Knex) {
  return knex.schema
    .createTable(provider.tabela, (table) => {
      table.bigIncrements("id").primary().index();
      table
        .string("descricao", 150)
        .checkLength(">=", 3)
        .checkLength("<=", 150)
        .index()
        .notNullable();
      table.string("urlImagem").nullable();
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
