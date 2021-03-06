import { Request, Response } from 'express'
import { User, Cat } from '../../../models'
import CatDocument from '../../../types/catdoc'
import UserDocument from '../../../types/userdoc'
import { UserResponse } from '../../../../../src/types/user'

type ProcessingUsers = [
  // TODO: those props should be a ref.
  { username: string, displayName: string, isGroup: boolean },
  CatDocument[],
  UserDocument[]
]

const getUser = (req: Request, res: Response) => {

  User.findOne({ username: req.params.username })
    .then((userdoc: UserDocument) => {

      if (!userdoc) {
        return res
          .status(404)
          .json({ message: 'Resource not found.' })
      } else {
        return Promise.all<any>([
          // format user result
          { username: userdoc.username, displayName: userdoc.displayName, isGroup: userdoc.isGroup },
          // find the owner
          Cat.find({ owner: userdoc.username }),
          // find groups
          User.find({ isGroup: true, members: userdoc.username }),
        ])
        .then((arg: ProcessingUsers) => {

          const user = arg[0]
          const cats = arg[1]
          const groups = arg[2]

          const catsValues = cats ? cats.map(cat => ({
            id   : cat._id,
            name : cat.name,
          })) : undefined

          const groupValues = groups ? groups.map(group => ({
            groupName   : group.username,
            displayName : group.displayName,
            members     : group.members ? group.members : [],
          })) : []

          const result: UserResponse = {
            // formatted user
            ...user,
            cats   : catsValues,
            groups : groupValues,
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

export default getUser
