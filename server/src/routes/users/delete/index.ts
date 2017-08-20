import { Request, Response } from 'express'
import { User } from '../../../models'
import UserDocument from '../../../types/userdoc'
import { UserResponse } from '../../../../../src/types/user'

const deleteUser = (req: Request, res: Response, filter?: object) => {

  const paramFilter = { ...req.params, ...filter }

  User.remove(paramFilter)
    .catch((__0: Error) => {
      // log here
      res
        .status(400)
        .send({ message: 'bad request' })
    })
    .then(() => {
      // get next users
      delete paramFilter.username
      return User.find(paramFilter)
    })
    .then((users: UserDocument[]) => {
      const result: UserResponse[] = users.map(user => ({
        username    : user.username,
        displayName : user.displayName,
        isGroup     : !!user.isGroup,
        cats        : [],
        groups      : [],
      }))
      res
        .status(200)
        .json(result)
    })
    .catch((__0: Error) => {
      // TODO: Log here
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default deleteUser
