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

  const { group, username } = props
  const unregister = () => props.unregister(group.groupName, username)

  return (
    <div className={ 'group' }>
      <h3>{ group.displayName }</h3>
      <ul className={ 'members' }>
        { group.members.map((membername: string) => (
          <li key={ `${group.groupName}-${membername}` }>
            <span>{ membername }</span>
          </li>
        )) }
      </ul>
      <button onClick={ unregister }>
        { 'このグループの登録を解除する' }
      </button>
    </div>
  )

}

export default Group
