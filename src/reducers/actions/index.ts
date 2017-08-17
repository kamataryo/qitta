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
export const deleteCat = (id: string) => ({
  type: REQUEST_DELETE_CAT,
  payload: { id },
})
