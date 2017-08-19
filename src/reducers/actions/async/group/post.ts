import ActionCreator from 'types/action-creator'

export enum Types {
  REQUEST = 'REQUEST_POST_GROUP',
  SUCCESS = 'SUCCESS_POST_GROUP',
  FAILURE = 'FAILURE_POST_GROUP',
}

export interface Payload {
  username: string,
  groupname: string,
}

export const postGroup: ActionCreator<Types, Payload> = (username: string, groupname: string) => ({
  type    : Types.REQUEST,
  payload : { username, groupname },
})
