import ActionCreator from 'types/action-creator'

export enum Types {
  REQUEST = 'REQUEST_GET_PROFILE',
  SUCCESS = 'SUCCESS_GET_PROFILE',
  FAILURE = 'FAILURE_GET_PROFILE',
}

export interface Payload {
  username: string,
}

export const requestGetProfile: ActionCreator<Types, Payload> = (username: string) => ({
  type    : Types.REQUEST,
  payload : { username },
})
