import { Request, Response } from 'express'
import { Cat } from '../../../models'
import CatDocument from '../../../types/catdoc'

const postCats = (req: Request, res: Response) => {

  // TODO: make acceptable for multi cats creation
  // Now work with single cat
  const cat: any = req.body

  if (req.params.owner) {
      cat.owner = req.params.owner as string
  }
  new Cat(cat).save()
    .catch((__0: Error) => {
      // log here
      res
        .status(400)
        .send({ message: 'bad request' })
    })
    .then(() => {
      const filter: any = cat.owner ? { owner: cat.owner } : {}
      return Cat.find(filter)
    })
    .then((cats: CatDocument[]) => {
      const result = cats.map(eachCat => ({ id: eachCat._id, name: eachCat.name }))
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

export default postCats
