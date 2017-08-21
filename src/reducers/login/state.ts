export interface LoginState {
  data: {
    username: string,
    password: string,
  },
}

export const initialState: LoginState = {
  data: {
    username : '',
    password : '',
  },
}
