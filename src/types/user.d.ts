// import Cat from 'types/cat'
// import Group from 'types/group'
//
export default interface User {
  username    : string,
  displayName : string,
  isGroup     : boolean,
}

interface Cat {
  id     : string,
  name   : string,
}

interface Group {
  groupName: string,
  displayName: string,
  members: string[],
}

export interface UserResponse {
  username    : string,
  displayName : string,
  isGroup     : boolean,
  cats?       : Cat[],
  groups?     : Group[],
}
