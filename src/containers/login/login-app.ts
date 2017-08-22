import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import LoginApp, { PureOwnProps } from 'components/login/login-app'
import { creator as actionCreator } from 'reducers/login/action/creators'
import { requestLogin } from 'reducers/actions/async/login'

export interface StateProps {
  username : string,
  password : string,
}

export interface DispatchProps {
  onUsernameChange : (username: string) => void,
  onPasswordChange : (password: string) => void,
  onLoginClick     : (username: string, password: string) => void,
}

interface AntiStateProps {
  username? : string,
  password? : string,
}

interface AntiDispatchProps {
  onUsernameChange? : (username: string) => void,
  onPasswordChange? : (password: string) => void,
  onLoginClick?     : (username: string, password: string) => any,
}

type AllProps = PureOwnProps|AntiStateProps|AntiDispatchProps
type MapStateToProps = (State: RootState, props?: PureOwnProps) => StateProps
type MapDispatchToProps = (Dispatch: Dispatch<{}>, Props?: PureOwnProps) => DispatchProps

const mapStateToProps: MapStateToProps = state => {
  return ({
    username : state.login.data.username,
    password : state.login.data.password,
  })
}

const mapDispatchToProps: MapDispatchToProps = dispatch => {
  return ({
    onUsernameChange : username => dispatch(actionCreator.updateUsername(username)),
    onPasswordChange : password => dispatch(actionCreator.updatePassword(password)),
    onLoginClick     : (username: string, password: string) => dispatch(requestLogin(username, password)),
  })
}

const LoginAppContainer = connect<StateProps, DispatchProps, AllProps>(mapStateToProps, mapDispatchToProps)(LoginApp)

export default LoginAppContainer
