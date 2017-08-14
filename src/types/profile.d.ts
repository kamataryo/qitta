import User from 'types/user'

export default interface Profile extends User {
  description? : string,
  accessToken  : string,
  permissions  : {
    read  : string[],
    write : string[],
  },
}
