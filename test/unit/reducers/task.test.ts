import 'mocha'
import { equal } from 'assert'
import taskReducer, { TaskActionTypes } from '../../../src/reducers/task'

describe('test count Reducer', () => {
  it('should add', () => {
    const oldState = { data: [] }
    const action = { type: TaskActionTypes.Add, payload: { task: 'aaa' }  }
    const newState = taskReducer(oldState, action)
    equal(newState.data[0], 'aaa')
  })
})
