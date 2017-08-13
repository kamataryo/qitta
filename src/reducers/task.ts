import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

import initialData from 'data/tasks-dummy'

export interface Reaction {
  value      : 'good'|'thanks'|'plesure'|'help'|'emergency'|'sad',
  performedBy : string,
}

export interface Task {
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

export interface TaskState {
  data: Task[],
}

export const initialState: TaskState = {
  // TODO: get via API
  data: initialData
}

export enum TaskActionTypes {
  Add    = 'TASK.ADD',
  Delete = 'TASK.DELETE',
}

export interface TaskAction extends Action {
  type    : TaskActionTypes,
  payload : any,
}

export interface TaskReducer<T> extends Reducer<T> {
  (State: TaskState, Action: TaskAction ): TaskState
}

const countReducer: TaskReducer<TaskState> = (state: TaskState = initialState, action: TaskAction): TaskState => {

  const { type, payload } = action

  switch (type) {
    case TaskActionTypes.Add:
      return update(state, { data: { $push: [payload.task]  } })

    case TaskActionTypes.Delete:
      return update(state, { data: { $splice: [payload.index, 1] } })

    default:
      return state
  }
}

export default countReducer
