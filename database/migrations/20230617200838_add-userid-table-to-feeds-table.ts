import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('feeds', (table) => {
    table.integer('user_id').unsigned().notNullable()
    table.foreign('user_id').references('users.id')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('feeds', (table) => {
    table.dropColumn('user_id')
    table.dropColumn('user_id')
  })
}
