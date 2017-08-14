import Reaction from 'types/reaction'

export default interface Task {
  id               : number,
  title            : string,
  done             : boolean,
  createdAt        : Date,
  createdBy        : string,
  finishedAt       : Date|null,
  whoIsResponsible : string|null,
  finishedBy       : string|null,
  preReactions     : Reaction[],
  postReactions    : Reaction[],
}
