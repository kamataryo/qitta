import ActionCreator from 'types/action-creator'

export enum Types {
  REQUEST = 'REQUEST_DELETE_GROUP',
  SUCCESS = 'SUCCESS_DELETE_GROUP',
  FAILURE = 'FAILURE_DELETE_GROUP',
}

export interface Payload {
  username: string,
  groupname: string,
}

export const deleteGroup: ActionCreator<Types, Payload> = (username: string, groupname: string) => ({
  type    : Types.REQUEST,
  payload : { username, groupname },
})
