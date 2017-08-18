import { Request, Response } from 'express'
import {
  Cat as CatModel,
  // User as UserModel,
} from '../../../models'

const postCats = (req: Request, res: Response) => {

  // TODO: make acceptable for multi cats creation
  // Now work with single cat
  const cat: any = req.body

  if (req.params.owner) {
      cat.owner = req.params.owner as string
  }
  new CatModel(cat).save()
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

export default postCats
