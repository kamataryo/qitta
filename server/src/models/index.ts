import * as mongoose from 'mongoose'

const Schema = mongoose.Schema
// Use global Promise
// mongoose.Promise = global.Promise

// TODO I want to check those types with lib/convert function

mongoose.model('Cat', new Schema({
  name : { type: String, required: true },
}))

mongoose.model('User', new Schema({
  username    : {
    type     : String,
    required : true,
    unique   : true,
  },
  password    : { type: String, required: true },
  displayName : { type: String, required: true },
  isGroup     : { type: Boolean,  default: false },
  cats        : { type: [Number], default: [] },
  members     : { type: [String], default: [] },
}))

export const Cat  = mongoose.model('Cat')
export const User = mongoose.model('User')
