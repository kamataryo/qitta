import { Request, Response } from 'express'
import {
  Cat as CatModel,
  // User as UserModel,
} from '../../../models'
import Cat from '../../../../../src/types/cat'

const getCats = (_0: Request, res: Response) => {

  CatModel.find({})
    .then((data: any) => {
      res
        .status(200)
        .json(data.map((x: any): Cat => ({
          id   : x._id,
          name : x.name,
          belongings: [], // TODO: search belongings from User collecition
        })))
    })
    .catch((__0: Error) => {
      // TODO: Log here
      res
        .status(500)
        .send({ message: 'unknown error' })
    })
}

export default getCats
