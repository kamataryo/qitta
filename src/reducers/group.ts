import { Group } from 'types/user'
import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface GroupState {
  data: Group[],
}

export const initialState: GroupState = {
  // TODO: get via API
  data: [],
}

export enum GroupActionTypes {
  Set = 'Group.Set',
}

export interface GroupAction extends Action {
  type    : GroupActionTypes,
  payload : any,
}

export interface GroupReducer<T> extends Reducer<T> {
  (State: GroupState, Action: GroupAction ): GroupState
}

const groupReducer: GroupReducer<GroupState> = (state: GroupState = initialState, action: GroupAction): GroupState => {

  const { type } = action

  switch (type) {
    case GroupActionTypes.Set:
      const groups = action.payload || []
      return update(state, { data: { $set: groups } })
    default:
      return state
  }
}

export default groupReducer
