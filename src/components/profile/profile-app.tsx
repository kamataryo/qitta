import ProfileObject from 'types/profile'
import * as React from 'react'
import Profile from './profile'
import Cat from 'types/cat'
import { Group } from 'types/user'

export interface OwnProps {
  profile : ProfileObject,
  cats    : Cat[],
  groups  : Group[],
  logout  : () => void,
}

export default class ProfileApp extends React.Component<OwnProps> {

  public render() {

    const { profile, cats, groups, logout } = this.props

    return (
      <div id={ 'profile-app' }>
        <h2>{ 'プロフィール' }</h2>
        <Profile
          profile={ profile }
          cats={ cats }
          groups={ groups }
        />
        <p><button onClick={ logout }>{ 'ログアウト' }</button></p>
      </div>
    )
  }

}
