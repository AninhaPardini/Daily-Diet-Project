import { knex } from '../../database'
import { FastifyInstance } from 'fastify'
import { randomUUID } from 'crypto'
import { z } from 'zod'

export async function feedRegister(app: FastifyInstance) {
  app.post('/newfeed', async (request, reply) => {
    const createFeedBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      date: z.string(),
      is_diet: z.boolean(),
      user_id: z.string(),
    })

    const { name, description, is_diet, user_id, date } =
      createFeedBodySchema.parse(request.body)

    // Converter a string 'date' para um objeto Date
    const parsedDate = new Date(date)

    if (!name || !parsedDate || !is_diet || !user_id) {
      return reply
        .status(400)
        .send({ error: 'name, date, diet or user_id are required' })
    }

    try {
      await knex('feeds')
        .insert({
          id: randomUUID(),
          name,
          description,
          date: parsedDate,
          is_diet,
          user_id,
        })
        .returning('*')

      return reply.status(201).send({ message: 'Feed registred!' })
    } catch (error) {
      return reply.status(500).send({
        error: 'Something went wrong',
      })
    }
  })
}
