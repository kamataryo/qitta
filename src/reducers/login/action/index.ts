import { Action } from 'redux'
import Types from './types'

export interface UsernameUpdateAction extends Action {
  type    : Types.UpdateUsername,
  payload : { username: string },
}

export interface PasswordUpdateAction extends Action {
  type    : Types.UpdatePassword,
  payload : { password: string },
}

type Actions = UsernameUpdateAction|PasswordUpdateAction

export default Actions
