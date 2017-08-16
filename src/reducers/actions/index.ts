export const REQUEST_USER = 'REQUEST_USER'
export const SUCCESS_USER = 'SUCCESS_USER'
export const FAILURE_USER = 'FAILURE_USER'

// action creator
export const requestUser = (username: string) => ({
  type: REQUEST_USER,
  payload: { username },
})
