import { Request, Response } from 'express'
import {
  Cat as CatModel,
  // User as UserModel,
} from '../../../models'

const putCat = (req: Request, res: Response) => {

  const { id } = req.params

  const cat: any = { ...req.body }
  delete cat.id

  CatModel.update({ _id: id }, cat)
    .catch((__0: Error) => {
      // log here
      res
        .status(400)
        .send({ message: 'bad request' })
    })
    .then(() => {
      res
        .status(200)
        .json(cat)
    })
    .catch((__0: Error) => {
      // TODO: Log here
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default putCat
