import * as mongoose from 'mongoose'

const Schema = mongoose.Schema
// Use global Promise
// mongoose.Promise = global.Promise

mongoose.model('Cat', new Schema({
  id   : Number,
  name : String,
}))

mongoose.model('User', new Schema({
  username    : Number,
  password    : String,
  displayName : String,
  isGroup     : Boolean,
  members     : [String],
  cats        : [Number],
}))

export const Cat  = mongoose.model('Cat')
export const User = mongoose.model('User')
