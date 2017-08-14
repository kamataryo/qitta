import { Profile as ProfileObject } from 'reducers/profile'
import * as React from 'react'
import Profile from './profile'

export interface OwnProps {
  profile: ProfileObject,
}

export default (props: OwnProps) => {
  const profile = props.profile

  return (
    <div id={ 'profile-app' }>
      <h2>{ 'profile app' }</h2>
      <Profile value={ profile } />
    </div>
  )
}
