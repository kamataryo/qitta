import { Request, Response } from 'express'
import postUser from '../users/post'

/**
 * post User wrapper
 * @param Request, Response object
 */
const postGroup = (req: Request, res: Response) => {

  const filter: any = { isGroup: true }

  if (req.params.username) {
      filter.members = [req.params.username]
      delete req.params.username
  }

  // groupname is stored as username in DB
  if (req.params.groupname) {
    filter.username = req.params.groupname
    delete req.params.groupname
  }

  return postUser(req, res, filter)
}

export default postGroup
