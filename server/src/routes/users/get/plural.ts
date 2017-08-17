import { Request, Response } from 'express'
import { User, Cat } from '../../../models'
import CatDocument from '../../../types/catdoc'
import UserDocument from '../../../types/userdoc'
import { UserResponse } from '../../../../../src/types/user'

// intermediate processing type
type ProcessingUsers = [
  // TODO: those props should be a ref.
  Array<{ username: string, displayName: string, isGroup: boolean }>,
  CatDocument[][],
  UserDocument[][]
]

const getUser = (_0: Request, res: Response) => {

  User.find({})
    .then((userdocs: UserDocument[]) => {

      if (!userdocs) {
        return res
          .status(404)
          .json({ message: 'Resource not found.' })
      } else {
        return Promise.all<any>([
          // format user result
          userdocs.map(userdoc => ({
            username: userdoc.username,
            displayName: userdoc.displayName,
            isGroup: userdoc.isGroup,
          })),
          // find the owner
          Promise.all(userdocs.map(userdoc => Cat.find({ owner: userdoc.username }))),
          // find groups
          Promise.all(userdocs.map(userdoc => User.find({ isGroup: true, members: userdoc.username }))),
        ])
        .then((arg: ProcessingUsers) => {
          const users = arg[0]
          const catss = arg[1].map(cats => cats.map(cat => ({ id: cat._id, name: cat.name })))
          const groupss = arg[2].map(groups => groups.map(group => ({
            groupName: group.username,
            displayName: group.displayName,
            members: group.members ? group.members : [],
          })))

          const result: UserResponse[] = users.map((user, index) => {
            return ({
              ...user,
              cats: catss[index],
              groups: groupss[index],
            })
          })

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
