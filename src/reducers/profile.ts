import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'
import Profile from 'types/profile'

export interface ProfileState {
  data: Profile,
}

export const initialState: ProfileState = {
  // TODO: get via API
  data: {
    username: '',
    displayName: '',
    accessToken: '',
    cats: [],
    groups: [],
    permissions: {
      read: [],
      write: [],
    },
  },
}

export enum ProfileActionTypes {
  setProfile     = 'PROFILE.SET_PROFILE',
  setAccessToken = 'PROFILE.SET_ACCESS_TOKEN',
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
    case ProfileActionTypes.setAccessToken:
      const { accessToken } = action.payload
      return update(state, { data: { accessToken: { $set: accessToken } } })
    default:
      return state
    case ProfileActionTypes.setProfile:
      const profile = action.payload[0]
      return update(state, { data: { $set: profile } })
  }
}

export default profileReducer
