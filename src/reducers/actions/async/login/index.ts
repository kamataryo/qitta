import ActionCreator from 'types/action-creator'

export enum Types {
  REQUEST = 'REQUEST_LOGIN_PROFILE',
  SUCCESS = 'SUCCESS_LOGIN_PROFILE',
  FAILURE = 'FAILURE_LOGIN_PROFILE',
}

export interface Payload {
  username: string,
  password: string,
}

export const requestLogin: ActionCreator<Types, Payload> = (username: string, password: string) => {
  return ({
    type    : Types.REQUEST,
    payload : { username, password },
  })
}
