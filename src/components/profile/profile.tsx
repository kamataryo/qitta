import * as React from 'react'
import ProfileObject from 'types/profile'
import Cat from 'types/cat'
import { Group } from 'types/user'

interface OwnProps {
  profile: ProfileObject,
  cats : Cat[],
  groups: Group[],
}

const Profile = (props: OwnProps) => {

  const { profile, cats, groups } = props

  return (
    <div className={ 'profile' }>
      <h3>{ profile.displayName }</h3>
      <h4>{ '飼っているねこ' }</h4>
      <p>{ `${cats.length} 匹` }</p>
      <h4>{ '所属しているグループ' }</h4>
      <p>{ `${groups.length} グループ` }</p>
    </div>
  )
}

export default Profile
