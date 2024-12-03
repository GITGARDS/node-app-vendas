import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.ESTOQUE, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("descricao", 150).index().notNullable();
      table.string("urlImagem").nullable();
      table.comment(
        `Tabela usada para armazenar ${ETableNames.ESTOQUE} do sistema!`
      );
    })
    .then(() => {
      console.log(`Create Table ${ETableNames.ESTOQUE}.`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.ESTOQUE).then(() => {
    console.log(`# Dropped table ${ETableNames.ESTOQUE}`);
  });
}
