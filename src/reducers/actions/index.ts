type ActionCreator = (...args: any[]) => {
  type: string,
  payload: any,
}

export const REQUEST_USER = 'REQUEST_USER'
export const SUCCESS_USER = 'SUCCESS_USER'
export const FAILURE_USER = 'FAILURE_USER'

// action creator
export const requestUser = (username: string) => ({
  type: REQUEST_USER,
  payload: { username },
})

export const REQUEST_DELETE_CAT = 'REQUEST_DELETE_CAT'
export const SUCCESS_DELETE_CAT = 'SUCCESS_DELETE_CAT'
export const FAILURE_DELETE_CAT = 'FAILURE_DELETE_CAT'

// action creator
export const deleteCat: ActionCreator = (id: string, owner: string) => ({
  type: REQUEST_DELETE_CAT,
  payload: { id, owner },
})

export const REQUEST_POST_CAT = 'REQUEST_POST_CAT'
export const SUCCESS_POST_CAT = 'SUCCESS_POST_CAT'
export const FAILURE_POST_CAT = 'FAILURE_POST_CAT'

export const postCat: ActionCreator = (username: string, catname: string) => ({
  type: REQUEST_POST_CAT,
  payload: { username, catname },
})
