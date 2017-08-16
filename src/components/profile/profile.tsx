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
      <h4>{ '飼っているねこ' }</h4>
      <p>{ `${profile.cats.length} 匹` }</p>
    </div>
  )
}

export default Profile
