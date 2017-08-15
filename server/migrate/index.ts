import * as mongoose from 'mongoose'
import { Cat, User } from '../src/models'

import cats from './cats'
import users from './users'

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || 27017
const DB_NAME = process.env.DB_NAME || 'qitta'

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useMongoClient: true,
})

cats.forEach(cat => new Cat(cat).save())
users.forEach(user => new User(user).save())

mongoose.disconnect()
