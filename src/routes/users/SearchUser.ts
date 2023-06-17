import { knex } from '../../database'
import { FastifyInstance } from 'fastify'

export async function searchUser(app: FastifyInstance) {
  app.get('/:id', async (request, reply) => {
    const { id } = request.params as any
    console.log(id)

    try {
      // Busque o usuário com o ID específico no banco de dados
      const user = await knex('users').where('id', id).first()

      if (!user) {
        return reply.status(404).send({ error: 'User not found' })
      }

      return reply.send(user)
    } catch (error) {
      return reply.status(500).send({ error: 'Internal server error' })
    }
  })
}
