import { knex } from '../../database'
import { FastifyInstance } from 'fastify'

export async function userListAll(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    const users = await knex('users').select('*')

    return users
  })
}
