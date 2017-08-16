import { Request, Response } from 'express'
import { User as UserModel } from '../../../models'
import User from '../../../../../src/types/user'

const getUsers = (_0: Request, res: Response) => {

  UserModel.find({})
    .then((data: any) => {
      res
        .status(200)
        .json(data.map((x: any): User => ({
          username    : x.username,
          displayName : x.displayName,
          cats        : [],
          groups      : [],
        })))
    })
    .catch((__0: Error) => {
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default getUsers
