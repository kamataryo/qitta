import * as React from 'react'
import GroupObject from 'types/group'
import User from 'types/user'

interface OwnProps {
  value: GroupObject,
}

const Group = (props: OwnProps) => {

  const group = props.value

  return (
    <div className={ 'group' }>
      <h3>{ group.displayName }</h3>
      <ul className={ 'members' }>
        { group.members.map((user: User) => (
          <li key={ `${group.slug}-${user.slug}` }>
            <span>{ user.displayName }</span>
          </li>
        )) }
      </ul>
    </div>
  )

}

export default Group
