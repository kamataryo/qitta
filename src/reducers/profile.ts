import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'
import Profile from 'types/profile'

export interface ProfileState {
  data: Profile,
}

export const initialState: ProfileState = {
  data: {
    username    : '',
    displayName : '',
    isGroup     : false,
  },
}

export enum ProfileActionTypes {
  Set = 'PROFILE.SET_PROFILE',
}

export interface ProfileAction extends Action {
  type    : ProfileActionTypes,
  payload : any,
}

export interface ProfileReducer<T> extends Reducer<T> {
  (State: ProfileState, Action: ProfileAction ): ProfileState
}

const profileReducer: ProfileReducer<ProfileState> = (state: ProfileState = initialState, action: ProfileAction): ProfileState => {

  const { type } = action
  switch (type) {
    case ProfileActionTypes.Set:
      const profile = action.payload
      return update(state, { data: { $set: profile } })
    default:
      return state
  }
}

export default profileReducer
