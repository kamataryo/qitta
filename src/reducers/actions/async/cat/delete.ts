import ActionCreator from 'types/action-creator'

export enum Types {
  REQUEST = 'REQUEST_DELETE_CAT',
  SUCCESS = 'SUCCESS_DELETE_CAT',
  FAILURE = 'FAILURE_DELETE_CAT',
}

export interface Payload {
  id    : string,
  owner : string,
}

export const deleteCat: ActionCreator<Types, Payload> = (id: string, owner: string) => ({
  type    : Types.REQUEST,
  payload : { id, owner },
})
