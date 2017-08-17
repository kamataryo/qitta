import { Request, Response } from 'express'
import { Cat, User } from '../../../models'
import CatDocument from '../../../types/catdoc'
import UserDocument from '../../../types/userdoc'
import { CatResponse } from '../../../../../src/types/cat'

// intermediate Promise resolved result type
type MiddleCats = [
  // TODO: those props should be a ref.
  Array<{ id: string, name: string }>,
  UserDocument[]
]

const getCats = (_0: Request, res: Response) => {

  Cat.find({})
    .then((catdoc: CatDocument[]) => {

      if (!catdoc) {
        return res
          .status(404)
          .json({ message: 'Resource not found.' })
      } else {
        return Promise.all<any>([
          // format cats result
          catdoc.map(x => ({ id: x._id, name: x.name })),
          // find the owners
          Promise.all(catdoc.map(x => User.findOne({ username: x.owner }))),
        ])
        .then((arg: MiddleCats) => {

          const cats = arg[0]
          const owners = arg[1]

          // NOTE: owner includes (hashed) password and unnecessary properties
          // We should pick necessary properties here.
          const results: CatResponse[] = cats.map((cat, index) => {
            // NOTE: each owners includes (hashed) password and unnecessary properties
            // We should pick necessary properties here.
            // TODO: Filter at `Model.find`
            const owner = owners[index]
            const ownerProps = owners ? {
              username    : owner.username,
              displayName : owner.displayName,
              isGroup     : !!owner.isGroup,
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

export default getCats
