export const REQUEST_USER = 'REQUEST_USER'

export const requestUser = (username: string) => ({
  type: REQUEST_USER,
  payload: { username },
})
