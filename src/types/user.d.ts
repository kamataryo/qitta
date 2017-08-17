// import Cat from 'types/cat'
// import Group from 'types/group'
//
// export default interface User {
//   username    : string,
//   displayName : string,
//   isGroup?    : boolean,
//   cats        : Cat[],
//   groups      : Group[],
// }
//
interface Cat {
  id     : string,
  name   : string,
  owner? : string,
}

export interface UserResponse {
  username    : string,
  displayName : string,
  isGroup     : boolean,
  cats?       : Cat[],
}
