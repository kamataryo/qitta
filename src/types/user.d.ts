import Cat from 'types/cat'

export default interface User {
  username    : string,
  displayName : string,
  cats        : Cat[],
}
