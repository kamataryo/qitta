import * as Mongoose from 'mongoose'

export interface OwnProps {
  username        : string,
  password?       : string,
  displayName     : string,
  isGroup?        : boolean,
  members?        : string[],
  administrators? : string[],
}

export default interface Userdoc extends Mongoose.Document, OwnProps {}
