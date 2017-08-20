import { Request, Response } from 'express'
import deleteUser from '../users/delete'

/**
 * delete User wrapper
 * @param Request, Response object
 */
const deleteGroup = (req: Request, res: Response) => {

  const filter: any = { isGroup: true }

  if (req.params.username) {
    filter.members = req.params.username
  }

  if (req.params.groupname) {
    filter.username = req.params.groupname
    delete req.params.groupname
  }

  return deleteUser(req, res, filter)
}

export default deleteGroup
