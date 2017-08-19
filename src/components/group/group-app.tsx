import * as React from 'react'
import { Group as GroupProp } from 'types/user'
import Group from '../../containers/group/group'

export interface PureOwnProps {}

export interface ConnectedProps {
  groups: GroupProp[],
  username: string,
  register: (username: string, groupName: string) => void,
}

interface OwnProps extends PureOwnProps, ConnectedProps {}

export default class GroupApp extends React.Component<OwnProps, {}> {

  public render() {

    const groups = this.props.groups

    return (
      <div id={ 'group-app' }>
        <h2>{ 'group app' }</h2>
        <ul>
          {
            groups.map(group => (
              <li key={ `group-id-${group.groupName}` }>
                <Group group={ group } />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
