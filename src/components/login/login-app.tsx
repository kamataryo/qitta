import * as React from 'react'
import Uesrname from './username'
import Password from './password'
import LoginButton from './login-button'

export interface PureOwnProps {}

interface ConnectedProps {
  username: string,
  password: string,
  onUsernameChange : (username: string) => void,
  onPasswordChange : (password: string) => void,
  onLoginClick     : (username: string, password: string) => void,
}

interface OwnProps extends PureOwnProps, ConnectedProps {}

export default class LoginApp extends React.Component<OwnProps> {

  public render() {

    const {
      username,
      password,
      onUsernameChange,
      onPasswordChange,
      onLoginClick,
    } = this.props

    const onClick = () => onLoginClick(username, password)

    return (
      <div>
        <Uesrname value={ username } onChange={ onUsernameChange } />
        <Password value={ password } onChange={ onPasswordChange } />
        <LoginButton onClick={ onClick }>
          { 'ログイン' }
        </LoginButton>
        <pre>
          <h3>{ '以下のユーザー名を入れてください' }</h3>
          <ul>
            <li>salamdner</li>
            <li>kamataryo</li>
            <li>kamata-family</li>
            <li>sharehouse-catty</li>
            <li>mackerel</li>
          </ul>
        </pre>
      </div>
    )
  }
}
