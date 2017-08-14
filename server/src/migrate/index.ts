import * as mongoose from 'mongoose'
import { Cat, User } from '../models'

import cats from './cats'
import users from './users'

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)

cats.forEach(cat   => new Cat(cat).save())
users.forEach(user => new User(user).save())

mongoose.disconnect()
