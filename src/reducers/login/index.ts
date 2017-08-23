import { Reducer } from 'redux'
import * as update from 'immutability-helper'
import { initialState } from './state'
import { LoginState } from './state'
import LoginAction from './action'
import Types from './action/types'

export interface ProfileReducer<T> extends Reducer<T> {
  (State: LoginState, Action: LoginAction ): LoginState
}

const profileReducer: ProfileReducer<LoginState> = (state: LoginState = initialState, action: LoginAction): LoginState => {

  switch (action.type) {
    case Types.UpdateUsername:
      const { username } = action.payload
      return update(state, { data: { username: { $set: username } } })

    case Types.UpdatePassword:
      const password = action.payload.password
      return update(state, { data: { password: { $set: password } } })

    case Types.Logout:
      return state

    default:
      return state
  }
}

export default profileReducer
