import Task from 'types/task'
import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface TaskState {
  data: Task[],
}

export const initialState: TaskState = {
  // TODO: get via API
  data: [],
}

export enum TaskActionTypes {
  Add    = 'TASK.ADD',
  Delete = 'TASK.DELETE',
  Done   = 'TASK.DONE',
}

export interface TaskAction extends Action {
  type    : TaskActionTypes,
  payload : any,
}

export interface TaskReducer<T> extends Reducer<T> {
  (State: TaskState, Action: TaskAction ): TaskState
}

const taskReducer: TaskReducer<TaskState> = (state: TaskState = initialState, action: TaskAction): TaskState => {

  const { type, payload } = action

  switch (type) {
    case TaskActionTypes.Add:
      return update(state, { data: { $push: [payload.task]  } })

    case TaskActionTypes.Delete:
      return update(state, { data: { $splice: [payload.index, 1] } })

    case TaskActionTypes.Done:
      const index = state.data.map(task => task.id).indexOf(payload.taskId)
      if (index === -1) {
        return state
      } else {
        return update(state, { data: { [index]: { done: { $set: payload.done } } } })
      }

    default:
      return state
  }
}

export default taskReducer
