// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/users' {
  export interface User {
    id: string
    email: string
    password: string
  }
}
