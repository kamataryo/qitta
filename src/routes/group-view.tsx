import * as React from 'react'
import GroupApp from 'containers/group/group-app'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const GroupView = () => {
  return (
    <div id={ 'group-view' }>
      <h1>{ 'Group View' }</h1>
      <GroupApp />
    </div>
  )
}

export default GroupView
