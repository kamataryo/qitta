import { Request, Response } from 'express'
import { Cat, User } from '../../../models'
import CatDocument from '../../../types/catdoc'
import UserDocument from '../../../types/userdoc'
import { CatResponse } from '../../../../../src/types/cat'

// processing intermediate result
type MiddleCat = [
  // TODO: those props should be a ref.
  { id: string, name: string },
  UserDocument
]

const getCat = (req: Request, res: Response) => {

  Cat.findOne({ _id: req.params.id })
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
          User.findOne({ username: catdoc.owner }),
        ])
        .then((arg: MiddleCat) => {

          const cat = arg[0]
          const owner = arg[1]
          // NOTE: owner includes (hashed) password and unnecessary properties
          // We should pick necessary properties here.
          const ownerProps = owner ? {
            username    : owner.username,
            displayName : owner.displayName,
            isGroup     : !!owner.isGroup,
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
