import * as React from 'react'
import { Group as GroupProps } from 'types/user'

export interface PureOwnProps {
  group: GroupProps,
}

interface ConnectedProps {
  username: string,
  unregister: (groupname: string, username: string) => void,
}

interface OwnProps extends PureOwnProps, ConnectedProps {}

const Group = (props: OwnProps) => {

  const { group } = props

  return (
    <div className={ 'group' }>
      <h3>{ group.displayName }</h3>
      <ul className={ 'members' }>
        { group.members.map((username: string) => (
          <li key={ `${group.groupName}-${username}` }>
            <span>{ username }</span>
          </li>
        )) }
      </ul>
    </div>
  )

}

export default Group
