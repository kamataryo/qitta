import Cat from 'types/cat'
import Group from 'types/group'

export default interface User {
  username    : string,
  displayName : string,
  isGroup     : boolean,
  cats        : Cat[],
  groups      : Group[],
}
