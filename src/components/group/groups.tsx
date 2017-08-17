import { Group as GroupObject } from 'types/user'
import * as React from 'react'
import Group from './group'

export interface OwnProps {
  value: GroupObject[],
}

export default (props: OwnProps) => {

  const groups = props.value

  return (
    <ul>
      {
        groups.map(group => (
          <li key={ `group-id-${group.groupName}` }>
            <Group value={ group } />
          </li>
        ))
      }
    </ul>
  )

}
