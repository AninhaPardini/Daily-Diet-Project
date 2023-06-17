import { knex } from '../../database'
import { FastifyInstance } from 'fastify'
import { randomUUID } from 'crypto'
import { z } from 'zod'

export async function userRegister(app: FastifyInstance) {
  app.post('/register', async (request, reply) => {
    const createUserBodySchema = z.object({
      email: z.string(),
      password: z.string(),
    })

    const { email, password } = createUserBodySchema.parse(request.body)

    if (!email || !password) {
      return reply
        .status(400)
        .send({ error: 'Email and password are required' })
    }

    const emailAlreadyExistis = await knex('users')
      .where('email', email)
      .first()
    console.log(emailAlreadyExistis)

    if (emailAlreadyExistis) {
      return reply.status(400).send({
        error: 'Email already exists',
      })
    }

    try {
      await knex('users')
        .insert({ id: randomUUID(), email, password })
        .returning('*')

      return reply.status(201).send({ message: 'User created!' })
    } catch (error) {
      return reply.status(500).send({
        error: 'Something went wrong',
      })
    }
  })
}
