import * as mongoose from 'mongoose'

const Schema = mongoose.Schema
// Use global Promise
// mongoose.Promise = global.Promise

// TODO I want to check those types with lib/convert function

mongoose.model('Cat', new Schema({
  name  : { type: String, required: true },
  owner : { type: String },
}))

// User and Group Model
mongoose.model('User', new Schema({
  username       : { type: String, required: true, unique: true },
  password       : { type: String },
  displayName    : { type: String, required: true },
  isGroup        : { type: Boolean,  default: false },
  members        : { type: [String] },
  administrators : { type: [String] },
}))

export const Cat  = mongoose.model('Cat')
export const User = mongoose.model('User')
