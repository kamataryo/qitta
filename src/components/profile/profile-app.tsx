import ProfileObject from 'types/profile'
import * as React from 'react'
import Profile from './profile'

export interface OwnProps {
  profile: ProfileObject,
  fetchUser: (username: string) => void,
}

export interface OwnState {
  username: string,
}

export default class ProfileApp extends React.Component<OwnProps, OwnState> {

  public constructor(props: OwnProps) {
    super(props)
    this.state = { username: 'kamataryo' }
  }

  public render() {
    const { username } = this.state
    const { profile } = this.props
    const fetchUser = () => this.props.fetchUser(username)
    // TODO: too redundant..
    const onTextChange = (e: React.FormEvent<{}>) => this.setState({ username: (e.target as HTMLInputElement).value })

    return (
      <div id={ 'profile-app' }>
        <h2>{ 'profile app' }</h2>
        <Profile value={ profile } />
        <input
          type={ 'text' }
          value={ username }
          onChange={ onTextChange }
        />
        <button onClick={ fetchUser }>{ 'get profile' }</button>
      </div>
    )
  }

}
