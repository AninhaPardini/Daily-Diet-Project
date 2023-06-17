import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('feeds', (table) => {
    table.string('name').notNullable()
    table.string('description')
  })
}

export async function down(knex: Knex): Promise<void> {}
