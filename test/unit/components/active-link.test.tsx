import 'mocha'
import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ActiveLink from 'components/active-link'
import { Link } from 'react-router-dom'

describe('Test of ActiveLink component', () => {
  it('should render Link if path does\'nt match', () => {
    const wrapper = shallow(<ActiveLink to={ '/to' } pathname={ '/now-here' }>{ 'link text' }</ActiveLink>)
    expect(wrapper.find(Link)).to.have.length(1)
  })

  it('should not render Link if path matches', () => {
    const wrapper = shallow(<ActiveLink to={ '/to' } pathname={ '/to' }>{ 'link text' }</ActiveLink>)
    expect(wrapper.find(Link)).to.have.length(0)
  })
})
