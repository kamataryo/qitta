import ActionCreator from 'types/action-creator'

export enum Types {
  REQUEST = 'REQUEST_POST_CAT',
  SUCCESS = 'SUCCESS_POST_CAT',
  FAILURE = 'FAILURE_POST_CAT',
}

export interface Payload {
  username : string,
  catname  : string,
}

export const postCat: ActionCreator = (username: string, catname: string) => ({
  type    : Types.REQUEST,
  payload : { username, catname },
})
