import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface TaskState {
  data: string[],
}

export const initialState: TaskState = {
  data: [
    'ご飯',
    '餌やり',
    '水交換',
  ],
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
