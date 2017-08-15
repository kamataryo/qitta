import * as express from 'express'
import * as bodyParser from 'body-parser'
import mongoose = require('mongoose')

import postCats from './routes/cats/post'
import getCats from './routes/cats/get/plural'
import getCat from './routes/cats/get/singular'
import putCat from './routes/cats/put'
import deleteCat from './routes/cats/delete'

import postUser from './routes/users/post'
import getUsers from './routes/users/get/plural'
import getUser from './routes/users/get/singular'

const app = express()

const DB_HOST = process.env.QITTA_DB_HOST || 'localhost'
const DB_PORT = process.env.QITTA_DB_PORT || 27017
const DB_NAME = process.env.QITTA_DB_NAME || 'qitta'

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useMongoClient: true,
})

app
  // middlewares
  .use(bodyParser.json())
  // endpoints
  .get('/', (_0, res) => res.status(200).json({ message: 'OK' }))
  //// cat
  .post(  '/cats',     postCats)
  .get(   '/cats',     getCats)
  .get(   '/cats/:id', getCat)
  .put(   '/cats/:id', putCat)
  .delete('/cats/:id', deleteCat)
  //// users
  .post(  '/users',           postUser)
  .get(   '/users',           getUsers)
  .get(   '/users/:username', getUser)

app.listen(3001, () => {
  process.stdout.write('[application] Server is listening...')
})
