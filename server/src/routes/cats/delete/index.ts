import { Request, Response } from 'express'
import {
  Cat as CatModel,
  // User as UserModel,
} from '../../../models'

const putCat = (req: Request, res: Response) => {

  const { id } = req.params

  CatModel.remove({ _id: id })
    .catch((__0: Error) => {
      // log here
      res
        .status(400)
        .send({ message: 'bad request' })
    })
    .then(() => {
      res
        .status(200)
        .json({})
    })
    .catch((__0: Error) => {
      // TODO: Log here
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default putCat
