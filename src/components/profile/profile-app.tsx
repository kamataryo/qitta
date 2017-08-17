import ProfileObject from 'types/profile'
import * as React from 'react'
import Profile from './profile'
import Cat from 'types/cat'
import { Group } from 'types/user'

export interface OwnProps {
  profile: ProfileObject,
  cats : Cat[],
  groups: Group[],
  fetchUser: (username: string) => void,
}

export interface OwnState {
  username: string,
}

export default class ProfileApp extends React.Component<OwnProps, OwnState> {

  public constructor(props: OwnProps) {
    super(props)
    this.state = { username: '' }
  }

  public render() {

    const { username } = this.state
    const { profile, cats, groups } = this.props
    const fetchUser = () => this.props.fetchUser(username)
    // TODO: too redundant..
    const onTextChange = (e: React.FormEvent<{}>) => this.setState({ username: (e.target as HTMLInputElement).value })

    return (
      <div id={ 'profile-app' }>
        <h2>{ 'profile app' }</h2>
        <Profile
          profile={ profile }
          cats={ cats }
          groups={ groups }
        />
        <input
          type={ 'text' }
          value={ username }
          placeholder={ '(username)' }
          onChange={ onTextChange }
        />
        <button onClick={ fetchUser }>{ 'get profile' }</button>
        <pre>
          <h3>examples of username</h3>
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
