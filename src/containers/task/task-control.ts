import { connect, Dispatch } from 'react-redux'
import { RootState } from 'store'
import TaskControl from 'components/task/task-control'
import { TaskActionTypes } from 'reducers/task'

interface OwnProps {
  done   : boolean,
  taskId : number,
  markDone? : (taskId: number, status: boolean) => void,
}

export interface StateProps {}

export interface DispatchProps {
  markDone: (taskId: number, status: boolean) => void,
}

// interface AntiDispatchProps {
//   markDone? : (taskId: number, status: boolean) => void,
//   store?    : any,
// }

const mapStateToProps = (x: RootState): StateProps => x

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => {
  return ({
    markDone: (taskId, done) => {
      dispatch({ type: TaskActionTypes.Done, payload: { taskId, done } })
    },
  })
}

const TaskControlContainer = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(TaskControl)

export default TaskControlContainer
