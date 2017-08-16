import ProfileObject from 'types/profile'
import * as React from 'react'
import Profile from './profile'

export interface OwnProps {
  profile: ProfileObject,
  fetchUser: (username: string) => void,
}

export default (props: OwnProps) => {
  const profile = props.profile
  const fetchUser = () => props.fetchUser('kamataryo')

  return (
    <div id={ 'profile-app' }>
      <h2>{ 'profile app' }</h2>
      <Profile value={ profile } />
      <button onClick={ fetchUser }>{ 'get profile' }</button>
    </div>
  )
}
