import { Types } from './types'
import { UsernameUpdateAction, PasswordUpdateAction } from '.'

export const creator = {
  updateUsername: (username: string): UsernameUpdateAction => ({
    type: Types.UpdateUsername,
    payload: { username },
  }),
  updatePassword: (password: string): PasswordUpdateAction => ({
    type: Types.UpdatePassword,
    payload: { password },
  }),
}
