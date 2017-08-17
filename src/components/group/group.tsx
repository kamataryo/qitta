import * as React from 'react'
import { Group as GroupObject } from 'types/user'
import User from 'types/user'

interface OwnProps {
  value: GroupObject,
}

const Group = (props: OwnProps) => {

  const group = props.value as any

  return (
    <div className={ 'group' }>
      <h3>{ group.displayName }</h3>
      <ul className={ 'members' }>
        { group.members.map((user: User) => (
          <li key={ `${group.groupName}-${user}` }>
            <span>{ user }</span>
          </li>
        )) }
      </ul>
    </div>
  )

}

export default Group
