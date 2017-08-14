import * as React from 'react'

export interface OwnProps {
  taskId   : number,
  done     : boolean,
  markDone : (taskId: number, status: boolean) => void,
}

const TaskControl = (props: OwnProps) => {

  const { taskId, done, markDone } = props
  const toggleDone = () => markDone(taskId, !done)
  const displayText = done ? '完了！' : '未完了'

  return (
    <div className={ 'task-controls' }>
      <button onClick={ toggleDone }>{ displayText }</button>
    </div>
  )
}

export default TaskControl
