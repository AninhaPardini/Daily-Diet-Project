import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('feeds', (table) => {
    table.uuid('id').primary().notNullable().unique()
    table.string('name').notNullable()
    table.string('description').nullable()
    table.dateTime('date').notNullable()
    table.boolean('is_diet').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('feeds')
}
