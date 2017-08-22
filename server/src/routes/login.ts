import { Request, Response } from 'express'
import { User } from '../models'
import UserDocument from '../types/userdoc'

// TODO: feed authorization.
export default (req: Request, res: Response) => {

  const filter = {
    username: req.body.username,
    password: req.body.password,
  }

  User.findOne(filter)
    .then((user: UserDocument) => {
      if (user) {
        res
          .status(200)
          .send({ accessToken: 'some token' })
      } else {
        res
          .status(400)
          .send({ message: 'login error' })
      }
    })
    .catch((_0: Error) => {
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}
