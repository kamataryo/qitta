import * as mongoose from 'mongoose'

const Schema = mongoose.Schema
// Use global Promise
// mongoose.Promise = global.Promise

// TODO I want to check those types with lib/convert function

mongoose.model('Cat', new Schema({
  id   : Number,
  name : String,
}))

mongoose.model('User', new Schema({
  username    : String,
  password    : String,
  displayName : String,
  isGroup     : Boolean,
  cats        : [Number],
  members     : [String],
}))

export const Cat  = mongoose.model('Cat')
export const User = mongoose.model('User')
