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
import deleteUser from './routes/users/delete'
import deleteGroup from './routes/group/delete'

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
  .use((_0, res, next) => {
    res
      .header('Access-Control-Allow-Origin', '*')
      .header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })
  // preflight
  .options('*', (_0, res) => {
    res
      .header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE')
      .header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
      .status(200)
      .json({ message: 'OK' })
  })
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
  .delete('/users/:username', deleteUser)
  //// groups
  // .post(  '/groups',           postUser)
  // .get(   '/groups',            getUsers)
  // .get(   '/groups/:groupname', getUser)
  ////// user's cats
  .post(  '/users/:owner/cats', postCats)
  .get(   '/users/:owner/cats', getCats)
  .get(   '/users/:owner/cats/:id', getCat)
  .delete('/users/:owner/cats/:id', deleteCat)
  ////// user's group
  // .get(   '/users/:username/groups', getGroup)
  .post(  '/users/:username/groups', postUser) // TODO enforce isGroup Prop to be true and the user included
  .delete('/users/:username/groups/:groupname', deleteGroup)
  .use((_0, res, _2) => {
    res.status(404).json({ message: 'endpoint not found.' })
  })

app.listen(3001, () => {
  process.stdout.write('[application] Server is listening...')
})
