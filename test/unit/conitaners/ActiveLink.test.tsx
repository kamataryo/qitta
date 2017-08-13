import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import ActiveLink from '../../../src/components/ActiveLink'
import ActiveLinkContainer from '../../../src/containers/ActiveLink'

const middlewares: any[] = []
const mockStore = configureStore(middlewares)

describe('Test of ActiveLink container', () => {

  it('should map props', () => {
    const initialState: any = {
      routing: {
        location: {
          pathname: '/testpath',
        },
      },
    }
    const store = mockStore(initialState)
    const wrapper = shallow(<ActiveLinkContainer store={ store } />)
    assert(wrapper.getNode().props.pathname === '/testpath')
  })

  it('should connect to component.', () => {
    const initialState: any = {
      routing: {
        location: {
          pathname: '/testpath',
        },
      },
    }
    const store = mockStore(initialState)
    const wrapper = shallow(<ActiveLinkContainer store={ store } />)
    assert(wrapper.find(ActiveLink).length === 1)
  })
})
