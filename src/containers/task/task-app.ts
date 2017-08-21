import { connect } from 'react-redux'
import { RootState } from 'store'
import TaskApp, { OwnProps } from 'components/task/task-app'
import Task from 'types/task'

export interface StateProps {
  tasks: Task[],
}

interface AntiStateProps {
  tasks? : Task[],
  store? : any,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    tasks: state.task.data,
  })
}

const TaskAppContainer = connect<StateProps, {}, OwnProps|AntiStateProps>(mapStateToProps, {})(TaskApp)

export default TaskAppContainer
