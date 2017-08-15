import { Request, Response } from 'express'
import {
  User as UserModel,
  // User as UserModel,
} from '../../../models'

const postUsers = (req: Request, res: Response) => {

  // TODO: make acceptable for multi cats creation
  // Now work with single user
  const user: any = req.body

  new UserModel(user).save()
    .catch((__0: Error) => {
      // log here
      res
        .status(400)
        .send({ message: 'bad request' })
    })
    .then(() => {
      res
        .status(200)
        .json(user)
    })
    .catch((__0: Error) => {
      // TODO: Log here
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default postUsers
