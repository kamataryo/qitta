import * as Mongoose from 'mongoose'

export interface OwnProps {
  name  : string,
  owner : string,
}

export default interface CatDocument extends Mongoose.Document, OwnProps {}
