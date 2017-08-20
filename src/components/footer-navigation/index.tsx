import * as React from 'react'
import ActiveLink from 'containers/active-link'
import './style'

const Navigation = () => {
  return (
    <nav className={ 'footer-navigation navigation' } role={ 'nav' }>
      <ul className={ 'navigation-items' }>
        <li className={ 'navigation-item' }><ActiveLink to={ '/user/tasks' }>{ 'tasks' }</ActiveLink></li>
        <li className={ 'navigation-item' }><ActiveLink to={ '/user/groups' }>{ 'groups' }</ActiveLink></li>
        <li className={ 'navigation-item' }><ActiveLink to={ '/user/cats' }>{ 'cats' }</ActiveLink></li>
        <li className={ 'navigation-item' }><ActiveLink to={ '/user/profile' }>{ 'profile' }</ActiveLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
