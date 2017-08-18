import { Request, Response } from 'express'
import { Cat } from '../../../models'
import CatDocument from '../../../types/catdoc'

const putCat = (req: Request, res: Response) => {

  const filter = { ...req.params }

  if (filter.id !== void 0) {
    filter._id = filter.id
    delete filter.id
  }

  Cat.remove(filter)
    .catch((__0: Error) => {
      // log here
      res
        .status(400)
        .send({ message: 'bad request' })
    })
    .then(() => {
      delete filter._id
      return Cat.find(filter)
    })
    .then((cats: CatDocument[]) => {
      const result = cats.map(cat => ({ id: cat._id, name: cat.name }))
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

export default putCat
