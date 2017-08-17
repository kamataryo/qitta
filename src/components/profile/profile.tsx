import * as React from 'react'
import ProfileObject from 'types/profile'
import Cat from 'types/cat'

interface OwnProps {
  profile: ProfileObject,
  cats : Cat[],
}

const Profile = (props: OwnProps) => {

  const { profile, cats } = props

  return (
    <div className={ 'profile' }>
      <h3>{ profile.displayName }</h3>
      <h4>{ '飼っているねこ' }</h4>
      <p>{ `${cats.length} 匹` }</p>
    </div>
  )
}

export default Profile
