import Cat from 'types/cat'

export default interface User {
  slug        : string,
  displayName : string,
  cats        : Cat[],
}
