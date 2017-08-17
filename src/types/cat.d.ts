export interface Cat {
  id   : string,
  name : string,
}

interface Owner {
  username    : string,
  displayName : string,
  isGroup     : boolean,
}

export interface CatResponse {
  id     : string,
  name   : string,
  owner? : Owner,
}
