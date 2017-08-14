import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

import initialData from 'data/profile-dummy'

import { User } from './group'

export interface Profile extends User {
  description? : string,
  accessToken  : string,
}

export interface ProfileState {
  data: Profile,
}

export const initialState: ProfileState = {
  // TODO: get via API
  data: initialData,
}

export enum ProfileActionTypes {
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
  }
}

export default profileReducer
