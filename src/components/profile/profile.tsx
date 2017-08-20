import * as React from 'react'
import ProfileObject from 'types/profile'
import Cat from 'types/cat'
import { Group } from 'types/user'
import ActiveLink from 'containers/active-link'

interface OwnProps {
  profile : ProfileObject,
  cats    : Cat[],
  groups  : Group[],
}

const Profile = (props: OwnProps) => {

  const { profile, cats, groups } = props

  return (
    <div className={ 'profile-wrap' }>
      <dl className={ 'list-item profile-item' }>
        <dt className={ 'list-item-term profile-item-term' }>{ '名前' }</dt>
        <dd className={ 'list-item-desc profile-item-desc' }>{ profile.displayName }</dd>
      </dl>

      <dl className={ 'list-item profile-item' }>
        <dt className={ 'list-item-term profile-item-term' }>{ 'ケアをしているネコ' }</dt>
        <dd className={ 'list-item-desc profile-item-desc' }>
          { `${cats.length} 匹` }
          <span>
            <ActiveLink to={ '/user/cats' }>
              { '>' }
            </ActiveLink>
          </span>
        </dd>
      </dl>

      <dl className={ 'list-item profile-item' }>
        <dt className={ 'list-item-term profile-item-term' }>{ '所属しているグループ' }</dt>
        <dd className={ 'list-item-desc profile-item-desc' }>{ `${groups.length} グループ` }<span><ActiveLink to={ '/user/groups' }>{ '>' }</ActiveLink></span></dd>
      </dl>
    </div>
  )
}

export default Profile
