import * as React from 'react'
import TaskApp from 'containers/task/task-app'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const HomeView = () => {
  return (
    <div id={ 'task-view' }>
      <h1>{ 'Task View' }</h1>
      <TaskApp />
    </div>
  )
}

export default HomeView
