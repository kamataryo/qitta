import { Request, Response } from 'express'
import * as mongoose from 'mongoose'
import {
  Cat as CatModel,
  User as UserModel,
} from '../../../models'
import { CatResponse } from '../../../../../src/types/cat'
import User from '../../../../../src/types/user'

interface CatDocument extends mongoose.Document {
  name: string,
  owner: string,
}

// intermediate Promise resolved result type
type MiddleCat = [
  Array<{ id: string, name: string }>,
  [User]
]

const getCat = (_0: Request, res: Response) => {

  CatModel.find({})
    .then((data: CatDocument[]) => {

      if (data.length === 0) {
        return res
          .status(404)
          .json({ message: 'Resource not found.' })
      } else {
        return Promise.all<any>([
          // format cats result
          data.map(x => ({ id: x._id, name: x.name })),
          // find the owners
          Promise.all<any>(data.map(x => UserModel.findOne({ username: x.owner }))),
        ])
        .then((arg: MiddleCat) => {

          const cats = arg[0]
          const owners = arg[1]

          const results: CatResponse[] = cats.map((cat, index) => {
            // NOTE: each owners includes (hashed) password and unnecessary properties
            // We should pick necessary properties here.
            // TODO: Filter at `Model.find`
            const owner = owners[index]
            const ownerProps = owner ? {
              username    : owner.username,
              displayName : owner.displayName,
              isGroup     : owner.isGroup,
            } : undefined

            return ({
              // formatted cat
              ...cat,
              owner: ownerProps,
            })
          })

          return res
            .status(200)
            .json(results)
        })
      }
    })
    .catch((__0: Error) => {
      // TODO: Log here
      res
        .status(500)
        .send({ message: 'Unknown server error.' })
    })
}

export default getCat
