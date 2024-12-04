import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.estoque, (table) => {
      table.bigIncrements("id").primary().index();
      table
        .string("descricao", 150)
        .checkLength(">=", 3)
        .checkLength("<=", 150)
        .index()
        .notNullable();
      table.string("urlImagem").nullable();
      table.comment(
        `Tabela usada para armazenar ${ETableNames.estoque} do sistema!`
      );
    })

    .then(() => {
      console.log(`Create Table ${ETableNames.estoque}.`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.estoque).then(() => {
    console.log(`# Dropped table ${ETableNames.estoque}`);
  });
}
