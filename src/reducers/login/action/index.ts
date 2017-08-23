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

export interface LogoutAction extends Action {
  type: Types.Logout,
}

type Actions =
  UsernameUpdateAction|
  PasswordUpdateAction|
  LogoutAction

export default Actions
