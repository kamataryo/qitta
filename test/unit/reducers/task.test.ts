import 'mocha'
import { expect } from 'chai'
import taskReducer, { TaskActionTypes } from 'reducers/task'

describe('test count Reducer', () => {
  it('should add', () => {
    const oldState = { data: [] }
    const action = { type: TaskActionTypes.Add, payload: { task: 'aaa' }  }
    const newState = taskReducer(oldState, action)
    expect(newState.data[0]).to.equal('aaa')
  })
})
