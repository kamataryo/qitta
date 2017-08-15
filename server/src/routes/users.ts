import { Request, Response } from 'express'
import { User as UserModel } from '../models'
import User from '../../../src/types/user'

const usersRoute = (paramFilter?: string) => (req: Request, res: Response) => {

  const filter = paramFilter ? { [paramFilter]: req.params[paramFilter] } : {}

  UserModel.find(filter, (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ message: 'unknown error' })
    } else {

      res
        .status(200)
        .json(data.map((x: any): User => ({
          slug : x.slug,
          displayName : x.displayName,
          cats: x.cats,
        })))
    }
  })

}

export default usersRoute
