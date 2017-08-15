import { Request, Response } from 'express'
import {
  Cat as CatModel,
  // User as UserModel,
} from '../../../models'
import Cat from '../../../../../src/types/cat'

const getCat = (req: Request, res: Response) => {

  const { id } = req.params

  CatModel.find({ _id: id })
    .then((data: any) => {
      res
        .status(data.length > 0 ? 200 : 404)
        .json(data.map((x: any): Cat => ({
          id         : x.id,
          name       : x.name,
          belongings : [], // TODO: search belongings from User collecition
        })))
    })
    .catch((__0: Error) => {
      // TODO: Log here
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default getCat
