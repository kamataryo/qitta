import User from 'types/user'

export default interface Group extends User {
  members: User[],
}
