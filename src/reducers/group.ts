import Group from 'types/group'
import { Action, Reducer } from 'redux'
// import * as update from 'immutability-helper'
import initialData from 'data/groups-dummy'

export interface GroupState {
  data: Group[],
}

export const initialState: GroupState = {
  // TODO: get via API
  data: initialData,
}

export enum GroupActionTypes {
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
    default:
      return state
  }
}

export default groupReducer
