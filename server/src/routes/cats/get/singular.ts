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

type MiddleCat = [
  { id: string, name: string },
  User
]

const getCat = (req: Request, res: Response) => {

  CatModel.findOne({ _id: req.params.id })
    .then((catdoc: CatDocument) => {

      if (!catdoc) {
        return res
          .status(404)
          .json({ message: 'Resource not found.' })
      } else {
        return Promise.all<any>([
          // format cat result
          { id: catdoc._id, name: catdoc.name },
          // find the owner
          UserModel.findOne({ username: catdoc.owner }),
        ])
        .then((arg: MiddleCat) => {

          const cat = arg[0]
          const owner = arg[1]
          // NOTE: owner includes (hashed) password and unnecessary properties
          // We should pick necessary properties here.
          const ownerProps = owner ? {
            username    : owner.username,
            displayName : owner.displayName,
            isGroup     : owner.isGroup,
          } : undefined

          const result: CatResponse = {
            // formatted cat
            ...cat,
            owner: ownerProps,
          }
          return res
            .status(200)
            .json(result)
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
