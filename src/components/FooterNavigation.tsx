import * as React from 'react'
import ActiveLink from '../containers/ActiveLink'

const Navigation = () => {
  return (
    <nav className={ 'navigation' } role={ 'nav' }>
      <ul>
        <li><ActiveLink to={ '/user/tasks' }>{ 'tasks' }</ActiveLink></li>
        <li><ActiveLink to={ '/user/groups' }>{ 'groups' }</ActiveLink></li>
        <li><ActiveLink to={ '/user/cats' }>{ 'cats' }</ActiveLink></li>
        <li><ActiveLink to={ '/user/profile' }>{ 'profile' }</ActiveLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
