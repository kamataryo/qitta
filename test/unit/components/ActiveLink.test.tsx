import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import ActiveLink from '../../../src/components/ActiveLink'
import { Link } from 'react-router-dom'

describe('Test of ActiveLink component', () => {
  it('should render Link if path does\'nt match', () => {
    const wrapper = shallow(<ActiveLink to={ '/to' } pathname={ '/now-here' }>{ 'link text' }</ActiveLink>)
    assert(wrapper.find(Link).length === 1)
  })

  it('should not render Link if path matches', () => {
    const wrapper = shallow(<ActiveLink to={ '/to' } pathname={ '/to' }>{ 'link text' }</ActiveLink>)
    assert(wrapper.find(Link).length === 0)
  })
})
