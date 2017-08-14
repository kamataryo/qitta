import 'mocha'
import * as React from 'react'
import { expect } from 'chai'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import ActiveLink from 'components/active-link'
import ActiveLinkContainer from 'containers/active-link'

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
    expect(wrapper.getNode().props.pathname).to.equal('/testpath')
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
    expect(wrapper.find(ActiveLink)).to.have.length(1)
  })
})
