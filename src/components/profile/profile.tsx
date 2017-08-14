import * as React from 'react'
import ProfileObject from 'types/profile'

interface OwnProps {
  value: ProfileObject,
}

const Profile = (props: OwnProps) => {

  const profile = props.value

  return (
    <div className={ 'profile' }>
      <h3>{ profile.displayName }</h3>
    </div>
  )

}

export default Profile