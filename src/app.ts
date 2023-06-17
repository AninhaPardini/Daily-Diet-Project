import fastify from 'fastify'
/* import { transactionsRoutes } from './routes/transactions' */
import cookie from '@fastify/cookie'
import { userRegister } from './routes/users/registerUser'
import { userListAll } from './routes/users/listAllUsers'
import { searchUser } from './routes/users/SearchUser'

export const app = fastify()

app.register(cookie)

/* app.get('/login', async () => {
  const userLogin = await knex('users')
    .insert({
      id: randomUUID(),
      email: 'example@email.com',
      password: 'senha123',
    })
    .returning('*')

  return userLogin
}) */

/* app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
}) */

app.register(userRegister, {
  prefix: 'users',
})

app.register(userListAll, {
  prefix: 'users',
})

app.register(searchUser, {
  prefix: 'users',
})
