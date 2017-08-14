import Group from 'types/group'
import * as React from 'react'
import Groups from './groups'

export interface OwnProps {
  groups: Group[],
}

export default (props: OwnProps) => {
  const groups = props.groups

  return (
    <div id={ 'group-app' }>
      <h2>{ 'group app' }</h2>
      <Groups value={ groups } />
    </div>
  )
}
