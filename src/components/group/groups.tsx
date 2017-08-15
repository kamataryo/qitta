import GroupObject from 'types/group'
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
          <li key={ `group-id-${group.username}` }>
            <Group value={ group } />
          </li>
        ))
      }
    </ul>
  )

}
