import { knex } from '../../database'
import { FastifyInstance } from 'fastify'

export async function feedListAll(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    const feeds = await knex('feeds').select('*')

    return feeds
  })
}
