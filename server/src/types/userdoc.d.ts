export default interface Userdoc {
  username    : string,
  password    : string,
  displayName : string,
  isGroup     : boolean,
  members     : string[],
  cats        : number[],
}
