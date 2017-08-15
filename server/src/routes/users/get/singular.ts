import { Request, Response } from 'express'
import { User as UserModel } from '../../../models'
import User from '../../../../../src/types/user'

const getUser = (req: Request, res: Response) => {

  const { username } = req.params

  UserModel.find({ username })
    .then((data: any) => {
      res
        .status(data.length > 0 ? 200 : 404)
        .json(data.map((x: any): User => ({
          username    : x.username,
          displayName : x.displayName,
          cats        : x.cats,
          groups      : [],
        })))
    })
    .catch((__0: Error) => {
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default getUser
