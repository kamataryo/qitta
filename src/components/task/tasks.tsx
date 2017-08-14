import Task from 'types/task'
import * as React from 'react'
import Reactions from 'components/reactions'
import TaskControl from 'containers/task/task-control'

export interface OwnProps {
  value: Task[]
}

export default class Tasks extends React.Component<OwnProps, {}> {

  public render() {
    const tasks = this.props.value

    return (
      <ul>
        { tasks.map(task => (
          <li key={ `task-id-${task.id}` }>
            <h3>{ task.title }</h3>
            <dl>
              <dt>{ '完了状態' }</dt>
              <dd>
              <TaskControl
                taskId={ task.id }
                done={ task.done }
              />
              </dd>
            </dl>
            <dl>
              <dt>{ '担当者' }</dt>
              <dd>{ task.whoIsResponsible }</dd>
            </dl>
            <Reactions />
          </li>
        )) }
      </ul>
    )
  }

}
