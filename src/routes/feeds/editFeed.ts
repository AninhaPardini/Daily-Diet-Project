import { knex } from '../../database'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function feedUpdate(app: FastifyInstance) {
  app.put('/feed/:id', async (request, reply) => {
    const params = request.params as { id: string } // Verificação de tipo

    const { id } = params

    const updateFeedBodySchema = z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      date: z.string().optional(),
      is_diet: z.boolean().optional(),
      user_id: z.string().optional(),
    })

    try {
      const updatedFields = updateFeedBodySchema.parse(request.body)

      // Filtrar apenas as propriedades definidas e remover valores undefined
      const filteredFields = Object.fromEntries(
        // converte matriz filtrada em objetvo novamente
        Object.entries(updatedFields).filter(
          // Transforma em array de duplas
          // filtrar os itens que tem nome e valor
          ([_, value]) => value !== undefined,
        ),
      )

      if (Object.keys(filteredFields).length === 0) {
        return reply.status(400).send({ error: 'No valid fields to update' })
      }
      // Atualizando
      await knex('feeds').where({ id }).update(filteredFields)

      return reply.status(200).send({ message: 'Feed updated' })
    } catch (error) {
      console.error(error)

      return reply.status(500).send({ error: 'Something went wrong' })
    }
  })
}
