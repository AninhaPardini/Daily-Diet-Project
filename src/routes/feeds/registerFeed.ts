import { knex } from '../../database'
import { FastifyInstance } from 'fastify'
import { randomUUID } from 'crypto'
import { z } from 'zod'

export async function feedRegister(app: FastifyInstance) {
  app.post('/newfeed', async (request, reply) => {
    const createFeedBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      date: z.date(),
      is_diet: z.boolean(),
      user_id: z.string(),
    })

    const { name, description, date, is_diet } = createFeedBodySchema.parse(
      request.body,
    )

    if (!name || !date || !is_diet) {
      return reply
        .status(400)
        .send({ error: 'name, date or diet are required' })
    }

    try {
      await knex('feeds')
        .insert({ id: randomUUID(), name, description, date, is_diet, user_id })
        .returning('*')

      return reply.status(201).send({ message: 'User created!' })
    } catch (error) {
      return reply.status(500).send({
        error: 'Something went wrong',
      })
    }
  })
}
