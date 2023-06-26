import { knex } from '../../database'
import { FastifyInstance } from 'fastify'

export async function feedDelete(app: FastifyInstance) {
  app.delete('/feed/:id', async (request, reply) => {
    const params = request.params as { id: string } // Verificação de tipo

    const { id } = params

    try {
      const deleteCount = await knex('feeds').where({ id }).del()

      if (deleteCount === 0) {
        return reply.status(404).send({ error: 'Feed not found' })
      }

      return reply.status(200).send({ message: 'Feed deleted' })
    } catch (error) {
      console.error(error)

      return reply.status(500).send({ error: 'Something went wrong' })
    }
  })
}
